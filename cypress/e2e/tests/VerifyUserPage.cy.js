
import UserPage from "../../pages/UserPage";
/// <reference types="cypress"/>


describe('Pom Implementation - Login Page', () => {
  beforeEach(function () {

    cy.loginViaUi('testxyz1@gmail.com', '123456')
    cy.visit('')
  })

  afterEach(function () {
    Cypress.session.clearAllSavedSessions()
  })

  it('Should have few elements visible on User Page', () => {


    UserPage.elementsForAssertion.nicnameCheck().should('be.visible')

  })


  it('Should have few elements visible on User Page2', () => {
    cy.visit('')

    UserPage.elementsForAssertion.nicnameCheck().should('be.visible')

  })

})