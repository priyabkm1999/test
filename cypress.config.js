const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://smart-ky-dash.zamstars.zamstars.ey.io/',
    
  
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});