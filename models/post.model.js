
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
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
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        reposts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Repost'
        }]
    },
    { 
        timestamps: true
    }
)


module.exports = mongoose.model('Post', postSchema);


