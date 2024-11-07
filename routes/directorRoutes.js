const querystring = require('node:querystring');
const passport = require('passport');
const express = require('express')
//load specific part of express
const router = express.Router()
const DirectorModel = require('../models/directorModel')

// Return data about a genre (description) by name/title (e.g., “Thriller”);
router.get('/:name', passport.authenticate('jwt', { session: false }),async (req, res) => {
    let name = querystring.unescape(req.params.name)
    console.log("director name", name)
    let director = await DirectorModel.find({Name: name})
    res.send(director);
});

module.exports = router;