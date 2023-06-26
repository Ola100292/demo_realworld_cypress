
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
    UserPage.elementsForAssertion.newArticleBtn().should('match', '[ui-sref-active="active"]');

  })


  it('Should check settings', () => {

    UserPage.settingsElements.profilePicture().should('be.visible')
      .and('have.prop', 'readOnly', false)
      .and('have.prop', 'required', false);
    UserPage.settingsElements.usernameText().should('match', '[ng-model="$ctrl.formData.username"]');
    UserPage.settingsElements.aboutUserText().should('match', '[ng-model="$ctrl.formData.bio"]');
    UserPage.settingsElements.emailText().should('match', '[ng-model="$ctrl.formData.email"]');
    UserPage.settingsElements.newPasswordText().should('match', '[ng-model="$ctrl.formData.password"]');
    UserPage.settingsElements.updateSettingsBtn().should('contain', 'Update Settings')
    .and('have.css', 'background-color', 'rgb(92, 184, 92)');
    UserPage.settingsElements.logOutBtn().should('contain', 'Or click here to logout.')

  })

})