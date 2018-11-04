require('./config/config.js');

const express = require('express');
const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose.js');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
let port = process.env.PORT;

app.use(bodyParser());




