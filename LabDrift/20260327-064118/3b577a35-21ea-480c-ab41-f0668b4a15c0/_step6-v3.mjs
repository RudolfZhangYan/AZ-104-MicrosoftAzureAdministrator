import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const SCREENSHOTS_DIR = 'C:\\lab-drift-runner\\20260327-064118\\3b577a35-21ea-480c-ab41-f0668b4a15c0\\screenshots';
const BEFORE = `${SCREENSHOTS_DIR}\\step-6-start-external-user-invite-before.png`;
const AFTER = `${SCREENSHOTS_DIR}\\step-6-start-external-user-invite-after.png`;

async function cdpScreenshot(page, path) {
  const client = await page.context().newCDPSession(page);
  const result = await client.send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(path, Buffer.from(result.data, 'base64'));
  await client.detach();
  console.log(`Screenshot saved: ${path.split('\\').pop()}`);
}

async function run() {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();

  // 1. Take before screenshot
  await cdpScreenshot(page, BEFORE);

  // The page is already on the Users list (from debug screenshot).
  // Let's navigate fresh to make sure
  await page.goto('https://portal.azure.com/#view/Microsoft_AAD_IAM/UsersManagementMenuBlade/~/AllUsers', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  console.log('Navigated to Users page');

  // Wait for page to be ready
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(8000);

  // Find all frames
  const allFrames = page.frames();
  console.log(`Page has ${allFrames.length} frames`);

  // Look in all frames for the "New user" button
  let targetFrame = page;
  for (const frame of allFrames) {
    try {
      const hasNewUser = await frame.evaluate(() => {
        const els = document.querySelectorAll('*');
        for (const el of els) {
          if (/New user/i.test(el.textContent) && el.getBoundingClientRect().width > 0) {
            return true;
          }
        }
        return false;
      });
      if (hasNewUser) {
        console.log(`Found "New user" text in frame: ${frame.url().substring(0, 60)}`);
        targetFrame = frame;
        break;
      }
    } catch (e) {
      // Skip non-accessible frames
    }
  }

  // Find "New user" button coordinates in the command bar area (top 200px)
  const newUserInfo = await targetFrame.evaluate(() => {
    const results = [];
    const allEls = document.querySelectorAll('*');
    for (const el of allEls) {
      const rect = el.getBoundingClientRect();
      if (rect.top > 30 && rect.top < 200 && rect.width > 0 && rect.height > 0) {
        const text = (el.textContent || '').trim().replace(/\s+/g, ' ');
        if (/^.{0,5}New user.{0,5}$/i.test(text)) {
          results.push({
            tag: el.tagName,
            text: text.substring(0, 50),
            role: el.getAttribute('role'),
            ariaHasPopup: el.getAttribute('aria-haspopup'),
            x: rect.x,
            y: rect.y,
            w: rect.width,
            h: rect.height,
            cx: Math.round(rect.x + rect.width / 2),
            cy: Math.round(rect.y + rect.height / 2)
          });
        }
      }
    }
    return results;
  }).catch(() => []);

  console.log('New user elements found:', JSON.stringify(newUserInfo, null, 2));

  if (newUserInfo.length === 0) {
    // Broader search
    const allCmdBar = await targetFrame.evaluate(() => {
      const results = [];
      const allEls = document.querySelectorAll('*');
      for (const el of allEls) {
        const rect = el.getBoundingClientRect();
        if (rect.top > 100 && rect.top < 180 && rect.height > 15 && rect.height < 50 && rect.width > 40) {
          const text = (el.textContent || '').trim().replace(/\s+/g, ' ').substring(0, 60);
          if (text && !text.includes('\n')) {
            results.push({ tag: el.tagName, text, x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width) });
          }
        }
      }
      return results.slice(0, 30);
    }).catch(() => []);
    console.log('Command bar area elements:', JSON.stringify(allCmdBar, null, 2));
    
    console.error('FAILED: Could not find "New user" button');
    await cdpScreenshot(page, AFTER);
    process.exit(1);
  }

  // Click the "New user" element (prefer one with aria-haspopup or a dropdown)
  const target = newUserInfo.find(e => e.ariaHasPopup) || newUserInfo[0];
  console.log(`Clicking "New user" at (${target.cx}, ${target.cy})`);
  await page.mouse.click(target.cx, target.cy);
  
  // Wait for dropdown to appear
  await page.waitForTimeout(3000);
  
  // Debug: screenshot dropdown state
  await cdpScreenshot(page, `${SCREENSHOTS_DIR}\\debug-step6-dropdown.png`);

  // Find "Invite external user" option
  let inviteClicked = false;
  
  for (const frame of page.frames()) {
    try {
      const inviteInfo = await frame.evaluate(() => {
        const results = [];
        const allEls = document.querySelectorAll('*');
        for (const el of allEls) {
          const text = (el.textContent || '').trim();
          if (/invite.*external.*user/i.test(text) && el.children.length < 5) {
            const rect = el.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
              results.push({
                tag: el.tagName,
                text: text.substring(0, 80),
                role: el.getAttribute('role'),
                cx: Math.round(rect.x + rect.width / 2),
                cy: Math.round(rect.y + rect.height / 2),
                w: Math.round(rect.width),
                h: Math.round(rect.height)
              });
            }
          }
        }
        return results;
      });
      
      if (inviteInfo.length > 0) {
        console.log('Invite elements found:', JSON.stringify(inviteInfo, null, 2));
        // Click the most specific one (smallest area, or role=menuitem)
        const item = inviteInfo.find(e => e.role === 'menuitem') || 
                     inviteInfo.find(e => e.role === 'link') ||
                     inviteInfo.sort((a, b) => (a.w * a.h) - (b.w * b.h))[0];
        console.log(`Clicking "Invite external user" at (${item.cx}, ${item.cy})`);
        await page.mouse.click(item.cx, item.cy);
        inviteClicked = true;
        break;
      }
    } catch (e) {
      // Skip
    }
  }

  if (!inviteClicked) {
    console.error('FAILED: Could not find "Invite external user" in dropdown');
    await cdpScreenshot(page, AFTER);
    process.exit(1);
  }

  // Wait for the invite form to load
  console.log('Waiting for invite form to load...');
  await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(8000);

  // 7. Take after screenshot
  await cdpScreenshot(page, AFTER);
  console.log('SUCCESS: All steps completed');
}

run().catch(err => {
  console.error('Script error:', err.message);
  process.exit(1);
});
