const baseUrl = window.BASE_URL;

fetch(`${baseUrl}/src/components/header/header.html`)
.then(res => res.text())
.then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    const template = doc.querySelector('#header-template');
    const clone = template.content.cloneNode(true);
    document.querySelector('.header').appendChild(clone);
})
.catch(err => console.log(err));