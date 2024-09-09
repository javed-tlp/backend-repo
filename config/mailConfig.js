// config/mailConfig.js
const nodemailer = require('nodemailer');

// Create a transport instance with your email provider settings directly
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
        user: 'saifijaved616@gmail.com', // Directly use your email address
        pass: 'lvzq tgtl rgpd ytlc'      // Directly use your email password
    }
});

module.exports = transporter;
