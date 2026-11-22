import { test } from '../fixtures/transactionFixture';
import { transactionData } from '../test-data/transactionData';
import { TransactionPage } from '../Pages/TransactionPage';

test('TC-001 Accept Valid Transaction',
async ({ page, transactionPage }) => {

    await page.goto('/transactions');

    await transactionPage.createTransaction(
        transactionData.validTransaction.transactionId,
        transactionData.validTransaction.accountId,
        transactionData.validTransaction.requestId,
        transactionData.validTransaction.type,
        transactionData.validTransaction.amount
    );

    await transactionPage.verifyStatus('ACCEPTED');
});


test('TC-002 Missing Transaction Id', async ({ page }) => {

    const transactionPage = new TransactionPage(page);

    await page.goto('/transactions');

    await transactionPage.createTransaction(
        '',
        'ACC-201',
        'REQ101',
        'CREDIT',
        '100'
    );

    await transactionPage.verifyStatus('VALIDATION_FAILED');
});