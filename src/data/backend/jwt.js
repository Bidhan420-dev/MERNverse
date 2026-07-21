const jwt = {
  title: "JWT Authentication",

  intro:
    "JWT (JSON Web Token) is a secure way of authenticating users in modern web applications. It allows servers to verify user identity without storing session data on the server.",

  theory: `
Authentication is the process of verifying who a user is.

Authorization is determining what a user can access.

JWT is commonly used in MERN applications for authentication.

Login Process:

User Login
↓
Server Validates Credentials
↓
JWT Generated
↓
Token Sent to Client
↓
Client Stores Token
↓
Protected Requests Include Token

JWT contains three parts:

Header
Payload
Signature

Example:

xxxxx.yyyyy.zzzzz

Header:
Contains token information.

Payload:
Contains user data.

Signature:
Verifies authenticity.

JWT is stateless.

Unlike traditional sessions, the server does not store user session information.

This makes JWT highly scalable.
`,

  whyItMatters: `
Every real-world application requires authentication.

Examples:

• Facebook Login
• Netflix Login
• Gmail Login
• Banking Applications

JWT is one of the most widely used authentication methods in modern web development.
`,

  topics: [
    "Authentication",
    "Authorization",
    "JWT Structure",
    "Token Generation",
    "Token Verification",
    "Protected Routes",
    "User Login",
    "User Registration",
    "Refresh Tokens",
    "Security Best Practices"
  ],

  codeExample: `
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    id: user._id
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d"
  }
);

console.log(token);
`,

  exercises: [
    "Generate JWT Token",
    "Verify JWT Token",
    "Create Login Route",
    "Create Register Route",
    "Protect Routes"
  ],

  commonMistakes: [
    "Exposing JWT secret",
    "Using weak secrets",
    "Storing sensitive data in token",
    "Not validating token"
  ],

  interviewQuestions: [
    {
      question: "What is JWT?",
      answer:
        "JSON Web Token used for authentication."
    },
    {
      question: "What are the three parts of JWT?",
      answer:
        "Header, Payload, Signature."
    },
    {
      question: "Why is JWT popular?",
      answer:
        "Because it is stateless and scalable."
    }
  ],

  project: `
Build Full Authentication System.

Requirements:

1. User Registration
2. User Login
3. Password Hashing
4. JWT Token Generation
5. Protected Dashboard Route
6. Logout Functionality
`,

  summary: `
You learned:

• Authentication
• Authorization
• JWT Structure
• Token Generation
• Protected Routes
• Security Best Practices

JWT is the standard authentication method used in MERN applications.
`,

  tip:
    "Never store passwords directly. Always hash them before saving to the database."
};

export default jwt;