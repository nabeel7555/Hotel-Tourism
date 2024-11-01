const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("../backend/models/User"); // Adjust this path if needed

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb+srv://nabeel7555:nabeel7555@nabeel7555.eyd05.mongodb.net/")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error);
    });

// Sign-up endpoint
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = new User({
            email,
            password // Store the plain password
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Error creating user" });
    }
});

// Sign-in endpoint
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        console.log("User found:", user); // Log the user found

        if (!user) {
            return res.status(400).json({ message: "Wrong details" });
        }

        // Check if the password matches (direct comparison)
        if (password !== user.password) {
            return res.status(400).json({ message: "Wrong details" });
        }

        // If everything is correct, return success message
        res.status(200).json({ message: "Sign-in successful" });
    } catch (error) {
        console.error("Error during sign-in:", error); // Log the error for debugging
        res.status(500).json({ error: 'Error signing in' });
    }
});

// Start server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
