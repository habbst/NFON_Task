import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1536,
  viewportHeight: 960,
  defaultCommandTimeout: 30000,
  projectId: 'kmojm7',
  pageLoadTimeout: 60000,
  e2e: {
    baseUrl: "https://start.cloudya.com/auth/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalSessionAndOrigin: true
  },
});
