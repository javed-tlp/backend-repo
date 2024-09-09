// when you want to send the details of contact from to javed's mail ID

// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const transporter = require('../config/mailConfig');

// Log the initialization of routes
console.log('Contact routes initialized');

// Send email route
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // Log the received request body
    console.log('Received request body:', req.body);

    // Validate input fields
    if (!name || !email || !message) {
        console.warn('Validation failed: Missing required fields');
        return res.status(400).send('Missing required fields: name, email, or message');
    }

    // Set up mail options
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Recipient email address from environment variable
        replyTo: email,
        subject: `Contact Form Submission from ${name}`,
        text: `Message from ${name} (${email}):\n\n${message}`
    };

    // Log mail options
    console.log('Mail options:', mailOptions);

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
        return res.status(200).send('Email sent successfully');
    } catch (error) {
        // Log the error
        console.error('Error sending email:', error.message);
        return res.status(500).send('Error sending email. Please try again.');
    }
});

module.exports = router;

// when you want to send the details of contact from to other mail ID
// const express = require('express');
// const router = express.Router();
// const transporter = require('../config/mailConfig');

// // Log the initialization of routes
// console.log('Contact routes initialized');

// // Send email route
// router.post('/', async (req, res) => {
//     const { name, email, message } = req.body;

//     // Log the received request body
//     console.log('Received request body:', req.body);

//     // Validate input fields
//     if (!name || !email || !message) {
//         console.warn('Validation failed: Missing required fields');
//         return res.status(400).send('Missing required fields: name, email, or message');
//     }

//     // Set up mail options
//     const mailOptions = {
//         from: email,
//         to: 'banonisha616@gmail.com', // Use recipient email from .env
//         replyTo: email,
//         subject: `Contact Form Submission from ${name}`,
//         text: `Message from ${name} (${email}):\n\n${message}`
//     };

//     // Log mail options
//     console.log('Mail options:', mailOptions);

//     try {
//         // Send the email
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully:', info.response);
//         return res.status(200).send('Email sent successfully');
//     } catch (error) {
//         // Log the error
//         console.error('Error sending email:', error.message);
//         return res.status(500).send('Error sending email. Please try again.');
//     }
// });

// module.exports = router;
