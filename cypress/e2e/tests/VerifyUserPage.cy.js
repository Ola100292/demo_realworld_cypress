import UserPage, { openSettingsPage } from "../../pages/UserPage";
/// <reference types="cypress"/>


describe('Pom Implementation - Logged user with valid acc', () => {
  beforeEach(function () {
    cy.visit('')
    cy.log('create token for valid user')
    cy.loginWithApi()
  })


  it('Should have few elements visible on User Page', () => {

    UserPage.elementsForAssertion.loginCheck().should('be.visible');
    cy.visit('')
    UserPage.elementsForAssertion.yourFeedFunction().should('be.visible');
   

  })


  it('Should check settings', () => {

    UserPage.settingsElements.profilePicture().should('be.visible')
      .and('have.prop', 'readOnly', false)
      .and('have.prop', 'required', false)

  })

})