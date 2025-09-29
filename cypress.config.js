const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    showSkipped: true,
    saveAllAttempts: false,
    inlineAssets: true,
    json: true,
  },
  screenshotsFolder: "images",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    experimentalOriginDependencies: true,
    env: {
      // ? Alternativa k cypress.env.json
      testVar: "Toto je proměnná",
      pmtool_url: "https://tredgate.com/pmtool",
      tegb_url: "http://localhost:3001/",
      tegb_api_url: "http://localhost:3000/",
      eshop_url: "https://tredgate.com/eshop",
      webtrain_url: "https://tredgate.com/webtrain",
      automation_test_store_url: "https://automationteststore.com/",
      tegb_cert_url: "https://tegb-frontend-88542200c6db.herokuapp.com/",
      TEST_LANGUAGE: process.env.TEST_LANGUAGE || "en",
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
  },
});
