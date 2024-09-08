const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://your-netlify-site.netlify.app' // Replace with your Netlify URL
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.use('/send-email', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
