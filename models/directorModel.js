const mongoose = require('mongoose');
const directorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
});

// Create and export the model
const Director = mongoose.model('director', directorSchema);
module.exports = Director;
