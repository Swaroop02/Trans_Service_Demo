import { Page, expect } from '@playwright/test';

export class SummaryPage {

    constructor(private page: Page) {}

    async verifySummaryGenerated() {
        await expect(
            this.page.locator('#summaryStatus')
        ).toHaveText('GENERATED');
    }
}