import { test, expect } from '@playwright/test';

test.describe('verify api response', () => {
    let response;
    let responseBody;

    test.beforeAll(async ({ request }) => {
        response = await request.get(`https://animechan.io/api/v1/quotes/random`);
        responseBody = await response.json();
    });

    test('should return a successful response', async () => {
        expect(response.ok()).toBeTruthy();
    });

    test('should have status success', async () => {
        expect(responseBody.status).toBe('success');
    });

    test('should have data field', async () => {
        expect(responseBody.data).toBeDefined();
    });

    test('should have non-empty content', async () => {
        expect(responseBody.data.content).toBeDefined();
        expect(responseBody.data.content).not.toBe('');
    });

    test('should have anime object with id and name', async () => {
        expect(responseBody.data.anime).toBeDefined();
        expect(responseBody.data.anime.id).toBeDefined();
        expect(responseBody.data.anime.name).toBeDefined();
    });

    test('should have character object with id and name', async () => {
        expect(responseBody.data.character).toBeDefined();
        expect(responseBody.data.character.id).toBeDefined();
        expect(responseBody.data.character.name).toBeDefined();
    });
});