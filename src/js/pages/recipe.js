const getLocationId = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.recipe__single');
const renderDetails = async () => {
    const res = await fetch('https://what-do-i-eat-today-api.herokuapp.com/recipes/' + getLocationId);
    if (!res.ok) {
        window.location.replace(realPath);
    }
    const recipe = await res.json();
    let template = `<article class="recipe">
                    <header class="recipe__header" style="background-image: url(${recipe.imageUrl ? recipe.imageUrl : "https://source.unsplash.com/random/300×300/?fruit"})">
                        <h3 class="title">${recipe.name}</h3>
                        <h4 class="author">Image by: ${recipe.author}</h4>
                        <svg height="128" width="2000" xmlns="http://www.w3.org/2000/svg" x="2000" y="128" viewBox="0 0 2000 128"  xml:space="preserve">
                            <path opacity="0.2" fill="#fff" d="M1999.5,22.2c-346-0.6-524.6-4.7-878.8,4.4c-286.6,7.4-442.3,54-608.1,51.2 C307.3,74.3,202.5,5-0.5,28.1v100.4l2000-0.5V22.2z"></path>
                            <path opacity="0.2" fill="#fff" d="M-0.3,46.1C251,15.3,440.9,84.7,499.6,98.4c54.7,12.8,122.5,12,186.7-5.3 c154.2-41.6,315.5-70.9,475.2-67.5s324.6,22.4,484.3,19.7c133-2.3,302.8,1.7,352.8,3.7c0,21.3,0,80,0,80H-0.5L-0.3,46.1z"></path>
                            <path opacity="0.4" fill="#fff" d="M2000,41.2c-139.8-12.7-219.9-10.8-360.2-11.2c-285.5-0.8-487.5,18-736.2,51.1 C647,115.4,546.7,116.4,199.2,53.6C140.3,43,59.5,45.6-0.5,52.3V130h2000L2000,41.2z"></path>
                            <path fill="#fff" d="M1634.6,50.1c-193.8,11.9-366.9,24.9-569,50c-110.2,13.7-221.2,21.5-332.3,19.6 c-187-3.3-344.5-29.7-560.9-69.8c-122.2-22.6-172.8-4-172.8-4V130h1998V46C1997.5,46,1831,38.1,1634.6,50.1z"></path>
                        </svg>
                    </header>
                    
                    <main class="recipe__body container" >
                        <div class="recipe__body__description">
                            <h3 class="uppercase">description</h3>
                            ${recipe.description}
                        </div>
                        
                        <div class="recipe__body__ingredients">
                            <h3 class="uppercase">ingredients</h3>
                            ${recipe.ingredients}
                       </div>
                       
                        <div class="recipe__body__method">
                            <h3 class="uppercase">method</h3>
                            ${recipe.method}
                        </div>
                    </main>
                  </article>`;
    container.innerHTML = template;
}


if (container) {
    window.addEventListener('DOMContentLoaded', renderDetails);
}
