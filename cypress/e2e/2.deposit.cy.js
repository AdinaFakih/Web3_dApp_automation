describe('Deposit Test', () => {
  
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

  it('Navigates and checks url', () => {
      cy.url().should('contain', 'stats');
  });

  it('Should change network to rinkeby', () => {
      cy.changeMetamaskNetwork('rinkeby').then(networkChanged => {
        expect(networkChanged).to.be.true;
      });
  });
});