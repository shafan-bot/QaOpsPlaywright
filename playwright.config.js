const {defineConfig, devices, chromium} = require('@playwright/test');
const { off } = require('process');

module.exports = defineConfig ({

  testDir: './tests',
  testMatch: ['**/*.spec.ts', '**/*.spec.js'],

  timeout: 30000,
  expect: {
    timeout: 5000,
  },

  reporter: 'html',

  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        screenshot: "only-on-failure",
        trace: "on-first-retry",
      }
    },

    {
      name: 'safari',
      use: {
        ...devices['Desktop Safari'],
        headless: false,
        screenshot: "only-on-failure",
      }
    },

  ],

});



