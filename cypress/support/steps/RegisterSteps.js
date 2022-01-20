import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pageobjects/LoginPage'
import RegisterPage from '../pageobjects/RegisterPage'

const loginPage = new LoginPage
const registerpage = new RegisterPage

//Background
    Given("that I am on the login page", () => {
        loginPage.visitPage()
    })

//Scenario: Filling the email register field with an existing email
    When("I fill in the email field with {string}", (existingEmail) => {
        registerpage.newUserEmail(existingEmail)
    })

    And("I click on the new user button", () => {
        registerpage.clickBtnNewUser()
    })

    Then("I should receive an error message by email already used", () => {
        registerpage.existingEmailMsg()
    })

//Scenario: Filling the new users email field with an invalid email
    When("I fill in the email field with {string}", (invalidEmail) => {
        registerpage.newUserEmail(invalidEmail)
    })

    And("I click on the new user button", () => {
        registerpage.clickBtnNewUser()
    })

    Then("I should get an error message via invalid email", () => {
        registerpage.invalidEmailMsg()
    })

//Scenario: Register new user with success
    When("I fill in the email field with {string}", (email) => {
        registerpage.newUserEmail(email)
    })

    And("I click on the new user button", () => {
        registerpage.clickBtnNewUser()
    })

    And("I fill in all fields", () => {
        registerpage.allFields()
    })

    Then("My account must be created", () => {
        registerpage.validationNewAccount()
    })
