import UserPage from "../../pages/UserPage"

describe('Pom Implementation - Logged user with invalid acc', () => {
    beforeEach(function () {
        cy.visit('/login')
    })

    it('Logging using wrong username', () => {
        cy.interceptTest();
        cy.loginViaUi('xyz@o2.pl', '123456');
        cy.wait('@loggingRequest').its('response.statusCode').should('eq', 403)
        UserPage.invalidLogging.errorText().should('be.visible')
    })

    it('Logging using wrong password', () => {
        cy.interceptTest();
        cy.loginViaUi('testxyz1@gmail.com', '123456y');
        cy.wait('@loggingRequest').its('response.statusCode').should('eq', 403)
        UserPage.invalidLogging.errorText().should('be.visible')
    })
    it('Logging without password', () => {
        cy.interceptTest();
        cy.loginViaUi('testxyz1@gmail.com', '{backspace}');
        cy.wait('@loggingRequest').its('response.statusCode').should('eq', 422)
        UserPage.invalidLogging.errorText().should('be.visible').and('contain', "password can't be blank")
    })
    it('Logging without username', () => {
        cy.interceptTest();
        cy.loginViaUi('{backspace}', '123456');
        cy.wait('@loggingRequest').its('response.statusCode').should('eq', 422)
        UserPage.invalidLogging.errorText().should('be.visible').and('contain', "email can't be blank")
    })
})