class HomePage {

    articleElements = {
        allArticle: () => cy.get('.ng-scope ng-isolate-scope')
    }


clickOnArticle()
{
    this.articleElements.allArticle().eq(0).click();
}
}

module.exports = new HomePage();