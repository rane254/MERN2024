// Import the z object from the 'zod' library
const { z } = require('zod');

// Creating an object schema using Zod for user registration input validation

// Define a Zod schema for user registration with specific fields, types, and constraints
const registerSchema = z.object({
    // Define a field for the username with string type, trimming leading and trailing whitespaces
    // and enforcing minimum and maximum length constraints
    username: z
        .string({ required_error: "Username is required!" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters." })
        .max(255, { message: "Username must not be more than 255 characters!" }),

    // Define a field for the email with string type, trimming leading and trailing whitespaces
    // enforcing email format, and enforcing minimum and maximum length constraints
    email: z
        .string({ required_error: "Email is required!" })
        .trim()
        .email({ message: "Enter a valid email!" })
        .min(3, { message: "Email must be at least 3 characters." })
        .max(255, { message: "Email must not be more than 255 characters!" }),

    // Define a field for the phone with string type, trimming leading and trailing whitespaces
    // and enforcing minimum and maximum length constraints
    phone: z
        .string({ required_error: "Phone is required!" })
        .trim()
        .min(10, { message: "Phone must be of 10 characters." })
        .max(11, { message: "Phone must be of 11 characters." }),

    // Define a field for the password with string type, trimming leading and trailing whitespaces
    // and enforcing minimum and maximum length constraints
    password: z
        .string({ required_error: "Password is required!" })
        .trim()
        .min(7, { message: "Password must be at least 7 characters." })
        .max(16, { message: "Password must not be more than 16 characters!" })
});

// Export the registerSchema to make it available for use in other files
module.exports = registerSchema;
