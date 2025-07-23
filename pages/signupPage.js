export default class SignupPage {
    /**
   * @param {import('playwright').Page} page
   */
    constructor(page) {
        this.page = page;
    }

    get title() {
        return this.page.locator('h2.title');
    }

    get genderMr() {
        return this.page.locator('#id_gender1');
    }

    get genderMrs() {
        return this.page.locator('#id_gender2');
    }

    get nameInput() {
        return this.page.locator('#name');
    }

    get emailInput() {
        return this.page.locator('#email');
    }

    get passwordInput() {
        return this.page.locator('#password');
    }

    get daysSelect() {
        return this.page.locator('#days');
    }

    get monthsSelect() {
        return this.page.locator('#months');
    }

    get yearsSelect() {
        return this.page.locator('#years');
    }

    get newsletterCheckbox() {
        return this.page.locator('#newsletter');
    }

    get optinCheckbox() {
        return this.page.locator('#optin');
    }

    get firstNameInput() {
        return this.page.locator('#first_name');
    }

    get lastNameInput() {
        return this.page.locator('#last_name');
    }

    get companyInput() {
        return this.page.locator('#company');
    }

    get addressInput() {
        return this.page.locator('#address1');
    }

    get address2Input() {
        return this.page.locator('#address2');
    }

    get countrySelect() {
        return this.page.locator('#country');
    }

    get stateInput() {
        return this.page.locator('#state');
    }

    get cityInput() {
        return this.page.locator('#city');
    }

    get zipcodeInput() {
        return this.page.locator('#zipcode');
    }

    get mobileNumberInput() {
        return this.page.locator('#mobile_number');
    }

    get createAccountButton() {
        return this.page.locator('button[data-qa=create-account]');
    }

    async fillSignupForm(accountInformation) {
        await this.genderMr.check();
        await this.passwordInput.fill(accountInformation.password);
        await this.daysSelect.selectOption(accountInformation.birthDay);
        await this.monthsSelect.selectOption(accountInformation.birthMonth);
        await this.yearsSelect.selectOption(accountInformation.birthYear);
        await this.firstNameInput.fill(accountInformation.firstName);
        await this.lastNameInput.fill(accountInformation.lastName);
        await this.addressInput.fill(accountInformation.address);
        await this.countrySelect.selectOption(accountInformation.country)
        await this.cityInput.fill(accountInformation.city);
        await this.stateInput.fill(accountInformation.state);
        await this.zipcodeInput.fill(accountInformation.zipCode);
        await this.mobileNumberInput.fill(accountInformation.phone);
    }

    async submitForm() {
        await this.createAccountButton.click();
    }
}