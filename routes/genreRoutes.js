const express = require('express')
//load specific part of express
const router = express.Router()

// Return data about a genre (description) by name/title (e.g., “Thriller”);

router.get('/:title', async (req, res) => {
    let title = req.params.title
    console.log("movie title", title)
    let movie = await MovieModel.find({Title: title})
    res.send(movie);
});

module.exports = router;