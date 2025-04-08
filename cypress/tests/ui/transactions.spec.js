import userData from '../../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import TransactionsPage from '../pages/transactionsPage';

const loginPage = new LoginPage()
const transactionsPage = new TransactionsPage()


describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
      transactionsPage.checkTransaction()
      transactionsPage.checkSucessTransactionAlert()

    });
  });

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        transactionsPage.checkTransaction()
        transactionsPage.checkDisableButton()
     
});
  });