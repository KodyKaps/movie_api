/**
 * @module genreModel
 * @description Model for genre
*/
const mongoose = require('mongoose');
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  }
});

// Create and export the model
const Genre = mongoose.model('Genre', genreSchema);
module.exports = Genre;
