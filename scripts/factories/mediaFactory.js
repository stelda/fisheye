export default class MediaFactory {
    constructor(id, photographerId, title, image, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }

    createMediaElement(file) {
        const extension = file.split('.').pop().toLowerCase();

        if (extension === 'jpg') {
            return this.createImageElement(file);
        } else if (extension === 'mp4') {
            return this.createVideoElement(file);
        } else {
            console.error(`Type de fichier non pris en charge : ${file}`);
            return null;
        }
    }

    createImageElement(file) {
        const picture = `assets/${this.photographerId}/${file}`;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        return img;
    }

    createVideoElement(file) {
        const video = `assets/${this.photographerId}/${file}`;
        const videoElement = document.createElement( 'video' );
        videoElement.setAttribute("src", video);
        return videoElement;
    }
}




