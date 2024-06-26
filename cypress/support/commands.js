Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Paola')
    cy.get('#lastName').type('Chu')
    cy.get('#email').type('paolachu.dev@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()

})