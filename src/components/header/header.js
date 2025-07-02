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

        logo.forEach(img => {
            img.src = `${baseUrl}/public/assets/img/icons/logo.png`;
        })

        iconMenu.src = `${baseUrl}/public/assets/img/icons/menu-hamburguer.svg`;
        iconSearch.src = `${baseUrl}/public/assets/img/icons/search-icon.svg`;
        iconProfile.src = `${baseUrl}/public/assets/img/icons/profile-icon.svg`;

        const buttons = document.querySelectorAll('[data-btn]');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const menuHamburguer = document.querySelector('.sublist');

                if (button.getAttribute('data-btn') === 'menu') {
                    document.querySelector('body').style.overflowY = 'hidden';
                    menuHamburguer.style.left = '0';
                }

                if (button.getAttribute('data-btn') === 'close') {
                    document.querySelector('body').style.overflowY = 'auto';
                    menuHamburguer.style.left = '-100%';
                }
            });
        });
    })
    .catch(err => console.log(err));