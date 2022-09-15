// javascript for details.html
const slug = new URLSearchParams(window.location.search).get('slug');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + slug);
    if (!res.ok) {
        window.location.replace("/");
    }
    const post = await res.json();

    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `

    container.innerHTML = template;
}

deleteBtn.addEventListener('click', async () => {
    const res = await fetch('http://localhost:3000/posts/' + slug, {
        method: 'DELETE'
    });
    window.location.replace("/");
})

window.addEventListener('DOMContentLoaded', renderDetails);