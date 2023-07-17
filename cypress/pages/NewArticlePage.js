class NewArticlePage {

    editorElements = {
        articleTitle: () => cy.get('[placeholder="Article Title"]'),
        shortInfo: () => cy.get('placeholder').contains("What's this article about?"),
        articleText: () => cy.get('[placeholder="Write your article (in markdown)"]'),
        tags: () =>cy.get('[placeholder="Enter tags"]')

    }

}


module.exports = new NewArticlePage();