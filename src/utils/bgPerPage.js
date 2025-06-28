
export function bgPerPage() {
    const backgorund = document.querySelector('.kits');
    const titleColor = document.querySelector('container-kits .kits .title');
    const page = document.body.dataset.page;

    switch (page) {
        case 'home':
            backgorund?.classList.add('bg-emerald', 'title-light');
            break;
        case 'allCategories':
            backgorund?.classList.add('bg-light-brown', 'title-dark');
            break;
        default:
            break;
    }
};
