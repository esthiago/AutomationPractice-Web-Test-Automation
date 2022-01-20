import {When, Then, Given} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pageobjects/LoginPage'
import LogoutPage from '../pageobjects/LogoutPage'

const loginPage = new LoginPage
const logoutPage = new LogoutPage

Given("that I'm logged into the system", () => {
    loginPage.loginProcess("aloha@aloha.com", "aloha")
})

When("I click the logout button", () => {
    logoutPage.logout()
})

Then("I must go back to the authentication page", () => {
    logoutPage.verifyPage()
})