const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

//Returns all the comments
router.get('/', async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try{
        const comments = await Comment.find();
        res.json(comments);
    }catch (e) {
        res.json({message: e})
    }
});

//Submit a comment
router.post('/', async (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const comment = new Comment({
        dishId: req.body.dishId,
        rating: req.body.rating,
        author: req.body.author,
        comment: req.body.comment

    });

    try{
        const savedComment = await comment.save();
        res.json(savedComment);
    }catch (e) {
        res.json({message: e});
    }

});

module.exports = router;