import { test as base } from '@playwright/test';
import { TransactionPage } from '../Pages/TransactionPage';
import { RetryPage } from '../pages/RetryPage';
import { SummaryPage } from '../pages/SummaryPage';

type TransactionFixtures = {
  transactionPage: TransactionPage;
  retryPage: RetryPage;
  summaryPage: SummaryPage;
};

export const test = base.extend<TransactionFixtures>({
  
  transactionPage: async ({ page }, use) => {
    const transactionPage = new TransactionPage(page);
    await use(transactionPage);
  },

  retryPage: async ({ page }, use) => {
    const retryPage = new RetryPage(page);
    await use(retryPage);
  },

  summaryPage: async ({ page }, use) => {
    const summaryPage = new SummaryPage(page);
    await use(summaryPage);
  }
});

export { expect } from '@playwright/test';
