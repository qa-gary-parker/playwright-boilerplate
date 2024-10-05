import { test, chromium } from '@playwright/test';

test.describe('audit example', () => {

    // Test to launch a Chromium browser, navigate to a webpage, and run a Lighthouse audit
    test('open browser', async () => {
        // Launch a Chromium browser in headless mode with a remote debugging port
        const browser = await chromium.launch({
            args: ['--remote-debugging-port=9222'], // Enable remote debugging on port 9222
            headless: true                          // Run in headless mode (no UI)
        });

        // Open a new page in the browser
        const page = await browser.newPage();

        // Navigate to Google homepage
        await page.goto('https://google.com/');
        
        // Dynamically import the Lighthouse audit integration for Playwright
        const { playAudit } = await import('playwright-lighthouse');

        // Run the Lighthouse audit with specified thresholds and configurations
        await playAudit({
            page: page,          // Pass the current page object to the audit
            thresholds: {         // Define minimum scores for different categories
                performance: 50,  // Minimum performance score
                accessibility: 50,// Minimum accessibility score
                'best-practices': 50, // Minimum best practices score
                seo: 50,          // Minimum SEO score
                pwa: 50,          // Minimum PWA score (if applicable)
            },
            port: 9222,           // Port used for remote debugging

            // Configuration for generating reports in multiple formats
            reports: {
                formats: {
                    json: true,   // Generate a JSON report
                    html: true,   // Generate an HTML report
                    csv: true,    // Generate a CSV report
                },
                name: `audit-example`,        // Set a custom name for the report files
                directory: `lighthouse-reports`, // Set the directory where reports will be saved
            },
        });

        // Close the browser after the audit is complete
        await browser.close();
    });
});
