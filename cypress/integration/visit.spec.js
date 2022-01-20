/// <reference types="cypress" />

describe("Entrando no site", () => {
    it("Pegando os gets", () => {
        cy.visit("http://automationpractice.com/index.php")
    })
})

//Esse arquivo é apenas para que eu possa pegar os gets pelo cypress.