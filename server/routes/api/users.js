const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {User} = require('../../models/User');
const {authenticate} = require('../../middleware/authenticate');

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
        const avatar = gravatar.url('userData.email', {s: '200', r: 'pg', d: 'mm'})

        const newUser = new User({
            email: userData.email,
            name: userData.name,
            password: userData.password,
            avatar
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;

                newUser.password = hash;

                newUser.save().then(usr => (
                    res.send(usr)
                )).catch(e => console.log(e));

            });
        });


    }).catch(e => console.log(e));
});



router.post('/login', (req, res) => {
    const userData = _.pick(req.body, ['email', 'password']);

    User.findOne({email: userData.email}).then(usr => {
        if (!usr) return res.status(404).json({email: 'User not found'});

        bcrypt.compare(userData.password, usr.password).then(isMatch => {
            if (isMatch) {

                const payload = {
                    id: usr.id,
                    name: usr.name,
                    email: usr.email,
                    avatar: usr.avatar
                }
                jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 3600}, (err, token) => {
                    res.json({
                        success: true,
                        token: token
                    });
                });

                //res.json({msg: 'Success- token will be there'});
            } else {
                res.status(404).json({password: 'Password incorrect'});
            }
        });

    })
});

router.get('/me',authenticate, (req, res) => {
    let userData;
    
    jwt.verify(req.user.token, process.env.JWT_SECRET, (err, usr) => {
        if (err) return console.log(err);
        userData = usr;
    });

    res.json(userData);
});


module.exports = router;


