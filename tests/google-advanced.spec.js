const { test, expect } = require('@playwright/test');

const { GooglePage } =
  require('../pages/google.page');

test('Google Advanced Search', async ({ page }) => {

  const google = new GooglePage(page);

  await google.goto();

  await google.search('Playwright Automation');

  await expect(page)
    .toHaveTitle(/Playwright/);

});