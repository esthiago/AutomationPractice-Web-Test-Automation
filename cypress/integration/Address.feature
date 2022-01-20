Feature: Address
    I as a user
    I want to add new addresses
    To have more options to receive my purchases

Background:
    Given that I'm logged into the site

Scenario: Add new address
    When I click add addresses
    And fill the address field with "Rua dos bobos"
    And fill the city field with "Cidade do gelo"
    And I fill in the name of the address with "Endereço B"
    And I click the save button
    Then I must be redirected to the address page

Scenario: Add new address with a same name
    When I click add addresses
    And fill the address field with "Rua dos bobinhos"
    And fill the city field with "Cidade do gelo gelado"
    And I fill in the name of the address with "Endereço B"
    And I click the save button
    Then I should get an error message

#Existem outros campos {string} que poderiam ser adicionados aqui para serem alterados, mas para não estender o cenário, coloquei apenas esses dois  