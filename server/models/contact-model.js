// Import the necessary components from Mongoose
const { Schema, model } = require('mongoose');

// Define a Mongoose schema for the "Contact" model
const contactSchema = new Schema({
    // Define a field for the username with a required string type
    username: {
        type: String,
        required: true
    },

    // Define a field for the email with a required string type
    email: {
        type: String,
        required: true
    },

    // Define a field for the message with a required string type
    message: {
        type: String,
        required: true
    }
});

// Create a Mongoose model named "Contact" using the defined schema
const Contact = model("Contact", contactSchema);

// Export the Contact model to make it available for use in other files
module.exports = Contact;
