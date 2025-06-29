const baseUrl = window.BASE_URL;
export function handleCarouselArrow(containerSelector, prevBtnSelector, nextBtnSelector) {
    const cardWidth = 136;
    const padding = 16;
    const scrollAmount = cardWidth + padding;

    const container = document.querySelector(containerSelector);
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);

    const prevBtnIcon = document.querySelectorAll('.carousel-btn.prev img');
    prevBtnIcon.forEach(icon => {
        icon.src = `${baseUrl}/public/assets/img/icons/chevron-left.svg`;
    })
    const nextBtnIcon = document.querySelectorAll('.carousel-btn.next img');
    nextBtnIcon.forEach(icon => {
        icon.src = `${baseUrl}/public/assets/img/icons/chevron-right.svg`;
    })
    prevBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        })
    });

    nextBtn.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        })
    });
}
