class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <header class="header">
                    <div class="header__container">
                         <div class="header__logo">
                            <a href="/" target="_self" class="logo_container">
                                <img src="./image/apple-touch-icon.png" width="180" height="180">
                             </a>
                         </div>
                        <nav class="header__navbar flex">
                            <a class="active" href="/">Home</a>
                            <a href="/create">create recipe</a>
                        </nav>
                    </div>
                </header>
            `
    }
}

customElements.define("custom-header", Header)