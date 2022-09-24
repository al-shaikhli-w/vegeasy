import {realPath} from "../global/path";
const form = document.getElementById('create-recipe');

if ( form){
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const doc = {
            name: form.name.value,
            author: form.author.value,
            description: form.description.value,
            imageUrl: form.imageUrl.value,
            ingredients: form.ingredients.value,
            method: form.method.value,
        }
        await fetch('https://what-do-i-eat-today-api.herokuapp.com/recipes', {
            method: 'POST',
            body: JSON.stringify(doc),
            headers: { 'Content-Type': 'application/json' }
        });
        alert("Oahu you have new recipe :)");
        window.location.replace(realPath);
    });
}


