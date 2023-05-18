import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("the navbar with id {string} should {string}", (id: string, assertion :string) => {
    cy.get(`[data-testid="${id}"]`, { timeout: 5000 }).should(assertion)
});

Then("the navbar elements are verified", () => {
    cy.verifyNavBarElementsonHome();

});

Then("the primary banner elements are verified", () => {
    cy.verifyPrimaryBannerElements();

});

Then("the element with id {string} should {string}", (locator: string, assertion :string) => {
    cy.get(`[data-testid="${locator}"]`, { timeout: 5000 }).should(assertion)

});

Then("the element with id {string} should {string} with text {string}", (locator: string, assertion :string, text:string) => {
    cy.get(`[data-testid="${locator}"]`, { timeout: 5000 }).should(assertion).and('have.text', text)
});

Then("the element with id {string} should {string} containing text {string}", (locator: string, assertion :string, text:string) => {
    cy.get(`[data-testid="${locator}"]`, { timeout: 5000 }).should(assertion).and('include.text', text)
});

Then("the elements on check address modal is verified", () => {
    cy.verifyCheckAddressForm();
});

Then("the {string} list should have {int} element", (locator:string, length:number) => {
    cy.get(`#${locator}`, { timeout: 5000 }).should('have.length',length)
});

Then("the action tile section with {int} columns are verified", (columns: number) => {
    cy.verifyActionTileColumnDetails(4);
   
    })

// cy.get('[data-testid="step-address-lookup__submit-button"]', { timeout: 5000 }).should('have.text','Check address')