import { chromium } from 'playwright';

const SCREENSHOT_DIR = 'C:\\lab-drift-runner\\20260323-131705\\822e59e2-56fa-470f-a1e6-8fc7f6c80aba\\screenshots';
const USER_DATA_DIR = 'C:\\Users\\azureuser\\.copilot-lab-runner\\auth\\azure-portal\\browser-data';
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);

async function run() {
  log('Launching Edge...');
  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    channel: 'msedge',
    executablePath: EDGE_PATH,
    viewport: { width: 1920, height: 1080 },
    args: ['--disable-blink-features=AutomationControlled'],
    timeout: 60000,
  });

  const page = context.pages()[0] || await context.newPage();

  try {
    // Navigate directly to Entra ID Overview
    log('Navigating to Entra ID Overview...');
    await page.goto('https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await page.waitForTimeout(12000);

    // Dump all clickable elements containing "Manage tenants" or "tenant"
    log('Searching for Manage tenants in DOM...');
    const allElements = await page.evaluate(() => {
      const results = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      while (walker.nextNode()) {
        const el = walker.currentNode;
        const text = el.textContent?.trim() || '';
        if (text.includes('Manage tenants') && text.length < 100) {
          results.push({
            tag: el.tagName,
            text: text.substring(0, 80),
            className: el.className?.substring?.(0, 100) || '',
            role: el.getAttribute('role'),
            ariaLabel: el.getAttribute('aria-label'),
            href: el.getAttribute('href'),
            id: el.id,
            clickable: el.tagName === 'A' || el.tagName === 'BUTTON' || el.getAttribute('role') === 'button' || el.getAttribute('role') === 'menuitem',
            rect: el.getBoundingClientRect().toJSON(),
          });
        }
      }
      return results;
    });
    
    log(`Found ${allElements.length} elements containing "Manage tenants":`);
    for (const el of allElements) {
      log(`  <${el.tag}> role=${el.role} class="${el.className}" clickable=${el.clickable} text="${el.text}" rect=${JSON.stringify({x:el.rect.x, y:el.rect.y, w:el.rect.width, h:el.rect.height})}`);
    }

    // Find the most specific clickable element
    let clicked = false;
    
    // Try clicking by finding the toolbar command with "Manage tenants"
    // In Azure portal, toolbar items are often <div> with role="menuitem" or custom fxc-* elements
    const specificSelectors = [
      // Command bar items in Azure portal
      'div[class*="fxc-gc"] >> text=Manage tenants',
      'div[class*="azc-toolbar"] >> text=Manage tenants',
      'div[class*="ext-hubs-artbrowse-command"] >> text=Manage tenants',
      '[role="menuitem"]:has-text("Manage tenants")',
      '[role="toolbar"] >> text=Manage tenants',
      // Generic clickable containing the text
      'a:has-text("Manage tenants")',
      'button:has-text("Manage tenants")',
      'div[tabindex]:has-text("Manage tenants")',
    ];

    for (const sel of specificSelectors) {
      try {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 2000 })) {
          log(`Clicking with selector: ${sel}`);
          await el.click();
          clicked = true;
          break;
        }
      } catch {}
    }

    if (!clicked) {
      // Use coordinate-based click from DOM analysis
      const clickableEl = allElements.find(el => el.clickable && el.rect.width > 0);
      if (clickableEl) {
        const x = clickableEl.rect.x + clickableEl.rect.width / 2;
        const y = clickableEl.rect.y + clickableEl.rect.height / 2;
        log(`Clicking at coordinates (${x}, ${y}) based on DOM analysis...`);
        await page.mouse.click(x, y);
        clicked = true;
      }
    }

    if (!clicked) {
      // Last resort: find the smallest element containing "Manage tenants" in the toolbar area (y < 150)
      const toolbarEls = allElements.filter(el => el.rect.y < 150 && el.rect.width > 0 && el.rect.width < 300);
      if (toolbarEls.length > 0) {
        // Pick the smallest/most specific one
        const smallest = toolbarEls.reduce((a, b) => (a.rect.width * a.rect.height < b.rect.width * b.rect.height) ? a : b);
        const x = smallest.rect.x + smallest.rect.width / 2;
        const y = smallest.rect.y + smallest.rect.height / 2;
        log(`Clicking smallest toolbar element at (${x}, ${y})...`);
        await page.mouse.click(x, y);
        clicked = true;
      }
    }

    if (!clicked) {
      log('ERROR: Could not click Manage tenants!');
    } else {
      log('Manage tenants clicked!');
    }

    // Wait for page to load
    log('Waiting for Manage tenants page...');
    await page.waitForTimeout(8000);
    
    const mtUrl = page.url();
    log(`URL after clicking Manage tenants: ${mtUrl}`);
    await page.screenshot({ path: `${SCREENSHOT_DIR}\\debug-manage-tenants-page.png` });

    // Navigate back to Overview
    log('Navigating back to Entra ID Overview...');
    await page.goto('https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await page.waitForTimeout(10000);

    // Take final "after" screenshot
    log('Taking AFTER screenshot...');
    await page.screenshot({ path: `${SCREENSHOT_DIR}\\step-2-navigate-entra-id-after.png` });
    log('After screenshot saved.');

    const finalUrl = page.url();
    const finalTitle = await page.title();
    log(`Final URL: ${finalUrl}`);
    log(`Final title: ${finalTitle}`);
    log('DONE');

  } catch (error) {
    log(`ERROR: ${error.message}`);
    try { await page.screenshot({ path: `${SCREENSHOT_DIR}\\step-2-error.png` }); } catch {}
  } finally {
    await context.close();
    log('Browser closed.');
  }
}

run().catch(e => { console.error(e); process.exit(1); });
