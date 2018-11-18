const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const PostSchema = new Schema ('post', {
    
});


const Post = mongoose.model('post', PostSchema);

module.exports = {Post};