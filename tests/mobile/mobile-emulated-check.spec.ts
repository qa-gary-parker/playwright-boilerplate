import { test, expect, devices } from '@playwright/test';

test.use({
    ...devices['iPhone 13'],
});

test('should show correct title on mobile view', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  expect(await page.title()).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
});