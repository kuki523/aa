const fs = require('fs');
const path = require('path');
const artistsFilePath = path.join(__dirname, 'artists.json');

class Artist {
    constructor(id, name, bio, birthDate, deathDate, nationality, pictureURL) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.nationality = nationality;
        this.pictureURL = pictureURL;
    }

    static getAllArtists() {
        const artistsData = fs.readFileSync(artistsFilePath);
        return JSON.parse(artistsData);
    }

    static getArtistById(id) {
        const artists = Artist.getAllArtists();
        return artists.find(artist => artist.id === id);
    }

    static addArtist(newArtist) {
        const artists = Artist.getAllArtists();
        artists.push(newArtist); 
        fs.writeFileSync(artistsFilePath, JSON.stringify(artists));
    }

    static updateArtist(id, updatedArtist) {
        const artists = Artist.getAllArtists();
        const index = artists.findIndex(artist => artist.id === id);
        if (index !== -1) {
            artists[index] = updatedArtist;
            fs.writeFileSync(artistsFilePath, JSON.stringify(artists));
        }
    }

    static deleteArtist(id) {
        const artists = Artist.getAllArtists();
        const filteredArtists = artists.filter(artist => artist.id !== id);
        fs.writeFileSync(artistsFilePath, JSON.stringify(filteredArtists));
    }
}

module.exports = Artist;
