import { chromium } from 'playwright';

const CDP_URL = 'http://127.0.0.1:9222';
const SCREENSHOTS_DIR = 'C:\\lab-drift-runner\\20260327-064118\\3b577a35-21ea-480c-ab41-f0668b4a15c0\\screenshots';
const BEFORE_SCREENSHOT = `${SCREENSHOTS_DIR}\\step-5-verify-internal-user-before.png`;
const AFTER_SCREENSHOT = `${SCREENSHOTS_DIR}\\step-5-verify-internal-user-after.png`;
const USERS_URL = 'https://portal.azure.com/#view/Microsoft_AAD_IAM/UsersManagementMenuBlade/~/AllUsers';
const TARGET_USER = 'az104-user1';

async function run() {
  const browser = await chromium.connectOverCDP(CDP_URL);
  const contexts = browser.contexts();
  if (contexts.length === 0) throw new Error('No browser contexts found');
  
  const context = contexts[0];
  const pages = context.pages();
  
  // Find Azure portal page or use first page
  let page = pages.find(p => p.url().includes('portal.azure.com')) || pages[0];
  if (!page) throw new Error('No pages found');
  
  console.log(`Current page: ${page.url()}`);
  
  // Helper: CDP-based screenshot to avoid font-loading timeout
  async function cdpScreenshot(pg, filePath) {
    const session = await pg.context().newCDPSession(pg);
    const { data } = await session.send('Page.captureScreenshot', { format: 'png' });
    const fs = await import('fs');
    fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
    await session.detach();
  }

  // Step 1: Take "before" screenshot
  await cdpScreenshot(page, BEFORE_SCREENSHOT);
  console.log(`BEFORE screenshot saved: ${BEFORE_SCREENSHOT}`);
  
  // Step 2: Navigate to Users blade
  console.log('Navigating to Users blade...');
  await page.goto(USERS_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  // Step 3: Wait for Users list to load
  console.log('Waiting for Users list to load...');
  
  // Wait for the page to settle - Azure portal is SPA so we need to wait for content
  await page.waitForTimeout(5000);
  
  // Try to wait for user list table/grid to appear
  try {
    await page.waitForSelector('[role="grid"], [role="table"], .fxs-blade-content table, .azc-grid, .ms-List', { timeout: 30000 });
    console.log('Grid/table element found');
  } catch (e) {
    console.log('Grid selector not found, waiting more...');
    await page.waitForTimeout(5000);
  }
  
  // Step 4: Try to click Refresh button
  let refreshClicked = false;
  try {
    // Look for refresh button with various selectors
    const refreshSelectors = [
      'button:has-text("Refresh")',
      '[aria-label="Refresh"]',
      '[title="Refresh"]',
      'button[name="Refresh"]',
      '.fxs-blade-toolbar button:has-text("Refresh")',
      '.azc-toolbar-item:has-text("Refresh")',
    ];
    
    for (const sel of refreshSelectors) {
      try {
        const btn = page.locator(sel).first();
        if (await btn.isVisible({ timeout: 3000 })) {
          await btn.click();
          refreshClicked = true;
          console.log(`Clicked Refresh with selector: ${sel}`);
          await page.waitForTimeout(3000);
          break;
        }
      } catch { /* try next */ }
    }
    
    if (!refreshClicked) {
      console.log('Refresh button not found, reloading page...');
      await page.reload({ waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForTimeout(8000);
    }
  } catch (e) {
    console.log(`Refresh attempt error: ${e.message}`);
  }
  
  // Wait again for content to load after refresh
  await page.waitForTimeout(5000);
  
  // Step 5: Verify az104-user1 exists in the list
  console.log(`Looking for user "${TARGET_USER}"...`);
  
  let userFound = false;
  
  // First try: search for the user by typing in search box
  try {
    const searchSelectors = [
      'input[placeholder*="Search"]',
      'input[placeholder*="search"]',
      'input[aria-label*="Search"]',
      'input[aria-label*="search"]',
      '[role="searchbox"]',
      'input[type="search"]',
      '.ms-SearchBox input',
      'input[placeholder*="filter"]',
      'input[placeholder*="Filter"]',
    ];
    
    let searchBox = null;
    for (const sel of searchSelectors) {
      try {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 2000 })) {
          searchBox = el;
          console.log(`Found search box with selector: ${sel}`);
          break;
        }
      } catch { /* try next */ }
    }
    
    if (searchBox) {
      await searchBox.click();
      await searchBox.fill(TARGET_USER);
      await page.waitForTimeout(3000);
      // Press Enter or wait for auto-filter
      try {
        await searchBox.press('Enter');
      } catch { /* some search boxes auto-filter */ }
      await page.waitForTimeout(5000);
    }
  } catch (e) {
    console.log(`Search attempt error: ${e.message}`);
  }
  
  // Check if user appears in page content
  try {
    const content = await page.textContent('body');
    userFound = content.includes(TARGET_USER) || content.includes('az104-user1');
    console.log(`User "${TARGET_USER}" found in page content: ${userFound}`);
  } catch (e) {
    console.log(`Content check error: ${e.message}`);
  }
  
  // Also try locator-based check
  if (!userFound) {
    try {
      const userLocator = page.getByText(TARGET_USER, { exact: false });
      userFound = await userLocator.isVisible({ timeout: 5000 });
      console.log(`User "${TARGET_USER}" visible via locator: ${userFound}`);
    } catch (e) {
      console.log(`Locator check: ${e.message}`);
    }
  }
  
  // Step 6: Take "after" screenshot
  await cdpScreenshot(page, AFTER_SCREENSHOT);
  console.log(`AFTER screenshot saved: ${AFTER_SCREENSHOT}`);
  
  console.log(`\n=== RESULT ===`);
  console.log(`USER_FOUND: ${userFound}`);
  console.log(`REFRESH_CLICKED: ${refreshClicked}`);
  
  await browser.close();
}

run().catch(err => {
  console.error(`SCRIPT ERROR: ${err.message}`);
  process.exit(1);
});
