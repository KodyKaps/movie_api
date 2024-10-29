const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const port = 8080;

app.use(morgan('combined'));

db.movies.insertMany([
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: { name: "Drama" },
    director: { name: "Frank Darabont" },
    runtime: 142,
    rating: 9.3
  },
  {
    title: "The Godfather",
    year: 1972,
    genre: { name: "Crime" },
    director: { name: "Francis Ford Coppola" },
    runtime: 175,
    rating: 9.2
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: { name: "Action" },
    director: { name: "Christopher Nolan" },
    runtime: 152,
    rating: 9.0
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    genre: { name: "Crime" },
    director: { name: "Quentin Tarantino" },
    runtime: 154,
    rating: 8.9
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: { name: "Drama" },
    director: { name: "Robert Zemeckis" },
    runtime: 142,
    rating: 8.8
  },
  {
    title: "Inception",
    year: 2010,
    genre: { name: "Sci-Fi" },
    director: { name: "Christopher Nolan" },
    runtime: 148,
    rating: 8.8
  },
  {
    title: "Fight Club",
    year: 1999,
    genre: { name: "Drama" },
    director: { name: "David Fincher" },
    runtime: 139,
    rating: 8.8
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: { name: "Sci-Fi" },
    director: { name: "Lana Wachowski, Lilly Wachowski" },
    runtime: 136,
    rating: 8.7
  },
  {
    title: "Goodfellas",
    year: 1990,
    genre: { name: "Crime" },
    director: { name: "Martin Scorsese" },
    runtime: 146,
    rating: 8.7
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    genre: { name: "Fantasy" },
    director: { name: "Peter Jackson" },
    runtime: 201,
    rating: 8.9
  }
]);

db.users.insertMany([
  {
    name: "Alice",
    birthday: new Date("1985-02-19"),
    favoriteMovies: [
      ObjectId("MOVIE_ID_1"), // Replace with actual ObjectId for "The Shawshank Redemption"
      ObjectId("MOVIE_ID_2")  // Replace with actual ObjectId for "The Godfather"
    ]
  },
  {
    name: "Bob",
    birthday: new Date("1990-05-23"),
    favoriteMovies: [
      ObjectId("MOVIE_ID_3"), // Replace with actual ObjectId for "The Dark Knight"
      ObjectId("MOVIE_ID_4")  // Replace with actual ObjectId for "Pulp Fiction"
    ]
  },
  {
    name: "Charlie",
    birthday: new Date("1978-12-11"),
    favoriteMovies: [
      ObjectId("MOVIE_ID_5"), // Replace with actual ObjectId for "Forrest Gump"
      ObjectId("MOVIE_ID_6")  // Replace with actual ObjectId for "Inception"
    ]
  },
  {
    name: "Diana",
    birthday: new Date("1995-09-30"),
    favoriteMovies: [
      ObjectId("MOVIE_ID_7"), // Replace with actual ObjectId for "Fight Club"
      ObjectId("MOVIE_ID_8")  // Replace with actual ObjectId for "The Matrix"
    ]
  },
  {
    name: "Edward",
    birthday: new Date("1980-11-14"),
    favoriteMovies: [
      ObjectId("MOVIE_ID_9"), // Replace with actual ObjectId for "Goodfellas"
      ObjectId("MOVIE_ID_10") // Replace with actual ObjectId for "The Lord of the Rings: The Return of the King"
    ]
  }
]);



app.get('/', (req, res) => {
  res.send("Welcome to the Movie API! Access /movies to see the top 10 movies.");
});

// Return a list of ALL movies to the user;
app.get('/movies', (req, res) => {
  res.send("all movies");
});
// Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user;
app.get('/movies/title', (req, res) => {
  res.send("movie description");
});
// Return data about a genre (description) by name/title (e.g., “Thriller”);
app.get('/genre/title', (req, res) => {
  res.send("genre info");
});
// Return data about a director (bio, birth year, death year) by name;
app.get('/director/name', (req, res) => {
  res.send("director information");
});
// Allow new users to register;
app.post('/users', (req, res) => {
  res.send("new user registered");
  
});
// Allow users to update their user info (username);
app.put('/users/username', (req, res) => {
  res.send("info updated");
});
// Allow users to add a movie to their list of favorites (showing only a text that a movie has been added—more on this later);
app.put('/movies/favorites', (req, res) => {
  res.send("movie has been added");
});
// Allow users to remove a movie from their list of favorites (showing only a text that a movie has been removed—more on this later);
app.delete('/movies/favorites', (req, res) => {
  res.send("movie removed");
});
// Allow existing users to deregister (showing only a text that a user email has been removed—more on this later).
app.delete('/users', (req, res) => {
  res.send("email has been removed");
});


  app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(500).send("Something went wrong! Please try again later.");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

