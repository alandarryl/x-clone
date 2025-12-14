
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(

    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength:3,
            maxlength:30
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address']
        },
        password_hash: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            maxlength: 160,
            default: ''
        },
        avatar_url: {
            type: String,
            default: ''
        },
        is_verified: {
            type: Boolean,
            default: false
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);


