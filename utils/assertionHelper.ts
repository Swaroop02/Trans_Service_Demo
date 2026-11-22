import { expect, Locator } from '@playwright/test';

export class AssertionHelper {

  static async verifyText(
    locator: Locator,
    expectedText: string
  ) {
    await expect(locator)
      .toHaveText(expectedText);
  }

  static async verifyVisible(
    locator: Locator
  ) {
    await expect(locator)
      .toBeVisible();
  }

}