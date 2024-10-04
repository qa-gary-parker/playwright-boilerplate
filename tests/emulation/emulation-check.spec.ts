import { test, expect, devices } from '@playwright/test';

test.use({
    //...devices['iPhone 13'],
    //viewport: { width: 1280, height: 720 },
    //isMobile: true,
    locale: 'en-GB',
    timezoneId: 'America/Los_Angeles',
    //permissions: ['notifications'],
    permissions: ['geolocation'],
    geolocation: { longitude: 12.492507, latitude: 41.889938 },
    colorScheme: 'dark',
    //userAgent: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4298.0 Mobile Safari/537.36',
    //offline: true,
    //javaScriptEnabled: false,
  });

test('should show correct title on emulation', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(1000)
  expect(await page.title()).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
});