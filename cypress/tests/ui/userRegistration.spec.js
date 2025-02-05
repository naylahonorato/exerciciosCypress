import userData from '../../fixtures/users/userData.json'
import UserRegistration from '../pages/userRegistration'

const userRegistration = new UserRegistration()

describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
        cy.visit('http://localhost:3000/signup')
        userRegistration.fillRegister(userData.registerSucess.firstName,userData.registerSucess.lastName,userData.registerSucess.username, userData.registerSucess.password, userData.registerSucess.confirmPassword)
        userRegistration.saveForm()
        cy.location('pathname').should('equal','/signin' )
    })
})

    describe('Tentar registrar um novo usuário com informações incompletas', () => {
        it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
            cy.visit('http://localhost:3000/signup')
            userRegistration.saveForm()
            userRegistration.alertFirstName()
            userRegistration.fillRegister(userData.registerFail.firstName,userData.registerFail.lastName,userData.registerFail.username, userData.registerFail.password, userData.registerFail.confirmPassword)
            userRegistration.alertPassword()
            userRegistration.fillRegister(userData.registerSucess.firstName,userData.registerSucess.lastName,userData.registerSucess.username, userData.registerSucess.password, userData.registerFail.confirmPassword)
            userRegistration.alertCorfirmPassword()
        });
      });

