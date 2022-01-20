import {When, Given, Then, And} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pageobjects/LoginPage'
import PurchasePage from '../pageobjects/PurchasePage'

const loginPage = new LoginPage
const purchasePage = new PurchasePage

//Scenario: Make a purchase with a card
    Given("that I'm logged in with a valid account on the site", () =>{
        loginPage.loginProcess("aloha@aloha.com", "aloha") //troque os campos aqui para alterar de conta
        loginPage.homePage()
    })

    When("I choose a product", () =>{
        purchasePage.clickProduct()
    })

    And("I carry out the purchase procedures", () =>{
        purchasePage.stepsPurchase()
    })

    And("I make payment with the card", () => {
        purchasePage.methodCard()
    })

    Then("I should receive a purchase confirmation message by card", () =>{
        purchasePage.confirmPurchaseCard()
    })

//Scenario: Make a purchase with a check
    When("I choose a product", () =>{
        purchasePage.clickProduct()
    })

    And("I carry out the purchase procedures", () =>{
        purchasePage.stepsPurchase()
    })
    
    And("I make payment with the check", () => {
        purchasePage.methodCheck()
    })

    Then("I should receive a purchase confirmation message by check", () =>{
        purchasePage.confirmPurchaseCheck()
    })