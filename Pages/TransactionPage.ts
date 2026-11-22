import { Page, Locator, expect } from '@playwright/test';

export class TransactionPage {

    readonly page: Page;

    readonly transactionId;
    readonly accountId;
    readonly requestId;
    readonly transactionType;
    readonly amount;
    readonly submitBtn;
    readonly status;

    constructor(page: Page) {
        this.page = page;

        this.transactionId = page.locator('#transactionId');
        this.accountId = page.locator('#accountId');
        this.requestId = page.locator('#requestId');
        this.transactionType = page.locator('#transactionType');
        this.amount = page.locator('#amount');
        this.submitBtn = page.locator('#submit');
        this.status = page.locator('#status');
    }

    async createTransaction(
        transactionId: string,
        accountId: string,
        requestId: string,
        type: string,
        amount: string
    ) {
        await this.transactionId.fill(transactionId);
        await this.accountId.fill(accountId);
        await this.requestId.fill(requestId);
        await this.transactionType.selectOption(type);
        await this.amount.fill(amount);
        await this.submitBtn.click();
    }

    async verifyStatus(expectedStatus: string) {
        await expect(this.status).toHaveText(expectedStatus);
    }
}