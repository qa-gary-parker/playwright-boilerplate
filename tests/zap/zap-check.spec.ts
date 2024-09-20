import { test, expect } from '@playwright/test';

test('Security check with OWASP ZAP', async ({ page }) => {
   const { ZAPClient } = await import('zap-client');

  // Launch OWASP ZAP and start the ZAP daemon
  const zap = new ZAPClient();
  await zap.startZap();

  // Navigate to your application
  await page.goto('https://google.com');

  // Perform actions on your application (e.g., login, navigate to specific pages)

  // Run a ZAP spider scan to discover all reachable pages
  await zap.spider.scan();

  // Run a ZAP active scan to identify security vulnerabilities
  await zap.ascan.scan();

  // Get the ZAP alerts (security vulnerabilities) found during the scan
  const alerts = await zap.core.alerts();

  // Assert that there are no high or medium severity alerts
  const highMediumSeverityAlerts = alerts.filter((alert) => ['High', 'Medium'].includes(alert.risk));
  expect(highMediumSeverityAlerts.length).toBe(0);

  // Stop the ZAP daemon
  await zap.stopZap();
});