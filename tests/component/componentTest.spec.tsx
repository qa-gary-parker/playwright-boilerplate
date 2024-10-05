import { test, expect } from '@playwright/experimental-ct-react';
import App from '../../my-react-app/src/App';

// Set up a specific viewport size for all tests in this suite
test.use({ viewport: { width: 500, height: 500 } });

// Test to verify that the App component renders correctly and contains expected text
test('should work', async ({ mount }) => {
  // Mount the React component (App) in a test environment
  const component = await mount(<App />);
  
  // Assert that the rendered component contains the text 'Learn React'
  await expect(component).toContainText('Learn React');
});
