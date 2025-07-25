import { expect } from '@playwright/test';

export default class TopToolbar {
     /**
   * @param {import('playwright').Page} page
   */
    constructor(page) {
        this.page = page;
        this.loggedInUserLabel = this.page.getByText('Logged in as');
        this.logoutButton = this.page.locator('a[href="/logout"]');
        this.signupLoginButton = this.page.locator('a[href="/login"]');
    }
    async assertLoggedInUserLabel(fullName) {
        await expect(this.loggedInUserLabel).toContainText(fullName);
    }

    async clickLogout() {
        await this.logoutButton.click();
    }

    async isLoginButtonVisible() {
        await expect(this.signupLoginButton).toBeVisible();
    }
}