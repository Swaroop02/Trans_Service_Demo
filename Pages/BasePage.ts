import {
  Page,
  Locator,
  expect
} from '@playwright/test';

export class BasePage {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigation

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async refreshPage(): Promise<void> {
    await this.page.reload();
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  // Actions

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill(
    locator: Locator,
    value: string
  ): Promise<void> {
    await locator.fill(value);
  }

  async type(
    locator: Locator,
    value: string
  ): Promise<void> {
    await locator.type(value);
  }

  async selectDropdown(
    locator: Locator,
    value: string
  ): Promise<void> {
    await locator.selectOption(value);
  }

  async check(locator: Locator): Promise<void> {
    await locator.check();
  }

  async uncheck(locator: Locator): Promise<void> {
    await locator.uncheck();
  }

  // Wait Methods

  async waitForVisible(
    locator: Locator
  ): Promise<void> {
    await locator.waitFor({
      state: 'visible'
    });
  }

  async waitForHidden(
    locator: Locator
  ): Promise<void> {
    await locator.waitFor({
      state: 'hidden'
    });
  }

  async waitForLoadState(): Promise<void> {
    await this.page.waitForLoadState(
      'networkidle'
    );
  }

  // Getters

  async getText(
    locator: Locator
  ): Promise<string> {
    return await locator.textContent() || '';
  }

  async getValue(
    locator: Locator
  ): Promise<string> {
    return await locator.inputValue();
  }

  // Assertions

  async verifyText(
    locator: Locator,
    expectedText: string
  ): Promise<void> {
    await expect(locator)
      .toHaveText(expectedText);
  }

  async verifyContainsText(
    locator: Locator,
    expectedText: string
  ): Promise<void> {
    await expect(locator)
      .toContainText(expectedText);
  }

  async verifyVisible(
    locator: Locator
  ): Promise<void> {
    await expect(locator)
      .toBeVisible();
  }

  async verifyHidden(
    locator: Locator
  ): Promise<void> {
    await expect(locator)
      .toBeHidden();
  }

  async verifyEnabled(
    locator: Locator
  ): Promise<void> {
    await expect(locator)
      .toBeEnabled();
  }

  async verifyDisabled(
    locator: Locator
  ): Promise<void> {
    await expect(locator)
      .toBeDisabled();
  }

  // Screenshot

  async takeScreenshot(
    screenshotName: string
  ): Promise<void> {
    await this.page.screenshot({
      path: `test-results/${screenshotName}.png`,
      fullPage: true
    });
  }

  // Generic Loading Spinner

  async waitForSpinnerToDisappear(
    spinnerLocator: Locator
  ): Promise<void> {

    await spinnerLocator.waitFor({
      state: 'hidden',
      timeout: 10000
    });
  }
}