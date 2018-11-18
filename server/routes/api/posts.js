const express = require('express');
const mongoose = require('mongoose');

const {authenticate} = require('../../middleware/authenticate');
const {Post} = require('../../models/Post');
const validateInput = require('../../validation/validateInput');

const router = express.Router();


// GET routes

router.get('/test', (req, res) => {
    return res.json({msg: 'Posts works'});
});


router.get('/', authenticate, (req, res) => {
    Post.find({})
    .sort({date: -1})
    .then( docs => {
        res.json(docs);
    })
    .catch(e => res.status(400).json({error: 'Cannot fetch posts!'}));
});

router.get('/:id', authenticate, (req, res) => {
    Post.find({_id: req.params.id})
    .then( docs => {
        if (docs.length === 0) return res.json('No posts to show');
        res.json(docs);
    })
    .catch(e => res.status(400).json({error: 'No post with such ID!'}));
});



// POST routes

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


router.post('/like/:id', authenticate, (req, res) => {
    Post.findOne({_id: req.params.id})
    .then(post => {
        const arrOfID = [];

        post.likes.map(post => {
            arrOfID.push(post.user.toString());
        });

        if (!arrOfID.includes(req.user.id)) {
                
            post.likes.unshift({user: req.user.id});
            post.save()
            .then(post => {
                return res.json(post);
            })
            .catch(e => res.status(400).json({error: 'Cannot do that'}));
        } else {
            return res.json({warning: 'You already liked that!'});
        }

    })
    .catch(e => res.status(404).json(e));
});


// DELETE routes

router.delete('/:id', authenticate, (req, res) => {
    Post.findById(req.params.id)
    .then(post => {
        if (post.user.toString() === req.user.id) {
            
                Post.findByIdAndRemove(req.params.id)
                .then(docs => res.json({success: 'Successfully deleted that post!'}))
                .catch(e => res.status(400).json({error: 'Cannot make that!'}));

        } else {
            res.status(401).json({warning: 'You cannot delete someones else post!'});
        }
    })
    .catch(e => res.status(400).json({error: 'Cannot delete that post!'}));


});


module.exports = router;
