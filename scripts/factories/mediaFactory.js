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
    }

    /**
     * Create an image element
     * @param {string} file
     * @returns {HTMLImageElement}
     */
    createImageElement(file) {
        const picture = `assets/media/${this.photographerId}/${file}`;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        return img;
    }

    /**
     * Create a video element
     * @param {string} file
     * @returns {HTMLVideoElement}
     */
    createVideoElement(file) {
        const video = `assets/${this.photographerId}/${file}`;
        const videoElement = document.createElement( 'video' );
        videoElement.setAttribute("src", video);
        return videoElement;
    }
}




