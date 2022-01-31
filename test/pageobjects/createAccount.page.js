
const pure = require('pure-gen');
const Page = require('./page');

pure.setLocale('pt_BR');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputDocument() {
        return $('input#document');
    }

    get inputName() {
        return $('input#name');
    }

    get inputBirthday() {
        return $('input#birthday');
    }

    get selectGender() {
        return $('select[formcontrolname="gender"]');
    }

    get inputTelephone() {
        return $('input#telephone');
    }

    get inputEmail() {
        return $('input#email');
    }

    get inputPassword() {
        return $('input#password');
    }

    get inputPasswordConfirmation() {
        return $('input#password_confirmation');
    }

    get buttonSubmit() {
        return $$('button[type="submit"]');
    }

    get inputZipCode() {
        return $('input#zipCode');
    }

    get inputZipCode() {
        return $('input#zipCode');
    }

    get inputNumber() {
        return $('input#number');
    }

    get selectHouseType() {
        return $('select[formcontrolname="housingType"]');
    }

    get checkboxTerms() {
        return $$('input.checkbox-blue');
    }

    get buttonAcceptPolicy() {
        return $('#onetrust-accept-btn-handler');
    }

    get loader() {
        return $('.loader');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async closeModalPolicy() {
        await this.buttonAcceptPolicy.waitForDisplayed({timeout: 30000});
        await this.buttonAcceptPolicy.click();
        if( await this.buttonAcceptPolicy.isDisplayedInViewport()) {
            await this.buttonAcceptPolicy.click();
        }
    }

    async fillPersonalInformation() {
        await this.inputDocument.waitForDisplayed();
        await this.inputDocument.setValue(pure.document.brazilianCitizenNumber());
        await this.inputName.setValue(pure.name.findName(1));
        await this.inputBirthday.setValue('10102000');
        await this.selectGender.selectByAttribute('value', 'Female');
        await this.inputTelephone.setValue(pure.phone.phoneNumber('119########'));
        await this.inputEmail.setValue(pure.internet.email());
        await this.inputPassword.setValue('pass213292');
        await this.inputPasswordConfirmation.setValue('pass213292');
        await this.closeModalPolicy();
        await this.buttonSubmit[0].scrollIntoView();
        await this.buttonSubmit[0].click();
    }

    async fillAddressInformation() {
        await this.inputZipCode.waitForDisplayed();
        await this.inputZipCode.setValue('03004010');
        await browser.keys('Tab');
        await this.loader.waitForDisplayed({reverse: true, timeout: 10000});
        await this.inputNumber.setValue(pure.random.number({min: 0, max: 1000}));
        await this.selectHouseType.waitForClickable();
        await this.selectHouseType.selectByAttribute('value', '1');
        await this.checkboxTerms[1].click();
        await this.buttonSubmit[1].waitForClickable();
        await this.buttonSubmit[1].click();
    }

    async signup() {
        await this.fillPersonalInformation();
        await this.fillAddressInformation();
    }

}

module.exports = new CreateAccountPage();
