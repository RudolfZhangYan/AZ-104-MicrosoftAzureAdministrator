import { chromium } from 'playwright';
import fs from 'fs';

const CDP_URL = 'http://127.0.0.1:9222';
const SCREENSHOTS_DIR = 'C:\\lab-drift-runner\\20260327-064118\\3b577a35-21ea-480c-ab41-f0668b4a15c0\\screenshots';
const BEFORE_SS = `${SCREENSHOTS_DIR}\\step-5-verify-internal-user-before.png`;
const AFTER_SS = `${SCREENSHOTS_DIR}\\step-5-verify-internal-user-after.png`;
const USERS_URL = 'https://portal.azure.com/#view/Microsoft_AAD_IAM/UsersManagementMenuBlade/~/AllUsers';
const TARGET_USER = 'az104-user1';

async function screenshot(cdpSession, path) {
  const { data } = await cdpSession.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path, Buffer.from(data, 'base64'));
  console.log(`Screenshot saved: ${path}`);
}

async function run() {
  console.log('Connecting to browser...');
  const browser = await chromium.connectOverCDP(CDP_URL);
  const contexts = browser.contexts();
  if (!contexts.length) throw new Error('No browser contexts');
  
  const pages = contexts[0].pages();
  let page = pages.find(p => p.url().includes('portal.azure.com')) || pages[0];
  console.log(`Page URL: ${page.url()}`);
  
  // Get CDP session for screenshots
  const cdp = await page.context().newCDPSession(page);
  
  // Step 1: Before screenshot
  await screenshot(cdp, BEFORE_SS);
  
  // Step 2: Navigate to Users
  console.log('Navigating to Users blade...');
  await page.goto(USERS_URL, { waitUntil: 'commit', timeout: 30000 });
  console.log('Navigation committed, waiting for load...');
  await page.waitForTimeout(8000);
  
  // Step 3-4: Wait and try refresh
  let refreshClicked = false;
  const refreshBtnSels = [
    'button:has-text("Refresh")',
    '[aria-label="Refresh"]',
    '[aria-label="Refresh list"]',
    '[title="Refresh"]',
  ];
  for (const sel of refreshBtnSels) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 2000 })) {
        await btn.click({ timeout: 5000 });
        refreshClicked = true;
        console.log(`Clicked: ${sel}`);
        break;
      }
    } catch {}
  }
  if (!refreshClicked) {
    console.log('No Refresh button found, reloading page...');
    await page.goto(USERS_URL, { waitUntil: 'commit', timeout: 30000 });
  }
  await page.waitForTimeout(8000);
  
  // Step 5: Search and verify user
  console.log(`Searching for "${TARGET_USER}"...`);
  let userFound = false;
  
  // Try search box
  const searchSels = [
    'input[placeholder*="earch"]',
    'input[aria-label*="earch"]',
    '[role="searchbox"]',
    'input[type="search"]',
  ];
  let searched = false;
  for (const sel of searchSels) {
    try {
      const sb = page.locator(sel).first();
      if (await sb.isVisible({ timeout: 3000 })) {
        await sb.click({ timeout: 3000 });
        await sb.fill(TARGET_USER, { timeout: 5000 });
        console.log(`Filled search with: ${sel}`);
        await page.keyboard.press('Enter');
        searched = true;
        await page.waitForTimeout(5000);
        break;
      }
    } catch {}
  }
  
  if (!searched) {
    console.log('No search box found, checking page content directly...');
    await page.waitForTimeout(3000);
  }
  
  // Check page content for user
  try {
    const bodyText = await page.evaluate(() => document.body.innerText);
    userFound = bodyText.includes(TARGET_USER);
    console.log(`User in page text: ${userFound}`);
    if (!userFound) {
      // Show some context
      const lines = bodyText.split('\n').filter(l => l.toLowerCase().includes('user') || l.includes('az104'));
      console.log('Relevant lines:', lines.slice(0, 10).join(' | '));
    }
  } catch (e) {
    console.log(`Content check error: ${e.message}`);
  }
  
  // Step 6: After screenshot
  await screenshot(cdp, AFTER_SS);
  
  console.log(`\n=== RESULT ===`);
  console.log(`USER_FOUND: ${userFound}`);
  console.log(`REFRESH_CLICKED: ${refreshClicked}`);
  console.log(`SEARCHED: ${searched}`);
  
  await cdp.detach();
  await browser.close();
}

run().catch(err => {
  console.error(`ERROR: ${err.message}`);
  process.exit(1);
});
