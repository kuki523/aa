const Artwork = require('../models/Artwork');

exports.listArtworks = (req, res) => {
    try {
        const artworks = Artwork.getAllArtworks();
        res.status(200).json(artworks);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving artworks", error: error });
    }
};

exports.getArtworkDetails = (req, res) => {
    try {
        const artwork = Artwork.getArtworkById(parseInt(req.params.id));
        if (artwork) {
            res.status(200).json(artwork);
        } else {
            res.status(404).json({ message: "Artwork not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving artwork details", error: error });
    }
};

exports.createArtwork = (req, res) => {
    try {
        const newArtwork = new Artwork(
            Date.now(), 
            req.body.title,
            req.body.creationDate,
            req.body.medium,
            req.body.dimensions,
            req.body.artistId,
            req.body.imageURL,
            req.body.description
        );
        Artwork.addArtwork(newArtwork);
        res.status(201).json({ message: "Artwork created successfully", artwork: newArtwork });
    } catch (error) {
        res.status(500).json({ message: "Error creating artwork", error: error });
    }
};

exports.updateArtwork = (req, res) => {
    try {
        const updatedArtwork = { ...req.body, id: parseInt(req.params.id) };
        Artwork.updateArtwork(parseInt(req.params.id), updatedArtwork);
        res.status(200).json({ message: "Artwork updated successfully", artwork: updatedArtwork });
    } catch (error) {
        res.status(500).json({ message: "Error updating artwork", error: error });
    }
};

exports.deleteArtwork = (req, res) => {
    try {
        Artwork.deleteArtwork(parseInt(req.params.id));
        res.status(200).json({ message: "Artwork deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting artwork", error: error });
    }
};
