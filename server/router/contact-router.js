// Import the express module
const express = require('express');

// Create an instance of the Router class from express
const router = express.Router();

// Import the contactForm controller function from '../controllers/contact-controller'
const contactForm = require('../controllers/contact-controller');

// Contact route
// Define a route for handling POST requests to the "/contact" path, using the contactForm controller
router.route("/contact").post(contactForm);

// Export the router to make it available for use in other files
module.exports = router;
