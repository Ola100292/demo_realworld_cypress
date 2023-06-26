// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Login by API 
Cypress.Commands.add('loginWithApi', () => {
    cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users/login',
        body: {
            "user": {
                "email": 'testxyz1@gmail.com',
                "password": '123456',
            }
        }              
    })
        .its("body.user.token")
        .should("exist")
        .then((resp) => {            
            console.log(resp)
            localStorage.setItem('jwtToken', resp)
        });

        cy.visit("/settings");
})

Cypress.Commands.add('interceptTest', () => {
    cy.intercept({
        method: 'POST',
        url: 'https://api.realworld.io/api/users/login'                
    }).as('loggingRequest')
})


//Logging via UI using cy.session and validate user page
Cypress.Commands.add('loginViaUi', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/login')
        cy.get('[placeholder="Email"]').clear().type(username);
        cy.get('[placeholder="Password"]').clear().type(password);
        cy.get('[type="submit"]').click();

    }, {
        validate() {
            cy.visit('/settings')
            cy.url().should("contain", Cypress.config().baseUrl);
        }
    })
})