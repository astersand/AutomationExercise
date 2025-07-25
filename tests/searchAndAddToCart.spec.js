import { test, expect } from '@playwright/test';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';

test.use({ storageState: './AuthFile.json' });

test.beforeEach('Open the url', async ({ page }) => {
    await page.goto('/products');
})

test('Search and add items to cart', async ({ page }) => {
    let productsPage = new ProductsPage(page);
    let cartPage = new CartPage(page);
    await productsPage.enterSearchText('sleeves top');
    await productsPage.clickSubmitSearch();
    await productsPage.addItemToCartByIndex(2);
    expect(productsPage.cartModalLabel).toHaveText('Your product has been added to cart.');
    await productsPage.clickViewCart();
    await cartPage.assertItemDescription(0, 'Sleeves Top and Short - Blue & Pink');
    await cartPage.assertItemPrice(0, 'Rs. 478');
    await cartPage.assertItemQuantity(0, '1');
    await cartPage.assertItemTotal(0, 'Rs. 478');
})