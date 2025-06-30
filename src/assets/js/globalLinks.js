const baseUrl = window.BASE_URL;

window.GlobalLinks = {
    login: `${baseUrl}/view/login.html`,
    register: `${baseUrl}/view/register.html`,
    home: `${baseUrl}/`,
    allCategories: `${baseUrl}/view/allCategories.html`,
    baiscas: `${baseUrl}/view/allCategories.html#basica`,
    ganhoDeMassa: `${baseUrl}/view/allCategories.html#ganho-de-massa`,
    vegano: `${baseUrl}/view/allCategories.html#vegano`,
    emagrecimento: `${baseUrl}/view/allCategories.html#emagrecimento`,
    manutencaoDePeso: `${baseUrl}/view/allCategories.html#manutencao-de-peso`,
};

window.addEventListener('load', () => {
    const linkMap = {
        'link-login' : 'login',
        'link-register' : 'register',
        'link-home' : 'home',
        'link-kits' : 'allCategories',
        'link-basica' : 'baiscas',
        'link-ganho-de-massa' : 'ganhoDeMassa',
        'link-vegano' : 'vegano',
        'link-emagrecimento' : 'emagrecimento',
        'link-manutencao-de-peso' : 'manutencaoDePeso',
    };
})