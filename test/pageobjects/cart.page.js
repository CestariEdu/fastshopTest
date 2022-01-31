

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */

    get titlePage() {
        return $('div.title-icon');
    }

    get spanProductTitle() {
        return $$('div.product-name > span');
    }

    get linkCart() {
        return $('a[href="/web/checkout-v2/carrinho"]');
    }

    get iconCart() {
        return $('.menu-cart-icon');
    }

    get iconBin() {
        return $('.remove');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async openCart() {
        await this.titlePage.waitForDisplayed({timeout: 30000});
        await this.linkCart.click();
        await this.iconCart.waitForDisplayed();
    }
    

}

module.exports = new ProductPage();
