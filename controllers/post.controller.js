    const Post = require('../models/post.model');

    /*CREATE POST */
    const createPost = async (req, res) => {
    try {
        const { content, media_url } = req.body;

        if (!content) {
        return res.status(400).json({ message: 'Content is required' });
        }

        const post = await Post.create({
        user_id: req.user.id,
        content,
        media_url
        });

        return res.status(201).json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*GET ALL POSTS*/
    const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        .populate('user_id', 'username avatar_url')
        .sort({ createdAt: -1 });

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*GET POST BY ID */
    const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        .populate('user_id', 'username avatar_url');

        if (!post) {
        return res.status(404).json({ message: 'Post not found' });
        }

        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*GET POSTS BY USER ID*/
    const getPostsByUserId = async (req, res) => {
    try {
        const posts = await Post.find({ user_id: req.params.userId })
        .sort({ createdAt: -1 });

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*GET POSTS LIKED BY USER ID */
    const getPostsLikedByUserId = async (req, res) => {
    try {
        const posts = await Post.find({
        likes: req.params.userId
        });

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*GET LIKE COUNT OF A POST */
    const getLikeCountOfPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).select('likes');

        if (!post) {
        return res.status(404).json({ message: 'Post not found' });
        }

        return res.status(200).json({ likes: post.likes.length });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*GET POSTS REPOSTED BY USER ID */
    const getPostsRepostedByUserId = async (req, res) => {
    try {
        const posts = await Post.find({
        reposts: req.params.userId
        });

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*GET POSTS BY HASHTAG*/
    const getPostsByHashtag = async (req, res) => {
    try {
        const hashtag = req.params.hashtag;

        const posts = await Post.find({
        content: { $regex: `#${hashtag}`, $options: 'i' }
        });

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*GET POSTS ORDERED BY LIKES*/
    const getPostsOrderedByLikes = async (req, res) => {
    try {
        const posts = await Post.aggregate([
        {
            $addFields: { likeCount: { $size: '$likes' } }
        },
        {
            $sort: { likeCount: -1 }
        }
        ]);

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*GET POSTS ORDERED BY REPOSTS */
    const getPostsOrderedByReposts = async (req, res) => {
    try {
        const posts = await Post.aggregate([
        {
            $addFields: { repostCount: { $size: '$reposts' } }
        },
        {
            $sort: { repostCount: -1 }
        }
        ]);

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*GET POSTS ORDERED BY DATE */
    const getPostsOrderedByDate = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*DELETE POST */
    const deletePostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
        return res.status(404).json({ message: 'Post not found' });
        }

        if (post.user_id.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Unauthorized' });
        }

        await post.deleteOne();
        return res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    /*EDIT POST */
    const editPostById = async (req, res) => {
    try {
        const { content, media_url } = req.body;

        const post = await Post.findById(req.params.id);

        if (!post) {
        return res.status(404).json({ message: 'Post not found' });
        }

        if (post.user_id.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Unauthorized' });
        }

        post.content = content ?? post.content;
        post.media_url = media_url ?? post.media_url;

        await post.save();
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    };

    module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    getPostsByUserId,
    getPostsLikedByUserId,
    getLikeCountOfPost,
    getPostsRepostedByUserId,
    getPostsByHashtag,
    getPostsOrderedByLikes,
    getPostsOrderedByReposts,
    getPostsOrderedByDate,
    deletePostById,
    editPostById
    };
