

const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/auth.middleware'); 

// Create a new post
router.post('/', authMiddleware, postController.createPost);

// Get all posts
router.get('/', postController.getAllPosts);

// Get post by id
router.get('/:id', postController.getPostById);

// Update post by id
router.put('/:id', authMiddleware, postController.editPostById);

// Delete post by id
router.delete('/:id', authMiddleware, postController.deletePostById);

// Get posts by user id
router.get('/user/:userId', postController.getPostsByUserId);

// Get posts liked by user id
router.get('/liked/:userId', postController.getPostsLikedByUserId);

// Get posts reposted by user id
router.get('/reposted/:userId', postController.getPostsRepostedByUserId);

// Get posts by hashtag
router.get('/hashtag/:hashtag', postController.getPostsByHashtag);

// Get posts ordered by likes
router.get('/sort/likes', postController.getPostsOrderedByLikes);

// Get posts ordered by reposts
router.get('/sort/reposts', postController.getPostsOrderedByReposts);

// Get posts ordered by date
router.get('/sort/date', postController.getPostsOrderedByDate);

// Get like count of a post
router.get('/:id/likes/count', postController.getLikeCountOfPost);

module.exports = router;



