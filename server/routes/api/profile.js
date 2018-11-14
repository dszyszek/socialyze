const express = require('express');
const mongoose = require('mongoose');

const {Profile} = require('../../models/Profile');
const {User} = require('../../models/User');
const {authenticate} = require('../../middleware/authenticate');
const validateInput = require('../../validation/validateInput');

const router = express.Router();

router.get('/test', (req, res) => {
    return res.json({msg: 'Profile works'});
});

router.get('/me', authenticate, (req, res) => {
    const errors = {};

    Profile.findOne({user: req.user.id}).populate({ model: 'User', path: 'user', select: ['name', 'avatar']}).then(usr => {
        if (!usr){
            errors.noprofile = 'No such user';
            res.status(404).json(errors);
        }
        return res.json(usr);
    }).catch(e => console.log(e));
});


    router.get('/handle/:handle', authenticate, (req, res) => {
        const errors = {};
    
        Profile.findOne({handle: req.params.handle}).populate({ model: 'User', path: 'user', select: ['name', 'avatar']})
        .then(usr => {
            if (!usr) {
                errors.noprofile = 'There is no such profile!';
                res.status(404).json(errors);
            }
    
            res.json(usr);
        }).catch(e => res.status(400).json(e));
    
    
    });

    router.get('/user/:id', authenticate, (req, res) => {
        const errors = {};

        Profile.findOne({user: req.params.id}).populate({ model: 'User', path: 'user', select: ['name', 'avatar']})
        .then(usr => {
            if (!usr) {
                errors.noprofile = 'There is no such profile!';
                res.status(404).json(errors);
            }
    
            res.json(usr);
        }).catch(e => res.status(400).json(e));
    
    
    });



router.post('/me', authenticate, (req, res) => {
    const schemaTypes = ['handle', 'company', 'website', 'location', 'status', 'bio', 'githubusername'];
    const socialmediaTypes = ['youtube', 'twitter', 'instagram', 'linkedin', 'facebook'];
    const profileFields = {
        social: {}
    };

    const {errors, isValid} = validateInput(req.body, ['handle', 'status', 'skills', 'website', ...socialmediaTypes]);
    if (!isValid) return res.status(400).json(errors);

    profileFields.user = req.user.id;

    for (let x in req.body) {
        if (schemaTypes.includes(x)) {
            profileFields[x] = req.body[x];
        }
        if (socialmediaTypes.includes(x)) {
            profileFields.social[x] = req.body[x];
        }
    }

    if (typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }


    Profile.findOne({user: req.user.id}).then(prf => {
        const errors = {};
        
        if (prf) {
            Profile.findOneAndUpdate({user: req.user.id}, {$set: profileFields}, {new: true}).then(usr => {
                res.json(usr);
            }).catch(e => res.status(400).json(e));
        }   else {
            Profile.findOne({handle: profileFields.handle}).then(profile => {
                if (profile) {
                    errors.handle = 'Handle already exists';
                    res.status(400).json(errors);
                }  
            }).catch(e => res.status(400).json(e));

            new Profile(profileFields).save().then(prf => res.json(prf)).catch(e => res.status(400).json(e));
        }
    })

    res.json(profileFields);
});


module.exports = router;
