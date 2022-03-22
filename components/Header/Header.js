class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
            <div class="header-logo">Memes Shop</div> 
            <div class="box-search">
            <div class"header-search">
            <input type="search" id="search" placeholder="Поиск..." />
            <button class="icon"><i class="fa fa-search"></i></button>
            </div>
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
