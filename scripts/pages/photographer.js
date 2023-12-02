import getPhotographers from "../../scripts/utils/dataFetcher.js";

async function getPhotographerDetails() {
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

    // Display photographer name on page and contact-form
    const photographerNameElements = document.querySelectorAll(".photographer-name");
    photographerNameElements.forEach((element) => {
        element.textContent = selectedPhotographer.name;
    });

    const picture = `assets/photographers/${selectedPhotographer.portrait}`;

    const img = document.querySelector( ".photographer-portrait");
    img.setAttribute("src", picture);

    const location = document.querySelector( ".location");
    location.textContent = `${selectedPhotographer.city}, ${selectedPhotographer.country}`;

    const tagline = document.querySelector( ".tagline");
    tagline.textContent = selectedPhotographer.tagline;

}

// Call the init function
getPhotographerDetails();

