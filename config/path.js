const repositoryName = 'vendifit';

const isGhPages = location.hostname.includes('github.io');

const basePath = isGhPages ? `/${repositoryName}` : '';

window.BASE_URL = location.origin + basePath;

const baseUrl = window.BASE_URL;

const icon = [
    `${baseUrl}/public/assets/img/icons/favicon.ico`,
];

icon.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = path;
    link.type = 'image/x-icon';
    document.head.appendChild(link);
});

// const css = [
//     '/src/assets/css/main.css',
// ];

// css.forEach(path => {
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = window.BASE_URL + path;
//     document.head.appendChild(link);
// });

const scripts = [
    `${baseUrl}/src/utils/loading.js`,
    `${baseUrl}/src/assets/js/globalLinks.js`,
    `${baseUrl}/src/components/header/header.js`,
    `${baseUrl}/src/components/footer/footer.js`,
    `${baseUrl}/src/utils/handleImageError.js`,
];

scripts.forEach(path => {

    const script = document.createElement('script');
    script.type = 'module';
    script.src = path;
    // script.defer = true;
    document.head.appendChild(script);
});
