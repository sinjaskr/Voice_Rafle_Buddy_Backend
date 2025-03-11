// app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./Routes/authRoutes');
const raffleRoutes = require('./Routes/raffleRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', raffleRoutes);

// Connect to MongoDB
connectDB();

module.exports = app;