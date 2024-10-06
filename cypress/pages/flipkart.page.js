export class FlipKart {

    locator = require('../fixtures/Locator/Flipkart.json');

    preTest() {
        cy.clearCookies();
        this.readTestData();
    }

    readTestData() {
        console.log('test file----' + Cypress.env('testDataFile'));
        cy.fixture(Cypress.env('testDataFile')).then((file) => {
            this.data = file;
        })
    }
    
    navigateHomePage() {
        cy.visit(Cypress.env('baseUrl'));
    }
    
    clickMobileCategory() {
        cy.get(this.locator.mobTabCategory).click();
    }

    searchProduct(prodName) {
        cy.get(this.locator.searchField).type(prodName);
        cy.get(this.locator.searchIcon).click();
    }

    clickMobilesSubCategory() {
        cy.get(this.locator.mobilesSubCategory).click();
    }

    clickNetworkTypeFacet(facetName) {
        cy.contains(this.locator.networkTypeFacet,facetName).click();
    }

    clickMobileSpecification(filterName) {
        cy.contains(this.locator.subFilter,filterName).click();
    }

    printProdName() {
        cy.get(this.locator.prodName).each(($el) => { 
            cy.log("product Name===> "+$el.text().trim());
            console.log("product Name===> "+$el.text().trim());
        })
    }

    clickClearAllFilter() {
        cy.get(this.locator.clearAllFilter).click();
    }
}