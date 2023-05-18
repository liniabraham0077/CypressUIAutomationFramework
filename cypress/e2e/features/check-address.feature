# Feature: Navigate to See nbn Plan icon in the home Page and check address from the page
#   Scenario: Navigate to belong home page successfully
#     Given I navigate to the page with the path "/go/internet/check-your-address"
#     And the element with id "stack" should "exist"
#     And the elements on check address modal is verified
#     And I type the value "52 Grafton Street, MERNDA  VIC  3754" in the text field with id "queryInput" 
#     Then the "queryList" list should have 1 element
#     And the element with id "show-manual-form-button" should "exist" with text "Can't find your address?"
#     And I click on the element "#queryList" in the list matching text "52 Grafton Street, MERNDA  VIC  3754"
#     And the element with id "address-summary" should "exist" with text "Review and confirm your address52 Grafton Street, MERNDA  VIC  3754"
#     And I click on the element with id "step-address-lookup__submit-button"
#     And the element with id "step-address-lookup__submit-button" should "exist" with text "Checking..."
#     Then I am navigated to the page with the path "/go/internet/nbn-plans"
#     And the navbar elements are verified


Feature: Error on submitting invalid address
  Scenario: Blank adress field in check address 
    Given I navigate to the page with the path "/go/internet/check-your-address"
    And the element with id "stack" should "exist"
    And the elements on check address modal is verified
    # And I type the value "52 Grafton Street, MERNDA  VIC  3754" in the text field with id "queryInput" 
    # Then the "queryList" list should have 1 element
    # And the element with id "show-manual-form-button" should "exist" with text "Can't find your address?"
    # And I click on the element "#queryList" in the list matching text "52 Grafton Street, MERNDA  VIC  3754"
    # And the element with id "address-summary" should "exist" with text "Review and confirm your address52 Grafton Street, MERNDA  VIC  3754"
    And I click on the element with id "step-address-lookup__submit-button"
    And the element with id "step-address-lookup__submit-button" should "not.exist" with text "Checking..."
    #     And the element with id "show-manual-form-button" should "exist" with text "Can't find your address?"

    # And the element with id "step-address-lookup__submit-button" should "exist" with text "Checking..."
    # Then I am navigated to the page with the path "/go/internet/nbn-plans"
    # And the navbar elements are verified

