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


router.get('/all', authenticate, (req, res) => {
    const errors = {};

    Profile.find({}).populate({ model: 'User', path: 'user', select: ['name', 'avatar']})
    .then( usrs => {
        if (usrs.length === 0){
            errors.noprofile = 'No profiles to show';
            res.status(404).json(errors);
        }

        res.json(usrs);
    }).catch(e => res.status(400).json({error: 'Something went wrong'}));
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

router.post('/experience', authenticate,  (req, res) => {

    const {isValid, errors} = validateInput(req.body, ['title', 'company', 'from']);

    if (!isValid) return res.status(400).json(errors);

    Profile.findOne({user: req.user.id}).then(usr => {

        const experience = {
            title: req.body.title,
            company: req.body.company,
            location: req.body.location,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
            
        };
        
        usr.experience.unshift(experience);

        usr.save().then(usr => res.json(usr))
        .catch(e => res.status(400).json(e));
    })

});

router.post('/education', authenticate,  (req, res) => {

    const {isValid, errors} = validateInput(req.body, ['school', 'degree', 'fieldofstudy', 'from']);

    if (!isValid) return res.status(400).json(errors);

    Profile.findOne({user: req.user.id}).then(usr => {

        const education = {
            school: req.body.school,
            degree: req.body.degree,
            fieldofstudy: req.body.fieldofstudy,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
            
        };
        
        usr.education.unshift(education);

        usr.save().then(usr => res.json(usr))
        .catch(e => res.status(400).json(e));
    })

});

router.delete('/experience/:exp_id', authenticate, (req, res) => {
    const errors = {};

    Profile.findOne({user: req.user.id}).then(usr => {
        
        const toRemove = usr.experience.map(x => x['_id']);
        console.log(toRemove);

        const newExperiencesArr = usr.experience.filter(x => x['_id'] != req.params.exp_id);
        
        usr.experience = newExperiencesArr;

        usr.save().then(usr => res.json(usr)).catch(e => {
            errors.requestproblem = 'Cannot make requested action';
            res.status(400).json(errors);
        })
        

    }).catch(e => {
        errors.noprofile = 'No such profile!';
        res.status(400).json(errors);
    })
});

module.exports = router;
