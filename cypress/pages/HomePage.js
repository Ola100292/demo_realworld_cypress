class HomePage {

    articleElements = {
        allArticle: () => cy.get('h1[ng-bind="$ctrl.article.title"]'),
        btnLike: () => cy.get('[class="pull-xs-right ng-scope ng-isolate-scope"]'),
        bannerLoc: () => cy.get('[class="banner"]'),
        popularTagsLoc: () => cy.get('.tag-list'),
        homeBtn: () => cy.get('[href="#/"]'),
        signInBtn: () => cy.get('[href="#/login"]'),
        signUpBtn: () => cy.get('[href="#/register"]')
    }

    gitHubBanner = {
        forkOnGitHub: () => cy.get('a[href="https://github.com/gothinkster/angularjs-realworld-example-app"]'),
        gitHubIcon: () => cy.get('i[class= "ion-social-github"]')
    }


    clickOnArticle() {
        this.articleElements.allArticle().eq(0).click();
    }
    clickOnSignInBtn() {
        this.articleElements.signInBtn().click();
    }

}

module.exports = new HomePage();