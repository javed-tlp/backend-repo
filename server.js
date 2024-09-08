require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'https://main--strong-raindrop-c0e6b5.netlify.app/' // Replace with your actual frontend URL
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Serve API routes
app.use('/send-email', contactRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('EMAIL_USER:', process.env.EMAIL_USER); // Check if EMAIL_USER is loaded
});
