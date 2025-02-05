import userData from '../../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('Login com sucesso', () =>{

    it('Deve fazer login com um usuário válido', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        loginPage.checkDashboard()
    })

})
describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid
    });
  });
   
    
