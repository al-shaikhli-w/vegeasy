import {realPath} from "../global/path";

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <header class="header">
                    <div class="header__container">
                         <div class="header__logo">
                            <a href="${realPath}" target="_self" class="logo_container">
                                <img src="./image/apple-touch-icon.png" width="180" height="180">
                             </a>
                         </div>
                        <nav class="header__navbar flex">
                            <a class="active" href="${realPath}">Home</a>
                            <a href="${realPath}create.html">create recipe</a>
                        </nav>
                    </div>
                </header>
            `
    }
}

customElements.define("custom-header", Header)