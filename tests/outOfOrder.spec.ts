import { test, expect } from '@playwright/test';

test('TC-013 Sequence 2 arrives before Sequence 1', async ({ page }) => {

    await page.goto('/transactions');

    await page.locator('#sequence').fill('2');
    await page.locator('#submit').click();

    await expect(page.locator('#status'))
        .toHaveText('RETRY_PENDING');
});

