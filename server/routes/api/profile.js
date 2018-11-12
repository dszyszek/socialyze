const express = require('express');
const mongoose = require('mongoose');

const {Profile} = require('../../models/Profile');
const {User} = require('../../models/User');
const {authenticate} = require('../../middleware/authenticate');

const router = express.Router();

router.get('/test', (req, res) => {
    return res.json({msg: 'Profile works'});
});

router.get('/me', authenticate, (req, res) => {
    const errors = {};

    Profile.findOne({user: req.user.id}).then(usr => {
        if (!usr){
            errors.noprofile = 'No such user';
            res.status(404).json(errors);
        }
        return res.json(usr);
    }).catch(e => console.log(e));
});


module.exports = router;
