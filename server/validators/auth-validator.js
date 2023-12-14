const { z } = require('zod');

// Creating an object schema
const registerSchema = z.object({
    username: z
        .string({ required_error: "Username is required!" })
        .trim()
        .min(3, { message: "Name must be atleast 3 characters." })
        .max(255, { message: "Username must not be more that 255 characters!" }),

    email: z
        .string({ required_error: "Email is required!" })
        .trim()
        .email({ message: "Enter an valid email!" })
        .min(3, { message: "Email must be atleast 3 characters." })
        .max(255, { message: "Email must not be more that 255 characters!" }),

    phone: z
        .string({ required_error: "Phone is required!" })
        .trim()
        .min(10, { message: "Phone must be of 10 characters." })
        .max(11, { message: "Phone must be of 11 characters." }),

    password: z
        .string({ required_error: "Password is required!" })
        .trim()
        .min(7, { message: "Password must be atleast 7 characters." })
        .max(16, { message: "Password must not be more that 16 characters!" })
});

module.exports = registerSchema;