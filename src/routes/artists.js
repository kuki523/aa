const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

//Route to get the list of all artists
router.get('/', artistController.listArtists);

//Route to get a single artist by ID
router.get('/:id', artistController.getArtistDetails);

//Route to create a new artist
router.post('/', artistController.createArtist);

//Route to update an existing artist by ID
router.put('/:id', artistController.updateArtist);

//Route to delete an artist by ID
router.delete('/:id', artistController.deleteArtist);

module.exports = router;
