// hooks/uiHooks.js
const base = require('@playwright/test').test;

base.beforeAll(async () => {
  console.log('Runs once before all tests in each spec file');
});

base.beforeEach(async ({ page }) => {
  console.log('Runs once before each tests in each spec file');
});

base.afterEach(async ({ page }, testInfo) => {
    console.log('Runs once after each tests in each spec file');
});

module.exports = { test: base };