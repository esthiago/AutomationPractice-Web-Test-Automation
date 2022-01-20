Feature: Register
    I as a user
    I want to create an account on the website
    To use the system

Background:
    Given that I am on the login page

Scenario: Filling the email register field with an existing email
    When I fill in the email field with "testandoisso6@test.com"
    And I click on the new user button
    Then I should receive an error message by email already used

Scenario: Filling the new users email field with an invalid email
    When I fill in the email field with "naoehumemail"
    And I click on the new user button
    Then I should get an error message via invalid email

Scenario: Register new user with success
    When I fill in the email field with "testandoisso9@test.com"
    And I click on the new user button
    And I fill in all fields
    Then My account must be created

#Todas as vezes em que esse teste for executado, é necessario atualizar o email no cenario 'Register new user with success'