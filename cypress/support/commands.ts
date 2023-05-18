/// <reference types="cypress" />

declare namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      verifyNavBarElementsonHome(): Chainable<Subject>;
      verifyCheckAddressForm(): Chainable<Subject>;
      verifyPrimaryBannerElements(): Chainable<Subject>;
      verifyActionTileColumnDetails(columnLength: number): Chainable<Subject>;

    }
  }
  
  Cypress.Commands.add('verifyNavBarElementsonHome', () => {
    cy.log('verify navbar elements');
    cy.get('[data-testid="global-header-button-home"]', { timeout: 5000 }).should('be.visible')
    cy.get('[data-testid="global-header-button-home"]', { timeout: 5000 }).should('include.text','BELONG logo - Back to homepage link')
    cy.get('[data-testid="global-header-button-dropdown-main"]').should('exist')
    cy.get('[data-testid="global-header-button-sustainability"]').should('have.attr','href','/go/sustainability')




    
    });

    Cypress.Commands.add('verifyCheckAddressForm', () => {
        cy.log('verify check address modal elements');
        cy.get('[data-testid="stack-child"]', { timeout: 5000 }).should('be.visible').
        and('include.text','Enter your address')
        cy.get('[data-testid="stack-child"]', { timeout: 5000 }).
        should('include.text','We’ll need your address so we can check what kind of nbn technology type is available at your home.')
        cy.get('#queryLabel').should('have.text','Your address')
        cy.get('#queryInput').should('have.attr','placeholder','Start typing you address')
        cy.get('[data-testid="step-address-lookup__submit-button"]', { timeout: 5000 }).should('have.text','Check address')
        cy.get('[data-testid="step-address-lookup__back-button"]', { timeout: 5000 }).should('have.text','Back to Belong internet')
        .and('have.attr','href','/broadband')
      
        });

        Cypress.Commands.add('verifyPrimaryBannerElements', () => {
            cy.get('[data-testid="section-primary-banner"]').should('include.text','Carbon neutral mobile and internet')
            cy.get('[data-testid="section-primary-banner"]').should('include.text','Scroll good with Australia’s first carbon neutral telco.')

            cy.get('[data-testid="primary-button"]').should('have.text','Give the planet a real thumbs up ')
            .and('have.attr','href','/go/sustainability')
          
        });

        Cypress.Commands.add('verifyActionTileColumnDetails', (columnLength: number) => {
            cy.get('ul[data-testid="columns"] > li', { timeout: 5000 })
            .should('have.length',columnLength)
            .each(($li) => {
                cy.wrap($li).as('$list')
                    if($li.text().includes("Mobile"))
                    {
                        cy.get('@$list').should('include.text','Bring your own phone for month-to-month plans from $25/month.')
                        cy.get('@$list').find("[data-testid='action-tile__button']").should('have.text', 'See mobile plans').and('have.attr','href','/go/mobile')
                    }
                    if($li.text().includes("Data"))
                    {
                        cy.get('@$list').should('include.text','You bring the device, we bring you the data.')
                        cy.get('@$list').find("[data-testid='action-tile__button']").should('have.text', 'See data plans').and('have.attr','href','/go/data-plans')
                    }
                    if($li.text().includes("Internet"))
                    {
                        cy.get('@$list').should('include.text','Wallet-friendly nbn™ plans packed with unlimited data.')
                        cy.get('@$list').find("[data-testid='action-tile__button']").should('have.text', 'See nbn plans').and('have.attr','href','/go/internet')
                    }
                    if($li.text().includes("Phones"))
                    {
                        cy.get('@$list').should('include.text','Classic phones from Apple and Samsung, refurbished by Kingfisher at a great price.')
                        cy.get('@$list').find("[data-testid='action-tile__button']").should('have.text', 'See phones').and('have.attr','href','https://shop.belong.com.au')
                    }
                })
          
        });
