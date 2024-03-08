/// <reference types="cypress" />

describe('Login Page', () => {
  beforeEach(function () {
    cy.viewport(1920, 1080);
    // cy.visit('https://www.lambdatest.com/selenium-playground/');
  })

  let authtoken;
  it('auth bearer', async () => {
    const res=await cy.request({
      url: 'https://q0s5cqmkm9.execute-api.us-west-2.amazonaws.com/qa/login',
      method: 'POST',
      body: { email: "armstead@mailinator.com", password: "DataDesign1234", appinstanceid: 6 },
      headers: { 'content-type': 'application/json' }
      })
      authtoken=res.body.token
      
    cy.request({
      url: 'https://306dn8l2b3.execute-api.us-west-2.amazonaws.com/qa/check-valid-user',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authtoken}`
      },
      body: { userid: 2905 }
    }).then(res => {
    
    });

  })

})