

import { bgPerPage } from "../../../utils/bgPerPage.js";
const baseUrl = window.BASE_URL;
const container = document.querySelector('#main');

fetch(`${baseUrl}/data/kit.json`)
    .then(res => res.json())
    .then(data => {

        return fetch(`${baseUrl}/src/components/cards/kit/cardKit.html`)
            .then(res => res.text())
            .then(htmlString => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, 'text/html');

                const cardKitsTemplate = doc.querySelector('#cardKits-template');
                const cardKitsCardTemplate = doc.querySelector('#cardKits-card-template');

                const cardKitsTemplateClone = cardKitsTemplate.content.cloneNode(true);
                const cards = cardKitsTemplateClone.querySelector('.cards');
                const banner = cardKitsTemplateClone.querySelector('.banner-kit img');
                banner.src = `${baseUrl}/public/assets/img/banner/bannerEmagrecimento.jpeg`;

                Object.entries(data.categorias).forEach(([_, kits]) => {
                    const cardClone = cardKitsCardTemplate.content.cloneNode(true);

                    kits.forEach(kit => {
                        cardClone.querySelector('.card').dataset.kitId = kit.id;
                        cardClone.querySelector('.card img').src = kit.image;
                        cardClone.querySelector('.card img').onerror = handleImageError;
                        cardClone.querySelector('.card .content .header .title').textContent = `Kit 7 refeições ${kit.title}`;
                        cardClone.querySelector('.card .content .description').textContent = kit.description;

                        if (kit.badge != "" && kit.offer == "") {
                            cardClone.querySelector('.card .content .header .badge').classList.add('badge-new');
                            cardClone.querySelector('.card .content .header .badge').textContent = kit.badge;
                            cardClone.querySelector('.card .info .values .price').textContent = `R$ ${kit.value.toFixed(2)}`;
                        } else if (!isNaN(kit.offer) && kit.offer != "") {
                            const offer = (parseInt(kit.offer) / 100) * kit.value;
                            var newValue = kit.value - offer;

                            cardClone.querySelector('.card .content .header .badge').textContent = `${kit.offer}% OFF`;
                            cardClone.querySelector('.card .content .header .badge').classList.add('badge-offer');
                            cardClone.querySelector('.card .info .values .oldPrice').textContent = `R$ ${kit.value.toFixed(2)}`;
                            cardClone.querySelector('.card .info .values .price').textContent = `R$ ${newValue.toFixed(2)}`;
                        } else {
                            cardClone.querySelector('.card .content .header .badge').classList.add('hidden');
                            cardClone.querySelector('.card .info .values .price').textContent = `R$ ${kit.value.toFixed(2)}`;
                        }
                        cards.appendChild(cardClone);
                    })

                })
                container.appendChild(cardKitsTemplateClone)
                bgPerPage();
            })
    })
