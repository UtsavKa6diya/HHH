const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for handling contact form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Process the contact form data and send emails, save to database, etc.
    // Implement your own logic here.

    // For demo purposes, just sending a response
    res.json({ message: 'Thank you for contacting us!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
