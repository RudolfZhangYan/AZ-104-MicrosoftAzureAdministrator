import http from 'http';
import fs from 'fs';
import WebSocket from 'ws';

const CDP_HOST = '127.0.0.1';
const CDP_PORT = 9222;
const SCREENSHOTS_DIR = 'C:\\lab-drift-runner\\20260327-064118\\3b577a35-21ea-480c-ab41-f0668b4a15c0\\screenshots';
const BEFORE_SS = `${SCREENSHOTS_DIR}\\step-5-verify-internal-user-before.png`;
const AFTER_SS = `${SCREENSHOTS_DIR}\\step-5-verify-internal-user-after.png`;
const USERS_URL = 'https://portal.azure.com/#view/Microsoft_AAD_IAM/UsersManagementMenuBlade/~/AllUsers';
const TARGET_USER = 'az104-user1';

function httpGet(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) { this.wsUrl = wsUrl; this.id = 1; this.callbacks = new Map(); }
  
  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((res, rej) => {
      this.ws.on('open', res);
      this.ws.on('error', rej);
    });
    this.ws.on('message', (msg) => {
      const data = JSON.parse(msg.toString());
      if (data.id && this.callbacks.has(data.id)) {
        this.callbacks.get(data.id)(data);
        this.callbacks.delete(data.id);
      }
    });
  }
  
  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, (data) => {
        if (data.error) reject(new Error(data.error.message));
        else resolve(data.result);
      });
      this.ws.send(JSON.stringify({ id, method, params }));
      setTimeout(() => { if (this.callbacks.has(id)) { this.callbacks.delete(id); reject(new Error(`Timeout: ${method}`)); } }, 15000);
    });
  }
  
  close() { this.ws.close(); }
}

async function screenshot(cdp, path) {
  const result = await cdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path, Buffer.from(result.data, 'base64'));
  console.log(`Screenshot: ${path}`);
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
  // Get list of targets (tabs)
  const targets = await httpGet(`http://${CDP_HOST}:${CDP_PORT}/json`);
  console.log(`Found ${targets.length} targets`);
  
  // Find Azure portal tab
  let target = targets.find(t => t.url.includes('portal.azure.com') && t.type === 'page');
  if (!target) target = targets.find(t => t.type === 'page');
  if (!target) throw new Error('No page targets found');
  
  console.log(`Target: ${target.url}`);
  console.log(`WS: ${target.webSocketDebuggerUrl}`);
  
  const cdp = new CDPClient(target.webSocketDebuggerUrl);
  await cdp.connect();
  console.log('CDP connected');
  
  // Enable Page domain
  await cdp.send('Page.enable');
  
  // Step 1: Before screenshot
  await screenshot(cdp, BEFORE_SS);
  
  // Step 2: Navigate to Users
  console.log('Navigating to Users blade...');
  await cdp.send('Page.navigate', { url: USERS_URL });
  await sleep(10000);
  console.log('Waited 10s after navigation');
  
  // Step 3-4: Check current URL and try refresh
  const { result: urlResult } = await cdp.send('Runtime.evaluate', { expression: 'window.location.href' });
  console.log(`Current URL: ${urlResult.value}`);
  
  // Try clicking Refresh button
  console.log('Looking for Refresh button...');
  const clickRefreshScript = `
    (function() {
      const btns = document.querySelectorAll('button, [role="button"]');
      for (const btn of btns) {
        const text = (btn.textContent || '').trim();
        const label = btn.getAttribute('aria-label') || '';
        const title = btn.getAttribute('title') || '';
        if (text === 'Refresh' || label.includes('Refresh') || title.includes('Refresh')) {
          btn.click();
          return 'clicked: ' + (text || label || title);
        }
      }
      return 'not found';
    })()
  `;
  const { result: refreshResult } = await cdp.send('Runtime.evaluate', { expression: clickRefreshScript });
  console.log(`Refresh: ${refreshResult.value}`);
  
  if (refreshResult.value === 'not found') {
    console.log('Reloading page...');
    await cdp.send('Page.reload');
  }
  await sleep(8000);
  
  // Step 5: Search for user
  console.log('Searching for user...');
  const searchScript = `
    (function() {
      const inputs = document.querySelectorAll('input[type="text"], input[type="search"], input:not([type]), [role="searchbox"]');
      for (const inp of inputs) {
        const ph = (inp.placeholder || '').toLowerCase();
        const label = (inp.getAttribute('aria-label') || '').toLowerCase();
        if (ph.includes('search') || label.includes('search') || ph.includes('filter')) {
          inp.focus();
          inp.value = '';
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          nativeInputValueSetter.call(inp, '${TARGET_USER}');
          inp.dispatchEvent(new Event('input', { bubbles: true }));
          inp.dispatchEvent(new Event('change', { bubbles: true }));
          inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, bubbles: true }));
          inp.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', keyCode: 13, bubbles: true }));
          return 'searched: ' + (inp.placeholder || inp.getAttribute('aria-label'));
        }
      }
      return 'no search box';
    })()
  `;
  const { result: searchResult } = await cdp.send('Runtime.evaluate', { expression: searchScript });
  console.log(`Search: ${searchResult.value}`);
  await sleep(5000);
  
  // Check if user is visible
  const checkUserScript = `
    (function() {
      const body = document.body.innerText;
      const found = body.includes('${TARGET_USER}');
      const lines = body.split('\\n').filter(l => l.includes('az104') || l.includes('user1')).slice(0, 5);
      return JSON.stringify({ found, lines });
    })()
  `;
  const { result: userResult } = await cdp.send('Runtime.evaluate', { expression: checkUserScript });
  const userCheck = JSON.parse(userResult.value);
  console.log(`User found: ${userCheck.found}`);
  if (userCheck.lines.length) console.log(`Matching lines: ${userCheck.lines.join(' | ')}`);
  
  // Step 6: After screenshot
  await screenshot(cdp, AFTER_SS);
  
  console.log(`\n=== RESULT ===`);
  console.log(`USER_FOUND: ${userCheck.found}`);
  
  cdp.close();
}

run().catch(err => {
  console.error(`ERROR: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
});
