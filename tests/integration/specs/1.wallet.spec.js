describe('Verify Unipilot Home Page', () => {
    
    it('Verify Unipilot logo is visible', () => {
        cy.visit('/', {
            auth: {
              username: 'admin',
              password: 'A>a=bV]6rtQ\\T5*J',
            }
        })
        cy.wait(8000);
        cy.log("i have reached till here");
        cy.get('[alt="unipilot-logo"]').should('be.visible');
    })

    it('Verify title is present', () => {
        cy.title().should('eq', 'Unipilot | Earn Higher Returns');
    })

    it('Connects with Metamask', () => {
        cy.contains('Connect Wallet').click();
        cy.contains('Metamask').click();
        cy.switchToMetamaskWindow();
        cy.acceptMetamaskAccess().should("be.true");
        cy.switchToCypressWindow();
     })
})