Feature: Login
    I as a user
    I want to login to the site
    To make purchases

Background:
    Given that I have an account

Scenario: Login without success
    When I fill in the email address field with "teste@teste.com"
    And I fill the password field with "teste"
    Then I should get an error message

Scenario: Login with success
    When I fill in the email address field with "aloha@aloha.com"
    And I fill the password field with "aloha"
    Then I should be redirected to my account page