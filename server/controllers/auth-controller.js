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
        // Send a simple welcome message as a response
        res.send("Welcome to the MERN Home Page using Router.");
        
        // Send a JSON response with a welcome message and a 200 status code
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
        // Send a simple welcome message as a response
        res.send("Welcome to the About Page using Router.");
        
        // Send a JSON response with a welcome message and a 200 status code
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
        // Send a simple welcome message as a response
        res.send("Welcome to the Contact Page using Router.");
        
        // Send a JSON response with a welcome message and a 200 status code
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
        // Destructure registration data from the request body
        const { username, email, phone, password } = req.body;

        // Check if the email already exists
        const userExists = await User.findOne({ email: email });

        if (userExists) {
            // If the email is already registered, send a 400 response with an error message
            return res.status(400).json({ message: "Email already exists!" });
        }

        // Create a new user and save it to the database
        const userRegistered = await User.create({ username, email, phone, password });

        // Respond with a success message, a generated token, and the user's ID
        res.status(201).json({ message: `${ userRegistered.username } Registration Successfully.`, token: await userRegistered.generateToken(), userId: userRegistered._id.toString() });
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
        // Destructure login data from the request body
        const { email, password } = req.body;

        // Check if a user with the provided email exists
        const userExists = await User.findOne({ email });

        if(!userExists) {
            // If the user does not exist, send a 400 response with an error message
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Check if the provided password matches the hashed password in the database
        const isUser = await userExists.comparePasswords(password);

        if(isUser) {
            // If the password is correct, respond with a success message, a generated token, and the user's ID
            res.status(201).json({ message: `${ userExists.username } Logged in Successfully.`, token: await userExists.generateToken(), userId: userExists._id.toString() });
        }
        else {
            // If the password is incorrect, send a 401 response with an error message
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
