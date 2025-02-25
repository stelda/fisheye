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
    const img = document.querySelector(".photographer-portrait");
    img.setAttribute("src", picture);

    // location
    const location = document.querySelector(".location");
    location.textContent = `${selectedPhotographer.city}, ${selectedPhotographer.country}`;

    // tagline
    const tagline = document.querySelector(".tagline");
    tagline.textContent = selectedPhotographer.tagline;

    // price
    const price = document.querySelector(".price");
    price.textContent = `${selectedPhotographer.price}€/jour`;
    price.setAttribute("aria-label", `Tarif de ${selectedPhotographer.name}: ${selectedPhotographer.price}€ par jour`);
}

export function displayPhotographerPortfolio(selectedPortfolio) {
    selectedPortfolio = gallerySorter(selectedPortfolio, "likes"); // sort by likes by default
    displayMedia(selectedPortfolio);  // display the portfolio

    // sort the portfolio
    const sort = document.getElementById('sort');
    let selectedOption = sort.options[0]; // default option
    selectedOption.style.display = "none"; // hide the default option from dropdown list

    sort.addEventListener('change', (event) => {
        if (selectedOption) {
            selectedOption.style.display = "block";
        }
        selectedOption = sort.options[sort.selectedIndex];
        selectedOption.style.display = "none";

        const sortedPortfolio = gallerySorter(selectedPortfolio, event.target.value);
        console.log(event.target.value);
        document.querySelector('.portfolio-articles').innerHTML = ''; // clear out the current portfolio
        displayMedia(sortedPortfolio);  // re-display the sorted portfolio
    });

    function displayMedia(mediaArray) {
        const portfolio = document.querySelector(".portfolio-articles");
        mediaArray.forEach((media) => {
            const mediaFactory = new MediaFactory(media.id, media.photographerId, media.title, media.image || media.video, media.likes, media.date, media.price);
            if (media.image) {
                const image = mediaFactory.createImageElement(media.image, media.title, media.likes);
                portfolio.appendChild(image);
            } else if (media.video) {
                const video = mediaFactory.createVideoElement(media.video, media.title, media.likes);
                portfolio.appendChild(video);
            }
        });
    }

    /**
     * Array.prototype.reduce()
     * link to documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
     */
    const totalLikes = document.querySelector("#like-counter");
    totalLikes.textContent = selectedPortfolio.reduce((accumulator, media) => accumulator + media.likes, 0);
    totalLikes.setAttribute('aria-label', `Nombre total de likes pour ce photographe: ${totalLikes.textContent}`);
}

