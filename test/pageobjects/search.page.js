

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get titleProductName() {
        return $$('h3.prod-title');
    }

    get titlePage() {
        return $('h1.depart-name');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async openProduct() {
        await this.titleProductName[0].waitForDisplayed();
        await this.titleProductName[0].click();
    }
}

module.exports = new SearchPage();
