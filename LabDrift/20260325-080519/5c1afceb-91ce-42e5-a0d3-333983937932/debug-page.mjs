import { chromium } from 'playwright';

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages();
  let page = pages.find(p => p.url().includes('portal.azure.com')) || pages[0];
  console.log('Current URL:', page.url());

  // Take a screenshot to see current state
  await page.screenshot({ path: 'C:\\lab-drift-runner\\20260325-080519\\5c1afceb-91ce-42e5-a0d3-333983937932\\screenshots\\debug-current-state.png', fullPage: false });
  console.log('Screenshot saved');

  // Check page title
  const title = await page.title();
  console.log('Page title:', title);

  // Dump the page text to understand what's visible
  const bodyText = await page.evaluate(() => document.body?.innerText?.substring(0, 3000) || 'no body text');
  console.log('\n--- PAGE TEXT (first 3000 chars) ---');
  console.log(bodyText);

  // Check for iframes - Azure portal uses them extensively
  const frames = page.frames();
  console.log('\n--- FRAMES ---');
  for (const f of frames) {
    console.log('  Frame:', f.url().substring(0, 120));
  }

  // Check if there's a dialog or popup blocking
  const dialogs = await page.$$('[role="dialog"], [role="alertdialog"], .ms-Dialog');
  console.log('\n--- DIALOGS ---');
  console.log('Dialog elements found:', dialogs.length);
  for (const d of dialogs) {
    const text = await d.textContent().catch(() => '');
    console.log('  Dialog text:', text.substring(0, 200));
  }

  // Look for any buttons/links on the page
  console.log('\n--- ALL BUTTONS ---');
  const buttons = await page.$$('button');
  for (const btn of buttons) {
    const text = await btn.textContent().catch(() => '');
    const visible = await btn.isVisible().catch(() => false);
    if (text.trim() && visible) {
      console.log(`  Button: "${text.trim().substring(0, 80)}"`);
    }
  }

  // Look in all frames for "新建用户" or "New user"
  console.log('\n--- SEARCHING ALL FRAMES FOR NEW USER ---');
  for (const frame of frames) {
    try {
      const frameText = await frame.evaluate(() => document.body?.innerText?.substring(0, 500) || '');
      if (frameText.includes('用户') || frameText.includes('User') || frameText.includes('user')) {
        console.log('  Frame with user content:', frame.url().substring(0, 100));
        console.log('  Text:', frameText.substring(0, 300));
        
        const frameBtns = await frame.$$('button');
        for (const btn of frameBtns) {
          const text = await btn.textContent().catch(() => '');
          const visible = await btn.isVisible().catch(() => false);
          if (visible && text.trim()) {
            console.log(`    Frame button: "${text.trim().substring(0, 80)}"`);
          }
        }
      }
    } catch (e) {
      // skip cross-origin frames
    }
  }
}

main().catch(err => { console.error('ERROR:', err.message); process.exit(1); });
