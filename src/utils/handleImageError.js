const baseUrl = window.BASE_URL;

const DEFAULT_IMAGE = `${baseUrl}/public/assets/img/default/no-image.svg`;

window.handleImageError =  function (event) {

    const img = event?.target
    if(!img) return;

    img.onerror = null;
    img.src = DEFAULT_IMAGE;
}