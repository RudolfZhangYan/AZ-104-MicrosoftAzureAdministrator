import { chromium } from 'playwright';

const SCREENSHOT_DIR = 'C:\\lab-drift-runner\\20260325-080519\\5c1afceb-91ce-42e5-a0d3-333983937932\\screenshots';
const BEFORE_SCREENSHOT = `${SCREENSHOT_DIR}\\step-5-create-internal-user-basics-before.png`;

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log('Connecting to Edge via CDP on port 9222...');
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  console.log('Connected. Contexts:', browser.contexts().length);

  const context = browser.contexts()[0];
  if (!context) throw new Error('No browser context found');

  const pages = context.pages();
  console.log('Open pages:', pages.length);
  for (const p of pages) console.log('  -', p.url());

  let page = pages.find(p => p.url().includes('portal.azure.com')) || pages[0];
  console.log('Using page:', page.url());

  // Step 1: Navigate to Azure Portal
  console.log('\n--- Step 1: Navigate to Azure Portal ---');
  await page.goto('https://portal.azure.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('Navigation started, waiting for portal to load...');
  await sleep(10000);
  console.log('Current URL:', page.url());

  // Step 2: Navigate directly to Users page (most reliable approach)
  console.log('\n--- Step 2: Navigate to Users page ---');
  await page.goto('https://portal.azure.com/#view/Microsoft_AAD_UsersManagement/UserManagementMenuBlade/~/AllUsers', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  console.log('Navigating to Users page...');
  await sleep(12000);
  console.log('Current URL:', page.url());

  // Step 3: Wait for Users page to fully load
  console.log('\n--- Step 3: Waiting for Users page to load ---');
  // Wait for user list or heading to appear
  for (let attempt = 0; attempt < 20; attempt++) {
    const heading = await page.$('text=用户, text=Users, text=所有用户, text=All users');
    if (heading) {
      console.log('Users page loaded (found heading)');
      break;
    }
    console.log(`  Attempt ${attempt + 1}: Waiting for Users page...`);
    await sleep(3000);
  }
  await sleep(3000);

  // Step 4: Take BEFORE screenshot
  console.log('\n--- Step 4: Take BEFORE screenshot ---');
  await page.screenshot({ path: BEFORE_SCREENSHOT, fullPage: false });
  console.log('BEFORE screenshot saved:', BEFORE_SCREENSHOT);

  // Step 5: Click "新建用户" (New user) button
  console.log('\n--- Step 5: Click New user button ---');
  let newUserBtn = null;
  for (let attempt = 0; attempt < 20; attempt++) {
    // Search all interactive elements for "新建用户" or "New user"
    const candidates = await page.$$('button, [role="menuitem"], [role="button"], a, span, div[role="button"]');
    for (const el of candidates) {
      const text = await el.textContent().catch(() => '');
      const ariaLabel = await el.getAttribute('aria-label').catch(() => '');
      if ((text && (text.includes('新建用户') || text.includes('New user'))) ||
          (ariaLabel && (ariaLabel.includes('新建用户') || ariaLabel.includes('New user')))) {
        const isVisible = await el.isVisible().catch(() => false);
        if (isVisible) {
          console.log(`  Found: text="${text?.trim()?.substring(0, 50)}" aria="${ariaLabel}"`);
          newUserBtn = el;
          break;
        }
      }
    }
    if (newUserBtn) break;

    // Also try data-telemetry selectors
    newUserBtn = await page.$('[data-telemetryname*="newUser"], [data-telemetryname*="NewUser"]');
    if (newUserBtn) {
      console.log('  Found via telemetry selector');
      break;
    }

    console.log(`  Attempt ${attempt + 1}: New user button not found, waiting...`);
    await sleep(3000);
  }

  if (!newUserBtn) {
    // Last resort: try keyboard Tab approach
    console.log('Trying keyboard Tab approach to find New user...');
    await page.keyboard.press('Tab');
    for (let i = 0; i < 30; i++) {
      await page.keyboard.press('Tab');
      await sleep(300);
      const focused = await page.evaluate(() => {
        const el = document.activeElement;
        return el ? { tag: el.tagName, text: el.textContent?.trim()?.substring(0, 50), ariaLabel: el.getAttribute('aria-label') } : null;
      });
      if (focused && (
        (focused.text && (focused.text.includes('新建用户') || focused.text.includes('New user'))) ||
        (focused.ariaLabel && (focused.ariaLabel.includes('新建用户') || focused.ariaLabel.includes('New user')))
      )) {
        console.log(`  Tab focused on New user: ${JSON.stringify(focused)}`);
        await page.keyboard.press('Enter');
        newUserBtn = true;
        break;
      }
    }
  }

  if (!newUserBtn) {
    throw new Error('Could not find New user button after all attempts');
  }

  if (newUserBtn !== true) {
    console.log('Clicking New user button...');
    await newUserBtn.click();
  }
  await sleep(3000);

  // Step 6: If dropdown appears, click "创建新用户" (Create new user)
  console.log('\n--- Step 6: Check for dropdown ---');
  let createOption = null;
  const menuItems = await page.$$('[role="menuitem"], [role="option"], li, button, a');
  for (const item of menuItems) {
    const text = await item.textContent().catch(() => '');
    const isVisible = await item.isVisible().catch(() => false);
    if (isVisible && text && (text.includes('创建新用户') || text.includes('Create new user'))) {
      createOption = item;
      console.log('Found "创建新用户" / "Create new user" dropdown option');
      break;
    }
  }

  if (createOption) {
    console.log('Clicking "创建新用户"...');
    await createOption.click();
    await sleep(5000);
  } else {
    console.log('No dropdown detected, may have navigated directly to create form');
    await sleep(3000);
  }

  // Step 7: Verify we're on the Create new user form
  console.log('\n--- Step 7: Verify Create new user form ---');
  await sleep(3000);
  const pageContent = await page.textContent('body').catch(() => '');
  const url = page.url();
  console.log('Current URL:', url);

  const hasCreateForm = pageContent.includes('创建新用户') || pageContent.includes('Create new user') ||
                        pageContent.includes('基本信息') || pageContent.includes('Basics') ||
                        url.includes('CreateUser') || url.includes('createUser');
  
  if (hasCreateForm) {
    console.log('\n✅ SUCCESS: Create new user form is visible!');
  } else {
    // Take a diagnostic screenshot
    await page.screenshot({ path: `${SCREENSHOT_DIR}\\debug-create-form.png`, fullPage: false });
    console.log('\n⚠️ Could not confirm Create new user form. Debug screenshot saved.');
    console.log('Page text snippet:', pageContent.substring(0, 500));
  }

  // Don't disconnect - leave browser open
  console.log('\nDone. Browser left open.');
}

main().catch(err => {
  console.error('ERROR:', err.message);
  process.exit(1);
});
