class homePage {
    elements = {
        MyAccountBtn: () => cy.get('a[data-toggle="dropdown"]').eq(2),
        RegisterBtn: () => cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').eq(0),
        LoginBtn: () => cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').eq(0),
        LogoutBtn: () => cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"]').eq(0),
        ForgotPasswordBtn: () => cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').first(),
        InputField: (fieldName) => cy.get(`input[name="${fieldName}"]`),
        AgreeBtn: () => cy.get('label[for="input-agree"]'),
        SubmitBtn: () => cy.get('input[type="submit"]'),
        LogoutSuccessText: () => cy.get('.my-3'),
        ContinueBtn: () => cy.get('.float-right .btn-primary')
    }
    NavigateToRegisterPage() {
        this.elements.MyAccountBtn().trigger('mouseover').should('be.visible');
        this.elements.RegisterBtn().click();
    }
    NavigateToLoginPage() {
        this.elements.MyAccountBtn().trigger('mouseover').should('be.visible');
        this.elements.LoginBtn().click();
    }
    RegisterNewEmailPass(firstname, lastname, email, telephone, password, confirmpass) {
        this.elements.InputField('firstname').should('be.visible').type(firstname);
        this.elements.InputField('lastname').should('be.visible').type(lastname);
        this.elements.InputField('email').should('be.visible').type(email);
        this.elements.InputField('telephone').should('be.visible').type(telephone);
        this.elements.InputField('password').should('be.visible').type(password);
        this.elements.InputField('confirm').should('be.visible').type(confirmpass);
        this.elements.AgreeBtn().should('be.visible').click();
        this.elements.SubmitBtn().should('be.visible').click();
    }
    RegisterExistingEmailPass(firstname, lastname, email, telephone, password, confirmpass) {
        this.elements.InputField('firstname').should('be.visible').type(firstname);
        this.elements.InputField('lastname').should('be.visible').type(lastname);
        this.elements.InputField('email').should('be.visible').type(email);
        this.elements.InputField('telephone').should('be.visible').type(telephone);
        this.elements.InputField('password').should('be.visible').type(password);
        this.elements.InputField('confirm').should('be.visible').type(confirmpass);
        this.elements.AgreeBtn().should('be.visible').click();
        this.elements.SubmitBtn().should('be.visible').click();
    }

    LoginWithValidCred(email, password) {
        this.elements.InputField('email').should('be.visible').type(email);
        this.elements.InputField('password').should('be.visible').type(password);
        this.elements.SubmitBtn().should('be.visible').click();
    }
    Logout() {
        this.elements.MyAccountBtn().trigger('mouseover').should('be.visible');
        this.elements.LogoutBtn().click();
        this.elements.LogoutSuccessText().should('contain', ' Account Logout')
    }
    ForgotPassword(email) {
        this.elements.ForgotPasswordBtn().click();
        this.elements.InputField('email').should('be.visible').type(email);
        this.elements.ContinueBtn().should('be.visible').click();
    }
}
module.exports = new homePage();