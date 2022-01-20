/// <reference types="cypress" />
import RegisterElements from "../elements/RegisterElements"

const registerElements = new RegisterElements

class RegisterPage {
    newUserEmail(email){
        cy.get(registerElements.fieldEmailNewUser()).type(email)
    }

    clickBtnNewUser(){
        cy.get(registerElements.btnNewUser()).click()
    }

    existingEmailMsg(){
        cy.get(registerElements.emailField()).should('contain', 'An account using this email address has already been registered. Please enter a valid password or request a new one.')
    }

    invalidEmailMsg(){
        cy.get(registerElements.emailField()).should('contain', 'Invalid email address.')
    }

    allFields(){
        cy.get(registerElements.gender()).click()
        cy.get(registerElements.firstName()).type(registerElements.name())
        cy.get(registerElements.lastNameField()).type(registerElements.lastName())
        cy.get(registerElements.passwordField()).type(registerElements.password())
        cy.get(registerElements.days()).select(registerElements.day())
        cy.get(registerElements.months()).select(registerElements.month())
        cy.get(registerElements.years()).select(registerElements.year())
        cy.get(registerElements.companyField()).type(registerElements.company())
        cy.get(registerElements.address1Field()).type(registerElements.address())
        cy.get(registerElements.address2Field()).type(registerElements.address2())
        cy.get(registerElements.cityField()).type(registerElements.city())
        cy.get(registerElements.stateField()).select(registerElements.state())
        cy.get(registerElements.postCodeField()).type(registerElements.postcode())
        cy.get(registerElements.phoneField()).type(registerElements.phone())
        cy.get(registerElements.phoneField2()).type(registerElements.phone2())
        cy.get(registerElements.btnSubmiteNewUser()).click()
    }

    validationNewAccount(){
        cy.get(registerElements.validationName()).should('have.text', registerElements.nameId()) //Não passei esse 'have.text' porque não achei que faria sentido
    }
}

export default RegisterPage