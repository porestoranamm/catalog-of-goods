class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
            <div class="header-logo">Memes Shop</div> 
            <div class="cntr">
            <div class="cntr-innr">
            <label class="search" for="inpt_search">
            <input id="inpt_search" type="text" />
            </label>
            <p>Hover to see the magic.</p>
            </div>
            <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
            🗑 ${count}
                </div>
            </div>
        
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
