// Controllers

// In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design.

// Home Logic
const home = async (req, res) => {
    try {
        // Send a welcome message for the home page in JSON format
        res.status(200).json({ message: "Welcome to the MERN Home Page using Router." });
    } catch (error) {
        // Log any errors that occur during the execution of the home logic
        console.log("Internal server error:", error);
    }
};

// About Logic
const about = async (req, res) => {
    try {
        // Send a welcome message for the about page in JSON format
        res.status(200).json({ message: "Welcome to the About Page using Router." });
    } catch (error) {
        // Log any errors that occur during the execution of the about logic
        console.log("Internal server error:", error);
    }
};

// Contact Logic
const contact = async (req, res) => {
    try {
        // Send a welcome message for the contact page in JSON format
        res.status(200).json({ message: "Welcome to the Contact Page using Router." });
    } catch (error) {
        // Log any errors that occur during the execution of the contact logic
        console.log("Internal server error:", error);
    }
};

// Register Logic
const register = async (req, res) => {
    try {
        console.log(req.body);
        // Log the request body and send a welcome message for the register page in JSON format
        res.status(200).json({ message: req.body });
    } catch (error) {
        // Log any errors that occur during the execution of the register logic
        console.log("Internal server error:", error);
    }
};

// Login Logic
const login = async (req, res) => {
    try {
        // Send a welcome message for the login page in JSON format
        res.status(200).json({ message: "Welcome to the Login Page using Router." });
    } catch (error) {
        // Log any errors that occur during the execution of the login logic
        console.log("Internal server error:", error);
    }
};

// Export the controller functions to make them available for use in other files
module.exports = { home, about, contact, register, login };
