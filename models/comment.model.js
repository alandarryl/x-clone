
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        tweet_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
            required: true
        },
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
            type: string,
            default: ""
        }
    },
    {timestamps : true}
);


module.exports = mongoose.model("Comment", commentSchema);




