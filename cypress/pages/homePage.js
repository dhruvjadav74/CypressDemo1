class homePage {
    elements = {
        MyAccountBtn: () => cy.get('a[data-toggle="dropdown"]').eq(2),
        RegisterBtn: () => cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').eq(0),
        InputField: (fieldName) => cy.get(`input[name="${fieldName}"]`),
        AgreeBtn:()=>  cy.get('label[for="input-agree"]'),
        SubmitBtn:()=>  cy.get('input[type="submit"]')
    }
    RegisterNewEmailPass(firstname, lastname, email, telephone, password, confirmpass) {
        this.elements.MyAccountBtn().trigger('mouseover').should('be.visible');
        this.elements.RegisterBtn().click();
        this.elements.InputField('firstname').should('be.visible').type(firstname);
        this.elements.InputField('lastname').should('be.visible').type(lastname);
        this.elements.InputField('email').should('be.visible').type(email);
        this.elements.InputField('telephone').should('be.visible').type(telephone);
        this.elements.InputField('password').should('be.visible').type(password);
        this.elements.InputField('confirm').should('be.visible').type(confirmpass);
        this.elements.AgreeBtn().should('be.visible').click();
        this.elements.SubmitBtn().should('be.visible').click();
    }
}
module.exports = new homePage();