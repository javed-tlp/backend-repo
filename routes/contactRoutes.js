// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const transporter = require('../config/mailConfig');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // Validate input fields
    if (!name || !email || !message) {
        return res.status(400).send('Missing required fields: name, email, or message');
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Recipient email address
        replyTo: email,
        subject: `Contact Form Submission from ${name}`,
        text: `Message from ${name} (${email}):\n\n${message}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully: ' + info.response);
        return res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error.message);
        return res.status(500).send('Error sending email. Please try again.');
    }
});

module.exports = router;
