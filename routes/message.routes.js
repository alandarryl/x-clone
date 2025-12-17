
const express = require('express');
const router = express.Router();

const messageController = require('../controllers/message.controller');

// Send a new message
router.post('/', messageController.sendMessage);
// Get all messages between two users
router.get('/:userId1/:userId2', messageController.getMessagesBetweenUsers);
// Delete a message by ID
router.delete('/:messageId', messageController.deleteMessageById);
// Get all messages for a user
router.get('/user/:userId', messageController.getMessagesForUser);
//get unread messages for a user
router.get('/user/:userId/unread', messageController.getUnreadMessagesForUser);



module.exports = router;

