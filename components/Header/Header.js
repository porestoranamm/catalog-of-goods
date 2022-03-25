class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
            <div class="header-logo">Memes Shop</div> 
            <form id="content">
            <input type="text" name="input" class="input" id="search-input">
            <button type="reset" class="search" id="search-btn"></button>
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

const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
searchBtn.classList.toggle("close");
input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);