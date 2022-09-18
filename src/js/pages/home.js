const loader = document.querySelector('#loader');
const container = document.querySelector('.recipes');
// const searchForm = document.querySelector('.search');

const renderRecipes = async (term) => {
    let uri = 'https://what-do-i-eat-today-api.herokuapp.com/recipes?_sort=Name&_order=asc';
    if (term) {
        uri += `&q=${term}`
    }

    const res = await fetch(uri);
    const recipes = await res.json();
    if (loader){
        loader.style.display = 'none';
    }

    let template = '';
    recipes.forEach(recipe => {
        const sliceDescription = recipe.description ? recipe.description.slice(0, 100) : "Read More about it";
        template += `
      <article class="recipe">
        <header class="recipe__title flex">
            <h3>${recipe.name}</h3>
            <button class="add-to-fav">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15" height="15">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
            </button>
        </header>
        <main class="recipe__body">
            <small>${recipe.author}</small>
            <p>${sliceDescription}...</p>
        </main>
        <footer class="recipe__footer">
            <a class="btn btn__default btn--details" href="${window.location}recipe.html?id=${recipe.id}" target="_self">Details</a>
        </footer>
      </article>
    `
    });

    if (container){
        container.innerHTML = template;
    }
}


// search
// searchForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     renderPosts(searchForm.term.value.trim());
// })

window.addEventListener('DOMContentLoaded', () => renderRecipes());