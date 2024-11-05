const mongoose = require('mongoose');
let userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: Date,
    FavoriteMovies: [{ type: String }]
});

const UserModel = mongoose.model('Users',userSchema)

module.exports = UserModel