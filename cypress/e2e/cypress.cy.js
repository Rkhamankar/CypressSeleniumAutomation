/// <reference types="cypress" />

import { FlipKart } from "../pages/flipkart.page";
const pageObj = new FlipKart();

describe('To test FlipKart Application', () => {
  
  beforeEach(() => {
    pageObj.preTest();
  })

  it('Verify search PLP for Realme product', () => {

    pageObj.navigateHomePage();

    pageObj.clickMobileCategory();

    pageObj.searchProduct(pageObj.data.prodName);

    pageObj.clickMobilesSubCategory();

    pageObj.clickNetworkTypeFacet(pageObj.data.networkType);

    pageObj.clickMobileSpecification(pageObj.data["5GType"]);

    pageObj.printProdName();

    pageObj.clickClearAllFilter();

    pageObj.clickMobileSpecification(pageObj.data["3GBType"]);

    pageObj.printProdName();

    pageObj.clickClearAllFilter();

    pageObj.clickMobileSpecification(pageObj.data["4GBType"]);

    pageObj.printProdName();

  })
})