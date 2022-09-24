import {realPath} from "../global/path";
const form = document.getElementById('create-recipe');
const formMessages = document.querySelector("#form__messages");
const formSubmitBtn = document.querySelector("#form__submit");
const recipeName = document.querySelector("#name");
const recipeAuthor = document.querySelector("#author");

function isValidation(context) {
    if (context !== ""){
        return context.toString().trim();
    }
}

if (form){

    recipeName.addEventListener("blur", e => {
        if (!isValidation(e.target.value)){
            formMessages.innerHTML = `<p> Name Fields is required, please check the Recipes name field </p>`;
        }else {
            formMessages.innerHTML = `<p style="color: #16a34a">✅ Name is Valid</p>`;
        }
    })
    recipeAuthor.addEventListener("blur", e => {
        if (!isValidation(e.target.value)){
            formMessages.innerHTML = `<p> Name Author is required, please check the Recipes Author field </p>`;
        }else {
            formMessages.innerHTML = `<p style="color: #16a34a">✅ Author is Valid</p>`;
            formSubmitBtn.removeAttribute("disabled");
        }
    })


    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const doc = {
            name: form.name.value.toString().trim(),
            author: form.author.value.toString().trim(),
            description: form.description.value.toString().trim(),
            imageUrl: form.imageUrl.value.toString().trim(),
            ingredients: form.ingredients.value.toString().trim(),
            method: form.method.value.toString().trim(),
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