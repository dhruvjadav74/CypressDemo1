/// <reference types="cypress" />

import homePage from "../pages/homePage"

describe('Login Page', () => {
    let UserData;
    before(function () {
        cy.fixture('example.json').then(data => {
            UserData = data.UserData;
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit("https://ecommerce-playground.lambdatest.io/")
    })

    it.skip('Register with new email & pass', () => {
        homePage.RegisterNewEmailPass(UserData.firstname,UserData.lastname,UserData.email,UserData.telephone,UserData.password,UserData.confirmpass);
        cy.get('.my-3').should('contain',' Your Account Has Been Created!');
        cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/success');
    })
    
    it('Register with existing email & pass', () => {
        cy.get('a[data-toggle="dropdown"]').eq(2).trigger('mouseover').should('be.visible');
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').eq(0).click();
        cy.get('input[name="firstname"]').should('be.visible').type(UserData.firstname);
        cy.get('input[name="lastname"]').should('be.visible').type(UserData.lastname);
        cy.get('input[name="email"]').should('be.visible').type(UserData.email);
        cy.get('input[name="telephone"]').should('be.visible').type(UserData.telephone);
        cy.get('input[name="password"]').should('be.visible').type(UserData.password);
        cy.get('input[name="confirm"]').should('be.visible').type(UserData.confirmpass);
        cy.get('label[for="input-agree"]').should('be.visible').click();
        cy.get('input[type="submit"]')().should('be.visible').click;
        cy.get('.alert-dismissible').should('be.visible');
    })
    
    it('Login with valid credentials & Logout', () => {
        cy.get('a[data-toggle="dropdown"]').eq(2).trigger('mouseover').should('be.visible');
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').eq(0).click();
        cy.get('input[name="email"]').should('be.visible').type(UserData.email);
        cy.get('input[name="password"]').should('be.visible').type(UserData.password);
        cy.get('input[type="submit"]').click().should('be.visible');
        cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
        cy.get('a[data-toggle="dropdown"]').eq(2).trigger('mouseover').should('be.visible');
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"]').eq(0).click();
        cy.get('.my-3').should('contain',' Account Logout');
        cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');
    })
    
    it('Login with invalid credentials', () => {
        cy.get('a[data-toggle="dropdown"]').eq(2).trigger('mouseover').should('be.visible');
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').eq(0).click();
        cy.get('input[name="email"]').should('be.visible').type(UserData.email);
        cy.get('input[name="password"]').should('be.visible').type(UserData.wrongpassword);
        cy.get('input[type="submit"]').should('be.visible').click().should('be.visible');
        cy.get('.alert-dismissible').should('be.visible');
    })

    it('Forgot Password with valid email', () => {
        cy.get('a[data-toggle="dropdown"]').eq(2).trigger('mouseover').should('be.visible');
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').eq(0).click();
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').first().click();
        cy.get('input[name="email"]').should('be.visible').type(UserData.email);
        cy.get('.float-right .btn-primary').should('be.visible').click();
        cy.get('div[class="alert alert-success alert-dismissible"]').should('contain',' An email with a confirmation link has been sent your email address.');
    })

    it('Forgot Password with invalid email', () => {
        cy.get('a[data-toggle="dropdown"]').eq(2).trigger('mouseover').should('be.visible');
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').eq(0).click();
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').first().click();
        cy.get('input[name="email"]').should('be.visible').type(UserData.wrongemail);
        cy.get('.float-right .btn-primary').should('be.visible').click();
        cy.get('div[class="alert alert-danger alert-dismissible"]').should('contain',' Warning: The E-Mail Address was not found in our records, please try again!');
    })
})