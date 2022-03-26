class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
            <div class="header-logo">Memes Shop</div> 
            <form>
            <input type="text" value="" placeholder="Search" autofocus> 
            <input type="button" value=" " title="Отменить поиск">
            <input  type="submit" value=" " title="Начать поиск">
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
