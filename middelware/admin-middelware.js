const isAdmin = (req, res, next) => {
    if (req.user.role === "admin") {
        return next();
    }
    console.log(req.user);

    return res.status(403).json({
        message: "Access denied. Admins only."
    });
};

module.exports = isAdmin;