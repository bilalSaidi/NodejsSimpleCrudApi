const express = require('express');
const router = express.Router();
const PostModel  = require('../models/post');

// read all posts 

router.get('/', async(req,res)=>{

    try {

        const allPostst = await PostModel.find();
        res.send(allPostst);
        
    } catch (error) {
        res.json({message : error});
    }

});


// read specefic post  

router.get('/:id' , async(req,res) => {
    try {
    const onePost = await PostModel.findById(req.params.id);   
    res.send(onePost);  
    } catch (error) {
        res.json({message : error});
    }
});


// add post 

router.post('/' , async (req,res) => {
    const post = new PostModel({
        title : req.body.title,
        description : req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
        
    } catch (error) {
        res.json({message : error});
        
    }
    
});

//delete post 

router.delete('/:id' , async(req,res) => {
    try {
     const removePost = await  PostModel.remove({_id : req.params.id});
    res.send(removePost);  
    } catch (error) {
        res.json({message : error});
    }
});

//update post 

router.patch('/:id' , async(req,res) => {
    try {
     const updatePost = await  PostModel.updateOne(
         {_id : req.params.id} , 
         {$set : {title : req.body.title}}
    );
    res.send(updatePost);  
    } catch (error) {
        res.json({message : error});
    }
});




module.exports = router ;