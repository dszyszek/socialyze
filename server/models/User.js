const {Schema} = require('mongoose');
const validator = require('validator');
const mongoose = require('mongoose');

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
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const User = mongoose.model('User', userSchema);

module.exports = {
    User
};