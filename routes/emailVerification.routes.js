
const express = require('express');
const router = express.Router();

const emailVerificationController = require('../controllers/emailVerification.controller');

// Route to handle email verification
router.get('/verify-email', emailVerificationController.verifyEmail);

module.exports = router;
