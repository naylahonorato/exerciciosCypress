import userData from '../../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
      cy.visit('http://localhost:3000/')
      loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
      cy.get('[data-test="nav-top-new-transaction"]').click()
      cy.get('[data-test="users-list"]').click()
    cy.get("[data-test='transaction-create-amount-input']").type('100')
      cy.get("[name='description']").eq(1).type('test')
      cy.get('[data-test="transaction-create-submit-payment"]').click()
      cy.get('.MuiAlert-message').should('contain','Transaction Submitted')
    });
  });

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        cy.visit('http://localhost:3000/')
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="user-list-item-GjWovtg2hr"]').click()
        cy.get('#amount').type('100')
        cy.get('#transaction-create-description-input').type('test')
        cy.get('[data-test="transaction-create-submit-payment"]').should('be.disabled')
});
  });