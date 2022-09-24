import {realPath} from "../global/path";

class Back2Home extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <section class="container text-center">
                    <a href="${realPath}" target="_self" class="back2Home">Back to Home Page</a>
                </section>
            `
    }
}

customElements.define("back-to-home", Back2Home)