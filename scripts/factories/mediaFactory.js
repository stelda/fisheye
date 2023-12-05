export class MediaFactory {
    constructor(id, photographerId, title, image, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.type = type; // image or video
        this.media = media; // url of the media
        this.likes = likes;
        this.date = date;
        this.price = price;
    }

    /**
     * Create a media element (image or video)
     * @param file
     * @returns {null|HTMLVideoElement|HTMLImageElement}
     */
    createMediaElement(file) {
        if ('image' in file) {
            return this.createImageElement(file);
        } else if ('video' in file) {
            return this.createVideoElement(file);
        }
    }
    // createMediaElement(file) {
    //     const extension = file.split('.').pop().toLowerCase();
    //
    //     if (extension === 'jpg') {
    //         return this.createImageElement(file);
    //     } else if (extension === 'mp4') {
    //         return this.createVideoElement(file);
    //     } else {
    //         console.error(`Type de fichier non pris en charge : ${file}`);
    //         return null;
    //     }
    // }

    /**
     * Create an image element
     * @param {string} file
     * @returns {HTMLImageElement}
     */
    createImageElement(file) {
        const picture = `assets/${this.photographerId}/${file}`;
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




