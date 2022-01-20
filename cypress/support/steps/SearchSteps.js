import { When, Then, And, Given } from 'cypress-cucumber-preprocessor/steps'
import SearchPage from '../pageobjects/SearchPage'

const searchPage = new SearchPage

//Backgroud
    Given("that I'm on the home page", () => {
        searchPage.visitPage()
    })

//Scenario: Search without results
    When("I fill in the search field with {string}", (key1) => {
        searchPage.fillSearchNoResults(key1)
    })

    And("I click the search button", () => {
        searchPage.clickBtnSearch()
    })

    Then("I should get a warning that no results were found", () => {
        searchPage.noResultsField()
        searchPage.btnHome()
    })

//Scenario: Search with results
    When("I fill in the search field with {string}", (key2) => {
        searchPage.fillSearch(key2)
    })

    And("I click the search button", () => {
        searchPage.clickBtnSearch()
    })

    Then("the results must be displayed", () => {
        searchPage.resultsField()
    })