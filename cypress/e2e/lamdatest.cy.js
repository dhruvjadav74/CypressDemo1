// describe('Form Submission Test', () => {
//     it('should submit form and verify success message', () => {
//         // Step 1: Visit the page
//         cy.visit('https://www.lambdatest.com/selenium-playground')
//         cy.viewport(414, 846)
//         cy.wait(5000); // Adjust wait time as needed
//         cy.contains('Input Form Submit').click();
//         // Step 3: Verify accessibility standards

//         // Step 4: Fill in all fields
//         cy.get('#name').type('John');
//         cy.get('#inputEmail4').type('John@mailinator.com');
//         cy.get('#inputPassword4').type('1234')
//         cy.get('#company').type('ABCDEFG')
//         cy.get('#websitename').type('https://www.lambdatest.com/selenium-playground/')
//         cy.get("select[name='country']").select(2);
//         cy.get('#inputCity').type('India')
//         cy.get('#inputAddress1').type('India')
//         cy.get('#inputAddress2').type('India')
//         cy.get('#inputState').type('Mumbai')
//         cy.get('#inputZip').type('363310')
//         cy.get('.mt-20 > button').click();
//         cy.injectAxe(); 
//         cy.checkA11y();
       
//         // // Step 6: Verify performance metrics with threshold checks
//         // cy.lighthouse(
//         //     {
//         //       performance: 60,
//         //       accessibility: 90,
//         //       'best-practices': 80,
//         //       seo: 70,
//         //     })

//         // Step 7: Validate success message
//         cy.contains('Thanks for contacting us, we will get back to you shortly.').should('be.visible');

//         // Step 8: Close browser tab and session (optional)
//         // Cypress automatically handles cleanup after the test
//     });
// });
