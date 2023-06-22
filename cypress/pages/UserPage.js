class UserPage {

    elementsForAssertion = {
        loginCheck: () => cy.get('[href="#/@olaTest"]'),
        yourFeedFunction: () => cy.get('[class="nav-link"]').parents('[class="nav-item"]'),
        activeFeed: () => cy.get('[class="nav-link active"]').eq(1)


    }

    yourFeedFunctionClick() {
        this.elementsForAssertion.yourFeedFunction().eq(0).click()
    }
}
module.exports = new UserPage();