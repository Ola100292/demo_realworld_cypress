const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1xpnw1',
  e2e: {
    baseUrl: 'https://demo.realworld.io/#/',
    hideXHRInCommandLog: false,
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
