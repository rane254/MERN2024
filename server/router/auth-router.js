// express.Router()

// In Express.js, express.Router() is a mini Express application without all the server configurations but with the ability to define routes, middleware and even have its own set of route handlers. It allows you to modularize your routers and middleware to keep your code organized and maintainable.
// https://expressjs.com/en/guide/routing.html
// Use the express.Router() class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini-app".

// Import the express module
const express = require('express');

// Import controller functions from '../controllers/auth-controller'
const authControllers = require('../controllers/auth-controller');

// Create an instance of the Router class from express
const router = express.Router();

// Import the registerSchema for validation
const registerSchema = require('../validators/auth-validator');

// Import the validate middleware
const validate = require('../middlewares/validate-middleware');

// Define routes for different paths, each using a specific controller function

// Home route
router.route("/").get(authControllers.home);

// About route
router.route("/about").get(authControllers.about);

// Contact route
router.route("/contact").post(authControllers.contact);

// Register route
// Use the validate middleware with the registerSchema for input validation before calling the register controller
router.route("/register").post(validate(registerSchema), authControllers.register);

// Login route
router.route("/login").post(authControllers.login);

// Export the router to make it available for use in other files
module.exports = router;
