class TransactionsPage {
    selectorsList(){
        const selectors = {
            newButtonTransactions : '[data-test="nav-top-new-transaction"]',
            firstUserList : ('[data-test="user-list-item-GjWovtg2hr"]'),
            amountField : "[data-test='transaction-create-amount-input']",
            descriptionField :"[data-test='transaction-create-description-input']",
            paySubmitButton :'[data-test="transaction-create-submit-payment"]',
            alertSucessTransaction : '[data-test="alert-bar-success"]'
        }

        return selectors
    }

    checkTransaction(){
        cy.get(this.selectorsList().newButtonTransactions).click()
        cy.get(this.selectorsList().firstUserList).should('be.visible').click()
        cy.get(this.selectorsList().amountField).type('100')
        cy.get(this.selectorsList().descriptionField).type("teste")
        
    
    }

    checkSucessTransactionAlert(){
        cy.get(this.selectorsList().paySubmitButton).click()
        cy.get(this.selectorsList().alertSucessTransaction).should('contain','Transaction Submitted')
    
    }
    

    checkDisableButton(){
        cy.get(this.selectorsList().paySubmitButton).should('be.disabled')
    }
}

export default TransactionsPage