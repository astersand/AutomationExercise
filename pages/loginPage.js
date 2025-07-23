import { expect } from "@playwright/test";

export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.signupForm = this.page.locator('.signup-form');
        this.signupNameInput = this.page.locator('[data-qa=signup-name]');
        this.signupEmailInput = this.page.locator('[data-qa=signup-email]');
        this.signupButton = this.page.locator('[data-qa=signup-button]');
    }


    async fillSignupForm(name, email) {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
    }

    async clickSubmitButton() {
        await this.signupButton.click();
    }

    async assertVisibilityOfSignUpForm() {
        await expect(this.page.locator('.signup-form')).toBeVisible();
    }
}