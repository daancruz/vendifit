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
    const linkKits = document.querySelectorAll('#link-kits');
    const linkBasica = document.querySelectorAll('#link-basica');
    const linkGanhoDeMassa = document.querySelectorAll('#link-ganho-de-massa');
    const linkVegano = document.querySelectorAll('#link-vegano');
    const linkEmagrecimento = document.querySelectorAll('#link-emagrecimento');
    const linkManutencaoDePeso = document.querySelectorAll('#link-manutencao-de-peso');
    const goToHome = document.querySelectorAll('#link-home');

    linkBasica.forEach(link => {
        link.href = linkBasica.href = `${baseUrl}/view/allCategories.html#basica`;
    });
    linkGanhoDeMassa.forEach(link => {
        link.href = linkGanhoDeMassa.href = `${baseUrl}/view/allCategories.html#ganho-de-massa`;
    });
    linkVegano.forEach(link => {
        link.href = linkVegano.href = `${baseUrl}/view/allCategories.html#vegano`;
    });
    linkEmagrecimento.forEach(link => {
        link.href = linkEmagrecimento.href = `${baseUrl}/view/allCategories.html#emagrecimento`;
    });
    linkManutencaoDePeso.forEach(link => {
        link.href = linkManutencaoDePeso.href = `${baseUrl}/view/allCategories.html#manutencao-de-peso`;
    });
    linkKits.forEach(link => {
        link.href = linkKits.href = `${baseUrl}/view/allCategories.html#container-kits`;
    });
    goToHome.forEach(home => {
        home.href = `${baseUrl}`;
    });

    logo.src = `${baseUrl}/public/assets/img/icons/logo.png`;
    iconFacebook.src = `${baseUrl}/public/assets/img/icons/facebook.svg`;
    iconInstagram.src = `${baseUrl}/public/assets/img/icons/instagram.svg`;
    iconX.src = `${baseUrl}/public/assets/img/icons/x.svg`;

})
.catch(err => console.log(err));
