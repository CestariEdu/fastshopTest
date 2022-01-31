const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');
const ProductPage = require('../pageobjects/product.page');
const AuthenticationPage = require('../pageobjects/authentication.page');
const createAccountPage = require('../pageobjects/createAccount.page');
const CartPage = require('../pageobjects/cart.page');

// ENV Variables
const document = process.env.DOCUMENT;
const password = process.env.PASSWORD;

describe('Search and buy Macbook Pro', () => {
    it('using an existing account', async () => {
        await HomePage.open();
        await HomePage.searchProduct('MacBook Pro Apple 13,3" Intel Core i5 (16GB 1TB) Cinza-Espacial');
        await expect(SearchPage.titlePage).toHaveTextContaining('MacBook Pro Apple 13');
        await expect(SearchPage.titleProductName[0]).toHaveTextContaining('MacBook Pro Apple');
        await SearchPage.openProduct();
        await ProductPage.buyProduct();
        await AuthenticationPage.login(document, password);
        await CartPage.openCart();
        await expect(CartPage.spanProductTitle[0]).toHaveTextContaining('MacBook Pro Apple');
        await CartPage.iconBin.click();
    });

    it('using a new account', async () => {
        await browser.reloadSession();
        await HomePage.open();
        await HomePage.searchProduct('MacBook Pro Apple 13,3" Intel Core i5 (16GB 1TB) Cinza-Espacial');
        await expect(SearchPage.titlePage).toHaveTextContaining('MacBook Pro Apple 13');
        await expect(SearchPage.titleProductName[0]).toHaveTextContaining('MacBook Pro Apple');
        await SearchPage.openProduct();
        await ProductPage.buyProduct();
        await AuthenticationPage.buttonCreateAccount.click();
        await createAccountPage.signup();
        await CartPage.openCart();
        await expect(CartPage.spanProductTitle[0]).toHaveTextContaining('MacBook Pro Apple');
        await CartPage.iconBin.click();
    });
});


