
/// <reference types="cypress"/>


describe('Pom Implementation - Login Page', () => {
    beforeEach(function () {
        cy.login();
        cy.visit(Cypress.config('baseUrl'))
})

        it('Should have few elements visible on User Page', () => {
          
        })

    

})