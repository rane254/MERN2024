// Load environment variables from a configuration file
require('dotenv').config();

// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Import the router from the './router/auth-router' file
const authRoute = require('./router/auth-router');

const contactRoute = require('./router/contact-router');

// Import the connectDB function from './utils/db'
const connectDB = require('./utils/db');

// Enable parsing of JSON data in requests
app.use(express.json());

// Use the router for paths starting with "/api/auth"
app.use("/api/auth", authRoute);

// Use the router for paths starting with "/api/form"
app.use("/api/form", contactRoute);

// Connect to the database using the connectDB function
connectDB().then(() => {
    // Set up a listener for incoming requests on the specified PORT
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        // Log a message to indicate that the server is running
        console.log(`Server is running at PORT: ${PORT}`);
    });
});
