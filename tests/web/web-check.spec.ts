
import { test, expect, devices } from '@playwright/test';

test('should show correct title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  expect(await page.title()).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
});