import displayPhotographerDetails from "../../scripts/templates/photographerDetails.js"
import getPhotographers from "../../scripts/utils/dataFetcher.js";


async function selectPhotographerWithId() {

    console.log("selectPhotographerWithId");
    // Extract photographer ID from URL parameters
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id");

    if (!id) {
        console.error("Photographer ID not found in URL");
        return;
    }

    // Retrieve photographers data
    const { photographers } = await getPhotographers();

    // Find the photographer with the matching ID
    const selectedPhotographer = photographers.find((photographer) => photographer.id === parseInt(id, 10));

    if (!selectedPhotographer) {
        console.error(`Photographer not found with ID: ${id}`);
        return;
    }
    // Display photographer details on page
displayPhotographerDetails(selectedPhotographer);
}

// Call the init function
selectPhotographerWithId();

