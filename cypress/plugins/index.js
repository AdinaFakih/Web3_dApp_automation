/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
//eslint-disable-next-line no-unused-vars
// module.exports = (on, config) => {
//   require('cypress-metamask/plugins')(on)
//   //require('@carlos0202/cypress-metamask/plugins')(on)
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
//   // on('before:browser:launch', (browser, launchOptions) => {
//   //   if (browser.name === 'chrome'&& browser.name === 'firefox'){
//   //   // supply the absolute path to an unpacked extension's folder
//   //   // NOTE: extensions cannot be loaded in headless Chrome
//   //   console.log(launchOptions.args) // print all current args
//   //   launchOptions.extensions.push('C:/User/XORD/Cypress/Unipilot V2 Automation/MetaMask')
//   //   return launchOptions
//   //   }
//   // })
// }
module.exports = (on, config) => {
  on('before:browser:launch', async (browser = {}, arguments_) => {
    if (browser.name === 'chrome') {
      arguments_.args.push('--disable-background-timer-throttling');
      arguments_.args.push('--disable-backgrounding-occluded-windows');
      arguments_.args.push('--disable-renderer-backgrounding');
    }
  })  
}