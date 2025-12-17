const follow = require('../models/follow.model');

// follow a user

const followUser = async(req, res) =>{
    try{
        // get data from request body
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

// unfollow a user
const unfollowUser = async(req, res) =>{
    try{
        // get data from request body
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

// get followers of a user
const getFollowers = async(req, res) =>{
    try{
        // fetch followers from database using user id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

// get following of a user
const getFollowing = async(req, res) =>{
    try{
        // fetch following from database using user id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

// check if user A is following user B
const isFollowing = async(req, res) =>{
    try{
        // check follow status from database using user ids
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

// get follow count of a user
const getFollowCount = async(req, res) =>{
    try{
        // fetch follow count from database using user id
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

// export functions
module.exports = {
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing,
    isFollowing,
    getFollowCount
};




