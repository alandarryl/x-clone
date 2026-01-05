const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

const repostController = require('../controllers/repost.controller');

// Repost a post
router.post('/:postId/repost', authMiddleware, repostController.createRepost);

// Remove repost
router.delete('/:postId/repost', authMiddleware, repostController.deleteRepostById);

// Get all reposts
router.get('/', repostController.getAllReposts);

// Get repost by id
router.get('/:id', repostController.getRepostById);

// Get reposts by user id
router.get('/user/:userId', repostController.getRepostsByUserId);

// Get reposts of a post
router.get('/post/:postId', repostController.getRepostsOfPostId);

module.exports = router;
