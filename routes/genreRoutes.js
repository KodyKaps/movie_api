/**
 * @module genreRoutes
 * @description Routes for genres
*/

const express = require('express')
const passport = require('passport');
//load specific part of express
const router = express.Router()
const GenreModel = require('../models/genreModel')

// Return data about a genre (description) by name/title (e.g., “Thriller”);

router.get('/:name',passport.authenticate('jwt', { session: false }), async (req, res) => {
    let name = req.params.name
    console.log("genre name", name)
    let genre = await GenreModel.find({Name: name})
    res.send(genre);
});

module.exports = router;