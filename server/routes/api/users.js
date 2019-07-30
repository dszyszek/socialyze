const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {User} = require('../../models/User');
const {authenticate} = require('../../middleware/authenticate');
const validateInput = require('../../validation/validateInput');

//console.log(User.findOne);
const router = express.Router();


// GET 
router.get('/test', (req, res) => {
    return res.json({msg: 'Users works'});
});

router.get('/me',authenticate, (req, res) => {
    let userData;
    
    jwt.verify(req.user.token, process.env.JWT_SECRET, (err, usr) => {
        if (err) return console.log(err);
        userData = usr;
    });

    res.json(userData);
});

//POST

router.post('/register', (req, res) => {

     const {errors, isValid} = validateInput(req.body, ['email', 'name', 'password', 'confirmPassword']);
     if (!isValid) return res.status(400).json(errors);


    User.findOne({email: req.body.email}).then(usr => {
        if (usr) {
            return res.status(400).json({email: 'Email already exists'});
        }
        const userData = _.pick(req.body, ['email', 'name', 'password']);
        const avatar = 'https://www.gravatar.com/avatar/anything?s=200&d=mm'

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
                )).catch(e => res.status(400).json({error: e.errors.name.message}));

            });
        });


    }).catch(e => console.log(e));
});



router.post('/login', (req, res) => {

    const {errors, isValid} = validateInput(req.body, ['email', 'password']);
    if (!isValid) return res.status(400).json(errors);

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


router.post('/updatePicture', authenticate, (req, res) => {

    const userData = _.pick(req.body, ['avatar']);

    User
    .findOneAndUpdate({_id: req.user.id}, {avatar: userData.avatar}, {new: true})
    .then(data => {
        res.json(data);
    })
    .catch(e => res.status(400).json(e))

});


module.exports = router;


