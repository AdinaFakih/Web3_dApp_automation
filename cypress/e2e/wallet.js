describe('Verify Unipilot Home Page', () => {

    it("let load", () => {
        cy.log("heeeehehe");
    });

    it("landing", () => {
        cy.visit('/', {
            auth: {
              username: 'admin',
              password: 'A>a=bV]6rtQ\\T5*J',
            },
        })
    });
    
    it('Verify Unipilot logo is visible', () => {
        cy.get('[alt="unipilot-logo"]').then(uniLogo => {
            expect(uniLogo).to.be.visible;
        });
    });

    it('Verify title is present', () => {
        cy.title().should('eq', 'Unipilot | Earn Higher Returns');
    });

    it('Should Connects with Metamask', () => {
        cy.contains('Connect Wallet').click();
        cy.contains('Metamask').click();
        cy.switchToMetamaskWindow();
        cy.acceptMetamaskAccess().then(connected => {
            expect(connected).to.be.true;
        });
        cy.switchToCypressWindow();
    });
});