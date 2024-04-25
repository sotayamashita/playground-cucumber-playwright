import { test, expect } from '@playwright/test';

test.use({ locale: 'en-GB' });

test.describe('Google Search Functionality', () => {
    test('Searching for information using Google Search', async ({ page }) => {
        await page.goto('https://www.google.com');
        await page.fill('textarea[name="q"]', 'What is the tallest mountain in the world?');
        await page.keyboard.press('Enter');
        await page.waitForSelector('h3');
        const text = await page.getByRole('heading', { name: 'Mount Everest', exact: true }).locator('span').textContent();
        expect(text).toContain('List of highest mountains on Earth');
    })
})
