import { chromium } from 'playwright';

const SCREENSHOTS_DIR = 'C:\\lab-drift-runner\\20260327-064118\\3b577a35-21ea-480c-ab41-f0668b4a15c0\\screenshots';

async function run() {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();

  // Navigate
  await page.goto('https://portal.azure.com/#view/Microsoft_AAD_IAM/UsersManagementMenuBlade/~/AllUsers', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  
  // Wait longer
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(10000);

  // Debug screenshot
  await page.screenshot({ path: `${SCREENSHOTS_DIR}\\debug-step6.png`, timeout: 15000 }).catch(async () => {
    const vp = page.viewportSize() || { width: 1920, height: 1080 };
    await page.screenshot({ path: `${SCREENSHOTS_DIR}\\debug-step6.png`, clip: { x: 0, y: 0, width: vp.width, height: vp.height }, timeout: 15000 });
  });
  console.log('Debug screenshot taken');

  // Print current URL
  console.log('URL:', page.url());

  // List ALL buttons with text
  const allBtns = page.locator('button, [role="button"], [role="menuitem"], [role="menuitemcheckbox"]');
  const count = await allBtns.count();
  console.log(`Found ${count} button-like elements:`);
  for (let i = 0; i < Math.min(count, 60); i++) {
    const text = await allBtns.nth(i).textContent().catch(() => '(error)');
    const tag = await allBtns.nth(i).evaluate(el => el.tagName + ' ' + el.className.substring(0,50)).catch(() => '(error)');
    const trimmed = (text || '').trim().replace(/\s+/g, ' ').substring(0, 80);
    if (trimmed) {
      console.log(`  [${i}] ${tag}: "${trimmed}"`);
    }
  }

  // Also check for any text containing "user" or "new" anywhere
  const userTexts = await page.locator('*:visible').evaluateAll(els => {
    return els
      .filter(el => {
        const t = el.textContent || '';
        return /new.*user|invite|create.*user/i.test(t) && el.children.length < 3;
      })
      .map(el => ({
        tag: el.tagName,
        text: (el.textContent || '').trim().substring(0, 100),
        role: el.getAttribute('role'),
        cls: (el.className || '').substring(0, 50)
      }))
      .slice(0, 20);
  });
  console.log('\nElements with "new user" / "invite" text:');
  userTexts.forEach(e => console.log(`  <${e.tag} role="${e.role}" class="${e.cls}">: "${e.text}"`));
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
