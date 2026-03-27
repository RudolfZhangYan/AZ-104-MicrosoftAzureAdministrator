import { chromium } from 'playwright';

const SCREENSHOTS_DIR = 'C:\\lab-drift-runner\\20260327-064118\\3b577a35-21ea-480c-ab41-f0668b4a15c0\\screenshots';
const BEFORE = `${SCREENSHOTS_DIR}\\step-6-start-external-user-invite-before.png`;
const AFTER = `${SCREENSHOTS_DIR}\\step-6-start-external-user-invite-after.png`;

async function run() {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();

  // 1. Take before screenshot (page is already on Users)
  await page.screenshot({ path: BEFORE, timeout: 15000 });
  console.log('BEFORE screenshot taken');

  // The page is already on Users. Let's find the "New user" button.
  // Azure portal may use iframes - check all frames
  const allFrames = page.frames();
  console.log(`Page has ${allFrames.length} frames`);

  let targetFrame = null;
  for (const frame of allFrames) {
    const url = frame.url();
    // Look for buttons in each frame
    const btnCount = await frame.locator('button, [role="button"], [role="menuitem"]').count().catch(() => 0);
    if (btnCount > 5) {
      // Check if this frame has "New user"
      const hasNewUser = await frame.locator('text=/New user/i').count().catch(() => 0);
      if (hasNewUser > 0) {
        console.log(`Found "New user" in frame: ${url.substring(0, 80)} (${btnCount} buttons)`);
        targetFrame = frame;
        break;
      }
    }
  }

  if (!targetFrame) {
    // Fallback: try the main page directly
    console.log('No frame with "New user" found, trying main page');
    targetFrame = page;
  }

  // Try clicking "New user" with the dropdown chevron
  // The button shows "+ New user ∨" - it might be a split button or have a chevron
  let newUserClicked = false;

  // Strategy 1: Click text match
  const selectors = [
    'button:has-text("New user")',
    '[role="menuitem"]:has-text("New user")',
    'a:has-text("New user")',
    'div:has-text("New user") >> button',
    '[aria-label*="New user"]',
    'span:text("New user")',
  ];

  for (const sel of selectors) {
    try {
      const el = targetFrame.locator(sel).first();
      const visible = await el.isVisible({ timeout: 3000 }).catch(() => false);
      if (visible) {
        // Check if there's a chevron/dropdown part - we want the dropdown, not the main button
        // Look for a small dropdown toggle next to it
        const text = await el.textContent();
        console.log(`Found with "${sel}": "${(text||'').trim().substring(0,50)}"`);
        await el.click({ timeout: 5000 });
        newUserClicked = true;
        console.log('Clicked "New user"');
        break;
      }
    } catch (e) {
      // continue
    }
  }

  if (!newUserClicked) {
    // Strategy 2: evaluate in DOM to find and click
    console.log('Trying DOM evaluation...');
    const clicked = await targetFrame.evaluate(() => {
      const allEls = document.querySelectorAll('*');
      for (const el of allEls) {
        if (el.textContent && /^\s*\+?\s*New user\s*$/i.test(el.textContent.trim()) && 
            (el.tagName === 'BUTTON' || el.tagName === 'A' || el.getAttribute('role') === 'menuitem')) {
          el.click();
          return el.textContent.trim();
        }
      }
      // Also check for elements containing just "New user" as direct text
      for (const el of allEls) {
        const childText = Array.from(el.childNodes)
          .filter(n => n.nodeType === 3)
          .map(n => n.textContent?.trim())
          .join('');
        if (/New user/i.test(childText)) {
          el.click();
          return 'clicked via childText: ' + el.textContent?.trim().substring(0, 50);
        }
      }
      return null;
    }).catch(() => null);

    if (clicked) {
      newUserClicked = true;
      console.log(`DOM click result: ${clicked}`);
    }
  }

  if (!newUserClicked) {
    // Strategy 3: Use keyboard - press Alt or Tab to reach command bar
    console.log('Trying keyboard approach...');
    // Take a debug screenshot first
    await page.screenshot({ path: `${SCREENSHOTS_DIR}\\debug-step6b.png`, timeout: 15000 }).catch(() => {});
    
    // List all clickable elements with their bounding boxes in the command bar area
    const cmdElements = await targetFrame.evaluate(() => {
      const results = [];
      const allEls = document.querySelectorAll('button, [role="button"], [role="menuitem"], a[role], .fxs-commandBar *');
      for (const el of allEls) {
        const rect = el.getBoundingClientRect();
        const text = (el.textContent || '').trim().replace(/\s+/g, ' ').substring(0, 60);
        if (rect.top < 200 && rect.top > 50 && text) {
          results.push({ tag: el.tagName, text, x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) });
        }
      }
      return results;
    }).catch(() => []);
    console.log('Command bar elements:');
    cmdElements.forEach(e => console.log(`  <${e.tag}> "${e.text}" at (${e.x},${e.y}) ${e.w}x${e.h}`));
    
    // Find the New user element and click at its coordinates
    const newUserEl = cmdElements.find(e => /new user/i.test(e.text));
    if (newUserEl) {
      console.log(`Clicking at coordinates (${newUserEl.x + newUserEl.w/2}, ${newUserEl.y + newUserEl.h/2})`);
      await page.mouse.click(newUserEl.x + newUserEl.w/2, newUserEl.y + newUserEl.h/2);
      newUserClicked = true;
    }
  }

  if (!newUserClicked) {
    console.error('FAILED: Could not click "New user"');
    await page.screenshot({ path: AFTER, timeout: 15000 }).catch(() => {});
    process.exit(1);
  }

  // Wait for dropdown to appear
  await page.waitForTimeout(3000);

  // Take debug screenshot of dropdown
  await page.screenshot({ path: `${SCREENSHOTS_DIR}\\debug-step6-dropdown.png`, timeout: 15000 }).catch(() => {});

  // 5. Select "Invite external user" from dropdown
  let inviteClicked = false;

  // Check all frames for the menu option
  for (const frame of page.frames()) {
    const inviteSelectors = [
      '[role="menuitem"]:has-text("Invite external user")',
      'a:has-text("Invite external user")',
      'button:has-text("Invite external user")',
      'li:has-text("Invite external user")',
      'div[role="menu"] >> text=Invite external user',
      'text=Invite external user',
    ];
    
    for (const sel of inviteSelectors) {
      try {
        const el = frame.locator(sel).first();
        const visible = await el.isVisible({ timeout: 2000 }).catch(() => false);
        if (visible) {
          await el.click({ timeout: 5000 });
          inviteClicked = true;
          console.log(`Clicked "Invite external user" with selector: ${sel}`);
          break;
        }
      } catch (e) {
        // continue
      }
    }
    if (inviteClicked) break;
  }

  if (!inviteClicked) {
    // Try coordinate-based click on the dropdown menu
    console.log('Trying to find "Invite external user" via DOM evaluation...');
    for (const frame of page.frames()) {
      const menuItems = await frame.evaluate(() => {
        const results = [];
        const allEls = document.querySelectorAll('*');
        for (const el of allEls) {
          const text = (el.textContent || '').trim();
          if (/invite.*external|external.*user/i.test(text) && el.children.length < 3) {
            const rect = el.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
              results.push({
                tag: el.tagName,
                text: text.substring(0, 80),
                role: el.getAttribute('role'),
                x: Math.round(rect.x + rect.width / 2),
                y: Math.round(rect.y + rect.height / 2)
              });
            }
          }
        }
        return results;
      }).catch(() => []);
      
      if (menuItems.length > 0) {
        console.log('Found invite elements:', menuItems);
        const item = menuItems.find(m => m.role === 'menuitem') || menuItems[0];
        await page.mouse.click(item.x, item.y);
        inviteClicked = true;
        console.log(`Clicked at (${item.x}, ${item.y})`);
        break;
      }
    }
  }

  if (!inviteClicked) {
    console.error('FAILED: Could not click "Invite external user"');
    await page.screenshot({ path: AFTER, timeout: 15000 }).catch(() => {});
    process.exit(1);
  }

  // 6. Wait for external user invitation form
  await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(8000);

  // 7. Take after screenshot
  await page.screenshot({ path: AFTER, timeout: 15000 });
  console.log('AFTER screenshot taken');
  console.log('SUCCESS: All steps completed');
}

run().catch(err => {
  console.error('Script error:', err.message);
  process.exit(1);
});
