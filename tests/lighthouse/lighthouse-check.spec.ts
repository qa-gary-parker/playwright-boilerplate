import { test, chromium } from '@playwright/test';

test.describe('audit example', () => {
    test('open browser', async () => {
        const browser = await chromium.launch({
            args: ['--remote-debugging-port=9222'],
            headless: true
        });
        const page = await browser.newPage();
        await page.goto('https://google.com/');
        
        const { playAudit } = await import('playwright-lighthouse');
        
        await playAudit({
            page: page,
            port: 9222,
     });
  });
});