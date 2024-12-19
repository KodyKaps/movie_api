const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: String,
    FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
  });
  
  userSchema.statics.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
  };
  
  userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.Password);
  };

const UserModel = mongoose.model('Users',userSchema)

module.exports = UserModel