/// <reference types="cypress" />

import homePage from "../pages/homePage"
import main from "../pages/main"

describe('Login Page', () => {
    let UserData;
    before(async function () {
        UserData = await main.LoadUserData();
    });

    beforeEach(function () {
        cy.visit('/');
        main.SetViewPort(1920, 1080);
    })

    it('Register with new email & pass', () => {
        homePage.NavigateToRegisterPage();
        homePage.RegisterNewEmailPass(UserData.firstname,UserData.lastname,UserData.email,UserData.telephone,UserData.password,UserData.confirmpass);
        cy.get('.my-3').should('contain',' Your Account Has Been Created!');
        cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/success');
    })
    
    it('Register with existing email & pass', () => {
        homePage.NavigateToRegisterPage();
        homePage.RegisterExistingEmailPass(UserData.firstname,UserData.lastname,UserData.email,UserData.telephone,UserData.password,UserData.confirmpass);
        cy.get('.alert-dismissible').should('be.visible');
    })
    
    it('Login with valid credentials & Logout', () => {
        homePage.NavigateToLoginPage();
        homePage.LoginWithValidCred(UserData.email,UserData.password);
        cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
        homePage.Logout();
        cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');
    })
    
    it('Login with invalid credentials', () => {
        homePage.NavigateToLoginPage();
        homePage.LoginWithValidCred(UserData.email,UserData.wrongpassword);
        cy.get('.alert-dismissible').should('be.visible');
    })

    it('Forgot Password with valid email', () => {
        homePage.NavigateToLoginPage();
        homePage.ForgotPassword(UserData.email); 
        cy.get('div[class="alert alert-success alert-dismissible"]').should('contain',' An email with a confirmation link has been sent your email address.');
    })

    it('Forgot Password with invalid email', () => {
        homePage.NavigateToLoginPage();
        homePage.ForgotPassword(UserData.wrongemail); 
        cy.get('div[class="alert alert-danger alert-dismissible"]').should('contain',' Warning: The E-Mail Address was not found in our records, please try again!');
    })
})