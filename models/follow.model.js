
const mongoose = require('mongoose');

const followSchema = new mongoose.Schema(
    {
        follower_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        following_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    },
    { 
        timestamps: true
    }
)

module.exports = mongoose.model('Follow', followSchema);


