const express = require('express');
const router = express.Router();
const authMiddleware = require("../middelware/middelware");
const isAdmin = require("../middelware/admin-middelware");
const deleteImageController = require("../Controllers/deleteImageController");

router.delete(
    '/:id',
    authMiddleware,
    isAdmin,
    deleteImageController
)
module.exports= router;