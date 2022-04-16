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
            <input class="search-txt" type="text"  name="" placeholder="
            Type to search">
            <a class="search-btn" href="#">
            <i class="fa-solid fa-magnifying-glass-location"></i>
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
