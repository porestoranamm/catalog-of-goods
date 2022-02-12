class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage)
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        const index = products.indexOf(id);

        products.push(id);
        localStorage.setItem(this.keyName, JSON.stringify(products));
    }
}

const localStorageUtil = new LocalStorageUtil();

localStorageUtil.putProducts('el1');
