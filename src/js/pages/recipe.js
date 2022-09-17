const getLocationId = new URLSearchParams(window.location.search).get('id');
const deleteBtn = document.querySelector('#delete');
const renderDetails = async () => {
    if (window.location.pathname == "/recipe.html") {
        const container = document.querySelector('.recipe__single');

        const res = await fetch('https://what-do-i-eat-today-api.herokuapp.com/recipes/' + getLocationId);
        if (!res.ok) {
            window.location.replace('/');
        }
        const recipe = await res.json();

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

        if (container) {
            container.innerHTML = template;
        }
    }
}


window.addEventListener('DOMContentLoaded', renderDetails);
