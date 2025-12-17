
const emailVerificationService = require('../services/emailVerification.service');

//handle email verification
const verifyEmail = async (req, res) => {
    try {
        const { token } = req.params;
        // Verify the email using the service
        const result = await emailVerificationService.verifyEmailToken(token);
        if (result.success) {
            return res.status(200).json({ message: "Email verified successfully" });
        }
        else {
            return res.status(400).json({ message: result.message });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//check verification status
const checkVerificationStatus = async (req, res) => {
    try {
        const { email } = req.params;
        // Check verification status using the service
        const isVerified = await emailVerificationService.isEmailVerified(email);
        return res.status(200).json({ email, isVerified });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//exporting the functions
module.exports = {
    verifyEmail,
    checkVerificationStatus
};




