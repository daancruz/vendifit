const port = 5500;

const repositoryName = 'vendifit';
const isGhPages = location.hostname.includes('github.io');

const basePath = isGhPages ? `/${repositoryName}` : '';

window.BASE_URL = location.origin + basePath;

const links = [
    '/src/assets/styles/css/main.css',
];

links.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = window.BASE_URL + path;
    document.head.appendChild(link);
});

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
