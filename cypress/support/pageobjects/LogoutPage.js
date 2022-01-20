import LogoutElements from "../elements/LogoutElements"

const logoutElements = new LogoutElements

class LogoutPage{
    logout(){
        cy.get(logoutElements.btnLogout()).click()
    }

    verifyPage(){
        cy.get(logoutElements.elementAuthentication()).should('have.text', 'Authentication')
    }
}

export default LogoutPage