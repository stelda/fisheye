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

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        function createParagraph(text, className) {
            const paragraph = document.createElement( 'p' );
            paragraph.textContent = text;
            paragraph.classList.add( className );
            return paragraph;
        }

        const location = createParagraph(`${city}, ${country}`, 'location');
        const taglineElement = createParagraph(tagline, 'tagline');
        const priceElement = createParagraph(`${price}€/jour`, 'price');

        article.appendChild(link);
        link.append(img, h2, location, taglineElement, priceElement);

        return (article);
    }


    return { getUserCardDOM }
}