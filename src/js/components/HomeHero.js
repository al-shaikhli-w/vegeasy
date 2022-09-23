class HomeHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <section class="about container">
                    <h1 class="about__title">ABOUT VEGIZ</h1>
                    <p class="about__disc">
                        Vegiz is platform that help you to 🥘 without any experiences 🤞, resolving the issue of finding 🌱 recipes.
                    </p>
                </section>
            `
    }
}

customElements.define("home-hero", HomeHero)