import { test, expect } from '@playwright/test';

test('TC-008 Transaction Lifecycle', async ({ page }) => {

    await page.goto('/transactions/TXN1001');

    await expect(page.locator('#status')).toHaveText('RECEIVED');

    await page.reload();

    await expect(page.locator('#status')).toHaveText('PROCESSING');

    await page.reload();

    await expect(page.locator('#status')).toHaveText('PROCESSED');
});