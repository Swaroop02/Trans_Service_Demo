import { Page, expect } from '@playwright/test';

export class RetryPage {

    constructor(private page: Page) {}

    async retryTransaction(transactionId: string) {
        await this.page.goto(`/retry/${transactionId}`);
        await this.page.locator('#retryButton').click();
    }

    async verifyProcessed() {
        await expect(
            this.page.locator('#status')
        ).toHaveText('PROCESSED');
    }
}