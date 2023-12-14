// Import the Contact model
const Contact = require('../models/contact-model');

// Contact Form Logic
// Handles the submission of a contact form:
// 1. Get Form Data: Retrieve the data submitted through the request body.
// 2. Save to DB: Save the form data to the database using the Contact model.
// 3. Respond: Respond with a success message or handle errors.
const contactForm = async (req, res) => {
    try {
        // Extract the form data from the request body
        const response = req.body;

        // Create a new contact entry in the database using the Contact model
        await Contact.create(response);

        // Respond with a success message and a 200 status code
        return res.status(200).json({ message: "Message sent successfully." });
    } catch (error) {
        // If an error occurs during the process, respond with an error message and a 500 status code
        return res.status(500).json({ message: "Message not sent successfully." });
    }
};

// Export the contactForm function to make it available for use in other files
module.exports = contactForm;
