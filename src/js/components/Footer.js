class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                 <footer class="footer container text-center">
                    <p>Copyright © 2022 - All right reserved by VEGIZ 🌱</p>
                </footer>
            `
    }
}

customElements.define("custom-footer", Footer)