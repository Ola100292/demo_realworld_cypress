
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


    UserPage.elementsForAssertion.loginCheck().should('be.visible');
    UserPage.elementsForAssertion.yourFeedFunction().should('contain', 'Your Feed');
    UserPage.yourFeedFunctionClick();
    UserPage.elementsForAssertion.activeFeed().should('exist')



  })


  it.skip('Should have few elements visible on User Page2', () => {


    UserPage.elementsForAssertion.loginCheck().should('be.visible')

  })

})