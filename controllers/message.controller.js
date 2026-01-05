const Message = require('../models/message.model');

// Send a message
const sendMessage = async (req, res) => {
    try {
        const sender_id = req.user.id;
        const { receiver_id, content } = req.body;

        if (!content || !receiver_id) {
            return res.status(400).json({ message: 'Content and receiver_id are required' });
        }

        const newMessage = await Message.create({ sender_id, receiver_id, content });
        return res.status(201).json({ message: "Message sent successfully", messageData: newMessage });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get messages between two users
const getMessagesBetweenUsers = async (req, res) => {
    try {
        const { userId1, userId2 } = req.params;
        const messages = await Message.find({
            $or: [
                { sender_id: userId1, receiver_id: userId2 },
                { sender_id: userId2, receiver_id: userId1 }
            ]
        }).sort({ createdAt: 1 });
        return res.status(200).json({ messages });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get all messages for a user (sent + received)
const getMessagesForUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const messages = await Message.find({
            $or: [{ sender_id: userId }, { receiver_id: userId }]
        }).sort({ createdAt: -1 });
        return res.status(200).json({ messages });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get unread messages for a user
const getUnreadMessagesForUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const messages = await Message.find({
            receiver_id: userId,
            is_read: false
        }).sort({ createdAt: -1 });
        return res.status(200).json({ messages });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Delete a message
const deleteMessage = async (req, res) => {
    try {
        const messageId = req.params.messageId;
        const deleted = await Message.findByIdAndDelete(messageId);
        if (!deleted) return res.status(404).json({ message: 'Message not found' });
        return res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    sendMessage,
    getMessagesBetweenUsers,
    getMessagesForUser,
    getUnreadMessagesForUser,
    deleteMessage
};
