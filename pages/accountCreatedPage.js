import { expect } from "@playwright/test";

export default class AccountCreatedPage {
    constructor(page) {
        this.page = page;
    }

    get title() {
        return this.page.locator('h2[data-qa="account-created"]');
    }

    get successMessage() {
        return this.page.locator('p').nth(0);
    }

    get privilegesMessage() {
        return this.page.locator('p').nth(1);
    }

    get continueButton() {
        return this.page.locator('a[data-qa="continue-button"]');
    }

    async assertTitle(expectedTitle) {
        await expect(this.title).toHaveText(expectedTitle);
    }

    async assertSuccessMessage(expectedMessage) {
        await expect(this.successMessage).toHaveText(expectedMessage);
    }

    async assertPrivilegesMessage(expectedMessage) {
        await expect(this.privilegesMessage).toHaveText(expectedMessage);
    }

    async clickContinue() {
        await this.continueButton.click();
    }
}