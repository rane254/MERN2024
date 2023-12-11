// Import the Mongoose module
const mongoose = require('mongoose');

// Database URI
// Use the MongoDB connection URI from the environment variable (process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI;

// Define a function to connect to the MongoDB database asynchronously
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database using the provided URI
        await mongoose.connect(URI);

        // Log a success message if the connection is established
        console.log("Database connection successful!");
    } catch (error) {
        // Log an error message if the connection fails and exit the process
        console.error("Database connection failed!");
        process.exit(0);
    }
};

// Export the connectDB function to make it available for use in other files
module.exports = connectDB;
