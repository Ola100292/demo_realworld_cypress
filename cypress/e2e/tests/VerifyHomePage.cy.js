import HomePage from "../../pages/HomePage";
/// <reference types="cypress"/>


describe('Pom Implementation - Home Page test for demo.realworld', () => {
    beforeEach(function () {

        cy.visit(Cypress.config('baseUrl'))
         })


    it('Should have few elements visible on home Page', () => {
        HomePage.articleElements.allArticle().should("be.visible")
        HomePage.articleElements.btnLike().should("exist")
        HomePage.clickOnArticle()

    })


})