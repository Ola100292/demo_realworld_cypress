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
    NewArticlePage.editorElements.articleTitle().should('be.visible').and('not.be.null')
    NewArticlePage.editorElements.shortInfo().should('be.visible').and('match', '[type="text"]')
    NewArticlePage.editorElements.articleText().should('be.visible').and('have.prop', 'readOnly', false)
    .and('have.prop', 'required', false)
    NewArticlePage.editorElements.tags().should('be.visible')

})

})