const express = require('express');
const router = express.Router();

const followController = require('../controllers/follow.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Follow a user
router.post('/:id/follow', authMiddleware, followController.followUser);

// Unfollow a user
router.post('/:id/unfollow', authMiddleware, followController.unfollowUser);

// Get followers of a user
router.get('/:id/followers', followController.getFollowers);

// Get following of a user
router.get('/:id/following', followController.getFollowing);

// Check follow status
router.get('/:userId/is-following/:targetId', followController.isFollowing);

// Get follow count
router.get('/:id/follow-count', followController.getFollowCount);

module.exports = router;
