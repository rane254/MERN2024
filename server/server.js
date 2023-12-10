// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Import the router from the './router/auth-router' file
const router = require('./router/auth-router');

// Use the router for paths starting with "/api/auth"
app.use("/api/auth", router);

// Set up a listener for incoming requests on the specified PORT
const PORT = 5000;
app.listen(PORT, () => {
    // Log a message to indicate that the server is running
    console.log("Server is running at PORT:", PORT);
});

