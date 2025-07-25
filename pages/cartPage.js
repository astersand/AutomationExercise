import { expect } from "@playwright/test";

export default class CartPage {
    /**
   * @param {import('playwright').Page} page
   */

    constructor(page) {
        this.page = page;
        this.cartTable = this.page.locator('.table tbody');
        this.cartDescription = this.page.locator('.cart_description h4');
        this.cartPrice = this.page.locator('.cart_price');
        this.cartQuantity = this.page.locator('.cart_quantity')
        this.cartTotal = this.page.locator('.cart_total');
    }

    async assertItemDescription(rowIndex, description) {
        await this.page.waitForSelector('.cart_description h4');
        await expect(this.cartTable.locator('tr').nth(rowIndex).locator('.cart_description h4')).toHaveText(description);
    }

    async assertItemPrice(rowIndex, price) {
        await this.page.waitForSelector('.cart_price');
        await expect(this.cartTable.locator('tr').nth(rowIndex).locator('.cart_price')).toHaveText(price);
    }

    async assertItemQuantity(rowIndex, quantity) {
        await this.page.waitForSelector('.cart_quantity');
        await expect(this.cartTable.locator('tr').nth(rowIndex).locator('.cart_quantity')).toHaveText(quantity);
    }

    async assertItemTotal(rowIndex, total) {
        await this.page.waitForSelector('.cart_total');
        await expect(this.cartTable.locator('tr').nth(rowIndex).locator('.cart_total')).toHaveText(total);
    }
}