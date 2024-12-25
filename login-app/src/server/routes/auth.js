const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../models/user');

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findByUsername(username);
        if (!user || !user.validatePassword(password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Handle successful login (e.g., create a session or token)
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Registration route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findByUsername(username);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = await User.create({ username, password });
        res.status(201).json({ message: 'User created', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;