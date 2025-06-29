const baseUrl = window.BASE_URL;

fetch(`${baseUrl}/src/components/header/header.html`)
.then(res => res.text())
.then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    const template = doc.querySelector('#header-template');
    const clone = template.content.cloneNode(true);

    
    document.querySelector('.header').appendChild(clone);

    const logo = document.querySelectorAll('.logo');
    const iconMenu = document.querySelector('.icon-menu');
    const iconSearch = document.querySelector('.icon-search');
    const iconProfile = document.querySelector('.icon-profile');
    const linkLogin = document.querySelector('.link-login');
    const goToHome = document.querySelectorAll('.navbar .link');

    logo.forEach(img => {
        img.src = `${baseUrl}/public/assets/img/icons/logo.png`;
    })

    goToHome.forEach(home => {
        home.href = `${baseUrl}`;
    })

    iconMenu.src = `${baseUrl}/public/assets/img/icons/menu-hamburguer.svg`;
    iconSearch.src = `${baseUrl}/public/assets/img/icons/search-icon.svg`;
    iconProfile.src = `${baseUrl}/public/assets/img/icons/profile-icon.svg`;
    linkLogin.href = `${baseUrl}/src/pages/login/login.html`;
})
.catch(err => console.log(err));