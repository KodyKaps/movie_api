const express = require('express')
const passport = require('passport');
//load specific part of express
const router = express.Router()


//load model
const MovieModel = require('../models/movieModel')

const movies = [
    { title: "The Shawshank Redemption", year: 1994, director: "Frank Darabont" },
    { title: "The Godfather", year: 1972, director: "Francis Ford Coppola" },
    { title: "The Dark Knight", year: 2008, director: "Christopher Nolan" },
    { title: "Pulp Fiction", year: 1994, director: "Quentin Tarantino" },
    { title: "Forrest Gump", year: 1994, director: "Robert Zemeckis" },
    { title: "Inception", year: 2010, director: "Christopher Nolan" },
    { title: "Fight Club", year: 1999, director: "David Fincher" },
    { title: "The Matrix", year: 1999, director: "Lana Wachowski, Lilly Wachowski" },
    { title: "Goodfellas", year: 1990, director: "Martin Scorsese" },
    { title: "The Lord of the Rings: The Return of the King", year: 2003, director: "Peter Jackson" }
];

//use router insterad of app for clean code

// Return a list of ALL movies to the user;
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let movies = await MovieModel.find()
    res.send(movies)
});

// Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user;
router.get('/:title', passport.authenticate('jwt', { session: false }),async (req, res) => {
    let title = req.params.title
    console.log("movie title", title)
    let movie = await MovieModel.find({Title: title})
    res.send(movie);
});

module.exports = router;

//Return data about a genre (description) by name/title (e.g., “Thriller”)
