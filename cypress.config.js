const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io/",
    projectId: "itiei1",
    setupNodeEvents(on, config) {
    },
  },
});

