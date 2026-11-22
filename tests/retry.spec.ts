import { test, expect } from '@playwright/test';

test('TC-018 Retry Success', async ({ page }) => {

    await page.goto('/retry/TXN2001');

    await page.locator('#retryButton').click();

    await expect(page.locator('#status'))
        .toHaveText('PROCESSED');
});