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

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Define a default route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve index.html from the root
});

// Serve API routes
app.use('/send-email', contactRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
