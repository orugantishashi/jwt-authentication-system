const exprees = require("express");
const authMiddleware = require("../middelware/middelware");
const isAdmin = require("../middelware/admin-middelware");

const router = exprees.Router();

router.get("/admin", authMiddleware, isAdmin,(req, res) => {
    return res.json({
        message: "Welcome to the admin page!"
    });
});

module.exports = router;