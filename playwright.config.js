const { defineConfig, devices } =
  require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 1,

  reporter: 'html',

  use: {

    headless: true,

    screenshot: 'on',

    video: 'on',

    trace: 'on-first-retry'

  },

  projects: [

    {
      name: 'Chrome',

      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'Mobile Chrome',

      use: {
        ...devices['Pixel 7']
      }
    }

  ]

});