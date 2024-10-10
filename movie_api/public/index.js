const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

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


app.get('/movies', (req, res) => {
    res.json(topMovies);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
