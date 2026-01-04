    const Follow = require('../models/follow.model');

    /**
     * FOLLOW A USER
     */
    const followUser = async (req, res) => {
    try {
        const followingId = req.params.id;
        const followerId = req.user.id;

        //  Empêcher self-follow
        if (followerId === followingId) {
        return res.status(400).json({ message: 'You cannot follow yourself' });
        }

        //  Vérifier si déjà suivi
        const exists = await Follow.findOne({
        follower_id: followerId,
        following_id: followingId
        });

        if (exists) {
        return res.status(400).json({ message: 'Already following this user' });
        }

        const follow = await Follow.create({
        follower_id: followerId,
        following_id: followingId
        });

        return res.status(201).json(follow);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /**
     * UNFOLLOW A USER
     */
    const unfollowUser = async (req, res) => {
    try {
        const followingId = req.params.id;
        const followerId = req.user.id;

        const deleted = await Follow.findOneAndDelete({
        follower_id: followerId,
        following_id: followingId
        });

        if (!deleted) {
        return res.status(404).json({ message: 'Follow not found' });
        }

        return res.status(200).json({ message: 'Unfollowed successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /**
     * GET FOLLOWERS OF A USER
     */
    const getFollowers = async (req, res) => {
    try {
        const userId = req.params.id;

        const followers = await Follow.find({ following_id: userId })
        .populate('follower_id', 'username');

        return res.status(200).json(followers);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /**
     * GET FOLLOWING OF A USER
     */
    const getFollowing = async (req, res) => {
    try {
        const userId = req.params.id;

        const following = await Follow.find({ follower_id: userId })
        .populate('following_id', 'username');

        return res.status(200).json(following);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /**
     * CHECK IF USER A FOLLOWS USER B
     */
    const isFollowing = async (req, res) => {
    try {
        const { userId, targetId } = req.params;

        const follow = await Follow.findOne({
        follower_id: userId,
        following_id: targetId
        });

        return res.status(200).json({ isFollowing: !!follow });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /**
     * GET FOLLOW COUNT
     */
    const getFollowCount = async (req, res) => {
    try {
        const userId = req.params.id;

        const followersCount = await Follow.countDocuments({
        following_id: userId
        });

        const followingCount = await Follow.countDocuments({
        follower_id: userId
        });

        return res.status(200).json({
        followers: followersCount,
        following: followingCount
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    module.exports = {
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing,
    isFollowing,
    getFollowCount
    };
