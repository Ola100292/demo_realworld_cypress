

describe('Pom Implementation - Create new article', () => {
    beforeEach(function () {
      cy.visit('')
      cy.log('create token for valid user')
      cy.loginWithApi()
    })
it('Should check new article section', () => {

    cy.visit('/editor')

})

})