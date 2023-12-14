// Validation Middleware using Zod
// This middleware function uses Zod to validate the request body data against the provided schema.

// The "validate" function is a higher-order function that takes a Zod schema as an argument.
// It returns an asynchronous middleware function that can be used in Express routes.

// ".parse(data: unknown): T"
// Given any Zod schema, you can call its ".parse" method to check if "data" is valid. 
// If it is valid, a value is returned with full type information; otherwise, an error is thrown.

// ".parseAsync(data: unknown): Promise<T>"
// If you use asynchronous refinements or transforms, you'll need to use ".parseAsync".

const validate = (schema) => async (req, res, next) => {
    try {
        // Use Zod's ".parseAsync" to validate the request body against the provided schema
        const parseBody = await schema.parseAsync(req.body);

        // If the validation is successful, update the request body with the parsed data
        req.body = parseBody;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // If validation fails, extract the error message from the first error in the array
        const message = err.errors[0].message;

        // Respond with a 400 status code and the validation error message
        res.status(400).json({ message });
    }
};

// Export the validate middleware function to make it available for use in other files
module.exports = validate;
