function photographerTemplate(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        // Create link to photographer page
        const link = document.createElement( 'a' );
        link.setAttribute("href", `../../photographer.html?id=${id}`);
        link.classList.add( 'photographer-card' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const location = document.createElement( 'p' );
        location.textContent = `${city}, ${country}`;
        location.classList.add( 'location' );

        const taglineElement = document.createElement( 'p' );
        taglineElement.textContent = tagline;
        taglineElement.classList.add( 'tagline' );

        const priceElement = document.createElement( 'p' );
        priceElement.textContent = `${price}€/jour`;
        priceElement.classList.add( 'price' );

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