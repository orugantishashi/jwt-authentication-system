const express = require("express");
const router = express.Router();

const { register, login, home } = require("../Controllers/authController");
const authMiddleware = require("../middelware/middelware");

router.post("/register", register);
router.post("/login", login);
router.get("/home", authMiddleware,home);

module.exports = router;