
const user = require('../models/user.model');

//get user by id
const getUserById = async(req, res) =>{
    try{
        const { id } = req.params;
        // Find user by id
        const foundUser = await user.findById(id);
        if(!foundUser){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json({user: foundUser});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
};

//get all users
const getAllUsers = async(req, res) =>{
    try{
        // Fetch all users from database
        const users = await user.find();
        return res.status(200).json({users});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
};

//get user by username
const getUserByUsername = async(req, res) =>{
    try{
        const { username } = req.params;
        // Find user by username
        const foundUser = await user.findOne({username});
        if(!foundUser){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json({user: foundUser});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
};

//get online users
const getOnlineUsers = async(req, res) =>{
    try{
        // Fetch users with online status
        const onlineUsers = await user.find({isOnline: true});
        return res.status(200).json({onlineUsers});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
};

//get user by status
const getUsersByStatus = async(req, res) =>{
    try{
        const { status } = req.params;
        // Find users by status
        const users = await user.find({status});
        return res.status(200).json({users});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
};

//get verified users
const getVerifiedUsers = async(req, res) =>{
    try{
        // Fetch users who are verified
        const verifiedUsers = await user.find({is_verified: true});
        return res.status(200).json({verifiedUsers});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
};

//exporting the functions
module.exports = {
    getUserById,
    getAllUsers,
    getUserByUsername,
    getOnlineUsers,
    getUsersByStatus,
    getVerifiedUsers
};

