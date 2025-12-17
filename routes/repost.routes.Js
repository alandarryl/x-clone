

const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');

// Repost a post
router.post('/:postId/repost', postController.repostPost);
// Remove repost
router.delete('/:postId/repost', postController.removeRepost);

module.exports = router;
