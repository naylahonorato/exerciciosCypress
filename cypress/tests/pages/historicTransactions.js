class HistoricTransactionsPage {
    selectorsList(){
        const selectors = {
            mineButton : '[data-test="nav-personal-tab"]',
            transactionList : '[data-test="transaction-list"]',
            messageNoTransactions: '[data-test="empty-list-header"]'
        }

        return selectors
    }
    checkHistoricTransactionsSuccess(){
        cy.get(this.selectorsList().mineButton).click()
        cy.get(this.selectorsList().transactionList)
    
    }

    checkHistoricEmpty(){
        cy.get(this.selectorsList().mineButton).click()
        cy.get(this.selectorsList().messageNoTransactions).should('contain','No Transactions')
    }

}
export default HistoricTransactionsPage
