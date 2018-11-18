const express = require('express');
const mongoose = require('mongoose');

const {authenticate} = require('../../middleware/authenticate');
const {Post} = require('../../models/Post');
const validateInput = require('../../validation/validateInput');

const router = express.Router();

router.get('/test', (req, res) => {
    return res.json({msg: 'Posts works'});
});


router.post('/', authenticate, (req, res) => {

    const {isValid, errors} = validateInput(req.body, ['text']);
    if (!isValid) return res.status(400).json(errors);


    const post = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });

    post.save().then(docs => res.json(docs))
    .catch(e => res.status(400).json({error: 'Cannot do that'}));
});


module.exports = router;
