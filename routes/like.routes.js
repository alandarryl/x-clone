
const express = require('express');
const router = express.Router();

const likeController = require('../controllers/like.controller');
// Like a post
router.post('/:postId', likeController.likePost);
// Unlike a post
router.delete('/:postId', likeController.unlikePost);
// Get likes for a post
router.get('/:postId', likeController.getLikesForPost);
// Get likes by a user
router.get('/user/:userId', likeController.getLikesByUser);


module.exports = router;

