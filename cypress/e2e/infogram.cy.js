/// <reference types="cypress" />

describe('infogram ',()=>{
    it.skip('login',()=>{
        cy.viewport(1920, 1080);
        cy.visit('https://infogram.com/login#/library')
        cy.get('#login_name').should('be.visible').type('nina@datadesign.io')
        cy.get('#login_pass').should('be.visible').type('Psalm.23')
        cy.get('.submit').should('be.visible').click();
    })
})