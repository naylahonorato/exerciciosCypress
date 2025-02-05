class UserRegistration{
    selectorsList(){
        const selectors = {
        firstNameField : "[name='firstName']",
        lastNameField : "[name='lastName']",
        usernameField : "[name='username']",
        passwordField : "[name='password']",
        corfirmPasswordField : "[name='confirmPassword']",
        submitButton: "[type='submit']",
        helperTextFirstName: "#firstName-helper-text",
        helperTextPassword: "#password-helper-text",
        helperTextConfirmPassword: "#confirmPassword-helper-text"
    }
        return selectors
    }

    fillRegister(firstName, lastName, username, password,confirmPassword){
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().corfirmPasswordField).type(confirmPassword)
    }
    saveForm(){
        cy.get(this.selectorsList().submitButton).click()
    }
    alertFirstName(){
        cy.get(this.selectorsList().helperTextFirstName)
    }
    alertPassword(){
        cy.get(this.selectorsList().helperTextPassword)
    }
    alertCorfirmPassword(){
        cy.get(this.selectorsList().helperTextConfirmPassword)
    }
}
export default UserRegistration