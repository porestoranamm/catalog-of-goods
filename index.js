function render() {

    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);

}

render();