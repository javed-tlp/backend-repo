const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for serving static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// CORS setup
app.use(cors({
    origin: 'https://main--strong-raindrop-c0e6b5.netlify.app/'  // Replace with your actual frontend URL
}));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Log CORS setup
console.log('CORS setup with origin:', 'https://main--strong-raindrop-c0e6b5.netlify.app/');

// Redirect root requests to Netlify frontend
app.get('/', (req, res) => {
    console.log('Received request for root URL, redirecting to Netlify frontend');
    res.redirect('https://main--strong-raindrop-c0e6b5.netlify.app/'); // Redirect to your Netlify URL
});

// Serve API routes
app.use('/send-email', (req, res, next) => {
    console.log('Handling /send-email route');
    next(); // Pass control to the next middleware (contactRoutes)
}, contactRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
