//         cy.get('[data-testid="step-address-lookup__submit-button"]', { timeout: 5000 }).should('have.text','Check address')
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I click on the element with id {string}", (locator: string) => {
    cy.get(`[data-testid="${locator}"]`, { timeout: 5000 }).click();
});

Then("I click on the element {string} in the list matching text {string}", (locator:string, text: string) => {
    cy.get(`${locator} li`).each(($li) => {
        cy.log($li.text())
        if($li.text() === '52 Grafton Street, MERNDA  VIC  3754'){
            cy.get($li)
            .click({ force: true })


        }
    }
    // cy.log($li.text())
    // if($li.text() === '' {}
    
    )
    // sc-edac12bd-0
    // cy.get('#queryList>li>span').invoke('val')
    // cy.get('#queryList>li>span').contains('52 Grafton Street, MERNDA  VIC  3754').click()
    // cy.get('.sc-edac12bd-0').scrollIntoView().click({ timeout: 30000 })
    // cy.get(`.${className}`).scrollIntoView().click({ timeout: 30000 })
});
