export default class MediaFactory {
    constructor(id, photographerId, title, image, video, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image
        this.video = video;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }

    createImageElement(file, title, likes) {
        const picture = `assets/media/${this.photographerId}/${file}`;
        const figure = document.createElement('figure');
        const link = document.createElement('a');
        link.setAttribute('href', picture);

        const img = document.createElement('img');
        img.setAttribute('src', picture);
        link.appendChild(img);
        figure.appendChild(link);

        const figcaption = document.createElement('figcaption');

        const titleElement = document.createElement('span');
        titleElement.textContent = title;
        figcaption.appendChild(titleElement);

        const likesElement = document.createElement('span');
        likesElement.textContent = `${likes}`;

        figcaption.appendChild(likesElement);
        figure.appendChild(figcaption);

        return figure;
    }

    createVideoElement(file, title, likes) {
        const video = `assets/media/${this.photographerId}/${file}`;
        const figure = document.createElement('figure');
        const link = document.createElement('a');
        link.setAttribute('href', video);

        const videoElement = document.createElement('video');
        videoElement.setAttribute('src', video);
        link.appendChild(videoElement);
        figure.appendChild(link);

        const figcaption = document.createElement('figcaption');

        const titleElement = document.createElement('span');
        titleElement.textContent = title;
        figcaption.appendChild(titleElement);

        const likesElement = document.createElement('span');
        likesElement.textContent = `${likes}`;
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart');
        likesElement.appendChild(heart);

        figcaption.appendChild(likesElement);
        figure.appendChild(figcaption);

        return figure;
    }
}




