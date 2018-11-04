require('./config/config.js');

const express = require('express');
const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose.js');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
let port = process.env.PORT;

app.use(bodyParser());


const model1 = mongoose.model('model1', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const txt = new model1({
    text: 'Some text',
    completed: true
});

txt.save().then(() => console.log('Added successfully')).catch(e => console.log(e));


