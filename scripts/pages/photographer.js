import {getMedia, getPhotographers} from "../utils/dataFetcher.js";
import {displayPhotographerDetails, displayPhotographerPortfolio} from "../templates/photographerDetails.js"

async function selectPhotographerWithId() {

    // Extract photographer ID from URL parameters
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id");

    if (!id) {
        console.error("Photographer ID not found in URL");
        return;
    }

    // Retrieve photographers data
    const {photographers} = await getPhotographers();

    // Find the photographer with the matching ID
    const selectedPhotographer = photographers.find((photographer) => photographer.id === parseInt(id, 10));

    if (!selectedPhotographer) {
        console.error(`Photographer not found with ID: ${id}`);
        return;
    }

    // Retrieve media data
    const {media} = await getMedia();

    // Find the media with the matching photographer ID
    const selectedPortfolio = media.filter((media) => media.photographerId === parseInt(id, 10));

    // Display photographer details on page
    displayPhotographerDetails(selectedPhotographer);

    // Display photographer portfolio on page
    displayPhotographerPortfolio(selectedPortfolio);
}

selectPhotographerWithId();

// function handleKeyEvents(event) {
//     // Reload the page when 'r' or 'R' is pressed
//     if (event.key === 'r' || event.key === 'R') {
//         location.reload();
//     }
//
//     // Change the page to the previous page when 'b' or 'B' is pressed
//     if (event.key === 'b' || event.key === 'B') {
//         history.back();
//     }
// }

// document.addEventListener('keydown', handleKeyEvents);
