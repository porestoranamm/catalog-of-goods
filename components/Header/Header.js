class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
            <div class="header-logo">Memes Shop</div> 
            <form>
            <div class="header-search">
            <input type="search" id="mySearch" name="q">
            <button>Search</button>
            </div>
            </form>
            <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
            🗑 ${count}
                </div>
            </div>
        
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
