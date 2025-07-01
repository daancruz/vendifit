const baseUrl = window.BASE_URL;
import { handleCarouselArrow } from '../../../utils/handleCarouselArrow.js';
const container = document.querySelector('#main');

fetch(`${baseUrl}/data/categoria.json`)
    .then(res => res.json())
    .then(data => {

        return fetch(`${baseUrl}/src/components/cards/categoria/cardCategoria.html`)
            .then(res => res.text())
            .then(htmlString => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, 'text/html');

                const cardCategoriasTemplate = doc.querySelector('#cardCategorias-template');
                const cardCategoriasCardTemplate = doc.querySelector('#cardCategorias-card-template');

                const cardCategoriasTemplateClone = cardCategoriasTemplate.content.cloneNode(true);
                const cards = cardCategoriasTemplateClone.querySelector('.cards');

                Object.entries(data).forEach(([_, categorias]) => {
                    categorias.forEach(categoria => {

                        const cardClone = cardCategoriasCardTemplate.content.cloneNode(true);
                        cardClone.querySelector('.card img').src = categoria.image;
                        cardClone.querySelector('.card img').onerror = handleImageError;
                        cardClone.querySelector('.card .content .title').textContent = categoria.name;
                        cardClone.querySelector('.card .content .description').textContent = categoria.description;
                        const categoriaName = categoria.name
                        .normalize('NFD')                    // separa os acentos
                        .replace(/[\u0300-\u036f]/g, '')     // remove os acentos
                        .replace(/[^a-zA-Z0-9 ]/g, '')       // remove caracteres especiais
                        .toLowerCase()                       // coloca tudo em minúsculas
                        .split(' ')                          // separa por espaços
                        .map((word, index) => {
                        if (index === 0) return word;
                        return word.charAt(0).toUpperCase() + word.slice(1);
                        })
                        .join('');
                        cardClone.querySelector('[data-link]').setAttribute('data-link', categoriaName)
                        
                        cards.appendChild(cardClone);
                    });

                    container.appendChild(cardCategoriasTemplateClone)
                    handleCarouselArrow(
                        '.container-categorias .cards',
                        '.container-categorias .carousel-btn.prev',
                        '.container-categorias .carousel-btn.next'
                    );
                });
            })
    });
    