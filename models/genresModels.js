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

// Static method to find a genre by name
genreSchema.statics.findByName = async function (name) {
  return await this.findOne({ name: new RegExp('^' + name + '$', 'i') });
};

// Create and export the model
const Genre = mongoose.model('Genre', genreSchema);
module.exports = Genre;
