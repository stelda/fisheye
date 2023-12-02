// Factory for creating photographer objects

class Photographer {
    constructor({ name, id, portrait, city, country, tagline, price }) {
        this.name = name;
        this.id = id;
        this.portrait = portrait;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
    }

    // Méthode pour créer le chemin vers l'image du photographe
    getPortraitPath() {
        return `assets/photographers/${this.portrait}`;
    }
}



