import { test, expect } from '@playwright/test';

// Describe block for grouping related tests for API response validation
test.describe('verify API response', () => {
    let response;
    let responseBody;

    // Setup: Runs once before all tests to fetch the API response and parse its JSON body
    test.beforeAll(async ({ request }) => {
        // Send a GET request to the specified API endpoint
        response = await request.get('https://animechan.io/api/v1/quotes/random');
        // Parse the response body into JSON format
        responseBody = await response.json();
    });

    // Test to check if the response was successful (HTTP status 2xx)
    test('should return a successful response', async () => {
        expect(response.ok()).toBeTruthy(); // Check if the HTTP status indicates success
    });

    // Test to check if the response contains a "status" field with the value 'success'
    test('should have status success', async () => {
        expect(responseBody.status).toBe('success'); // Validate the "status" field in the response
    });

    // Test to check if the response body contains a "data" field
    test('should have data field', async () => {
        expect(responseBody.data).toBeDefined(); // Ensure the "data" field exists in the response
    });

    // Test to check if the "data" field contains non-empty content
    test('should have non-empty content', async () => {
        expect(responseBody.data.content).toBeDefined(); // Check if "content" exists
        expect(responseBody.data.content).not.toBe('');  // Ensure "content" is not an empty string
    });

    // Test to validate the presence of "anime" object and its "id" and "name" fields
    test('should have anime object with id and name', async () => {
        expect(responseBody.data.anime).toBeDefined();     // Ensure the "anime" object exists
        expect(responseBody.data.anime.id).toBeDefined();  // Check if "anime.id" exists
        expect(responseBody.data.anime.name).toBeDefined();// Check if "anime.name" exists
    });

    // Test to validate the presence of "character" object and its "id" and "name" fields
    test('should have character object with id and name', async () => {
        expect(responseBody.data.character).toBeDefined();     // Ensure the "character" object exists
        expect(responseBody.data.character.id).toBeDefined();  // Check if "character.id" exists
        expect(responseBody.data.character.name).toBeDefined();// Check if "character.name" exists
    });
});
