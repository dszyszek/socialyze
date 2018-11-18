const validator = require('validator');
const _ = require('lodash');


const validateInput = (data, range) => {
    let errors = {};

    for (let x of range) {
        typeof data[x] === 'undefined' ? (data[x] =  '') : data[x];
       }


    // Login and register validation

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



    // Profile validation
    const notRequired = ['website', 'youtube', 'twitter', 'instagram', 'linkedin', 'facebook'];

    if (range.includes('handle') && !validator.isLength(data.handle, {min: 2, max: 40})) {
        errors.handle = 'Handle must be between 2 and 40 characters long!';
    }


    // Post validation

    if (range.includes('text') && !validator.isLength(data.text, {min: 10, max: 400})) {
        errors.text = 'Text field must be between 10 and 400 characters long!';
    }


    ///

    for (let x of range) {

        if (!notRequired.includes(x)) {
            if (!data[x] && x !== 'confirmPassword') errors[x] = `${x} is required!`;
            else if (!data[x]) errors[x] = `Confirm password is required!`;
        } else {
            if (!validator.isEmpty(data[x])) {
                if (!validator.isURL(data[x])) {
                    errors[x] = 'Not a valid URL';
                  }
            }
        }

       }

    return {
        errors,
        isValid: _.isEmpty(errors)
    };

};


module.exports = validateInput;