/// <reference types="cypress" />
import SearchElements from "../elements/SearchElements"

const searchElements = new SearchElements

class SearchPage {
    visitPage(){
        cy.visit("http://automationpractice.com/index.php")
    }

    fillSearchNoResults(key1){
        cy.get(searchElements.fieldSearch()).type(key1) //camisetas
    }

    clickBtnSearch(){
        cy.get(searchElements.btnSearch()).click()
    }

    noResultsField(){
        cy.get(searchElements.fieldNoResults()).should('contain', '0 results have been found')
    }

    fillSearch(key2){
        cy.get(searchElements.fieldSearch()).type(key2) //shirts
    }

    resultsField(){
        cy.get(searchElements.fieldResults()).should('contain', 'result has been found.')
    }

    btnHome(){
        cy.get(searchElements.btnHomePage()).click()
    }
}

export default SearchPage