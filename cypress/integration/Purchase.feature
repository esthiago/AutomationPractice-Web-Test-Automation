Feature: Purchase
    I as a user
    I want to make purchases on the site
    To satisfy my needs

Background:
    Given that I'm logged in with a valid account on the site

Scenario: Make a purchase with a card
    When I choose a product
    And I carry out the purchase procedures
    And I make payment with the card
    Then I should receive a purchase confirmation message by card

Scenario: Make a purchase with a check
    When I choose a product
    And I carry out the purchase procedures
    And I make payment with the check
    Then I should receive a purchase confirmation message by check

#Para realizar a compra em outra conta, troque o email nos parametros do arquivo 'PurchaseSteps'