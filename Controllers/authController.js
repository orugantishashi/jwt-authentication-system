const Data = require("../models/Data");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//  POST ROUTE (REGISTER)
exports.register = async (req, res) => {
    try {
        console.log("BODY:", req.body);   // 👈 ADD THIS

        const { name, email, password,role } = req.body;
        const hashedPassword= await bcrypt.hash(password,10)

        // check empty
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        // check duplicate email
        const existingUser = await Data.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }
        
        // save to DB
        const newUser = await Data.create({
            name,
            email,
            password:hashedPassword,
            role
          
        });

        res.status(201).json({
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {
        console.log(error);
        console.error("REAL ERROR:", error);  
        res.status(500).json({ message: "Server error" });
    }
};
exports.login = async (req, res) => {
    try {
        const { email, password ,role} = req.body;

        const user = await Data.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign(
            { userid: user._id, role: user.role },
            "secretkey",
            { expiresIn: "15m" }
        );
        console.log("Generated Token:", token);
        res.status(200).json({
            message: "Login success",
            data: {
                name: user.name,
                email: user.email,
                role: user.role,
                token: token
            }
        });
        
    }
    catch (err) {
        res.status(500).json({ message: "error" });
    }
    
};
// PROFILE
exports.home = async (req, res) => {
    const user = await Data.findById(req.user.userid).select("-password");

    res.json({
        message: "Protected route",
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        }
    });
};