import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to the page with the path {string}", (path: string) => {
  cy.visit({
    url: path,
    method: 'GET',
  })
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq(path)})
});

Then("I am navigated to the page with the path {string}", (path: string) => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq(path)})
});

// 