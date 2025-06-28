const baseUrl = window.BASE_URL;

fetch(`${baseUrl}/src/components/header/header.html`)
.then(res => res.text())
.then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    const template = doc.querySelector('#header-template');
    const clone = template.content.cloneNode(true);

    
    document.querySelector('.header').appendChild(clone);

    const logo = document.querySelector('.logo');
    const iconMenu = document.querySelector('.icon-menu');
    const iconSearch = document.querySelector('.icon-search');
    const iconProfile = document.querySelector('.icon-profile');
    const goToHome = document.querySelectorAll('.nav .link');

    goToHome.forEach(home => {
        home.href = `${baseUrl}/`;
    })

    logo.src = `${baseUrl}/public/assets/img/icons/logo.png`;
    iconMenu.src = `${baseUrl}/public/assets/img/icons/menu-hamburguer.svg`;
    iconSearch.src = `${baseUrl}/public/assets/img/icons/search-icon.svg`;
    iconProfile.src = `${baseUrl}/public/assets/img/icons/profile-icon.svg`;
})
.catch(err => console.log(err));