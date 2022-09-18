const getLocationId = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.recipe__single');

const renderDetails = async () => {
        const res = await fetch('https://what-do-i-eat-today-api.herokuapp.com/recipes/' + getLocationId);
        if (!res.ok) {
            window.location.replace('/');
        }
        const recipe = await res.json();
        console.log(recipe)
        let template = `<article class="recipe">
                    <header class="recipe__title flex">
                        <h3>${recipe.name}</h3>
                         <small>${recipe.author}</small>
                    </header>
                    <section class="recipe__body">
                        <p>${recipe.description}...</p>
                        <ul>
                            ${recipe.ingredients.map(item => {
                                return `<li>${item.replace(',', '')}</li>`
                            }).join('')}
                       </ul>
                        <ol>
                            ${recipe.method.map(item => {
                            return `<li>${item.replace(',', '')}</li>`
                            }).join('')}
                        </ol>
                    </section>
                  
                  </article>`;
            container.innerHTML = template;
}


if (container) {
    window.addEventListener('DOMContentLoaded', renderDetails);
}
