/**
 * @module movieRoutes
 * @description Routes for movies
*/

const express = require('express')
const passport = require('passport');
//load specific part of express
const router = express.Router()


//load model
const MovieModel = require('../models/movieModel')

//use router insterad of app for clean code

//
/**
 * @description Return a list of ALL movies to the user;
 * @route GET /movies
 * @async
 * @return {Promise<Movie>} the movies in the database
*/
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let movies = await MovieModel.find()
    res.send(movies)
});

// 
/**
 * @description Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user;
 * @route GET /movies
 * @async
 * @return {Promise<Movie>} the movies in the database that match title
*/
router.get('/:title', passport.authenticate('jwt', { session: false }),async (req, res) => {
    let title = req.params.title
    console.log("movie title", title)
    let movie = await MovieModel.find({Title: title})
    res.send(movie);
});

module.exports = router;

//Return data about a genre (description) by name/title (e.g., “Thriller”)
