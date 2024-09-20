import { test, expect } from '@playwright/test';

test('should match homepage screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot();
  //await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
  //expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
});