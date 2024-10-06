const { Builder, By, Select, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options().setAcceptInsecureCerts(true).
    addArguments("--no-sandbox", "disable-infobars", "excludeSwitches", "--ignore-certificate-errors")
let locator = require('../fixtures/Locator/Flipkart.json');
require('chromedriver');
const { exec } = require('child_process');

module.exports = (on) => {
    let driver;
    on('task', {
        initializeBrowser: async () => {
            driver = new Builder()
                .setChromeOptions(options)
                .forBrowser('chrome')
                .build();
            driver.manage().window().maximize();
            driver.manage().setTimeouts({ implicit: 10000 });
            return null;
        },

        visitHomePage: async (homePageURL) => {
            await driver.get(homePageURL)
            return null;
        },

        clickMobileCategory: async () => {
            await driver.findElement(By.css(locator.mobTabCategory)).click();
            return null;
        },

        searchProduct: async (prodName) => {
            let element = await driver.wait(until.elementLocated(By.css(locator.searchField), 30000));
            await driver.wait(until.elementIsEnabled(element), 10000);
            await element.sendKeys(prodName);
            await driver.findElement(By.css(locator.searchIcon)).click();
            return null;
        },

        clickMobilesSubCategory: async () => {
            await driver.findElement(By.css(locator.mobilesSubCategory)).click();
            return null;
        },

        clickNetworkTypeFacet: async () => {
            await sleep(3000);
            await driver.wait(until.elementLocated(By.xpath(locator.networkTypeFacet2)), 10000)
            let element = await driver.findElement(By.xpath(locator.networkTypeFacet2));
            await driver.executeScript("arguments[0].scrollIntoView(true);", element);
            await driver.wait(until.elementLocated(element), 10000);
            await driver.wait(until.elementIsEnabled(element), 10000);
            await element.click();
            return null;
        },

        click5GType: async () => {
            let element = await driver.findElement(By.xpath(locator.fiveGType)).click();
            await driver.wait(until.elementLocated(element), 10000);
            await driver.wait(until.elementIsEnabled(element), 10000);
            await element.click();
            return null;
        },

        printProdName: async () => {
            await driver.wait(until.elementLocated(By.css(locator.prodName)), 10000);
            const listProduct = await driver.findElements(By.css(locator.prodName));
            for (let i = 0; i < listProduct.length; i++) {
                const productName = await listProduct[i].getText();
                console.log("product Name ===> " + productName)
            }
            return null;
        },

        clickClearAllFilter: async () => {
            await driver.findElement(By.css(locator.clearAllFilter)).click();
            return null;
        },

        click3GBType: async () => {
            let element = await driver.findElement(By.xpath(locator.threeGBType)).click();
            await driver.wait(until.elementLocated(element), 10000);
            await driver.wait(until.elementIsEnabled(element), 10000);
            await element.click();
            return null;
        },

        click4GBType: async () => {
            let element = await driver.findElement(By.xpath(locator.fourGBType)).click();
            await driver.wait(until.elementLocated(element), 10000);
            await driver.wait(until.elementIsEnabled(element), 10000);
            await element.click();
            return null;
        },

        quitBrowser: async () => {
            if (driver) {
                try {
                    // Quit the WebDriver session
                    await driver.quit();
                    await new Promise(resolve => setTimeout(resolve, 2000));

                    exec('taskkill /F /IM chromedriver.exe', (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Error killing Chrome processes: ${error.message}`);
                            return;
                        }
                        if (stderr) {
                            console.error(`stderr: ${stderr}`);
                            return;
                        }
                        console.log(`Chrome processes killed: ${stdout}`);
                    });

                } catch (error) {
                    console.error(`Error quitting the browser: ${error.message}`);
                } finally {
                    driver = null;
                }
            }
            return null;
        },

    })

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}