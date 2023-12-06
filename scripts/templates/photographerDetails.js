import MediaFactory from "../../scripts/factories/mediaFactory.js";
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

    selectedPortfolio.forEach((media) => {
        if (media.image) {
            const mediaFactory = new MediaFactory(media.id, media.photographerId, media.title, media.image, media.likes, media.date, media.price);
            const img = mediaFactory.createImageElement(media.image);
            portfolio.appendChild(img);
        }
        else if (media.video) {
            const mediaFactory = new MediaFactory(media.id, media.photographerId, media.title, media.video, media.likes, media.date, media.price);
            const video = mediaFactory.createVideoElement(media.video);
            portfolio.appendChild(video);
        }
        else {
            console.log("Error: no image or video found");
        }
        console.log(media);
    }
    );
}