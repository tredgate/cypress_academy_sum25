const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      // ? Alternativa k cypress.env.json
      testVar: "Toto je proměnná",
      pmtool_url: "https://tredgate.com/pmtool",
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
  },
});
