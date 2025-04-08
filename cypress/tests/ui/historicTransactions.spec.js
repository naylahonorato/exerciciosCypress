import userData from '../../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import UserRegistration from '../pages/userRegistration'
import HistoricTransactionsPage from '../pages/historicTransactions'

const loginPage = new LoginPage()
const historicTransactions = new HistoricTransactionsPage()


describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        cy.visit('http://localhost:3000/')
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        historicTransactions.checkHistoricTransactionsSuccess()
      
    });
  });

  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        cy.visit('http://localhost:3000/')
        loginPage.loginWithUser(userData.userNoTransaction.username, userData.userNoTransaction.password)
        historicTransactions.checkHistoricEmpty()
      
    });
  });
