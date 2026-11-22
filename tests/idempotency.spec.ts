import { test, expect } from '@playwright/test';
import { TransactionPage } from '../Pages/TransactionPage';

test('TC-009 Reprocess Same Request', async ({ page }) => {

    const transactionPage = new TransactionPage(page);
    

    await page.goto('/transactions');

    await transactionPage.createTransaction(
        'TXN1001',
        'ACC-201',
        'REQ1001',
        'CREDIT',
        '100'
    );

    await transactionPage.createTransaction(
        'TXN1001',
        'ACC-201',
        'REQ1001',
        'CREDIT',
        '100'
    );

    await expect(page.locator('#duplicateFlag'))
        .toHaveText('TRUE');

    await expect(page.locator('#processedCount'))
        .toHaveText('1');
});

test('TC-010 Duplicate Transaction', async ({ page }) => {

    await page.goto('/transactions');

    await page.locator('#submitDuplicate').click();

    await expect(page.locator('#status'))
        .toHaveText('DUPLICATE');
});