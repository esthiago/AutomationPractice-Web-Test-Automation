Feature: Logout
    I an as a user
    I want to exit the system
    to ensure that I ended my activity

Background:
    Given that I'm logged into the system

Scenario: Exit the system
    When I click the logout button
    Then I must go back to the authentication page