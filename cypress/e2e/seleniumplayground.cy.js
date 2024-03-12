/// <reference types="cypress" />


describe('Login Page', () => {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.lambdatest.com/selenium-playground/');
    })
    it.skip('Date Picker', () => {
        cy.get('.pt-10 > a').eq(3).should('be.visible').click();
        cy.get('input[id="birthday"]').type('2024-02-02');
        cy.get('input[placeholder="Start date"]').type('02/02/2024');
        cy.get('input[placeholder="End date"').type('02/02/2024');
    })

    it.skip('Modals', () => {
        cy.get('.pt-10 > a').eq(5).should('be.visible').click();
        cy.get('button[data-target="#myModal"]').should('be.visible').click();
        cy.wait(3000)
        cy.get('.modal-body > p').should('contain', 'This is the place where the content for the modal dialog displays');
        cy.get('.modal-footer .btn-dark').eq(0).click();
    })
    it('Download Progress Demo', () => {
        cy.get('.pt-10 > a').eq(6).should('be.visible').click();
        cy.get('.progress .counter').should('contain', '0%');
        cy.get('button[id="dwnBtn"]').should('be.visible').click();
        cy.wait(5000)
        cy.get('.success ').should('contain', 'Download completed!')
        
        cy.injectAxe(); 
        cy.checkA11y();
    })

})