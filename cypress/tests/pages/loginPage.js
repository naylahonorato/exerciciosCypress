class LoginPage{
    selectorsList(){
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name ='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "role='alert']",
            dashboardGrid: "[data-test='main']"
        }
        return selectors
    }
    accessLoginPage(){
        cy.visit('http://localhost:3000')
    }
    loginWithUser(username,password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
    checkDashboard(){
        cy.location('pathname').should('equal','/')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }

    checkAccessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage