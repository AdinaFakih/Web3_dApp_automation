# Cypress Automation <br>
[Cypress](https://github.com/cypress-io/cypress) automation of web3/dApps using [Synpress](https://github.com/Synthetixio/synpress) allows us to test [Metamask](https://metamask.io/) login, authentication, and interaction with smart contracts.<br>

### What is Synpress?
Synpress is a wrapper around Cypress and also extends it with the help of Puppeteer. Resulting in custom commands which allow you to interact with MetaMask.<br>

### How does it work?
It runs a global cypress before routine, that installs a MetaMask plugin, and configures it.<br>

* Passes Metamask welcome page <br>
* Imports wallet <br>
* Changes network (defaults to Kovan) or you can create a custom network and change to it (depending on your setup) <br>
* Switches back to Cypress window and starts testing <br>

## Synpress Setting up: <br>
#### First setup Cypress: <br>
* Create an empty folder with the name of your choice, and open it in VS code.<br>
* Create a package inside that empty folder using ```npm init -y```<br>
* Now install cypress using the command ```npm i cypress```<br>
* After that open cypress using the command ```npx cypress open```<br>
* Cypress will open and ask you to configure it. Just follow the steps and you are done.<br>
* Cypress will then show you the browser to open and you need to select the desired browser.<br>
* You can add a spec file in the cypress browser.<br>
* After that in VS code, you can add a test file in the format "fileName.cy.js" under the e2e folder.<br>
* At the top of each file mention ```/// <reference types="Cypress"/>``` for autocompleting.<br>
* Now you can write the test cases.<br>

#### Now setup Synpress:<br>
* First of all, install Synpress using the command ```npm i @synthetixio/synpress```<br>
* Then install ```npm install env-cmd```<br>

*Note: The env-cmd package installs an executable script named env-cmd which can be called before your scripts to easily load environment variables from an external file.*<br>
* Add the below script to package.json:<br>
```
"scripts": {
    "test": "env-cmd -f .env npx synpress run -cf synpress.json --config supportFile='cypress/support/e2e.js'"
}
```
*Note: I removed this ```--config supportFile='cypress/support/e2e.js``` from the above script because it was not working for me with this part.*<br>

* Now import/paste the following in support/e2e.js<br>
```
import './commands'
import "@synthetixio/synpress/support";
```
#### Add .env file<br>
* Now add the .env file to the root level that includes the seed phrase and the network name you want to connect in the below format.<br>
```
NETWORK_NAME= Kovan
SECRET_WORDS= "test, test, test, test, test, test, test, test, test, test, test, test"
```
#### Add synpress.json file <br>
* Now add the synpress.json file at the root level that includes the configuration of synpress having the following code:<br>
```
{
    "baseUrl": "https://beta.unipilot.io/",
    "userAgent": "synpress",
    "retries": { "runMode": 0, "openMode": 0 },
    "integrationFolder": "cypress/e2e",
    "screenshotsFolder": "screenshots",
    "videosFolder": "videos",
    "video": true,
    "chromeWebSecurity": true,
    "viewportWidth": 1440,
    "viewportHeight": 900,
    "component": {
      "componentFolder": ".",
      "testFiles": "**/*cy.{js,jsx,ts,tsx}"
    },
    "env": {
      "coverage": false
    },
    "defaultCommandTimeout": 30000,
    "pageLoadTimeout": 30000,
    "requestTimeout": 30000,
    "supportFile": "cypress/support/index.js"
  }
 ```
#### Run the test
* As we added scripts to our package.json we can now easily run our test with ```npm run test``` which stands for ```env-cmd -f .env npx synpress run -cf synpress.json```<br>
I use ```yarn cypress run```<br>
```npm run test --headed --no-exit```

## Important things to Remember:
- There is a global before() which runs Metamask setup before all tests:<br>
    - Passes welcome page.<br>
    - Imports wallet.<br>
    - Changes network (defaults to Mainnet) or create a custom network and change to it (depending on your setup).<br>
    - Switches back to Cypress window and starts testing.<br>
- It requires an environmental variable called SECRET_WORDS to be present in the following format => 'word1, word2, etc..' or a private key in an environmental variable called PRIVATE_KEY.<br>
- To change the default network (Mainnet), you can use NETWORK_NAME environmental variable, for example, NETWORK_NAME=rinkeby.<br>
- Available choices are Mainnet, Ropsten, Kovan, Rinkeby, Goerli, and Localhost.<br>
- To create and switch to a custom network at Metamask setup phase, use these:<br>
    - NETWORK_NAME => ex: Mumbai
    - RPC_URL => ex: https://matic-mumbai.chainstacklabs.com
    - CHAIN_ID => ex: 80001
    - SYMBOL (optional) => ex: MATIC
    - BLOCK_EXPLORER (optional) => ex: https://mumbai.polygonscan.com
    - IS_TESTNET (optional) => ex: true
- The Metamask version is hard coded. However, you can still override Metamask with METAMASK_VERSION environmental variable, for example, METAMASK_VERSION=9.3.0 or METAMASK_VERSION=latest.<br>
- By default Synpress setups the Metamask password as "Tester@1234"

On synpress.json => "testFiles": "**/*cy.{js,jsx,ts,tsx}" To change what files should be executed in tests change it to following code and move it outside component key "testFiles": [ "testfile1", "testfile2" ]