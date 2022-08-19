import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://beta.unipilot.io/',
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      // Environment variables 
    },
    chromeWebSecurity: true,
  }
})