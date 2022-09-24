import {realPath} from "../global/path";

const loader = document.querySelector('#loader');
const container = document.querySelector('.recipes');


const renderRecipes = async () => {
    let uri = 'https://what-do-i-eat-today-api.herokuapp.com/recipes?_sort=Name&_order=asc';
    const res = await fetch(uri);
    const recipes = await res.json();
    if (loader) {
        loader.style.display = 'none';
    }
    let template = '';
    recipes.forEach(recipe => {
        const sliceDescription = recipe.description ? recipe.description.slice(0, 100) : "Read More about it";
        template += `
            <a class="card" href="${realPath}recipe.html?id=${recipe.id}">
                <article class="card__background" style="background-image: url(${recipe.imageUrl ? recipe.imageUrl : "https://source.unsplash.com/random/300×300/?fruit"})"></article>
                <div class="card__content">
                    <p class="card__author">${recipe.author}</p>
                    <h3 class="card__heading">${recipe.name}</h3>
                    <p class="content">${sliceDescription}</p>
                </div>
            </a>      
    `
    });

    if (container) {
        container.innerHTML = template;
    }
}
window.addEventListener('DOMContentLoaded', () => renderRecipes());