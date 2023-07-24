class NewArticlePage {

    editorElements = {
        articleTitle: () => cy.get('[placeholder="Article Title"]'),
        shortInfo: () => cy.get('[ng-model="$ctrl.article.description"]'),
        articleText: () => cy.get('[placeholder="Write your article (in markdown)"]'),
        tags: () =>cy.get('[placeholder="Enter tags"]'),
        editorBtn: () => cy.get('[href="#/editor/"]'),
        publishArticleBtn: () => cy.get('[ng-click="$ctrl.submit()"]')
    }

    errorList = {
        noTitleError: () => cy.get('[class="ng-binding ng-scope"]')

    }
    editorBtnClick()  {
        this.editorElements.editorBtn().click();
    }
    shortInfoText() {
        this.editorElements.shortInfo().type('XYZ')
    }
    articleTextType() {
        this.editorElements.articleText().type("article text XYZ")
    }
    publishArticleBtnClick() {
        this.editorElements.publishArticleBtn().click();
    }
    

}


module.exports = new NewArticlePage();