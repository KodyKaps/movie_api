//Import library dependencies
const express = require('express');
const morgan = require('morgan');
//load config
require('dotenv').config()

//App dependencies
const movieRoutes = require('./routes/movieRoutes')
const userRoutes = require('./routes/userRoutes')
const genreRoutes = require('./routes/genreRoutes')

//create an app instance
const app = express();

//define config
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI

//Apply middleware
app.use(morgan('combined'));

//Define routes - requests I know how to handle

//Home page
app.get('/', (req, res) => {
  res.send("Welcome to the Movie API! Access /movies to see the top 10 movies.");
});

app.use('/movies', movieRoutes)
app.use('/users', userRoutes)
app.use('/genres', genreRoutes)

// Return data about a director (bio, birth year, death year) by name;
app.get('/directors/name', (req, res) => {
  res.send("some data");
});

//error handler - anything i am not designed to handle goes here
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(500).send("Something went wrong! Please try again later.");
});

//Listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
