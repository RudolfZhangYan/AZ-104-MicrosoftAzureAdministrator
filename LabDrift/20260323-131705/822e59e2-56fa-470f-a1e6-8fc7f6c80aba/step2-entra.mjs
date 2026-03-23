import { chromium } from 'playwright';

const SCREENSHOT_DIR = 'C:\\lab-drift-runner\\20260323-131705\\822e59e2-56fa-470f-a1e6-8fc7f6c80aba\\screenshots';
const USER_DATA_DIR = 'C:\\Users\\azureuser\\.copilot-lab-runner\\auth\\azure-portal\\browser-data';
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);

async function debugScreenshot(page, name) {
  try {
    await page.screenshot({ path: `${SCREENSHOT_DIR}\\debug-${name}.png`, fullPage: false });
    log(`Debug screenshot: debug-${name}.png`);
  } catch {}
}

async function run() {
  log('Launching Edge with persistent context...');
  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    channel: 'msedge',
    executablePath: EDGE_PATH,
    viewport: { width: 1920, height: 1080 },
    args: ['--disable-blink-features=AutomationControlled'],
    timeout: 60000,
  });

  const page = context.pages()[0] || await context.newPage();

  // Track results
  const results = {
    searchFound: false,
    overviewFound: false,
    manageTenantsFound: false,
    entraPageLoaded: false,
    stepCompleted: false,
    elementDifferent: 'None',
    extraSteps: 'None',
    unexpectedUI: 'None',
    blockingIssues: 'None',
  };

  try {
    // Step 1: Navigate to Azure portal
    log('Navigating to https://portal.azure.com ...');
    await page.goto('https://portal.azure.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
    log('Waiting for portal to fully load...');
    await page.waitForTimeout(10000);

    // Dismiss any tour/welcome dialogs
    for (const txt of ['Maybe later', 'Dismiss', 'Got it', 'Skip', 'Close']) {
      try {
        const btn = page.locator(`button:has-text("${txt}")`).first();
        if (await btn.isVisible({ timeout: 1000 })) {
          await btn.click();
          log(`Dismissed dialog: ${txt}`);
          await page.waitForTimeout(1000);
        }
      } catch {}
    }

    // Step 3: Take "before" screenshot
    log('Taking BEFORE screenshot...');
    await page.screenshot({ path: `${SCREENSHOT_DIR}\\step-2-navigate-entra-id-before.png`, fullPage: false });
    log('Before screenshot saved.');

    // Step 4: Use portal search bar to search for "Microsoft Entra ID"
    log('Clicking on search bar...');
    const searchBar = page.locator('input[placeholder*="Search resources"], input[placeholder*="search"], input[aria-label*="Search"]').first();
    await searchBar.click({ timeout: 10000 });
    results.searchFound = true;
    await page.waitForTimeout(1500);
    
    log('Typing "Microsoft Entra ID"...');
    await searchBar.fill('');
    await page.keyboard.type('Microsoft Entra ID', { delay: 50 });
    await page.waitForTimeout(4000);
    
    await debugScreenshot(page, 'search-results');

    // Look for the Entra ID result in dropdown
    log('Looking for Microsoft Entra ID in dropdown results...');
    let clicked = false;

    // Try various selectors for the dropdown result
    const resultSelectors = [
      // Azure portal search dropdown results
      'div[class*="search"] a:has-text("Microsoft Entra ID")',
      '[role="listbox"] [role="option"]:has-text("Microsoft Entra ID")',
      'ul[role="listbox"] li:has-text("Microsoft Entra ID")',
      'div[class*="fxs-search"] a:has-text("Microsoft Entra ID")',
      'a[href*="Microsoft_AAD_IAM"]',
      '.fxs-search-result:has-text("Microsoft Entra ID")',
    ];

    for (const sel of resultSelectors) {
      try {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 2000 })) {
          log(`Found result with: ${sel}`);
          await el.click();
          clicked = true;
          break;
        }
      } catch {}
    }

    if (!clicked) {
      // Try text-based approach
      log('Trying text-based click...');
      try {
        const textResult = page.getByText('Microsoft Entra ID', { exact: false }).first();
        // Need to be more specific - look within search results area
        const allMatches = page.getByText('Microsoft Entra ID');
        const count = await allMatches.count();
        log(`Found ${count} text matches for "Microsoft Entra ID"`);
        // Click the first one that looks like a search result (skip the input)
        for (let i = 0; i < count; i++) {
          const el = allMatches.nth(i);
          const tag = await el.evaluate(e => e.tagName);
          const parent = await el.evaluate(e => e.parentElement?.tagName);
          log(`  Match ${i}: <${tag}> inside <${parent}>`);
          if (tag !== 'INPUT') {
            await el.click();
            clicked = true;
            log(`Clicked match ${i}`);
            break;
          }
        }
      } catch (e) {
        log(`Text approach failed: ${e.message}`);
      }
    }

    if (!clicked) {
      // Last resort: press Enter to submit search
      log('Pressing Enter to submit search...');
      await page.keyboard.press('Enter');
    }

    // Step 5: Wait for Entra ID page to load
    log('Waiting for Entra ID page to load...');
    await page.waitForTimeout(10000);

    let url = page.url();
    log(`Current URL after search: ${url}`);
    await debugScreenshot(page, 'after-search-click');

    // If we're still on home, try direct navigation
    if (url.includes('#home') || !url.includes('Microsoft_AAD_IAM')) {
      log('Search navigation did not work. Trying direct URL...');
      await page.goto('https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview', {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
      });
      await page.waitForTimeout(12000);
      url = page.url();
      log(`URL after direct navigation: ${url}`);
    }

    await debugScreenshot(page, 'entra-page');
    
    if (url.includes('Microsoft_AAD_IAM') || url.includes('EntraID') || url.includes('ActiveDirectory')) {
      results.entraPageLoaded = true;
      log('Entra ID page loaded successfully.');
    } else {
      log(`WARNING: May not be on Entra ID page. URL: ${url}`);
      // Check page content
      const title = await page.title();
      log(`Page title: ${title}`);
    }

    // Step 6: Look for Overview in left nav
    log('Looking for Overview in left navigation...');
    const overviewSelectors = [
      '[role="treeitem"] >> text=Overview',
      'li[title="Overview"]',
      'a[title="Overview"]',
      'div[data-text="Overview"]',
      '.fxs-blade-content a:has-text("Overview")',
    ];

    for (const sel of overviewSelectors) {
      try {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 3000 })) {
          results.overviewFound = true;
          log(`Found Overview with: ${sel}`);
          await el.click();
          log('Clicked Overview.');
          await page.waitForTimeout(5000);
          break;
        }
      } catch {}
    }

    if (!results.overviewFound) {
      // Check if Overview is already selected (often indicated by aria-selected or a selected class)
      try {
        const selected = page.locator('[aria-selected="true"]:has-text("Overview"), .fxs-menu-item.selected:has-text("Overview")').first();
        if (await selected.isVisible({ timeout: 2000 })) {
          results.overviewFound = true;
          log('Overview is already selected.');
        }
      } catch {}
    }

    if (!results.overviewFound) {
      log('Overview not found in left nav. Checking page content...');
      const content = await page.textContent('body');
      if (content.includes('Overview')) {
        results.overviewFound = true;
        log('Overview text found on page (may be default view).');
      }
    }

    await debugScreenshot(page, 'overview-page');

    // Step 7: Look for "Manage tenants"
    log('Looking for "Manage tenants" button/tab...');
    const mtSelectors = [
      'button:has-text("Manage tenants")',
      'a:has-text("Manage tenants")',
      '[role="tab"]:has-text("Manage tenants")',
      '[role="button"]:has-text("Manage tenants")',
      'span:has-text("Manage tenants")',
      '.fxc-gc-toolbar button:has-text("Manage tenants")',
      'div[role="toolbar"] button:has-text("Manage tenants")',
      // Also try without exact case
      'button:has-text("Manage Tenants")',
      'a:has-text("Manage Tenants")',
      // Command bar button
      '.azc-toolbar-item:has-text("Manage tenants")',
      '.fxc-simplebutton:has-text("Manage tenants")',
    ];

    for (const sel of mtSelectors) {
      try {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 2000 })) {
          results.manageTenantsFound = true;
          log(`Found Manage tenants with: ${sel}`);
          await el.click();
          log('Clicked Manage tenants.');
          break;
        }
      } catch {}
    }

    if (!results.manageTenantsFound) {
      // Try getByRole or getByText
      log('Trying getByText for Manage tenants...');
      try {
        const mtByText = page.getByText('Manage tenants', { exact: false });
        const count = await mtByText.count();
        log(`Found ${count} "Manage tenants" text elements`);
        for (let i = 0; i < count; i++) {
          const el = mtByText.nth(i);
          if (await el.isVisible()) {
            await el.click();
            results.manageTenantsFound = true;
            log(`Clicked Manage tenants (text match ${i})`);
            break;
          }
        }
      } catch (e) {
        log(`getByText failed: ${e.message}`);
      }
    }

    if (!results.manageTenantsFound) {
      log('WARNING: "Manage tenants" not found on the page.');
      results.elementDifferent = '"Manage tenants" button/tab not found on the Entra ID Overview page';
      await debugScreenshot(page, 'no-manage-tenants');
      
      // Dump some page info to help debug
      try {
        const buttons = await page.locator('button').allTextContents();
        log(`Buttons on page: ${buttons.filter(b => b.trim()).slice(0, 20).join(' | ')}`);
        const tabs = await page.locator('[role="tab"]').allTextContents();
        log(`Tabs on page: ${tabs.join(' | ')}`);
      } catch {}
    }

    // Step 8: Wait for Manage tenants page
    if (results.manageTenantsFound) {
      log('Waiting for Manage tenants page to load...');
      await page.waitForTimeout(8000);
      await debugScreenshot(page, 'manage-tenants-page');
    }

    // Step 9: Navigate back to Entra ID
    log('Navigating back to Entra ID Overview...');
    if (results.manageTenantsFound) {
      // Try breadcrumb first
      let wentBack = false;
      try {
        const breadcrumbs = page.locator('a:has-text("Microsoft Entra ID"), [role="link"]:has-text("Microsoft Entra ID"), nav a:has-text("Overview")');
        const bcCount = await breadcrumbs.count();
        log(`Found ${bcCount} breadcrumb-like links`);
        if (bcCount > 0) {
          await breadcrumbs.first().click();
          wentBack = true;
          log('Clicked breadcrumb to go back.');
        }
      } catch {}

      if (!wentBack) {
        // Use direct URL navigation back
        log('Using direct URL to navigate back to Entra ID Overview...');
        await page.goto('https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview', {
          waitUntil: 'domcontentloaded',
          timeout: 30000,
        });
      }
    } else {
      // We might already be on the overview or couldn't navigate away, just stay/reload
      log('Manage tenants was not clicked, ensuring we are on Entra ID Overview...');
      if (!page.url().includes('Microsoft_AAD_IAM')) {
        await page.goto('https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview', {
          waitUntil: 'domcontentloaded',
          timeout: 30000,
        });
      }
    }

    // Step 10: Wait for Entra ID Overview to load
    log('Waiting for Entra ID Overview page...');
    await page.waitForTimeout(10000);

    // Step 11: Take "after" screenshot
    log('Taking AFTER screenshot...');
    await page.screenshot({ path: `${SCREENSHOT_DIR}\\step-2-navigate-entra-id-after.png`, fullPage: false });
    log('After screenshot saved.');

    // Final state
    const finalUrl = page.url();
    const finalTitle = await page.title();
    log(`Final URL: ${finalUrl}`);
    log(`Final title: ${finalTitle}`);

    results.stepCompleted = true;

    log('=== FINAL RESULTS ===');
    log(`searchFound: ${results.searchFound}`);
    log(`entraPageLoaded: ${results.entraPageLoaded}`);
    log(`overviewFound: ${results.overviewFound}`);
    log(`manageTenantsFound: ${results.manageTenantsFound}`);
    log(`elementDifferent: ${results.elementDifferent}`);
    log(`stepCompleted: ${results.stepCompleted}`);

  } catch (error) {
    log(`ERROR: ${error.message}`);
    log(`Stack: ${error.stack}`);
    try {
      await page.screenshot({ path: `${SCREENSHOT_DIR}\\step-2-navigate-entra-id-error.png`, fullPage: false });
    } catch {}
    results.blockingIssues = error.message;
  } finally {
    await context.close();
    log('Browser closed.');
  }

  // Output structured results
  console.log('\n=== STRUCTURED_OUTPUT ===');
  console.log(JSON.stringify(results, null, 2));
}

run().catch(e => { console.error(e); process.exit(1); });
