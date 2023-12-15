import MediaFactory from "../factories/mediaFactory.js";
import gallerySorter from "../utils/gallerySorter.js";

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

    // sort the portfolio
    const sort = document.getElementById('sort');
    selectedPortfolio = gallerySorter(selectedPortfolio, "popular"); // default sort is "popular"
    sort.addEventListener('change', (event) => {
        selectedPortfolio = gallerySorter(selectedPortfolio, event.target.value);
        console.log(event.target.value);
        document.querySelector('.portfolio-articles').innerHTML = ''; // clear out the current portfolio
        displayPhotographerPortfolio(selectedPortfolio);  // re-display the sorted portfolio
    });

    // display the portfolio
    selectedPortfolio.forEach((media) => {
        const mediaFactory = new MediaFactory(media.id, media.photographerId, media.title, media.image || media.video, media.likes, media.date, media.price);

        if (media.image) {
            const image = mediaFactory.createImageElement(media.image, media.title, media.likes);
            portfolio.appendChild(image);
        } else if (media.video) {
            const video = mediaFactory.createVideoElement(media.video, media.title, media.likes);
            portfolio.appendChild(video);
        }
        console.log("date" + media.date + "titre :" + media.title + "likes :" + media.likes); // for debugging
    });

    /**
     * Array.prototype.reduce()
     * link to documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
     */
    const totalLikes = document.querySelector("#like-counter");
    totalLikes.textContent = selectedPortfolio.reduce((accumulator, media) => accumulator + media.likes, 0);
}

