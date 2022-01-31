
const pure = require('pure-gen');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AuthenticationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputDocument() {
        return $('input#document');
    }

    get inputPassword() {
        return $('input#password');
    }

    get buttonLogin() {
        return $('button#auto-btn-login');
    }

    get buttonCreateAccount() {
        return $('.btn-white-green.theme-second-btn');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async login(document, password) {
        await this.inputDocument.waitForDisplayed();
        await this.inputDocument.setValue(document);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }

}

module.exports = new AuthenticationPage();
