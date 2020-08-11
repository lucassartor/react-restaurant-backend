const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    dishId: Number,
    rating: Number,
    comment: String,
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comments', PostSchema);