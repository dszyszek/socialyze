const {Schema} = require('mongoose');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
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