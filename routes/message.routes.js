const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Send a new message
router.post('/', authMiddleware, messageController.sendMessage);

// Get all messages between two users
router.get('/:userId1/:userId2', authMiddleware, messageController.getMessagesBetweenUsers);

// Delete a message by ID
router.delete('/:messageId', authMiddleware, messageController.deleteMessage);

// Get all messages for a user
router.get('/user/:userId', authMiddleware, messageController.getMessagesForUser);

// Get unread messages for a user
router.get('/user/:userId/unread', authMiddleware, messageController.getUnreadMessagesForUser);

module.exports = router;
