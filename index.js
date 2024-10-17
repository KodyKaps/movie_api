const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(morgan('combined'));

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

app.get('/', (req, res) => {
  res.send("Welcome to the Movie API! Access /movies to see the top 10 movies.");
});

// Return a list of ALL movies to the user;
app.get('/movies', (req, res) => {
  res.send("some data");
});
// Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user;
app.get('/movies/title', (req, res) => {
  res.send("some data");
});
// Return data about a genre (description) by name/title (e.g., “Thriller”);
app.get('/genres/title', (req, res) => {
  res.send("some data");
});
// Return data about a director (bio, birth year, death year) by name;
app.get('/directors/name', (req, res) => {
  res.send("some data");
});
// Allow new users to register;
app.post('/users', (req, res) => {
  res.send("some data");
});
// Allow users to update their user info (username);
app.put('/users/username', (req, res) => {
  res.send("some data");
});
// Allow users to add a movie to their list of favorites (showing only a text that a movie has been added—more on this later);
app.put('/movies/favorites', (req, res) => {
  res.send("some data");
});
// Allow users to remove a movie from their list of favorites (showing only a text that a movie has been removed—more on this later);
app.delete('/movies/favorite', (req, res) => {
  res.send("some data");
});
// Allow existing users to deregister (showing only a text that a user email has been removed—more on this later).
app.delete('/users', (req, res) => {
  res.send("some data");
});


  app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(500).send("Something went wrong! Please try again later.");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
