class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
            <div class="header-logo">Memes Shop</div> 
            <form> 
            <div class="search-box">
            <input class="header-search" type="search" id="mySearch" name="q">
            <a class="search-btn" href="#">
            <i class="fa-solid fa-magnifying-glass"></i>
            </a>
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
