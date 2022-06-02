// handle any request send to posts
const express = require('express')
const router = express.Router()

//import modules
const Post = require('../models/post.js')




// blogs

//get all posts
router.get('/', async (req, res)=>{
    try {
        const post = await Post.find()
        res.send(post)
    }catch (err){
        res.json({message : err })
    }

})



//get a specific post

router.get('/:post_id', async (req,res)=>{
    try {
        const post = await Post.find({title : req.params.post_id})
        res.json(post)
    }catch (err){
        res.json(err)
    }

})


//delete a post
router.delete('/:post_id', async (req,res)=>{
    try {
        const post = await Post.deleteOne({title : req.params.post_id})
        res.json('deleted successfully')
    }catch (err){
        res.json(err)
    }

})


//update a post
router.patch('/:post_id', async (req,res)=>{
    try {
        const updated_post = await Post.updateOne(
            {title: req.params.post_id},
            {$set: {body: req.body.body}})
        res.json(updated_post)
    }catch (err){
        res.json(err)
    }
})

//get all posts of a similar category
router.get('/category/:category_val', async (req, res)=>{
    try {
        const related_posts = await Post.find({category : req.params.category_val})
        console.log(req.params.category_val)
        res.json(related_posts)
    }catch (err){
        res.json({message : err})
    }
})


//post blog to database
router.post('/',async (request, res)=>{

    try {
        const post = new Post({
                category : request.body.category,
                title : request.body.title,
                body : request.body.body
            })
        const newPost = await post.save();

        res.status(200).json(newPost)
        console.log(newPost)
    }catch (err){
        res.status(500).json(err)
        console.log(err)
    }

})





module.exports = router;