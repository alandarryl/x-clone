const repost = require('../models/repost.model');


// create a repost

const createRepost = async(req, res) =>{
    try{
        // get data from request body
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

// get all reposts

const getAllReposts = async(req, res) =>{
    try{
        // fetch reposts from database
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get repost by id
const getRepostById = async(req, res) =>{
    try{
        // fetch repost from database using id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get reposts by user id
const getRepostsByUserId = async(req, res) =>{
    try{
        // fetch reposts from database using user id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//get reposts of post id
const getRepostsOfPostId = async(req, res) =>{
    try{
        // fetch reposts from database using post id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

// delete repost by id
const deleteRepostById = async(req, res) =>{
    try{
        // delete repost from database using id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//edit repost by id
const editRepostById = async(req, res) =>{
    try{
        // edit repost in database using id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

//export functions

module.exports = {
    createRepost,
    getAllReposts,
    getRepostById,
    getRepostsByUserId,
    getRepostsOfPostId,
    deleteRepostById,
    editRepostById
};



