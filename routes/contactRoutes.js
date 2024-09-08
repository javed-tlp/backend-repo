const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config(); // Ensure dotenv is configured

// Create a transport instance with your email provider settings using .env variables
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
        user: process.env.EMAIL_USER, // Use the .env variable for email
        pass: process.env.EMAIL_PASS  // Use the .env variable for password
    }
});

// POST route for sending emails
router.post('/', async (req, res) => {
    const { to, subject, text } = req.body;  // Extract data from the request body

    try {
        // Send the email using the transporter
        await transporter.sendMail({
            from: process.env.EMAIL_USER, // Use the .env variable for the sender's email
            to,
            subject,
            text
        });
        // Send success response
        res.status(200).send('Email sent successfully'); // Ensure this is a string
    } catch (error) {
        // Log and send error response
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email'); // Ensure this is a string
    }
});

module.exports = router;
