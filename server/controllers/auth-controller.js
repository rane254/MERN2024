// Controllers
// These functions handle the application's logic for different routes.
// They are responsible for processing incoming requests, interacting with models, and sending responses.

// Import the User model
const User = require('../models/user-model');

const bcrypt = require('bcryptjs');

// Home Logic
// Sends a welcome message for the home page in JSON format
const home = async (req, res) => {
    try {
        res.send("Welcome to the MERN Home Page using Router.");
        res.status(200).json({ message: "Welcome to the MERN Home Page using Router." });
    } catch (error) {
        // Log any errors that occur during the execution of the home logic
        console.log("Internal server error:", error);
    }
};

// About Logic
// Sends a welcome message for the about page in JSON format
const about = async (req, res) => {
    try {
        res.send("Welcome to the About Page using Router.");
        res.status(200).json({ message: "Welcome to the About Page using Router." });
    } catch (error) {
        // Log any errors that occur during the execution of the about logic
        console.log("Internal server error:", error);
    }
};

// Contact Logic
// Sends a welcome message for the contact page in JSON format
const contact = async (req, res) => {
    try {
        res.send("Welcome to the Contact Page using Router.");
        res.status(200).json({ message: "Welcome to the Contact Page using Router." });
    } catch (error) {
        // Log any errors that occur during the execution of the contact logic
        console.log("Internal server error:", error);
    }
};

// Register Logic
// Handles user registration:
// 1. Get Registration Data: Retrieve user data (username, email, password).
// 2. Check Email existence: Check if Email is already registered.
// 3. Hash Password: Securely hash the password.
// 4. Create User: Create a new User with hashed password.
// 5. Save to DB: Save User data to the database.
// 6. Respond: Respond with "Registration Successful" or handle errors.
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        // Check if the email already exists
        const userExists = await User.findOne({ email: email });

        if (userExists) {
            return res.status(400).json({ message: "Email already exists!" });
        }

        // Create a new user and save to the database
        const userRegistered = await User.create({ username, email, phone, password });

        //In most cases, converting _id to a string is a good practice because it ensures Consistency and Compatibility across different JWT libraries and systems. It also aligns with the expectation that claims in a JWT are represented in strings.
        res.status(201).json({ message: `${ userExists.username } Registration Successfully.`, token: await userRegistered.generateToken(), userId: userRegistered._id.toString() });
        console.log({ userRegistered });

    } catch (error) {
        // Log any errors that occur during the execution of the register logic
        res.status(500).json({ error: "Internal server error!" });
        console.log("Internal server error:", error);
    }
};

// Login Logic
// Sends a welcome message for the login page in JSON format
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });

        if(!userExists) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // const isUser = await bcrypt.compare(password, userExists.password);
        const isUser = await userExists.comparePasswords(password);

        if(isUser) {
            res.status(201).json({ message: `${ userExists.username } Logged in Successfully.`, token: await userExists.generateToken(), userId: userExists._id.toString() });
        }
        else {
            res.status(401).json({ message: "Invalid Credentials!" });
        }
        
    } catch (error) {
        // Log any errors that occur during the execution of the login logic
        res.status(500).json({ error: "Internal server error!" });
        console.log("Internal server error:", error);
    }
};

// Export the controller functions to make them available for use in other files
module.exports = { home, about, contact, register, login };
