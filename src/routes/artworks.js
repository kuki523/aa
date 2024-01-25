const express = require('express');
const router = express.Router();
const artworkController = require('../controllers/artworkController');

//Route to get the list of all artworks
router.get('/', artworkController.listArtworks);

//Route to get a single artwork by ID
router.get('/:id', artworkController.getArtworkDetails);

//Route to create a new artwork
router.post('/', artworkController.createArtwork);

//Route to update an existing artwork by ID
router.put('/:id', artworkController.updateArtwork);

//Route to delete an artwork by ID
router.delete('/:id', artworkController.deleteArtwork);

module.exports = router;
