const validator = require('validator');
const _ = require('lodash');


const validateRegisterInput = function (data) {
    let errors = {};

    if (!validator.isLength(data.name, {min: 1, max: 30})) {
        errors.name = 'Name must be between 1 and 30 characters long!'
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    };

};


module.exports = validateRegisterInput;