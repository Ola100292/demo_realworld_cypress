class HomePage {

    articleElements = {
        allArticle: () => cy.get('h1[ng-bind="$ctrl.article.title"]'),
        btnLike: () => cy.get('[class="pull-xs-right ng-scope ng-isolate-scope"]')
    }


clickOnArticle()
{
    this.articleElements.allArticle().eq(0).click();
}
}

module.exports = new HomePage();