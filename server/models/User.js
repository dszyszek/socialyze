const {Schema} = require('mongoose');
const validator = require('validator');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not valid email'
        }
    },
    password: {
        type: String,
        minlength: 5,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.statics.findByToken = function (token) {
    let User = this;
    let decoded;

    //console.log(User, 'user');

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        //console.log(decoded.id, 'decoded');

       return User.findOne({_id: decoded.id}).then(usr => {
            //console.log(usr, 'usr in findOne');
            if (!usr) {
                return Promise.reject();
            }
            return {
                id: decoded.id,
                token
            };
        }).catch(err => console.log(err));

    } catch(e) {
        return Promise.reject();
    }
};


const User = mongoose.model('User', userSchema);

module.exports = {
    User
};