require('./config/config.js');

const express = require('express');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose.js');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const {User} = require('./models/User.js');


const app = express();

let port = process.env.PORT;

app.use(bodyParser());

// Routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);





app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
