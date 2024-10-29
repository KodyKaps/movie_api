const express = require('express')
//load specific part of express
const router = express.Router()

// Allow new users to register;
router.post('/', (req, res) => {
    res.send("some data");
});
// Allow users to update their user info (username);
router.put('/username', (req, res) => {
    res.send("some data");
});

// Allow existing users to deregister (showing only a text that a user email has been removed—more on this later).
router.delete('/', (req, res) => {
    res.send("some data");
});

// Allow users to add a movie to their list of favorites (showing only a text that a movie has been added—more on this later);
router.put('/movies/favorites', (req, res) => {
    res.send("some data");
});

// Allow users to remove a movie from their list of favorites (showing only a text that a movie has been removed—more on this later);
router.delete('/movies/favorite', (req, res) => {
    res.send("some data");
});

module.exports = router;