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
        const mediaFactory = new MediaFactory(media.id, media.photographerId, media.title, media.image || media.video, media.likes, media.date, media.price);

        if (media.image !== undefined) {
            const image = mediaFactory.createImageElement(media.image, media.title, media.likes);
            portfolio.appendChild(image);
        } else if (media.video !== undefined) {
            const video = mediaFactory.createVideoElement(media.video, media.title, media.likes);
            portfolio.appendChild(video);
        }

    });

    /**
     * Array.prototype.reduce()
     * link to documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
     */
    const likes = document.querySelector("#like-counter");
    const totalLikes = selectedPortfolio.reduce((accumulator, media) => accumulator + media.likes, 0);
    likes.textContent = totalLikes;


}

