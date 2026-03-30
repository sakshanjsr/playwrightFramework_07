// fixtures/test.fixture.js
const base = require('@playwright/test');
const LoginPage = require('../pages/loginPage.spec');    //>>> Location of Login Page Object

exports.test = base.test.extend({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage); // inject into test
  }

});

exports.expect = base.expect;