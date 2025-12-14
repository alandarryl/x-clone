
const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        content: {
            type: String,
            required: true,
            maxlength: 280
        },
        media_url: {
            type: String,
            default: ''
        },
        reply_to:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
            default: null
        },
    },
    { 
        timestamps: true
    }
)

module.exports = mongoose.model('Tweet', tweetSchema);


