import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pageobjects/LoginPage'

const loginPage = new LoginPage

//Background:
    Given("that I have an account", () => {
        loginPage.visitPage()
    })

//Scenario: Accomplish login - with error
    When("I fill in the email address field with {string}", (user) => {
        loginPage.insertUser(user)
    })

    And("I fill the password field with {string}", (password) => {
        loginPage.insertPassword(password)
    })

    Then("I should get an error message", () => {
        loginPage.errorMessageLogin()
    })

//Scenario: Accomplish login - with success
    When("I fill in the email address field with {string}", (user) => {
        loginPage.insertUser(user)
    })

    And("I fill the password field with {string}", (password) => {
        loginPage.insertPassword(password)
    })

    Then("I should be redirected to my account page", () => {
        loginPage.clickLogin()
    })