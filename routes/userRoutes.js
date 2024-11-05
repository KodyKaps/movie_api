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
    let userRequest = req.body
    console.log(userRequest)
    try {
        let u = await UserModel.create(userRequest)
        console.log(u)
        let response = {
            message: "User created",
            user: u
        }
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500).json("Failed to create user")
    }
    
});
// Allow users to update their user info (username);
router.put('/:userId', (req, res) => {
    res.send("some data");
});

// Allow existing users to deregister (showing only a text that a user email has been removed—more on this later).
router.delete('/:userId', async (req, res) => {
    try {
        //get the user
        let userId =req.params.userId
        console.log(`delete /users/${userId}/favorite-movies`, "req.body:",req.body)
        let movieToRemove = req.body.name
        const deleteUserResult = await UserModel.findByIdAndDelete(userId)
        //update the user's favorte movies
        console.warn(deleteUserResult)
        let response = {
            message: "user removed",
        }
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500).json("Failed to remove movie user")
    }
});

// Allow users to add a movie to their list of favorites (showing only a text that a movie has been added—more on this later);
router.post('/:userId/favorite-movies', async(req, res) => {
    try {
        //get the user
        let userId =req.params.userId
        console.log(`POST /users/${userId}/favorite-movies`, "req.body:",req.body)
        let movieToAdd = req.body.name
        const addResult = await UserModel.findByIdAndUpdate(
            userId,
            { $push: {FavoriteMovies: movieToAdd}},
        )
        //update the user's favorte movies
        console.warn(addResult)
        let response = {
            message: "movie added",
        }
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500).json("Failed to create user")
    }
});

// Allow users to remove a movie from their list of favorites (showing only a text that a movie has been removed—more on this later);
router.delete('/:userId/favorite-movies', async (req, res) => {
    try {
        //get the user
        let userId =req.params.userId
        console.log(`delete /users/${userId}/favorite-movies`, "req.body:",req.body)
        let movieToRemove = req.body.name
        const addResult = await UserModel.findByIdAndUpdate(
            userId,
            { $pull: {FavoriteMovies: movieToRemove}},
        )
        //update the user's favorte movies
        console.warn(addResult)
        let response = {
            message: "movie removed",
        }
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500).json("Failed to remove movie user")
    }
});

module.exports = router;