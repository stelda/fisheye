function photographerTemplate(data) {
    const { name, id, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // Create article
        const article = document.createElement( 'article' );

        // Create link to photographer page
        const link = document.createElement( 'a' );
        link.setAttribute("href", `photographer.html?id=${id}`);
        link.classList.add( 'photographer-card' );

        // Create img, h2, p
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `portrait de ${name}`);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute("aria-label", `Nom du photographe: ${name}`);

        function createParagraph(text, className) {
            const paragraph = document.createElement( 'p' );
            paragraph.textContent = text;
            paragraph.classList.add( className );
            return paragraph;
        }

        const location = createParagraph(`${city}, ${country}`, 'location');
        location.setAttribute("aria-label", `Ville : ${city}, Pays : ${country}`);

        const taglineElement = createParagraph(tagline, 'tagline');
        taglineElement.setAttribute("aria-label", `Slogan : ${tagline}`);

        const priceElement = createParagraph(`${price}€/jour`, 'price');
        priceElement.setAttribute("aria-label", `Tarif : ${price}€ par jour`);

        // add photographer-portrait container around img for alternative text styling
        const photographerPortrait = document.createElement('div');
        photographerPortrait.classList.add('photographer-portrait-container');
        photographerPortrait.appendChild(img);

        article.appendChild(link);
        link.append(photographerPortrait, h2, location, taglineElement, priceElement);

        return (article);
    }

    return { getUserCardDOM }
}