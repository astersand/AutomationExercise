import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import SignupPage from '../pages/signupPage';
import { faker } from '@faker-js/faker';
import AccountCreatedPage from '../pages/accountCreatedPage';

test.describe('Signup Tests', () => {
  const dayjs = require('dayjs');
  let loginPage;
  let signupPage;
  let accountCreatedPage;
  let name = faker.person.fullName({ sex: 'male'});
  let email = faker.internet.email({ firstName: name.split(' ')[0], lastName: name.split(' ')[1]});
  let signupInformation = {
    gender: faker.person.prefix('male'),
    password: faker.internet.password(),
    birthDay: dayjs().subtract(30, 'day').format('d'),
    birthMonth: faker.date.month(),
    birthYear: dayjs().subtract(20, 'year').format('YYYY'),
    firstName: name.split(' ')[0],
    lastName: name.split(' ')[1],
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    country: 'Canada',
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    phone: faker.phone.number()
  }

  test.beforeEach(async ({ context, page }) => {
    await context.addCookies([
        { 
          name: 'FCCDCF', 
          value: '%5Bnull%2Cnull%2Cnull%2C%5B%22CQVAXwAQVAXwAEsACBENB0FoAP_gAEPgABBoK1IB_C7EbCFCiDp3IKMEMAhHABBAYsAwAAYBAwAADBIQIAQCgkEYBASAFCACCAAAKASBAAAgCAAAAUAAIAAVAABAAAwAIBAIIAAAgAAAAEAIAAAACIAAEQCAAAAEAEAAkAgAAAIASAAAAAAAAACBAAAAAAAAAAAAAAAABAAAAQAAQAAAAAAAiAAAAAAAABAIAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAQR2QD-F2I2EKFEHCuQUYIYBCuACAAxYBgAAwCBgAAGCQgQAgFJIIkCAEAIEAAEAAAQAgCAABQABAAAIAAAAAqAACAABgAQCAQQIABAAAAgIAAAAAAEQAAIgEAAAAIAIABABAAAAQAkAAAAAAAAAECAAAAAAAAAAAAAAAAAAAAAEABgAAAAAABEAAAAAAAACAQIAAA%22%2C%222~61.89.122.184.196.230.314.318.442.445.494.550.576.827.1029.1033.1046.1047.1051.1097.1126.1166.1301.1342.1415.1725.1765.1942.1958.1987.2068.2072.2074.2107.2213.2219.2223.2224.2328.2331.2387.2416.2501.2567.2568.2575.2657.2686.2778.2869.2878.2908.2920.2963.3005.3023.3100.3126.3219.3234.3235.3253.3309.3731.6931.8931.13731.15731~dv.%22%2C%22C97D29EE-6245-4BEC-996B-A801D563AD6A%22%5D%5D', 
          path: '/', 
          domain: '.automationexercise.com' 
        }
      ]);
    loginPage = new LoginPage(page);
    signupPage = new SignupPage(page);
    accountCreatedPage = new AccountCreatedPage(page);
    await page.goto('https://www.automationexercise.com/login');
  });

  test('Should display signup form', async () => {
    await loginPage.assertVisibilityOfSignUpForm();
  });

  test('Should register new account succesfully', async ({ page }) => {
    await loginPage.fillSignupForm(name, email);
    await loginPage.clickSubmitButton();
    await signupPage.fillSignupForm(signupInformation);
    await signupPage.submitForm();
    expect(page.url()).toContain('/account_created'); 
    await accountCreatedPage.assertTitle('Account Created!')
    await accountCreatedPage.assertSuccessMessage('Congratulations! Your new account has been successfully created!');
    await accountCreatedPage.assertPrivilegesMessage('You can now take advantage of member privileges to enhance your online shopping experience with us.');
  })
});
