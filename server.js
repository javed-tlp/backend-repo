const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors()); // Allow CORS from all origins, or configure specific origins as needed

// Root route to redirect to Netlify frontend
app.get('/', (req, res) => {
    console.log('Redirecting root request to Netlify frontend');
    res.redirect('https://main--strong-raindrop-c0e6b5.netlify.app/'); // Redirect to your Netlify URL
});

// Send email route
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Implement your email sending logic here (e.g., using Nodemailer or another service)

    // If the email sending is successful, send a success response
    res.status(200).json({ message: 'Email sent successfully!' });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
