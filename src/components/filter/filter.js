const baseUrl = window.BASE_URL;
const page = document.body.dataset.page;

fetch(`${baseUrl}/src/components/filter/filter.html`)
    .then(res => res.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");

        const template = doc.querySelector('#filter-template');
        const clone = template.content.cloneNode(true);
        if(page === 'allCategories') {
            document.querySelector('#main').appendChild(clone);
        }
        const btnFilterBasica = document.querySelector('#btn-filter-basica');
        const btnFilterGanhoDeMassa = document.querySelector('#btn-filter-ganho-de-massa');
        const btnFilterVegano = document.querySelector('#btn-filter-vegano');
        const btnFilterEmagrecimento = document.querySelector('#btn-filter-emagrecimento');
        const btnFilterManutencaoDePeso = document.querySelector('#btn-filter-manutencao-de-peso');
        const btnFilterKits = document.querySelector('#btn-filter-kits');

        btnFilterBasica.href = `${baseUrl}/view/allCategories.html#basica`;
        btnFilterGanhoDeMassa.href = `${baseUrl}/view/allCategories.html#ganho-de-massa`;
        btnFilterVegano.href = `${baseUrl}/view/allCategories.html#vegano`;
        btnFilterEmagrecimento.href = `${baseUrl}/view/allCategories.html#emagrecimento`;
        btnFilterManutencaoDePeso.href = `${baseUrl}/view/allCategories.html#manutencao-de-peso`;
        btnFilterKits.href = `${baseUrl}/view/allCategories.html#container-kits`;

        btnFilterBasica.addEventListener('click', () => {
            btnFilterBasica.classList.add('active');
            btnFilterGanhoDeMassa.classList.remove('active');
            btnFilterVegano.classList.remove('active');
            btnFilterEmagrecimento.classList.remove('active');
            btnFilterManutencaoDePeso.classList.remove('active');
            btnFilterKits.classList.remove('active');
        });
        btnFilterGanhoDeMassa.addEventListener('click', () => {
            btnFilterBasica.classList.remove('active');
            btnFilterGanhoDeMassa.classList.add('active');
            btnFilterVegano.classList.remove('active');
            btnFilterEmagrecimento.classList.remove('active');
            btnFilterManutencaoDePeso.classList.remove('active');
            btnFilterKits.classList.remove('active');
        });
        btnFilterVegano.addEventListener('click', () => {
            btnFilterBasica.classList.remove('active');
            btnFilterGanhoDeMassa.classList.remove('active');
            btnFilterVegano.classList.add('active');
            btnFilterEmagrecimento.classList.remove('active');
            btnFilterManutencaoDePeso.classList.remove('active');
            btnFilterKits.classList.remove('active');
        });
        btnFilterEmagrecimento.addEventListener('click', () => {
            btnFilterBasica.classList.remove('active');
            btnFilterGanhoDeMassa.classList.remove('active');
            btnFilterVegano.classList.remove('active');
            btnFilterEmagrecimento.classList.add('active');
            btnFilterManutencaoDePeso.classList.remove('active');
            btnFilterKits.classList.remove('active');
        });
        btnFilterManutencaoDePeso.addEventListener('click', () => {
            btnFilterBasica.classList.remove('active');
            btnFilterGanhoDeMassa.classList.remove('active');
            btnFilterVegano.classList.remove('active');
            btnFilterEmagrecimento.classList.remove('active');
            btnFilterManutencaoDePeso.classList.add('active');
            btnFilterKits.classList.remove('active');
        });
        btnFilterKits.addEventListener('click', () => {
            btnFilterBasica.classList.remove('active');
            btnFilterGanhoDeMassa.classList.remove('active');
            btnFilterVegano.classList.remove('active');
            btnFilterEmagrecimento.classList.remove('active');
            btnFilterManutencaoDePeso.classList.remove('active');
            btnFilterKits.classList.add('active');
        });
    });
