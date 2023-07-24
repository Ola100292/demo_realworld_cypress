import NewArticlePage from "../../pages/NewArticlePage"

describe('Pom Implementation - Create new article', () => {
  beforeEach(function () {
    cy.visit('')
    cy.log('create token for valid user')
    cy.loginWithApi()
  })
  afterEach(function () {
    Cypress.session.clearAllSavedSessions()

  })
  it('Should check new article section', () => {

    NewArticlePage.editorBtnClick()
    NewArticlePage.editorElements.articleTitle().should('be.visible').and('not.be.null')
    NewArticlePage.editorElements.shortInfo().should('be.visible').and('match', '[type="text"]')
    NewArticlePage.editorElements.articleText().should('be.visible').and('have.prop', 'readOnly', false)
      .and('have.prop', 'required', false)
    NewArticlePage.editorElements.tags().should('be.visible')

  })

  it('Should check validation for creating article. Untitle step', () => {
    NewArticlePage.editorBtnClick();
    NewArticlePage.shortInfoText();
    NewArticlePage.articleTextType();
    NewArticlePage.publishArticleBtnClick();
    cy.intercept({
      method: 'POST',
      url: 'https://api.realworld.io/api/articles'
  }).as('addArticleRequestFail')
    NewArticlePage.errorList.noTitleError().should('contain', "title can't be blank")
    cy.wait('@addArticleRequestFail').its('response.statusCode').should('to.be', 422)

    
  })

})