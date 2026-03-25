import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const page = context.pages().find(p => p.url().includes('portal.azure.com')) || context.pages()[0];
  console.log('Page:', page.url());

  // Debug: find all clickable elements with Chinese text in the toolbar area
  const results = await page.evaluate(() => {
    const items = [];
    // Look at all elements with any toolbar-related attributes or command bar
    const allEls = document.querySelectorAll('*');
    for (const el of allEls) {
      const text = (el.textContent || '').trim();
      if (text.includes('新建用户') && text.length < 50) {
        const rect = el.getBoundingClientRect();
        items.push({
          tag: el.tagName,
          text: text.substring(0, 80),
          className: (el.className || '').toString().substring(0, 120),
          role: el.getAttribute('role'),
          ariaLabel: el.getAttribute('aria-label'),
          dataAutomation: el.getAttribute('data-automation-id'),
          id: el.id,
          rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
          childCount: el.children.length,
          isVisible: rect.width > 0 && rect.height > 0,
        });
      }
    }
    return items;
  });

  console.log(`\nFound ${results.length} elements containing "新建用户":`);
  for (const r of results) {
    console.log(JSON.stringify(r, null, 2));
  }

  // Also look for command bar buttons
  const cmdBarResults = await page.evaluate(() => {
    const items = [];
    const buttons = document.querySelectorAll('[class*="commandBar"] button, [class*="CommandBar"] button, [data-automation-id*="command"], [role="toolbar"] button, [role="menubar"] button, [class*="fxs-commandBar"] button, div[class*="azc-toolbar"] button');
    for (const el of buttons) {
      const text = (el.textContent || '').trim();
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.y < 200) { // Only toolbar area (top of page)
        items.push({
          tag: el.tagName,
          text: text.substring(0, 60),
          className: (el.className || '').toString().substring(0, 100),
          role: el.getAttribute('role'),
          ariaLabel: el.getAttribute('aria-label'),
          dataAutomation: el.getAttribute('data-automation-id'),
          rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
        });
      }
    }
    return items;
  });

  console.log(`\nCommand bar buttons (top area): ${cmdBarResults.length}`);
  for (const r of cmdBarResults) {
    console.log(JSON.stringify(r, null, 2));
  }

  // Look at the specific toolbar area by position (toolbar is around y=149 based on screenshot)
  const toolbarArea = await page.evaluate(() => {
    const items = [];
    const allEls = document.querySelectorAll('button, a, [role="button"], [role="menuitem"]');
    for (const el of allEls) {
      const rect = el.getBoundingClientRect();
      // Toolbar is in the area roughly y=120-170
      if (rect.y > 100 && rect.y < 200 && rect.width > 0) {
        items.push({
          tag: el.tagName,
          text: (el.textContent || '').trim().substring(0, 60),
          className: (el.className || '').toString().substring(0, 100),
          ariaLabel: el.getAttribute('aria-label'),
          dataAutomation: el.getAttribute('data-automation-id'),
          title: el.getAttribute('title'),
          rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
        });
      }
    }
    return items;
  });

  console.log(`\nAll clickable elements in toolbar area (y=100-200): ${toolbarArea.length}`);
  for (const r of toolbarArea) {
    console.log(JSON.stringify(r, null, 2));
  }

  browser.close();
}

main().catch(err => { console.error('ERROR:', err.message); process.exit(1); });
