const express = require('express');
const router = express.Router();
const transporter = require('../config/mailConfig');

router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Contact Form Submission from ${name}`,
        text: `Message from ${name} (${email}):\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error.message);
            return res.status(500).send('Error sending email. Please try again.');
        } else {
            console.log('Email sent successfully: ' + info.response);
            return res.status(200).render('thankyou', { name });
        }
    });
});

module.exports = router;
