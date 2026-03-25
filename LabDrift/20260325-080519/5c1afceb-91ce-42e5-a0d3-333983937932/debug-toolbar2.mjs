import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const page = context.pages().find(p => p.url().includes('portal.azure.com')) || context.pages()[0];
  console.log('Page:', page.url());

  // Check for iframes
  const frames = page.frames();
  console.log(`\nTotal frames: ${frames.length}`);
  for (let i = 0; i < frames.length; i++) {
    const f = frames[i];
    console.log(`  Frame ${i}: name="${f.name()}" url="${f.url().substring(0, 120)}"`);
  }

  // Search across ALL frames for "新建用户"
  for (let i = 0; i < frames.length; i++) {
    const f = frames[i];
    try {
      const hasText = await f.evaluate(() => {
        return document.body ? document.body.innerText.includes('新建用户') : false;
      }).catch(() => false);
      if (hasText) {
        console.log(`\n*** Frame ${i} contains "新建用户" text! ***`);
        console.log(`  URL: ${f.url().substring(0, 200)}`);
        
        // Find clickable elements with this text in this frame
        const elements = await f.evaluate(() => {
          const items = [];
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
          let node;
          while (node = walker.nextNode()) {
            const text = node.textContent || '';
            const ownText = Array.from(node.childNodes)
              .filter(n => n.nodeType === Node.TEXT_NODE)
              .map(n => n.textContent)
              .join('');
            if (text.includes('新建用户') && text.length < 80) {
              const rect = node.getBoundingClientRect();
              items.push({
                tag: node.tagName,
                ownText: ownText.trim().substring(0, 50),
                fullText: text.trim().substring(0, 80),
                className: (node.className || '').toString().substring(0, 120),
                role: node.getAttribute('role'),
                ariaLabel: node.getAttribute('aria-label'),
                title: node.getAttribute('title'),
                dataAutomation: node.getAttribute('data-automation-id'),
                id: node.id ? node.id.substring(0, 80) : '',
                rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
                clickable: node.tagName === 'BUTTON' || node.tagName === 'A' || node.getAttribute('role') === 'button' || node.getAttribute('role') === 'menuitem',
              });
            }
          }
          return items;
        });
        
        console.log(`  Found ${elements.length} elements with "新建用户":`);
        for (const el of elements) {
          console.log('  ', JSON.stringify(el));
        }
      }
    } catch (e) {
      // Skip inaccessible frames
    }
  }

  // Also check for the entire page text to confirm
  const bodyText = await page.evaluate(() => {
    return document.body.innerText.substring(0, 500);
  });
  console.log('\n--- Main frame body text (first 500 chars) ---');
  console.log(bodyText);

  // Check all elements at the approximate toolbar position from the screenshot
  // The toolbar seems to be at around y=147 in the content area, but the full page y might be different
  const allClickableInRange = await page.evaluate(() => {
    const items = [];
    const allEls = document.querySelectorAll('*');
    for (const el of allEls) {
      const rect = el.getBoundingClientRect();
      // Broader search - y=50 to y=250, x > 250 (right of left nav)
      if (rect.y > 50 && rect.y < 250 && rect.x > 250 && rect.width > 20 && rect.height > 10 && rect.height < 60) {
        const tag = el.tagName;
        if (tag === 'BUTTON' || tag === 'A' || el.getAttribute('role') === 'button' || el.getAttribute('role') === 'menuitem' || tag === 'DIV') {
          items.push({
            tag,
            text: (el.textContent || '').trim().substring(0, 60),
            className: (el.className || '').toString().substring(0, 100),
            ariaLabel: el.getAttribute('aria-label'),
            role: el.getAttribute('role'),
            rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
          });
        }
      }
    }
    return items;
  });

  console.log(`\n--- Clickable elements x>250, y=50-250: ${allClickableInRange.length} ---`);
  for (const r of allClickableInRange) {
    console.log(JSON.stringify(r));
  }

  browser.close();
}

main().catch(err => { console.error('ERROR:', err.message); process.exit(1); });
