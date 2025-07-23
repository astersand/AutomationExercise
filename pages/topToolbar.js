import { expect } from '@playwright/test';

export default class TopToolbar {
     /**
   * @param {import('playwright').Page} page
   */
    constructor(page) {
        this.page = page;
        this.loggedInUserLabel = this.page.getByText('Logged in as');
    }
    async assertLoggedInUserLabel(fullName) {
        await expect(this.loggedInUserLabel).toContainText(fullName);
    }
}