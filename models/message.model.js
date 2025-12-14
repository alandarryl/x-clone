
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        sender_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        receiver_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        content : {
            type: String,
            required: true,
            maxlength: 1000
        },
        is_read: {
            type: Boolean,
            default: false
        },
        read_at: {
            type: Date,
            default: null
        }
    },
    { 
        timestamps: true
    }
);

module.exports = mongoose.model('Message', messageSchema);
