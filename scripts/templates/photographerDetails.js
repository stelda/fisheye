export function displayPhotographerDetails(selectedPhotographer) {

    // name on page and contact-form
    const photographerNameElements = document.querySelectorAll(".photographer-name");
    photographerNameElements.forEach((element) => {
        element.textContent = selectedPhotographer.name;
    });

    // picture
    const picture = `assets/photographers/${selectedPhotographer.portrait}`;
    const img = document.querySelector( ".photographer-portrait");
    img.setAttribute("src", picture);

    // location
    const location = document.querySelector( ".location");
    location.textContent = `${selectedPhotographer.city}, ${selectedPhotographer.country}`;

    // tagline
    const tagline = document.querySelector( ".tagline");
    tagline.textContent = selectedPhotographer.tagline;

    // price
    const price = document.querySelector( ".price");
    price.textContent = `${selectedPhotographer.price}€/jour`;
}

export function displayPhotographerPortfolio(selectedPhotographer) {
    const portfolio = document.querySelector( ".portfolio-articles");
    portfolio.innerHTML = "hello";
    console.log(selectedPhotographer);
    console.log(portfolio);
    // const mediaFactory = new MediaFactory();
    //
    // selectedPhotographer.media.forEach((media) => {
    //     const mediaElement = mediaFactory.createMediaElement(media.image);
    //     portfolio.appendChild(mediaElement);
    // });
}