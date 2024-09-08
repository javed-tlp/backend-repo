const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'https://contactformnode.netlify.app'  // Replace with your Netlify URL
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'routes'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file from the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Use routes for handling form submission
app.use('/send-email', contactRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
