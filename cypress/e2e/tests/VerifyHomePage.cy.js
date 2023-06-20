
import HomePage from "../../pages/HomePage";
/// <reference types="cypress"/>


describe('Pom Implementation - Home Page test for demo.realworld', () => {
    beforeEach(function () {
        
        cy.visit(Cypress.config('baseUrl'))
    })


    it('Should have few elements visible on home Page', () => {
        HomePage.articleElements.allArticle().should('be.visible')
        HomePage.articleElements.btnLike().should('exist')
        HomePage.articleElements.bannerLoc().should('contain', 'A place to share your knowledge.')
        HomePage.gitHubBanner.forkOnGitHub().should('contain', 'Fork on GitHub')
        .and('have.css', 'background-image', 'linear-gradient(rgb(72, 85, 99), rgb(41, 50, 60))' )
        HomePage.gitHubBanner.gitHubIcon().should('be.visible')
        .and('have.prop','draggable', false )
        HomePage.articleElements.popularTagsLoc().should('have.descendants', '[ng-bind="tagName"]')
        HomePage.articleElements.homeBtn().should('be.visible').and('contain', 'Home')
        HomePage.articleElements.signInBtn().should('be.visible').and('include.text', 'Sign in')
        HomePage.articleElements.signUpBtn().should('be.visible').and('not.be.empty')

        HomePage.clickOnArticle()

    })


})