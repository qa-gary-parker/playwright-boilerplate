import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // Importing the AxeBuilder for accessibility testing
import { createHtmlReport } from 'axe-html-reporter'; // For generating HTML accessibility reports
const fs = require('fs'); // Node.js file system module for file operations

// Base URL of the application under test
const baseUrl = 'https://www.google.com/';

test.describe('Homepage Accessibility Tests', () => {
  // Define a test for accessibility issues on the homepage
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    
    // Navigate to the base URL
    await page.goto(baseUrl);

    // Run the accessibility scan using Axe with specific WCAG tags (accessibility standards)
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']) // Specifies the WCAG levels for the scan
      .analyze(); // Analyzes the page for accessibility violations

    // Generate an HTML accessibility report
    const reportHTML = createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: baseUrl // Including the project URL as a key in the report
      },
    });

    // Ensure the directory structure exists for the report output
    if (!fs.existsSync("build/reports/accessibility-report.html")) {
      fs.mkdirSync("build/reports", {
        recursive: true, // Recursively creates directories if they don't exist
      });
    }

    // Write the accessibility report to the specified path
    fs.writeFileSync("build/reports/accessibility-report.html", reportHTML);

    // Assert that there are no accessibility violations
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
