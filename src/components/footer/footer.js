const baseUrl = window.BASE_URL;

fetch(`${baseUrl}/src/components/footer/footer.html`)
.then(res => res.text())
.then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    const template = doc.querySelector('#footer-template');
    const clone = template.content.cloneNode(true);
    document.querySelector('.footer').appendChild(clone);
})
.catch(err => console.log(err));