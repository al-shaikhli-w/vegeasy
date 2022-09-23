const getLocationId = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.recipe__single');
const back2Home = document.querySelector('.back2Home');
const renderDetails = async () => {
    const res = await fetch('https://what-do-i-eat-today-api.herokuapp.com/recipes/' + getLocationId);
    if (!res.ok) {
        window.location.replace('/');
    }
    const recipe = await res.json();
    let template = `<article class="recipe">
                    <header class="recipe__title">
                        <h3>${recipe.name}</h3>
                         <small>by: ${recipe.author}</small>
                    </header>
                    <section class="recipe__body">
                        <p class="recipe__body__description">${recipe.description}...</p>
                        <div class="recipe__body__ingredients">
                            <p class="item">${recipe.ingredients}</p>
                       </div>
                        <div class="recipe__body__method">
                            <p class="item">${recipe.method}</p>
                        </div>
                    </section>
                  </article>`;
    container.innerHTML = template;
}


// TODO Delete the recipes 

function backToHome() {
    back2Home.href = window.location.hostname + window.location.pathname;
}

// add to favorite list
const addToFav = document.querySelector('.add2fav__button');
if (addToFav) {
    addToFav.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event)
    })
}

if (container) {
    window.addEventListener('DOMContentLoaded', renderDetails);
    window.addEventListener('click', backToHome)
}
