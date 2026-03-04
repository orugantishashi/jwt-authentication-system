const express = require('express');
require("dotenv").config();
const cors = require('cors');

const connectDB = require('./config/db');
const authRoutes = require('./Routes/authRoutes');
const adminRoutes = require('./Routes/admin-route');

const app = express();

// connect database
connectDB();

// middleware
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
    res.send("Backend API running");
});

// api routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});