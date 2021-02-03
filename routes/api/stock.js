const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

router.get('/', (req, res) => {
    Tweet.find()
        .sort({ date: -1 })
        .then(tweets => res.json(tweets))
        .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});

module.exports = router;