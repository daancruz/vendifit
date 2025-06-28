
// import { handleCarouselArrow } from '../../../src/utils/handleCarouselArrow.js';
const baseUrl = window.BASE_URL;
const container = document.querySelector('#main');
const page = document.body.dataset.page;
fetch(`${baseUrl}/data/refeicao.json`)
    .then(async response => {

        const data = await response.json();
        const res = await fetch(`${baseUrl}/src/components/cards/refeicao/cardRefeicao.html`);
        const htmlString = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const cardRefeicoesTemplate = doc.querySelector('#cardRefeicoes-template');
        const cardRefeicoesCardTemplate = doc.querySelector('#cardRefeicoes-card-template');
        Object.entries(data.categorias).forEach(([categoriaName, refeicoes], index) => {
            const cardRefeicoesTemplateClone = cardRefeicoesTemplate.content.cloneNode(true);

            const section = cardRefeicoesTemplateClone.querySelector('.container-refeicoes');
            const title = section.querySelector('.title h3');
            const verTodas = section.querySelector('.title a');
            if(page === 'allCategories') {
                verTodas.remove();
            }
            const cards = section.querySelector('.cards');

            const sectionId = `refeicoes-${index}`;
            section.dataset.id = sectionId;

            title.textContent = categoriaName
                .replace(/_/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase())
                .replace(/cao\b/g, 'ção');

            refeicoes.forEach(refeicao => {
                const cardClone = cardRefeicoesCardTemplate.content.cloneNode(true);
                const card = cardClone.querySelector('.card');

                card.dataset.refeicaoId = refeicao.id;

                card.querySelector('img').src = `${baseUrl}/${refeicao.image}`;

                card.querySelector('img').onerror = () => {
                    card.querySelector('img').src = `${baseUrl}/public/assets/img/default/no-image.svg`;
                };

                card.querySelector('.tag').textContent = `#${refeicao.tag}`;
                card.querySelector('.description').textContent = refeicao.description;
                card.querySelector('.price').textContent = `R$ ${refeicao.value.toFixed(2).replace('.', ',')}`;
                card.querySelector('.weight').textContent = `${refeicao.weight}g`;

                cards.appendChild(cardClone);
            });

            container.appendChild(cardRefeicoesTemplateClone);

            // handleCarouselArrow();
        });
        const bgSection = document.querySelectorAll('.container-refeicoes');
        bgSection.forEach(bg => {
            bg.classList.add('bg-light-brown', 'title-dark');
            bg.style.margin = '16px 0';
            bg.style.padding = '32px 16px';

        })
    });
