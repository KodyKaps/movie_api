const express = require('express')
//load specific part of express
const router = express.Router()
const GenreModel = require('../models/genreModel')

// Return data about a genre (description) by name/title (e.g., “Thriller”);

router.get('/:name', async (req, res) => {
    let name = req.params.name
    console.log("genre name", name)
    let genre = await GenreModel.find({Name: name})
    res.send(genre);
});

module.exports = router;