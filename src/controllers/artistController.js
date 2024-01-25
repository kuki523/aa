const Artist = require('../models/Artist');

exports.listArtists = (req, res) => {
    try {
        const artists = Artist.getAllArtists();
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving artists", error: error });
    }
};

exports.getArtistDetails = (req, res) => {
    try {
        const artist = Artist.getArtistById(parseInt(req.params.id));
        if (artist) {
            res.status(200).json(artist);
        } else {
            res.status(404).json({ message: "Artist not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving artist details", error: error });
    }
};
exports.createArtist = (req, res) => {
    try {
        const newArtistId = Date.now(); 
        const newArtist = new Artist(
            newArtistId,
            req.body.name,
            req.body.bio,
            req.body.birthDate,
            req.body.deathDate,
            req.body.nationality,
            req.body.pictureURL
        );
        Artist.addArtist(newArtist);
        res.status(201).json(newArtist); 
    } catch (error) {
        res.status(500).json({ message: "Error creating artist", error: error.toString() });
    }
};

exports.updateArtist = (req, res) => {
    try {
        const updatedArtist = { ...req.body, id: parseInt(req.params.id) };
        Artist.updateArtist(parseInt(req.params.id), updatedArtist);
        res.status(200).json({ message: "Artist updated successfully", artist: updatedArtist });
    } catch (error) {
        res.status(500).json({ message: "Error updating artist", error: error });
    }
};

exports.deleteArtist = (req, res) => {
    try {
        Artist.deleteArtist(parseInt(req.params.id));
        res.status(200).json({ message: "Artist deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting artist", error: error });
    }
};
