const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

//console.log(process.env, 'env');

module.exports = {
    mongoose
}