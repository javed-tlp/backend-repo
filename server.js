const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'https://main--strong-raindrop-c0e6b5.netlify.app/'  // Replace with your actual frontend URL
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Log server configuration details
console.log('Server configuration:', {
    port: PORT,
    corsOrigin: 'https://main--strong-raindrop-c0e6b5.netlify.app/'  // CORS origin for debugging
});

// Redirect root requests to Netlify frontend
app.get('/', (req, res) => {
    console.log('Redirecting root request to Netlify frontend');
    res.redirect('https://main--strong-raindrop-c0e6b5.netlify.app/'); // Redirect to your Netlify URL
});

// Serve API routes
app.use('/send-email', contactRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
