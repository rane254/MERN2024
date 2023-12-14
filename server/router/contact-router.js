// Import the express module
const express = require('express');

// Create an instance of the Router class from express
const router = express.Router();

const contactForm = require('../controllers/contact-controller');


// Contact route
router.route("/contact").post(contactForm);

// Export the router to make it available for use in other files
module.exports = router;
