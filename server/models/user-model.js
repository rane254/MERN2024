// Schema: Defines the structure of the documents within a collection. It specifies the fields, their types, and any additional constraints or validations.


// Import Mongoose module
const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

// Define a user schema with specific fields, types, and constraints
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    phone: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true,
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
});

// secure the password with the bcrypt
userSchema.pre("save", async function () {
    const user = this;

    if (!user.isModified("password")) {
        next();
    }

    try {
        // hash password
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashPassword;
    } catch (error) {
        next(error);
    }
});

// JWT: JSON Web Tokens (JWT) is an open source (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

// JWTs are often used for authentication and authorization in web applications.
// 1. **Authentication** : Verifying the identity of a user or client.
// 2. **Authorization**  : Determining what actions a user is allowed to perform.

// Components of JWT
// Header: Contains metadata about the token, such as type of token and the signing algorithm being used.

// Payload: Contains claims or statements about en entity (typically, the user) and additional data. Common claims include user ID, username and expiration time.

// Signature: To verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way, a signature is included.

// Tokens, such as JWTs (JSON Web Tokens), are typically not stored in the database along with other user details. Instead, they are issued by the server during the Authentication process and then stored on the Client-Side (e.g: in Cookies or Local storage) for the later use.

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            userEmail: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            }
        );
    } catch (error) {
        console.error(error);
    }
};

// Model: Acts as a higher-level abstraction that interacts with the database based on the defined schema. It represents a collection and provides an interface for querying, creating, updating, and deleting documents in that collection. 

// Models are created from schemas and enable you to work with MongoDB data in a more structured manner in your application.

// Define the model or the collection name based on the schema
const User = new mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
module.exports = User;
