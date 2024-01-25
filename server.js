const express = require('express');
const path = require('path');
const app = express();
const artistRoutes = require('./src/routes/artists');
const artworkRoutes = require('./src/routes/artworks');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

//Use routes for API
app.use('/api/artists', artistRoutes);
app.use('/api/artworks', artworkRoutes);

//Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
