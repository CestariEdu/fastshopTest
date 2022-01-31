

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get titleProductName() {
        return $('h1.title');
    }

    get buttonBuy() {
        return $('button#buyNow');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async buyProduct() {
        await this.buttonBuy.waitForDisplayed();
        await this.buttonBuy.click();
    }
}

module.exports = new ProductPage();
