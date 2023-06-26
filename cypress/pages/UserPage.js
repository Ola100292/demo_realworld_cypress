class UserPage {

    elementsForAssertion = {
        loginCheck: () => cy.get('[href="#/@olaTest"]'),
        activeFeed: () => cy.get('[class="nav-link active"]').eq(1),
        yourFeedFunction: () => cy.contains('Your Feed')
    }
    settingsElements =
        {
            settingsBtn: () => cy.get('[href="#/settings"]'),
            profilePicture: () => cy.get('[placeholder="URL of profile picture"]'),
            usernameText: () => cy.get('[placeholder="Username"]'),
            aboutUserText: () => cy.get('[placeholder="Short bio about you"]'),
            emailText: () => cy.get('[placeholder="Email"]'),
            newPasswordText: () => cy.get('[placeholder="New Password"]'),
            updateSettingsBtn: () => cy.get('[class="btn-primary pull-xs-right"]')

        }

    yourFeedFunctionClick() {
        this.elementsForAssertion.yourFeedFunction().eq(0).click()
    }

    openSettingsPage() {
        this.settingsElements.settingsBtn().click();
    }

}
module.exports = new UserPage();