const post = require('../models/post.model');


// create a post

const createPost = async(req, res) =>{
    try{
        // get data from request body
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}


// get all posts

const getAllPosts = async(req, res) =>{
    try{
        // fetch posts from database
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get post by id

const getPostById = async(req, res) =>{
    try{
        // fetch post from database using id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get posts by user id
const getPostsByUserId = async(req, res) =>{
    try{
        // fetch posts from database using user id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get posts liked by user id
const getPostsLikedByUserId = async(req, res) =>{
    try{
        // fetch posts liked by user from database using user id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get get posts reposted by user id
const getPostsRepostedByUserId = async(req, res) =>{
    try{
        // fetch posts reposted by user from database using user id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get posts containing specific hashtag
const getPostsByHashtag = async(req, res) =>{
    try{
        // fetch posts containing specific hashtag from database
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get posts ordered by number of likes
const getPostsOrderedByLikes = async(req, res) =>{
    try{
        // fetch posts ordered by number of likes from database
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get posts ordered by number of reposts
const getPostsOrderedByReposts = async(req, res) =>{
    try{
        // fetch posts ordered by number of reposts from database
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get post ordered by creation date
const getPostsOrderedByDate = async(req, res) =>{
    try{
        // fetch posts ordered by creation date from database
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//delete post by id
const deletePostById = async(req, res) =>{
    try{
        // delete post from database using id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//edit post by id
const editPostById = async(req, res) =>{
    try{
        // edit post in database using id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//export functions
module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    getPostsByUserId,
    getPostsLikedByUserId,
    getPostsRepostedByUserId,
    getPostsByHashtag,
    getPostsOrderedByLikes,
    getPostsOrderedByReposts,
    getPostsOrderedByDate,
    deletePostById,
    editPostById
}


