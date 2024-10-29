const express = require('express')
//load specific part of express
const router = express.Router()

const topMovies = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    { title: "Fight Club", year: 1999 },
    { title: "The Matrix", year: 1999 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 }
];

//use router insterad of app for clean code

// Return a list of ALL movies to the user;
router.get('/', (req, res) => {
    res.send("some data");
});

// Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user;
router.get('/title', (req, res) => {
    res.send("some data");
});

module.exports = router;