
const message = require('../models/message.model');

//send a message
const sendMessage = async (req, res) => {
    try {
        const { sender_id, receiver_id, content } = req.body;
        // Create a new message entry
        const newMessage = await message.create({
            sender_id,
            receiver_id,
            content
        });
        return res.status(201).json({ message: "Message sent successfully", messageData: newMessage });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//get messages between two users
const getMessagesBetweenUsers = async (req, res) => {
    try {
        const { user1_id, user2_id } = req.params;
        // Find all messages between the two users
        const messages = await message.find({
            $or: [
                { sender_id: user1_id, receiver_id: user2_id },
                { sender_id: user2_id, receiver_id: user1_id }
            ]
        }).sort({ createdAt: 1 });
        return res.status(200).json({ messages });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//get seent messages by a user
const getSentMessagesByUser = async (req, res) => {
    try {
        const { sender_id } = req.params;
        // Find all messages sent by the given user
        const messages = await message.find({ sender_id });
        return res.status(200).json({ messages });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//get received messages by a user
const getReceivedMessagesByUser = async (req, res) => {
    try {
        const { receiver_id } = req.params;
        // Find all messages received by the given user
        const messages = await message.find({ receiver_id });
        return res.status(200).json({ messages });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//get message by date odering
const getMessagesOrderedByDate = async (req, res) => {
    try {
        const { user1_id, user2_id } = req.params;
        // Find all messages between the two users ordered by date
        const messages = await message.find({
            $or: [
                { sender_id: user1_id, receiver_id: user2_id },
                { sender_id: user2_id, receiver_id: user1_id }
            ]
        }).sort({ createdAt: -1 });
        return res.status(200).json({ messages });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//delete a message
const deleteMessage = async (req, res) => {
    try {
        const { message_id } = req.params;
        // Find and delete the message entry
        const deletedMessage = await message.findByIdAndDelete(message_id);
        if (!deletedMessage) {
            return res.status(404).json({ message: "Message not found" });
        }
        return res.status(200).json({ message: "Message deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//exporting the functions
module.exports = {
    sendMessage,
    getMessagesBetweenUsers,
    getSentMessagesByUser,
    getReceivedMessagesByUser,
    getMessagesOrderedByDate,
    deleteMessage
};



