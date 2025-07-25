export default class ProductsPage {
    /**
   * @param {import('playwright').Page} page
   */
    constructor(page) {
        this.page = page;
        this.searchInput = this.page.locator('#search_product');
        this.submitSearchButton = this.page.locator('#submit_search');
        this.productItems = this.page.locator('.features_items');
        this.cartModalLabel = this.page.locator('.modal-body .text-center').nth(0);
        this.cartModalViewCartLink = this.page.locator('.modal-body a[href="/view_cart"]')
    }
    async enterSearchText(searchText) {
        await this.searchInput.fill(searchText);
    }

    async clickSubmitSearch() {
        await this.submitSearchButton.click();
    }

    async addItemToCartByIndex(itemIndex) {
        await this.productItems.locator('.col-sm-4').nth(itemIndex).locator('.productinfo .add-to-cart').click();
    }

    async clickViewCart() {
        await this.cartModalViewCartLink.click();
    }
}