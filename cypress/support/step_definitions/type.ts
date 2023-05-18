import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I type the value {string} in the text field with id {string}", (address: string, locator :string) => {
    cy.get(`#${locator}`, { timeout: 5000 }).clear();
    cy.get(`#${locator}`, { timeout: 5000 }).type(address)
    // .should('have.value',address)
});

// Then("I type the value {string} in the text field with id {string}", (key: string, locator:string) => {
//     cy.get(`#${locator}`, { timeout: 5000 }).clear();
//     cy.get(`#${locator}`, { timeout: 5000 }).type(key)
// });