import NewArticlePage from "../../pages/NewArticlePage"

describe('Pom Implementation - Create new article', () => {
    beforeEach(function () {
      Cypress.session.clearAllSavedSessions()

      cy.visit('')
      cy.log('create token for valid user')
      cy.loginWithApi()
    })
it('Should check new article section', () => {

    NewArticlePage.editorBtnClick()
    NewArticlePage.editorElements.articleTitle().should('be.visible')
    NewArticlePage.editorElements.shortInfo().should('be.visible')
    NewArticlePage.editorElements.articleText().should('be.visible')
    NewArticlePage.editorElements.tags().should('be.visible')

})

})