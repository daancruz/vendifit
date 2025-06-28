export function handleCarouselArrow(containerSelector, prevBtnSelector, nextBtnSelector) {
    const cardWidth = 136;
    const padding = 16;
    const scrollAmount = cardWidth + padding;

    const container = document.querySelector(containerSelector);
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);

    // if(!prevBtn || !nextBtn || !container) return;

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
