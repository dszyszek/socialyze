const validator = require('validator');
const _ = require('lodash');


const validateInput = function (data, range) {
    let errors = {};

    for (let x of range) {
        typeof data[x] === 'undefined' ? (data[x] =  '') : data[x];
       }


    if (range.includes('name') && !validator.isLength(data.name, {min: 3, max: 30})) {
        errors.name = 'Name must be between 3 and 30 characters long!';
    }

    if (range.includes('email') && !validator.isEmail(data.email)) errors.email = 'Email is incorrect!';

    if (range.includes('password') && !validator.isLength(data.password, {min: 8})) {
        errors.password = 'Password must be at least 8 characters long!';
    }

    if (range.includes('confirmPassword') && !validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords must match!';
    }


    for (let x of range) {
        if (!data[x] && x !== 'confirmPassword') errors[x] = `${x} is required!`;
        if (!data[x] && x === 'confirmPassword') errors[x] = `Confirm password is required!`;
       }

    return {
        errors,
        isValid: _.isEmpty(errors)
    };

};


module.exports = validateInput;