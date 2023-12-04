export default function displayPhotographerDetails(selectedPhotographer) {

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
}