/// <reference types="cypress" />

describe('Create Vault Test cases', () => {

    Cypress.config('pageLoadTimeout', 100000)

    before(() => {
        cy.setupMetamask(Cypress.env("CY_METAMASK_LIB_SECRET_WORDS"),
                         Cypress.env("CY_METAMASK_LIB_NETWORK_NAME"),
                         Cypress.env("PASSWORD")
        );
        cy.changeMetamaskNetwork('Rinkeby Test Network')
    });    

    beforeEach(() => {
        cy.visit('https://dev2.unipilot.io/add', {
            auth: {
              username: 'admin',
              password: 'A>a=bV]6rtQ\\T5*J',
            },
          })
    })

    it('Test case 1', () => {
        cy.reload()
        
    })

})