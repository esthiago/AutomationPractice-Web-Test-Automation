Feature: Search
    I as a user
    I want to search the site
    To facilitate my browsing

Background:
    Given that I'm on the home page

Scenario: Search without results
    When I fill in the search field with "camisetas"
    And I click the search button
    Then I should get a warning that no results were found

Scenario: Search with results
    When I fill in the search field with "shirts"
    And I click the search button
    Then the results must be displayed