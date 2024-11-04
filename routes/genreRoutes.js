const express = require('express')
//load specific part of express
const router = express.Router()
const GenreModel = require('../models/genreModel')

// Return data about a genre (description) by name/title (e.g., “Thriller”);

router.get('/:genres', async (req, res) => {
    let title = req.params.title
    console.log("movie title", title)
    let movie = await GenreModel.find({Title: title})
    res.send(movie);
});

module.exports = router;