describe('Deposit Test', () => {

    it('Navigates and checks url', () => {
        cy.visit('/', {
            auth: {
              username: 'admin',
              password: 'A>a=bV]6rtQ\\T5*J',
            }
        })
        cy.url().should('contain', 'stats');
    });

    it('print log', () => {
        cy.log("lets go")
    });
})