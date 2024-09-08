// config/mailConfig.js
const nodemailer = require('nodemailer');
require('dotenv').config(); // Ensure .env variables are loaded

// Create a transport instance with your email provider settings using .env variables
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
        user: process.env.EMAIL_USER, // Use the .env variable for email
        pass: process.env.EMAIL_PASS  // Use the .env variable for password
    }
});

module.exports = transporter;
