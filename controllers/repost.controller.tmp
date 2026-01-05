const Repost = require('../models/repost.model');

/**
 * CREATE A REPOST
 */
const createRepost = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.postId;

    //  Vérifier si déjà reposté
    const exists = await Repost.findOne({ user_id: userId, post_id: postId });
    if (exists) {
      return res.status(400).json({ message: 'You already reposted this post' });
    }

    const repost = await Repost.create({ user_id: userId, post_id: postId });

    return res.status(201).json(repost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * DELETE A REPOST
 */
const deleteRepostById = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.postId;

    const deleted = await Repost.findOneAndDelete({ user_id: userId, post_id: postId });

    if (!deleted) {
      return res.status(404).json({ message: 'Repost not found' });
    }

    return res.status(200).json({ message: 'Repost removed successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * GET ALL REPOSTS
 */
const getAllReposts = async (req, res) => {
  try {
    const reposts = await Repost.find().populate('user_id', 'username').populate('post_id');
    return res.status(200).json(reposts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * GET REPOST BY ID
 */
const getRepostById = async (req, res) => {
  try {
    const repost = await Repost.findById(req.params.id).populate('user_id', 'username').populate('post_id');
    if (!repost) return res.status(404).json({ message: 'Repost not found' });
    return res.status(200).json(repost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * GET REPOSTS BY USER ID
 */
const getRepostsByUserId = async (req, res) => {
  try {
    const reposts = await Repost.find({ user_id: req.params.userId }).populate('post_id');
    return res.status(200).json(reposts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * GET REPOSTS OF A POST
 */
const getRepostsOfPostId = async (req, res) => {
  try {
    const reposts = await Repost.find({ post_id: req.params.postId }).populate('user_id', 'username');
    return res.status(200).json(reposts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createRepost,
  deleteRepostById,
  getAllReposts,
  getRepostById,
  getRepostsByUserId,
  getRepostsOfPostId
};
