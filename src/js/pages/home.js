// javascript for index.html
const container = document.querySelector('.recipes');
// const searchForm = document.querySelector('.search');

const renderRecipes = async (term) => {
    console.log(term);
    let uri = 'https://what-do-i-eat-today-api.herokuapp.com/recipes?_sort=Name&_order=asc&_limit=8';
    if (term) {
        uri += `&q=${term}`
    }

    const res = await fetch(uri);
    const recipes = await res.json();
    console.log(recipes)

    let template = '';
    recipes.forEach(recipe => {
        const name = recipe.Name;
        const sliceDescription = recipe.Description ? recipe.Description.slice(0, 100) : "Read More about it";
        const author = recipe.Author;
        template += `
      <article class="recipe">
        <header class="recipe__title ${name.includes("Vegan") ? "vegan" : ""}">
            <h3>${name}</h3>
        </header>
        <main class="recipe__body">
            <small>${author}</small>
            <p>${sliceDescription}...</p>
        </main>
        <footer class="recipe__footer">
            <button class="add__to_fav">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15" height="15">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
            </button>
            <a class="btn btn__default btn__default--footer" href="${convertToSlug(name)}" target="_blank">Details</a>
        </footer>
      </article>
    `
    });

    container.innerHTML = template;
}


function convertToSlug(Text) {
    return Text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

// search
// searchForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     renderPosts(searchForm.term.value.trim());
// })

window.addEventListener('DOMContentLoaded', () => renderRecipes());