const express = require('express');
require("dotenv").config();
const cors = require('cors');
const multer = require('multer');
const connectDB = require('./config/db');
const authRoutes = require('./Routes/authRoutes');
const adminRoutes = require('./Routes/admin-route');
const uploadImageRoutes = require('./Routes/image-routes')
const imgdeleteRoute = require('./Routes/imgdelete-route')
const fetchImagescontroller = require('./Routes/image-routes')


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
app.use("/api/image", uploadImageRoutes);
app.use("/api/image", imgdeleteRoute);
app.use("/api/image", fetchImagescontroller)



app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({
            success: false,
            message: err.message,
            expectedFields: ["file", "image"],
        });
    }

    if (err) {
        return res.status(500).json({
            success: false,
            message: err.message || "Internal server error",
        });
    }

    next();
});
// server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
