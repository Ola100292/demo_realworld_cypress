
import UserPage, { openSettingsPage } from "../../pages/UserPage";
/// <reference types="cypress"/>


describe('Pom Implementation - Login Page', () => {
  beforeEach(function () {
 cy.visit('')
 Cypress.session.clearAllSavedSessions()
    cy.log('create user')
    cy.loginWithSessionStorage();

   
    
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


  it('Should click on settings and check elements', () => {

    
    UserPage.openSettingsPage();   
     cy.wait(10000)
     cy.getAllLocalStorage(true)
    
    UserPage.settingsElements.profilePicture().should('be.visible') 
    .and('have.prop', 'readOnly', false)
    .and('have.prop', 'required', false)

  })

})