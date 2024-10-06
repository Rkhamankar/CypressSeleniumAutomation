/// <reference types="cypress" />

import { FlipKart } from "../pages/flipkart.page";
const pageObj = new FlipKart();

describe('To test FlipKart Application', () => {
    
    beforeEach(() => {
        pageObj.preTest();
        cy.task('initializeBrowser');
    })

    afterEach(() => {
        cy.task('quitBrowser');
    })

    it('Verify search PLP for Realme product', () => {
        cy.task("visitHomePage", Cypress.env("baseUrl"));

        cy.task("clickMobileCategory");

        cy.task("searchProduct", pageObj.data.prodName);

        cy.task("clickMobilesSubCategory");

        cy.task("clickNetworkTypeFacet");

        cy.task("click5GType");

        cy.task("printProdName");

        cy.task("clickClearAllFilter");

        cy.task("click3GBType");

        cy.task("printProdName");

        cy.task("clickClearAllFilter");

        cy.task("click4GBType");

        cy.task("printProdName");
    })
})