/**
 * @module movieModel
 * @description Model for movie
*/

const mongoose = require('mongoose');

let movieSchema = mongoose.Schema({
  Title: {type: String, required: true},
  Description: {type: String, required: true},
  Genre: {
    Name: String,
    Description: String
  },
  Director: {
    Name: String,
    Bio: String
  },
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie