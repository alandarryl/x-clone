const express = require('express');
const router = express.Router();
const emailVerificationController = require('../controllers/emailVerification.controller');

// Route to handle email verification using token
router.get('/verify-email/:token', emailVerificationController.verifyEmail);

// Route to check if an email is verified
router.get('/check/:email', emailVerificationController.checkVerificationStatus);

module.exports = router;
