@signin
Feature: Sign In to Shopping Cart
  In order to purchase items
  Vinh, As an existing customer
  Wants to be able to login

  @signin
  Scenario: Vinh successfully signs in
    Given I am at Sign In page
    When I sign in into the system
    Then I should be able to sign in