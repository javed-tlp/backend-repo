const nodemailer = require('nodemailer');

// Create a transport instance with your email provider settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS  // Use environment variable
    }
});

console.log('Nodemailer transport configuration:', {
    service: 'gmail',
    user: process.env.EMAIL_USER // Check if EMAIL_USER is loaded
    // Don't log passwords or sensitive information
});

module.exports = transporter;
