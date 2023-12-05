import { MediaFactory } from "../../scripts/factories/mediaFactory.js";
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

export function displayPhotographerPortfolio(selectedPortfolio) {
    const portfolio = document.querySelector( ".portfolio-articles");

    console.log(selectedPortfolio);

    selectedPortfolio.forEach((media) => {
        console.log(media);
        const mediaElement = media.createMediaElement(media);

        //MediaFactory.createMediaElement(media);
    });
}