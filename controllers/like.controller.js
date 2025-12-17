
const like = require('../models/like.model');

//like a post
const likePost = async (req, res) => {
    try {
        const { user_id, post_id } = req.body;

        // Create a new like entry
        const newLike = await like.create({
            user_id,
            post_id
        });

        return res.status(201).json({ message: "Post liked successfully", like: newLike });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//unlike a post
const unlikePost = async (req, res) => {
    try {
        const { user_id, post_id } = req.body;
        // Find and delete the like entry
        const deletedLike = await like.findOneAndDelete({
            user_id,
            post_id
        });
        if (!deletedLike) {
            return res.status(404).json({ message: "Like not found" });
        }
        return res.status(200).json({ message: "Post unliked successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//get likes for a post
const getLikesForPost = async (req, res) => {
    try {
        const { post_id } = req.params;
        // Find all likes for the given post
        const likes = await like.find({ post_id });
        return res.status(200).json({ likes });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//get likes by a user
const getLikesByUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        // Find all likes by the given user
        const likes = await like.find({ user_id });
        return res.status(200).json({ likes });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//exporting the functions
module.exports = {
    likePost,
    unlikePost,
    getLikesForPost,
    getLikesByUser
};

