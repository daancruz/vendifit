const port = 5500;

const repositoryName = 'vendifit';
const isGhPages = location.hostname.includes('github.io');

const basePath = isGhPages ? `/${repositoryName}` : '';

window.BASE_URL = location.origin + basePath;

// const metas = [
//     { property: 'og:title', content: 'Vendifit - Refeições Fitness' },
//     { property: 'og:description', content: 'Encontre as melhores refeições fitness para sua rotina.' },
//     { property: 'og:image', content: `${baseUrl}/public/assets/img/icons/logo.png` },
//     { property: 'og:url', content: window.location.href },
//     { property: 'og:type', content: 'website' },
//     { property: 'og:locale', content: 'pt_BR' }
// ]   

// metas.forEach(data => {
//     const meta = document.createElement('meta');
//     meta.setAttribute('property', data.property);
//     meta.setAttribute('content', data.content);
//     document.head.appendChild(meta);
// });


const icon = [
    '/public/assets/img/icons/logo.png',
];

icon.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = window.BASE_URL + path;
    link.type = 'image/x-icon';
    document.head.appendChild(link);
});

// const css = [
//     '/src/assets/styles/css/main.css',
// ];

// css.forEach(path => {
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = window.BASE_URL + path;
//     document.head.appendChild(link);
// });

const scripts = [
    '/src/components/header/header.js',
    '/src/components/footer/footer.js',
    '/src/utils/handleImageError.js',
];

scripts.forEach(path => {

    const script = document.createElement('script');
    script.type = 'module';
    script.src = window.BASE_URL + path;
    // script.defer = true;
    document.head.appendChild(script);
});
