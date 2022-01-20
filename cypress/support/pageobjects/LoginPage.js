/// <reference types="cypress" />

import LoginElements from "../elements/LoginElements"

const loginElements = new LoginElements

class LoginPage {
    visitPage(){
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
    }

    errorMessageLogin(){
        cy.get(loginElements.messageErrorLogin()).should(loginElements.verifyMessageError)
    }

    insertUser(user){
        cy.get(loginElements.inputUser()).type(user)
    }

    insertPassword(password){
        cy.get(loginElements.inputPassword()).type(password)
    }

    clickLogin(){
        cy.get(loginElements.clickBtnLogin()).click()
    }

    loginProcess(user, password){

        this.visitPage()
        this.insertUser(user)
        this.insertPassword(password)
        this.clickLogin()
    }

    clearCache(){
        cy.clearCookies()
        cy.clearLocalStorage()
    }

    homePage(){
        cy.get(loginElements.home()).click()
    }
}

export default LoginPage