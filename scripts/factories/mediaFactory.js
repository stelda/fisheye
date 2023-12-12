    export default class MediaFactory {
    constructor(id, photographerId, title, image, video, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.video = video;
        this.likes = likes;
        this.date = date;
        this.price = price;
        // this.totalLikes = document.querySelector("#like-counter");
        // this.liked = false;
    }

    createMediaElement(file, title, likes, isImage) {
        const mediaPath = `assets/media/${this.photographerId}/${file}`;
        const figure = document.createElement('figure');
        const link = document.createElement('a');
        link.setAttribute('href', mediaPath);

        const media = isImage ? document.createElement('img') : document.createElement('video');
        media.setAttribute('src', mediaPath);
        link.appendChild(media);
        figure.appendChild(link);

        figure.appendChild(this.createFigcaption(title, likes));
        return figure;
    }

    createFigcaption(title, likes) {
        const figcaption = document.createElement('figcaption');

        const titleElement = document.createElement('span');
        titleElement.textContent = title;
        figcaption.appendChild(titleElement);

        const likesElement = document.createElement('span');
        likesElement.textContent = `${likes} `;
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart');

        likesElement.appendChild(heart);
        figcaption.appendChild(likesElement);
        return figcaption;
    }


    createImageElement(file, title, likes) {
        return this.createMediaElement(file, title, likes, true);
    }

    createVideoElement(file, title, likes) {
        return this.createMediaElement(file, title, likes, false);
    }


}