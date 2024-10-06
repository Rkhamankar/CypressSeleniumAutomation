const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    testDataFile: 'FlipKart/data',
    "baseUrl": "https://www.flipkart.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('./cypress/utility/selenium')(on);
    },
  },
});
