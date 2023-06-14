import HomePage from "../../pages/HomePage";
/// <reference types="cypress"/>


describe('Pom Implementation - Home Page test for demo.realworld', () => {
    beforeEach(function () {

        cy.visit(Cypress.config('baseUrl'))
         })


    it('Schould choose first article', () => {
        HomePage.clickOnArticle();

    })


})