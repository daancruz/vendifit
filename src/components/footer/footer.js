const baseUrl = window.BASE_URL;

fetch(`${baseUrl}/src/components/footer/footer.html`)
.then(res => res.text())
.then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    const template = doc.querySelector('#footer-template');
    const clone = template.content.cloneNode(true);
    document.querySelector('.footer').appendChild(clone);
    const logo = document.querySelector('.logo a img');
    const iconFacebook = document.querySelector('.icon-facebook');
    const iconInstagram = document.querySelector('.icon-instagram');
    const iconX = document.querySelector('.icon-x');
    const goToHome = document.querySelectorAll('.logo a');

    goToHome.forEach(home => {
        home.href = `${baseUrl}`;
    })

    logo.src = `${baseUrl}/public/assets/img/icons/logo.png`;
    iconFacebook.src = `${baseUrl}/public/assets/img/icons/facebook.svg`;
    iconInstagram.src = `${baseUrl}/public/assets/img/icons/instagram.svg`;
    iconX.src = `${baseUrl}/public/assets/img/icons/x.svg`;
})
.catch(err => console.log(err));