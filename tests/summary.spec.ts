import { test } from '@playwright/test';
import { SummaryPage } from '../pages/SummaryPage';

test('TC-021 Batch Completion Summary', async ({ page }) => {

    const summaryPage = new SummaryPage(page);

    await page.goto('/summary');

    await summaryPage.verifySummaryGenerated();
});