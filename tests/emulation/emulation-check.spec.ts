import { test, expect, devices } from '@playwright/test';

// Use specific test configurations to simulate various conditions
test.use({
    // Emulate a device
    //...devices['iPhone 13'],
    
    // Set a custom viewport size
    //viewport: { width: 1280, height: 720 },
    
    // Simulate mobile environment
    //isMobile: true,

    // Set the locale
    locale: 'en-GB',

    // Set the timezone
    timezoneId: 'America/Los_Angeles',

    // Specify permissions for the browser
    //permissions: ['notifications'],
    permissions: ['geolocation'],

    // Simulate geolocation with specific coordinates (Rome, Italy)
    geolocation: { longitude: 12.492507, latitude: 41.889938 },

    // Set the browser color scheme to dark mode
    colorScheme: 'dark',

    // Custom user agent
    //userAgent: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4298.0 Mobile Safari/537.36',

    // Simulate offline mode
    //offline: true,

    // Disable JavaScript
    //javaScriptEnabled: false,
});

// Test to verify that the page title is correct when emulated with the above settings
test('should show correct title on emulation', async ({ page }) => {
  // Navigate to the Playwright homepage
  await page.goto('https://playwright.dev/');

  // Wait for 1 second to ensure the page is fully loaded
  await page.waitForTimeout(1000);

  // Assert that the page title matches the expected value
  expect(await page.title()).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
});
