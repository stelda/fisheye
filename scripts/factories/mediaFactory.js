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
        this.liked = false;
    }

    createMediaElement(file, title, likes, isImage) {
        const mediaPath = `assets/media/${this.photographerId}/${file}`;
        const figure = document.createElement('figure');

        const media = isImage ? document.createElement('img') : document.createElement('video');
        media.setAttribute('src', mediaPath);
        if (!isImage) {
            media.setAttribute('aria-label', `Vidéo intitulée ${title}`);
        } else {
            media.setAttribute('alt', `Image intitulée ${title}`) ;
        }
        media.setAttribute('class', 'item');
        media.setAttribute('tabindex', '0');

        figure.appendChild(media);
        figure.appendChild(this.createFigcaption(title, likes));

        // add event listener to open lightbox on click
        media.addEventListener('click', () => {
            this.openLightbox(media, title, isImage, mediaPath);
        });
        // add event listener to open lightbox on enter key or spacebar
        media.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.openLightbox(media, title, isImage, mediaPath);
            }
        });
        return figure;
    }

    createFigcaption(title, likes) {
        const figcaption = document.createElement('figcaption');

        const titleElement = document.createElement('span');
        titleElement.textContent = title;
        figcaption.appendChild(titleElement);

        const likesElement = document.createElement('span');
        const likesCountElement = document.createElement('span');
        likesCountElement.textContent = `${likes} `;

        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart');

        likesElement.appendChild(likesCountElement);
        likesElement.appendChild(heart);
        figcaption.appendChild(likesElement);

        heart.addEventListener('click', () => {
            this.liked = !this.liked;
            likes = this.liked ? likes + 1 : likes - 1;
            likesCountElement.textContent = `${likes} `;
            heart.style.color = this.liked ? 'var(--color-secondary)' : 'var(--color-primary)';
            this.totalLikes = document.querySelector("#like-counter");
            this.totalLikes.textContent = parseInt(this.totalLikes.textContent) + (this.liked ? 1 : -1);

            // aria-label updated with the new total number of likes
            this.totalLikes.setAttribute('aria-label', `Nombre total de likes pour ce photographe: ${this.totalLikes.textContent}`);
        });

        return figcaption;

    }

    createImageElement(file, title, likes) {
        return this.createMediaElement(file, title, likes, true);
    }

    createVideoElement(file, title, likes) {
        return this.createMediaElement(file, title, likes, false);
    }

    openLightbox(media, title, isImage, mediaPath) {
        /*========= open lightbox =========*/
        const lightbox = document.querySelector('#lightbox');
        lightbox.style.display = "flex";

        const lightboxMedia = document.querySelector('.lightbox-media');
        lightboxMedia.focus();
        lightboxMedia.innerHTML = "";
        lightboxMedia.appendChild(isImage ? document.createElement('img') : document.createElement('video'));
        lightboxMedia.firstChild.setAttribute('src', mediaPath);
        lightboxMedia.firstChild.setAttribute('alt', `vue agrandie de ${title}. Touche échap pour fermer la fenêtre. Flèche gauche ou droite pour naviguer entre les medias.`);
        if (!isImage) {
            lightboxMedia.firstChild.setAttribute('controls', 'controls');
            lightboxMedia.firstChild.setAttribute('autoplay', 'autoplay');
            lightboxMedia.firstChild.setAttribute('aria-label', `vue agrandie de ${title}. Touche échap pour fermer la fenêtre. Flèche gauche ou droite pour naviguer entre les medias.`);
        }

        const lightboxTitle = document.querySelector('.lightbox-title');
        lightboxTitle.textContent = title;

        /*========= close lightbox =========*/
        const lightboxClose = document.querySelector('.lightbox-close');
        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = "none";
        });
        //close with escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                lightbox.style.display = "none";
            }
        });

        /*========= navigation between media =========*/
        const lightboxPrev = document.querySelector('.lightbox-previous');
        const lightboxNext = document.querySelector('.lightbox-next');

        // retrieve all media of the photographer in the order of the sorted selection
        const mediaList = document.querySelectorAll('.item');
        const mediaArray = Array.from(mediaList);
        const mediaIndex = mediaArray.indexOf(media);
        const mediaCount = mediaArray.length;

        const previousMedia = mediaIndex === 0 ? mediaArray[mediaCount - 1] : mediaArray[mediaIndex - 1];
        const nextMedia = mediaIndex === mediaCount - 1 ? mediaArray[0] : mediaArray[mediaIndex + 1];
        // add event listener to navigate between media with buttons
        lightboxPrev.addEventListener('click', () => {
            previousMedia.click();
        });
        lightboxNext.addEventListener('click', () => {
            nextMedia.click();
        });
        // add event listener to navigate between media with arrow keys
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                previousMedia.click();
                lightboxMedia.firstChild.focus();
                lightboxMedia.firstChild.setAttribute('aria-label', `vue agrandie de ${previousMedia.firstChild.alt}`);
            }
            if (event.key === 'ArrowRight') {
                nextMedia.click();
                lightboxMedia.firstChild.focus();
                lightboxMedia.firstChild.setAttribute('aria-label', `vue agrandie de ${nextMedia.firstChild.alt}`);
            }
        });
    }
}