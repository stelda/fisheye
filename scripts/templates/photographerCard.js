/* this script is used to display photographers data on index.html page */
function photographerTemplate(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        // Create link to photographer page
        const link = document.createElement( 'a' );
        link.setAttribute("href", `photographer.html?id=${id}`);
        link.classList.add( 'photographer-card' );

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
        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(location);
        link.appendChild(taglineElement);
        link.appendChild(priceElement);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}