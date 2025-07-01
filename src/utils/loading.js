window.addEventListener('load', () => {
    const loading = document.querySelector('[data-loading]');
    window.setGlobalLinks();

    const observer = new MutationObserver(() => {
        setTimeout(() => {
            loading.setAttribute('data-loading', false);
        }, 5000)
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});