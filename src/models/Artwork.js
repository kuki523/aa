const fs = require('fs');
const path = require('path');
const artworksFilePath = path.join(__dirname, 'artworks.json'); 

class Artwork {
    constructor(id, title, creationDate, medium, dimensions, artistId, imageURL, description) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.medium = medium;
        this.dimensions = dimensions;
        this.artistId = artistId;
        this.imageURL = imageURL;
        this.description = description;
    }

    static getAllArtworks() {
        const artworksData = fs.readFileSync(artworksFilePath);
        return JSON.parse(artworksData);
    }

    static getArtworkById(id) {
        const artworks = Artwork.getAllArtworks();
        return artworks.find(artwork => artwork.id === id);
    }

    static addArtwork(newArtwork) {
        const artworks = Artwork.getAllArtworks();
        artworks.push(newArtwork);
        fs.writeFileSync(artworksFilePath, JSON.stringify(artworks));
    }

    static updateArtwork(id, updatedArtwork) {
        const artworks = Artwork.getAllArtworks();
        const index = artworks.findIndex(artwork => artwork.id === id);
        if (index !== -1) {
            artworks[index] = updatedArtwork;
            fs.writeFileSync(artworksFilePath, JSON.stringify(artworks));
        }
    }

    static deleteArtwork(id) {
        const artworks = Artwork.getAllArtworks();
        const filteredArtworks = artworks.filter(artwork => artwork.id !== id);
        fs.writeFileSync(artworksFilePath, JSON.stringify(filteredArtworks));
    }
}

module.exports = Artwork;
