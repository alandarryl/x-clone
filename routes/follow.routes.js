
const express = require('express');
const router = express.Router();

const followController = require('../controllers/follow.controller');

// Follow a user
router.post('/:id/follow', followController.followUser);
// Unfollow a user
router.post('/:id/unfollow', followController.unfollowUser);
// Get followers of a user
router.get('/:id/followers', followController.getFollowers);
// Get following of a user
router.get('/:id/following', followController.getFollowing);

module.exports = router;

