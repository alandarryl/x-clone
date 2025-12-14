

const mongoose = require('mongoose');


const emailVerificationSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        token: {
            type: String,
            required: true
        },
        expires_at: {
            type: Date,
            required: true
        }
    },
    { timestamps: true
    }
);

module.exports = mongoose.model('EmailVerification', emailVerificationSchema);

