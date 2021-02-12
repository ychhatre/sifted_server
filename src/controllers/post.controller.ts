import Post from "../models/Post"; 
import express from "express"; 

const createPost = (req: express.Request, res: express.Response) => {
    const post = new Post({
        admin: req.body.admin,
        description: req.body.description,
        tags: req.body.tags 
    });

    post.save().then(result => {
        return res.status(201).send(result); 
    }).catch(err => {
        return res.status(502).json({
            error: err.message
        })
    })
}

const getAllPosts = async(req: express.Request, res: express.Response) => {
    const posts = await Post.find({}); 
    return res.status(200).send(posts); 
}

const getPost = async(req: express.Request, res: express.Response) => {
    const post = await Post.findOne({_id: req.params.id})
    if(post) {
        return res.status(200).send(post); 
    } else {
        return res.status(502).json({
            error: "Post does not exist"
        })
    }
}

export default { createPost, getAllPosts, getPost}