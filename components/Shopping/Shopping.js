class Shopping {

    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, price,}) => {
            if(productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                    <td>⚡️ ${name}</td>
                    <td>${price.toLocaleString()} USD()</td>
                </tr>
                `;
            }
        });

        const html = `
            <div class="shopping-container">
                <table>
                    ${htmlCatalog}
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();