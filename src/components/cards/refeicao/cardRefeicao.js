import { handleCarouselArrow } from '../../../utils/handleCarouselArrow.js';
const baseUrl = window.BASE_URL;
const container = document.querySelector('#main');
const page = document.body.dataset.page;


fetch(`${baseUrl}/data/refeicao.json`)
    .then(res => res.json())
    .then(data => {

        return fetch(`${baseUrl}/src/components/cards/refeicao/cardRefeicao.html`)
            .then(res => res.text())
            .then(htmlString => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, 'text/html');

                const cardRefeicoesTemplate = doc.querySelector('#cardRefeicoes-template');
                const cardRefeicoesCardTemplate = doc.querySelector('#cardRefeicoes-card-template');

                const cardRefeicoesTemplateClone = cardRefeicoesTemplate.content.cloneNode(true);
            // INICIO LINK VER TODOS
                const verTodasLink = cardRefeicoesTemplateClone.querySelector('.title a');
                verTodasLink.href = `${baseUrl}/view/allCategories.html`;
            // FIM LINK VER TODOS
                const cards = cardRefeicoesTemplateClone.querySelector('.cards');
                Object.entries(data.categorias).forEach(([_, refeicoes]) => {
                    if (page === 'home') {
                        const refeicao = refeicoes[0];
                        const cardClone = cardRefeicoesCardTemplate.content.cloneNode(true);
                        cardClone.querySelector('.card').dataset.refeicaoId = refeicao.id;
                        cardClone.querySelector('.card img').src = `${baseUrl}/${refeicao.image}`;
                        cardClone.querySelector('.card img').onerror = handleImageError;
                        cardClone.querySelector('.card .tag').textContent = `#${refeicao.tag}`;
                        cardClone.querySelector('.card .description').textContent = refeicao.description;
                        cardClone.querySelector('.card .price').textContent = `R$ ${refeicao.value.toFixed(2)}`;
                        cardClone.querySelector('.card .weight').textContent = `${refeicao.weight}g`;

                        cards.appendChild(cardClone);
                    } else {
                        refeicoes.forEach(refeicao => {
                            const cardClone = cardRefeicoesCardTemplate.content.cloneNode(true);
                            cardClone.querySelector('.card').dataset.refeicaoId = refeicao.id;
                            cardClone.querySelector('.card img').src = refeicao.image;
                            cardClone.querySelector('.card img').onerror = handleImageError;
                            cardClone.querySelector('.card .tag').textContent = `#${refeicao.tag}`;
                            cardClone.querySelector('.card .description').textContent = refeicao.description;
                            cardClone.querySelector('.card .price').textContent = `R$ ${refeicao.value.toFixed(2)}`;
                            cardClone.querySelector('.card .weight').textContent = `${refeicao.weight}g`;

                            cards.appendChild(cardClone);
                        })
                    }
                });

                container.appendChild(cardRefeicoesTemplateClone);

                handleCarouselArrow(
                    '.container-refeicoes .cards',
                    '.container-refeicoes .carousel-btn.prev',
                    '.container-refeicoes .carousel-btn.next'
                );
            })
    })
