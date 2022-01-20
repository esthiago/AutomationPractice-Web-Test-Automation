import PurchaseElements from "../elements/PurchaseElements"

const purchaseElements = new PurchaseElements

class PurchasePage{
    clickProduct(){
        cy.get(purchaseElements.productPage()).click()
        cy.get(purchaseElements.btnAddToCar()).click()
    }

    stepsPurchase(){
        cy.get(purchaseElements.btnToCheckout()).click()
        cy.get(purchaseElements.btnContinueCheckout()).click()
        cy.get(purchaseElements.btnContinueCheckout()).click()
        cy.get(purchaseElements.aceptTerms()).click()
        cy.get(purchaseElements.btnContinueCheckout()).click()
    }

    methodCard(){
        cy.get(purchaseElements.cardPayment()).click()
        cy.get(purchaseElements.btnConfirm()).click()
    }

    methodCheck(){
        cy.get(purchaseElements.CheckPayment()).click()
        cy.get(purchaseElements.btnConfirm()).click()
    }

    confirmPurchaseCard(){
        cy.get(purchaseElements.boxInformation()).should('contain', 'Your order on My Store is complete.')
    }

    confirmPurchaseCheck(){
        cy.get(purchaseElements.boxInformation()).should('contain', 'Your check must include:')
    }
}

export default PurchasePage