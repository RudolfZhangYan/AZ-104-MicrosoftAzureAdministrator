import { chromium } from 'playwright';

const SCREENSHOTS_DIR = 'C:\\lab-drift-runner\\20260327-064118\\3b577a35-21ea-480c-ab41-f0668b4a15c0\\screenshots';
const BEFORE = `${SCREENSHOTS_DIR}\\step-6-start-external-user-invite-before.png`;
const AFTER = `${SCREENSHOTS_DIR}\\step-6-start-external-user-invite-after.png`;

async function run() {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();

  // 1. Take before screenshot
  await page.screenshot({ path: BEFORE, fullPage: false, timeout: 10000 }).catch(async () => {
    // fallback: clip to viewport
    const vp = page.viewportSize() || { width: 1920, height: 1080 };
    await page.screenshot({ path: BEFORE, clip: { x: 0, y: 0, width: vp.width, height: vp.height }, timeout: 10000 });
  });
  console.log('BEFORE screenshot taken');

  // 2. Navigate to Users page
  await page.goto('https://portal.azure.com/#view/Microsoft_AAD_IAM/UsersManagementMenuBlade/~/AllUsers', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  console.log('Navigated to Users page');

  // 3. Wait for the Users list to load
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(5000);
  
  // Look for the users table or list to appear
  const usersLoaded = await page.waitForSelector(
    '[role="grid"], [role="table"], .fxs-blade-content table, .azc-grid, [class*="DetailsList"], [data-automationid="DetailsList"]',
    { timeout: 30000, state: 'visible' }
  ).catch(() => null);
  
  if (usersLoaded) {
    console.log('Users list detected');
  } else {
    console.log('Users list not found by selector, waiting extra time...');
    await page.waitForTimeout(5000);
  }

  // 4. Click "New user" dropdown button
  // Try multiple selectors for the New user button
  let newUserClicked = false;
  
  // Try: button with text "New user"
  const newUserBtn = page.locator('button:has-text("New user"), [aria-label*="New user"], span:has-text("New user")').first();
  try {
    await newUserBtn.waitFor({ timeout: 15000, state: 'visible' });
    await newUserBtn.click();
    newUserClicked = true;
    console.log('Clicked "New user" button');
  } catch (e) {
    console.log('Could not find "New user" button with primary selectors, trying alternatives...');
  }

  if (!newUserClicked) {
    // Try command bar buttons
    const cmdBarBtns = page.locator('[role="menubar"] button, .fxs-commandBar button, .azc-toolbar button');
    const count = await cmdBarBtns.count();
    for (let i = 0; i < count; i++) {
      const text = await cmdBarBtns.nth(i).textContent();
      if (text && text.includes('New user')) {
        await cmdBarBtns.nth(i).click();
        newUserClicked = true;
        console.log(`Clicked command bar button: "${text.trim()}"`);
        break;
      }
    }
  }

  if (!newUserClicked) {
    // Last resort: search all clickable elements
    const allBtns = page.locator('button, [role="button"], [role="menuitem"]');
    const allCount = await allBtns.count();
    console.log(`Searching through ${allCount} buttons...`);
    for (let i = 0; i < allCount; i++) {
      const text = await allBtns.nth(i).textContent().catch(() => '');
      if (text && /new\s*user/i.test(text)) {
        await allBtns.nth(i).click();
        newUserClicked = true;
        console.log(`Found and clicked: "${text.trim()}"`);
        break;
      }
    }
  }

  if (!newUserClicked) {
    console.error('FAILED: Could not find "New user" button');
    await page.screenshot({ path: AFTER, fullPage: false, timeout: 10000 }).catch(() => {});
    process.exit(1);
  }

  // 5. Wait for dropdown menu to appear
  await page.waitForTimeout(2000);
  
  // 6. Select "Invite external user" from dropdown
  let inviteClicked = false;

  // Try: menu item with text "Invite external user"
  const inviteOption = page.locator(
    '[role="menuitem"]:has-text("Invite external user"), ' +
    '[role="option"]:has-text("Invite external user"), ' +
    'button:has-text("Invite external user"), ' +
    'a:has-text("Invite external user"), ' +
    'li:has-text("Invite external user"), ' +
    'span:has-text("Invite external user")'
  ).first();

  try {
    await inviteOption.waitFor({ timeout: 10000, state: 'visible' });
    await inviteOption.click();
    inviteClicked = true;
    console.log('Clicked "Invite external user"');
  } catch (e) {
    console.log('Could not find "Invite external user" with primary selectors');
  }

  if (!inviteClicked) {
    // Search all visible elements for the text
    const allElements = page.locator('[role="menuitem"], [role="option"], [role="listbox"] *, .ms-ContextualMenu-link, .fxs-menu-item');
    const eCount = await allElements.count();
    console.log(`Searching ${eCount} menu items for "Invite external user"...`);
    for (let i = 0; i < eCount; i++) {
      const text = await allElements.nth(i).textContent().catch(() => '');
      if (text && /invite\s*external\s*user/i.test(text)) {
        await allElements.nth(i).click();
        inviteClicked = true;
        console.log(`Found and clicked: "${text.trim()}"`);
        break;
      }
    }
  }

  if (!inviteClicked) {
    console.error('FAILED: Could not find "Invite external user" option');
    await page.screenshot({ path: AFTER, fullPage: false, timeout: 10000 }).catch(() => {});
    process.exit(1);
  }

  // 7. Wait for external user invitation form to appear
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(5000);
  
  // Look for form elements
  const formLoaded = await page.waitForSelector(
    'input[type="email"], input[placeholder*="email"], input[aria-label*="Email"], input[aria-label*="mail"], [aria-label*="Invite"], form',
    { timeout: 20000, state: 'visible' }
  ).catch(() => null);
  
  if (formLoaded) {
    console.log('Invitation form detected');
  } else {
    console.log('Form not detected by selector, waiting extra...');
    await page.waitForTimeout(5000);
  }

  // 8. Take after screenshot
  await page.screenshot({ path: AFTER, fullPage: false, timeout: 10000 }).catch(async () => {
    const vp = page.viewportSize() || { width: 1920, height: 1080 };
    await page.screenshot({ path: AFTER, clip: { x: 0, y: 0, width: vp.width, height: vp.height }, timeout: 10000 });
  });
  console.log('AFTER screenshot taken');
  
  console.log('SUCCESS: All steps completed');
}

run().catch(err => {
  console.error('Script error:', err.message);
  process.exit(1);
});
