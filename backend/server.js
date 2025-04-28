// server/server.js

const express = require('express');
const cors = require('cors'); // <--- ADD this line
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./routes/routes.js');

const app = express();

// Middleware
app.use(cors()); // <--- ADD this line
app.use(express.json());

// Environment Variables
const PORT = process.env.PORT || 3000;
const URL = process.env.URL;

// Ping route to check server status
app.get('/ping', (req, res) => {
    res.json({
        message: "Pong",
        status: "success",
    });
});

// Track DB connection status
let dbConnected = false;

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB!");
        dbConnected = true;
    } catch (error) {
        console.error(`Error connecting to DB: ${error.message}`);
        process.exit(1); // Exit server if DB connection fails
    }
};
connectDB();

// Welcome route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the ASAP Project!",
        database_connected: dbConnected,
    });
});

// API Routes
app.use("/api", router);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
