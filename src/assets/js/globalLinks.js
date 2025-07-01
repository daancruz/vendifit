window.GlobalLinks = {
    login: `${baseUrl}/view/login.html`,
    register: `${baseUrl}/view/register.html`,
    home: `${baseUrl}/`,
    allCategories: `${baseUrl}/view/allCategories.html`,
    basica: `${baseUrl}/view/allCategories.html#basica`,
    ganhoDeMassa: `${baseUrl}/view/allCategories.html#ganho-de-massa`,
    vegano: `${baseUrl}/view/allCategories.html#vegano`,
    emagrecimento: `${baseUrl}/view/allCategories.html#emagrecimento`,
    manutencaoDePeso: `${baseUrl}/view/allCategories.html#manutencao-de-peso`,
    kits: `${baseUrl}/view/allCategories.html#container-kits`,

    // BANNERS
    principal: `${baseUrl}/public/assets/img/banner/banner.jpeg`,
    error: `${baseUrl}/public/assets/img/banner/page-error.png`,
};

window.setGlobalLinks = function () {
    const elements = document.querySelectorAll('[data-link]');
    elements.forEach(element => {
        const key = element.getAttribute('data-link');
        const href = window.GlobalLinks[key];

        if(href){
            element.href = href;
        }
    });

    const banners = document.querySelectorAll('[data-banner]');
    banners.forEach(banner => {
        const key = banner.getAttribute('data-banner');
        const src = window.GlobalLinks[key];

        if(src){
            banner.src = src;
        }
    });
}

window.addEventListener('load', () => {
    window.setGlobalLinks();

    const observer = new MutationObserver(() => {
        window.setGlobalLinks();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
