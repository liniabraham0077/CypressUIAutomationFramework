Feature: Navigate to Belong home page and verify the contents
  Scenario: navigate to belong home page successfully
    Given I navigate to the page with the path "/"
    And the navbar with id "global-header-header-bar" should "exist"
    And the navbar elements are verified
    And the primary banner elements are verified
    And the action tile section with 4 columns are verified
    

