const express = require('express')
//load specific part of express
const router = express.Router()

//load model
const UserModel = require('../models/userModel')

//For testing only
router.get('/', async (req, res) => {
    let users = await UserModel.find()
    res.send(users)
})

// Allow new users to register;
router.post('/', async (req, res) => {
    //TODO: get from req
    let user = {
        Username: 'joe',
        Password: 'pass',
        Email: 'joe@example.com',
        Birthday: '1/1/2024'
    }
    try {
        let u = await UserModel.create(user)
        console.log(u)
        res.send("User created")
    } catch (error) {
        console.error(error)
        res.status(500).json("Failed to create user")
    }
    
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