// Create web server 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Import comments.js
const comments = require('./comments.js');

// Use body-parser middleware
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
    res.send(comments.getComments());
});

// Get comment