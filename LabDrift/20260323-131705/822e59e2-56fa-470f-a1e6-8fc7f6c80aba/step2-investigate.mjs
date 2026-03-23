import { chromium } from 'playwright';

const USER_DATA_DIR = 'C:\\Users\\azureuser\\.copilot-lab-runner\\auth\\azure-portal\\browser-data';
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const SCREENSHOT_DIR = 'C:\\lab-drift-runner\\20260323-131705\\822e59e2-56fa-470f-a1e6-8fc7f6c80aba\\screenshots';

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
    log('Navigating to Entra ID...');
    await page.goto('https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    
    // Wait much longer for the full SPA to load all toolbar components
    log('Waiting 20s for full page load...');
    await page.waitForTimeout(20000);

    // Check for iframes
    const frames = page.frames();
    log(`Number of frames: ${frames.length}`);
    for (let i = 0; i < frames.length; i++) {
      const f = frames[i];
      log(`  Frame ${i}: url=${f.url().substring(0, 100)} name=${f.name()}`);
    }

    // Search in ALL frames for "Manage tenants"
    for (let i = 0; i < frames.length; i++) {
      const f = frames[i];
      try {
        const count = await f.locator('text=Manage tenants').count();
        if (count > 0) {
          log(`Found "Manage tenants" in frame ${i} (${f.url().substring(0, 60)}): ${count} matches`);
        }
      } catch {}
    }

    // Deep search including shadow DOM
    log('Searching with querySelectorAll in main frame including shadow roots...');
    const deepSearch = await page.evaluate(() => {
      function findInShadowDOM(root, searchText) {
        const results = [];
        const walk = (node) => {
          if (node.textContent?.includes(searchText) && node.children?.length === 0) {
            results.push({
              tag: node.tagName,
              text: node.textContent.substring(0, 80),
              className: node.className?.toString?.()?.substring(0, 80) || '',
            });
          }
          if (node.shadowRoot) {
            for (const child of node.shadowRoot.children) walk(child);
          }
          if (node.children) {
            for (const child of node.children) walk(child);
          }
        };
        walk(root);
        return results;
      }
      return findInShadowDOM(document.body, 'Manage tenant');
    });
    log(`Deep shadow DOM search found ${deepSearch.length} leaf elements`);
    for (const el of deepSearch) {
      log(`  <${el.tag}> text="${el.text}" class="${el.className}"`);
    }

    // Also search with broader term
    const broadSearch = await page.evaluate(() => {
      const els = document.querySelectorAll('*');
      const results = [];
      for (const el of els) {
        const text = el.textContent || '';
        if (text.includes('tenant') && el.children.length === 0 && text.length < 100) {
          results.push({
            tag: el.tagName,
            text: text.trim().substring(0, 80),
          });
        }
      }
      return results;
    });
    log(`Leaf elements containing "tenant": ${broadSearch.length}`);
    for (const el of broadSearch.slice(0, 20)) {
      log(`  <${el.tag}> "${el.text}"`);
    }

    // Try using Playwright's built-in text locator which handles iframes
    log('Trying page.getByText("Manage tenants")...');
    const textLocator = page.getByText('Manage tenants');
    const textCount = await textLocator.count();
    log(`getByText count: ${textCount}`);

    // Try the frame locator approach
    log('Trying frameLocator approach...');
    try {
      const allFrameLocator = page.frameLocator('iframe');
      const inFrameCount = await allFrameLocator.getByText('Manage tenants').count();
      log(`In iframe: ${inFrameCount} matches`);
    } catch(e) {
      log(`frameLocator error: ${e.message}`);
    }

    // Check aria-label attributes in toolbar area
    log('Checking aria attributes...');
    const ariaElements = await page.evaluate(() => {
      const els = document.querySelectorAll('[aria-label]');
      return Array.from(els)
        .filter(el => el.getAttribute('aria-label')?.toLowerCase().includes('tenant') || 
                     el.getAttribute('aria-label')?.toLowerCase().includes('manage'))
        .map(el => ({
          tag: el.tagName,
          ariaLabel: el.getAttribute('aria-label'),
          role: el.getAttribute('role'),
          className: el.className?.toString?.()?.substring(0, 80) || '',
        }));
    });
    log(`Elements with tenant/manage in aria-label: ${ariaElements.length}`);
    for (const el of ariaElements) {
      log(`  <${el.tag}> role=${el.role} aria-label="${el.ariaLabel}" class="${el.className}"`);
    }

    // Screenshot for current state
    await page.screenshot({ path: `${SCREENSHOT_DIR}\\debug-investigate.png` });

    // Try getting the command bar HTML
    log('Getting toolbar/command bar area HTML...');
    const toolbarHTML = await page.evaluate(() => {
      // Look for elements near the top of the page that look like toolbars
      const candidates = document.querySelectorAll('[role="toolbar"], [class*="command"], [class*="toolbar"], [class*="fxc-gc"]');
      return Array.from(candidates).map(el => ({
        tag: el.tagName,
        role: el.getAttribute('role'),
        className: el.className?.toString?.()?.substring(0, 100) || '',
        innerHTML: el.innerHTML?.substring(0, 500) || '',
        childCount: el.children.length,
      }));
    });
    log(`Toolbar candidates: ${toolbarHTML.length}`);
    for (const t of toolbarHTML.slice(0, 5)) {
      log(`  <${t.tag}> role=${t.role} class="${t.className}" children=${t.childCount}`);
      log(`    HTML: ${t.innerHTML.substring(0, 200)}`);
    }

  } catch (error) {
    log(`ERROR: ${error.message}`);
  } finally {
    await context.close();
    log('Browser closed.');
  }
}

run().catch(e => { console.error(e); process.exit(1); });
