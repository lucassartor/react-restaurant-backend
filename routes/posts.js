const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//Returns all the posts
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch (e) {
        res.json({message: e})
    }
});

//Submit a post
router.post('/', async (req, res) =>{
   const post = new Post({
       title: req.body.title,
       description: req.body.description
   });
   
   try{
       const savedPost = await post.save();
       res.json(savedPost);
   }catch (e) {
      res.json({message: e});
   }

});

//Specific post
router.get('/:postId', async (req, res) =>{
    try{
       const post = await Post.findById(req.params.postId);
       res.json(post);
    }catch (e) {
        res.json({message: e});
    }
});

module.exports = router;
