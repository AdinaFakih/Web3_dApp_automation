describe('Verify Unipilot Home Page', () => {
//to open unipilot first page 

    // before(() => {
    //     cy.setupMetamask();
    //     //cy.changeMetamaskNetwork('localhost')
    //     cy.wait(900);
    //     cy.log("I'm MM");
    //     cy.contains('Get Started').click();
    // });

    it('Verify Unipilot logo is visible', () => {
        cy.visit('https://app.unipilot.io/');
        cy.get('[alt="unipilot-logo"]').should('be.visible');   //to verify that I'm on unipilot page 
    })

    it('Verify title is present', () => {
        cy.title().should('eq', 'Unipilot | Earn Higher Returns');
    })

    it('Verify user caan connect webb3 wallet', () => {
       // cy.get('ul li:first').should('have.class', 'active');
       // cy.get('#product-menu-toggle').first().should('be.exist');
       // cy.get('#developers-menu-toggle').first().should('be.exist');
       // cy.get('#developers-menu-toggle').first().should('be.exist');
       cy.contains('Connect Wallet').click();
       cy.contains('Metamask').click();
    })

    // it('Verify menu Links are  present', () => {
    //     cy.get("a[title='Pricing']").first().should('be.exist');
    //     cy.get("a[title='Sign In']").first().should('be.exist');
    //     cy.get("a[title='Live for Teams']").first().should('be.exist');
    // })
})