import AddressElements from '../elements/AddressElements'
import RegisterElements from '../elements/RegisterElements'

const registerElements = new RegisterElements
const addressElements = new AddressElements

class AddressPage{
    btnAdress(){
        cy.get(addressElements.addressBtn()).click()
        cy.get(addressElements.addAddress()).click()
    }

    addressField(address){
        cy.get(addressElements.fieldAddress()).type(address)
    }
    
    cityField(city){
        cy.get(addressElements.fieldCity()).type(city)
    }

    nameAdress(addressName){
        cy.get(addressElements.addressName()).clear().type(addressName)
    }

    btnSave(){
        cy.get(addressElements.saveBtn()).click()
    }

    verifyPageAddress(){
        cy.get(addressElements.titlePageAddress()).should('contain', 'My addresses')
    }

    othersFields(){
        cy.get(registerElements.stateField()).select(registerElements.state())
        cy.get(registerElements.phoneField()).type(registerElements.phone())
        cy.get(registerElements.postCodeField()).type(registerElements.postcode())
    }

    verifyErrorMsg(){
        cy.get(addressElements.titleErrorMsg()).contains('Modify address')
    }
}

export default AddressPage