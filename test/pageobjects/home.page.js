

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch() {
        return $('#search-box-id');
    }

    get linkProduct() {
        return $('a.search-product-name');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async searchProduct (productName) {
        await this.inputSearch.waitForDisplayed();
        await this.inputSearch.setValue(productName);
        await browser.keys('Enter');
    }
}

module.exports = new HomePage();
