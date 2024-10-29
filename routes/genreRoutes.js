const express = require('express')
//load specific part of express
const router = express.Router()

// Return data about a genre (description) by name/title (e.g., “Thriller”);
router.get('/title', (req, res) => {
    res.send("some data");
});

module.exports = router;