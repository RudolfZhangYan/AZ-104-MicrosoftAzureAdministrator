import { chromium } from 'playwright';

const SCREENSHOT_DIR = 'C:\\lab-drift-runner\\20260325-080519\\5c1afceb-91ce-42e5-a0d3-333983937932\\screenshots';
const BEFORE_SCREENSHOT = `${SCREENSHOT_DIR}\\step-5-create-internal-user-basics-before.png`;
const AFTER_SCREENSHOT = `${SCREENSHOT_DIR}\\step-5-create-internal-user-basics-after.png`;

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('Connecting to Edge via CDP on port 9222...');
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  console.log('Connected. Contexts:', browser.contexts().length);

  const context = browser.contexts()[0];
  if (!context) throw new Error('No browser context found');

  const pages = context.pages();
  console.log('Open pages:', pages.length);
  for (const p of pages) {
    console.log('  -', p.url());
  }

  // Use the first page or find an Azure portal page
  let page = pages.find(p => p.url().includes('portal.azure.com')) || pages[0];
  console.log('Using page:', page.url());

  // Step 1: Navigate to Entra ID Overview
  console.log('\n--- Step 1: Navigate to Entra ID Overview ---');
  await page.goto('https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  console.log('Navigation started, waiting for page to settle...');
  await sleep(8000);
  console.log('Current URL:', page.url());

  // Step 2: Click "用户" (Users) in the left nav under "管理" (Manage)
  console.log('\n--- Step 2: Click Users in left nav ---');
  
  // Wait for the left nav to load - look for Users link
  let usersLink = null;
  for (let attempt = 0; attempt < 15; attempt++) {
    // Try multiple selectors for the Users link in left nav
    usersLink = await page.$('a:has-text("用户"), [data-telemetryname="Menu-users"], a[href*="UserManagement"], li:has-text("用户") a');
    if (!usersLink) {
      // Also try looking for the exact text in the menu
      const links = await page.$$('a, [role="menuitem"], [role="treeitem"]');
      for (const link of links) {
        const text = await link.textContent().catch(() => '');
        if (text && text.trim() === '用户') {
          usersLink = link;
          break;
        }
      }
    }
    if (usersLink) break;
    console.log(`  Attempt ${attempt + 1}: Users link not found, waiting...`);
    await sleep(3000);
  }

  if (usersLink) {
    console.log('Found Users link, clicking...');
    await usersLink.click();
    await sleep(8000);
    console.log('Current URL after clicking Users:', page.url());
  } else {
    console.log('WARNING: Could not find Users link, trying direct navigation...');
    await page.goto('https://portal.azure.com/#view/Microsoft_AAD_UsersManagement/UserManagementMenuBlade/~/AllUsers', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
    await sleep(8000);
  }

  // Step 3: Wait for Users page to load
  console.log('\n--- Step 3: Wait for Users page ---');
  await sleep(5000);
  console.log('Current URL:', page.url());

  // Step 4: Take BEFORE screenshot
  console.log('\n--- Step 4: Take BEFORE screenshot ---');
  await page.screenshot({ path: BEFORE_SCREENSHOT, fullPage: false });
  console.log('BEFORE screenshot saved:', BEFORE_SCREENSHOT);

  // Step 5: Click "新建用户" (New user) button in toolbar
  console.log('\n--- Step 5: Click New user button ---');
  
  let newUserBtn = null;
  for (let attempt = 0; attempt < 15; attempt++) {
    // Look for the New user button/command bar item
    const candidates = await page.$$('button, [role="menuitem"], [role="button"], a, span');
    for (const el of candidates) {
      const text = await el.textContent().catch(() => '');
      const ariaLabel = await el.getAttribute('aria-label').catch(() => '');
      if ((text && text.includes('新建用户')) || (ariaLabel && ariaLabel.includes('新建用户'))) {
        // Make sure this is in the toolbar area (not deeply nested in content)
        const tagName = await el.evaluate(e => e.tagName.toLowerCase()).catch(() => '');
        console.log(`  Found candidate: <${tagName}> text="${text?.trim()}" aria="${ariaLabel}"`);
        newUserBtn = el;
        break;
      }
    }
    if (newUserBtn) break;
    
    // Also try looking for command bar buttons with "New user" text
    newUserBtn = await page.$('[data-telemetryname*="newUser"], [data-telemetryname*="NewUser"], [data-telemetryname*="new_user"]');
    if (newUserBtn) break;
    
    console.log(`  Attempt ${attempt + 1}: New user button not found, waiting...`);
    await sleep(3000);
  }

  if (newUserBtn) {
    console.log('Found New user button, clicking...');
    await newUserBtn.click();
    await sleep(3000);
  } else {
    throw new Error('Could not find New user button');
  }

  // Step 6: If dropdown appears, click "创建新用户" (Create new user)
  console.log('\n--- Step 6: Check for dropdown / Create new user ---');
  await sleep(2000);
  
  // Look for the dropdown option
  let createOption = null;
  const menuItems = await page.$$('[role="menuitem"], [role="option"], li, button, a');
  for (const item of menuItems) {
    const text = await item.textContent().catch(() => '');
    if (text && text.includes('创建新用户')) {
      createOption = item;
      console.log('Found "创建新用户" dropdown option');
      break;
    }
  }

  if (createOption) {
    console.log('Clicking "创建新用户"...');
    await createOption.click();
    await sleep(5000);
  } else {
    console.log('No dropdown appeared, might have gone directly to form');
    await sleep(3000);
  }

  // Step 7: Wait for Create new user form to load
  console.log('\n--- Step 7: Wait for Create new user form ---');
  
  // Wait for form tabs to appear (基本信息, 属性, 分配, 查看 + 创建)
  let formLoaded = false;
  for (let attempt = 0; attempt < 20; attempt++) {
    const allText = await page.textContent('body').catch(() => '');
    if (allText.includes('基本信息') || allText.includes('用户主体名称') || allText.includes('User principal name')) {
      formLoaded = true;
      console.log('Form detected on page');
      break;
    }
    console.log(`  Attempt ${attempt + 1}: Form not loaded yet...`);
    await sleep(3000);
  }

  if (!formLoaded) {
    console.log('WARNING: Form may not have loaded, proceeding anyway...');
  }
  await sleep(3000);

  // Step 8: Fill in the form fields
  console.log('\n--- Step 8: Fill in form fields ---');

  // Fill User principal name
  console.log('Looking for User principal name field...');
  let upnField = null;
  
  // Try various selectors for the UPN field
  const inputFields = await page.$$('input[type="text"], input:not([type])');
  console.log(`Found ${inputFields.length} text input fields`);
  
  for (const field of inputFields) {
    const id = await field.getAttribute('id').catch(() => '');
    const name = await field.getAttribute('name').catch(() => '');
    const ariaLabel = await field.getAttribute('aria-label').catch(() => '');
    const placeholder = await field.getAttribute('placeholder').catch(() => '');
    const parentText = await field.evaluate(el => {
      // Check label or parent elements for text
      let parent = el.parentElement;
      for (let i = 0; i < 5 && parent; i++) {
        const text = parent.textContent || '';
        if (text.includes('用户主体名称') || text.includes('User principal name') || text.includes('userPrincipalName')) {
          return 'UPN_MATCH';
        }
        parent = parent.parentElement;
      }
      // Also check associated label
      if (el.id) {
        const label = document.querySelector(`label[for="${el.id}"]`);
        if (label && (label.textContent.includes('用户主体名称') || label.textContent.includes('User principal name'))) {
          return 'UPN_MATCH';
        }
      }
      return '';
    }).catch(() => '');
    
    console.log(`  Input: id="${id}" name="${name}" aria="${ariaLabel}" placeholder="${placeholder}" parentMatch="${parentText}"`);
    
    if (parentText === 'UPN_MATCH' || 
        ariaLabel.includes('用户主体名称') || ariaLabel.includes('User principal name') ||
        id.includes('userPrincipalName') || id.includes('principalName') ||
        name.includes('userPrincipalName')) {
      upnField = field;
      console.log('  -> This is the UPN field!');
      break;
    }
  }

  if (!upnField && inputFields.length > 0) {
    // The first text input on the create user form is typically the UPN
    console.log('Using heuristic: first visible input field for UPN');
    for (const field of inputFields) {
      const visible = await field.isVisible().catch(() => false);
      const disabled = await field.isDisabled().catch(() => true);
      if (visible && !disabled) {
        upnField = field;
        break;
      }
    }
  }

  if (upnField) {
    console.log('Filling UPN field with "az104-user1"...');
    await upnField.click();
    await sleep(500);
    await upnField.fill('az104-user1');
    await sleep(1000);
    console.log('UPN filled');
  } else {
    console.log('ERROR: Could not find UPN field');
  }

  // Fill Display name
  console.log('\nLooking for Display name field...');
  let displayNameField = null;
  
  // Re-fetch inputs after possible DOM changes
  const inputFields2 = await page.$$('input[type="text"], input:not([type])');
  
  for (const field of inputFields2) {
    const id = await field.getAttribute('id').catch(() => '');
    const name = await field.getAttribute('name').catch(() => '');
    const ariaLabel = await field.getAttribute('aria-label').catch(() => '');
    const parentText = await field.evaluate(el => {
      let parent = el.parentElement;
      for (let i = 0; i < 5 && parent; i++) {
        const text = parent.textContent || '';
        if (text.includes('显示名称') || text.includes('Display name') || text.includes('displayName')) {
          return 'DN_MATCH';
        }
        parent = parent.parentElement;
      }
      if (el.id) {
        const label = document.querySelector(`label[for="${el.id}"]`);
        if (label && (label.textContent.includes('显示名称') || label.textContent.includes('Display name'))) {
          return 'DN_MATCH';
        }
      }
      return '';
    }).catch(() => '');
    
    if (parentText === 'DN_MATCH' || 
        ariaLabel.includes('显示名称') || ariaLabel.includes('Display name') ||
        id.includes('displayName') || name.includes('displayName')) {
      displayNameField = field;
      console.log(`  Found Display name field: id="${id}" aria="${ariaLabel}"`);
      break;
    }
  }

  if (!displayNameField && inputFields2.length > 1) {
    // Display name is typically the second visible input
    console.log('Using heuristic: second visible input field for Display name');
    let visibleInputs = [];
    for (const field of inputFields2) {
      const visible = await field.isVisible().catch(() => false);
      const disabled = await field.isDisabled().catch(() => true);
      if (visible && !disabled) {
        visibleInputs.push(field);
      }
    }
    if (visibleInputs.length >= 2) {
      displayNameField = visibleInputs[1];
    }
  }

  if (displayNameField) {
    console.log('Filling Display name field with "az104-user1"...');
    await displayNameField.click();
    await sleep(500);
    await displayNameField.fill('az104-user1');
    await sleep(1000);
    console.log('Display name filled');
  } else {
    console.log('ERROR: Could not find Display name field');
  }

  // Step 8c: Verify auto-generate password is checked
  console.log('\nVerifying auto-generate password...');
  const checkboxes = await page.$$('input[type="checkbox"], [role="checkbox"]');
  for (const cb of checkboxes) {
    const ariaLabel = await cb.getAttribute('aria-label').catch(() => '');
    const parentText = await cb.evaluate(el => {
      let parent = el.parentElement;
      for (let i = 0; i < 5 && parent; i++) {
        const text = parent.textContent || '';
        if (text.includes('自动生成密码') || text.includes('Auto-generate password')) {
          return text.substring(0, 100);
        }
        parent = parent.parentElement;
      }
      return '';
    }).catch(() => '');
    
    if (parentText || ariaLabel.includes('自动生成') || ariaLabel.includes('Auto-generate')) {
      const checked = await cb.isChecked().catch(() => null);
      const ariaChecked = await cb.getAttribute('aria-checked').catch(() => '');
      console.log(`  Auto-generate password: checked=${checked}, aria-checked=${ariaChecked}`);
      break;
    }
  }

  // Step 8d: Verify account enabled is checked
  console.log('Verifying account enabled...');
  for (const cb of checkboxes) {
    const ariaLabel = await cb.getAttribute('aria-label').catch(() => '');
    const parentText = await cb.evaluate(el => {
      let parent = el.parentElement;
      for (let i = 0; i < 5 && parent; i++) {
        const text = parent.textContent || '';
        if (text.includes('帐户已启用') || text.includes('Account enabled')) {
          return text.substring(0, 100);
        }
        parent = parent.parentElement;
      }
      return '';
    }).catch(() => '');
    
    if (parentText || ariaLabel.includes('帐户已启用') || ariaLabel.includes('Account enabled')) {
      const checked = await cb.isChecked().catch(() => null);
      const ariaChecked = await cb.getAttribute('aria-checked').catch(() => '');
      console.log(`  Account enabled: checked=${checked}, aria-checked=${ariaChecked}`);
      break;
    }
  }

  // Click somewhere neutral to dismiss any popups
  await page.mouse.click(10, 300);
  await sleep(1000);

  // Step 9: Do NOT click submit (skip)
  console.log('\n--- Step 9: NOT clicking submit ---');

  // Step 10: Take AFTER screenshot
  console.log('\n--- Step 10: Take AFTER screenshot ---');
  await page.screenshot({ path: AFTER_SCREENSHOT, fullPage: false });
  console.log('AFTER screenshot saved:', AFTER_SCREENSHOT);

  console.log('\n=== All steps completed ===');
  console.log('Current URL:', page.url());
  
  // Don't close - leave browser open
  browser.close();
}

main().catch(err => {
  console.error('FATAL ERROR:', err.message);
  process.exit(1);
});
