class GooglePage {

  constructor(page) {
    this.page = page;

    this.searchInput =
      page.locator('textarea[name="q"]');
  }

  async goto() {
    await this.page.goto('https://google.com');
  }

  async search(text) {

    await this.searchInput.fill(text);

    await this.searchInput.press('Enter');
  }

}

module.exports = { GooglePage };