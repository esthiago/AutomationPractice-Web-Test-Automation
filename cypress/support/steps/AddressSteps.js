import {When, Then, And, Given} from 'cypress-cucumber-preprocessor/steps'
import AddressPage from '../pageobjects/AddressPage'
import LoginPage from '../pageobjects/LoginPage'

const loginPage = new LoginPage
const addressPage = new AddressPage

Given("that I'm logged into the site", () => {
    loginPage.loginProcess("aloha@aloha.com", "aloha")
})

//Scenario: Add new address
    When("I click add addresses", () => {
        addressPage.btnAdress()
    })

    And("fill the address field with {string}", (address) =>{
        addressPage.addressField(address)
    })

    And("fill the city field with {string}", (city) => {
        addressPage.cityField(city)
        addressPage.othersFields()
    })

    And("I fill in the name of the address with {string}", (addressName) =>{
        addressPage.nameAdress(addressName)
    })

    And("I click the save button", () => {
        addressPage.btnSave()
    })

    Then("I must be redirected to the address page", () =>{
        addressPage.verifyPageAddress()
    })

//Scenario: Add new address with a same name
    When("I click add addresses", () => {
        addressPage.btnAdress()
    })

    And("fill the address field with {string}", (address) =>{
        addressPage.addressField(address)
    })

    And("fill the city field with {string}", (city) => {
        addressPage.cityField(city)
        addressPage.othersFields()
    })

    And("I fill in the name of the address with {string}", (addressName) =>{
        addressPage.nameAdress(addressName)
    })

    And("I click the save button", () => {
        addressPage.btnSave()
    })

    Then("I should get an error message", () =>{
        addressPage.verifyErrorMsg()
    })