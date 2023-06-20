class UserPage {

    elementsForAssertion = {
        nicnameCheck: () => cy.get('[href="#/@olaTest"]')
    }
}
module.exports = new UserPage();