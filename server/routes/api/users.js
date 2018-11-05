const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');

const {User} = require('../../models/User');

console.log(User.findOne);
const router = express.Router();

router.get('/test', (req, res) => {
    return res.json({msg: 'Users works'});
});

router.post('/register', (req, res) => {
    User.findOne({email: req.body.email}).then(usr => {
        if (usr) {
            return res.status(400).json({email: 'Email already exists'});
        }
        const userData = _.pick(req.body, ['email', 'name', 'password', 'avatar']);
        const newUser = new User({
            email: userData.email,
            name: userData.name,
            password: userData.password,
            avatar: userData.avatar
        });

        newUser.save().then(usr => (
            res.send(usr)
        )).catch(e => console.log(e));
        
    }).catch(e => console.log(e));
});

module.exports = router;


