async function getPhotographers() {
        // get photographers data from json file
        const response = await fetch("../../data/photographers.json");
        // convert json data to js object
        const data = await response.json();
        // get photographers array from data object
        const { photographers } = data;

        // return photographers array
        return ({
            photographers: [...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }

    init();
    
