const middleware = {
  title: "Express Middleware",

  intro:
    "Middleware functions are functions that execute between a request and a response. They are one of the most powerful features of Express.js.",

  theory: `
When a client sends a request, Express can process that request through multiple middleware functions before sending a response.

Flow:

Request
↓
Middleware 1
↓
Middleware 2
↓
Route Handler
↓
Response

Middleware can:

• Modify Requests
• Modify Responses
• Authenticate Users
• Log Requests
• Validate Data
• Handle Errors

Without middleware, large applications become difficult to maintain.

Express applications rely heavily on middleware for security and organization.
`,

  whyItMatters: `
Middleware allows developers to separate concerns.

Instead of writing authentication logic inside every route, middleware can handle it once and reuse it everywhere.

Benefits:

• Cleaner Code
• Reusability
• Security
• Better Maintenance
`,

  topics: [
    "Custom Middleware",
    "Built-in Middleware",
    "Third-party Middleware",
    "Authentication Middleware",
    "Error Middleware",
    "Request Logging"
  ],

  codeExample: `
const logger = (req, res, next) => {
  console.log(req.method, req.url);

  next();
};

app.use(logger);
`,

  exercises: [
    "Create Logger Middleware",
    "Create Authentication Middleware",
    "Validate User Input",
    "Handle Errors"
  ],

  commonMistakes: [
    "Forgetting next()",
    "Sending response twice",
    "Incorrect middleware order",
    "Not handling errors"
  ],

  interviewQuestions: [
    {
      question: "What is middleware?",
      answer:
        "A function executed between request and response."
    },
    {
      question: "What does next() do?",
      answer:
        "Passes control to the next middleware."
    }
  ],

  project: `
Build a Request Logger System.

Requirements:

1. Log Request Method
2. Log URL
3. Log Timestamp
4. Save Logs to File
`,

  summary: `
You learned:

• Middleware Basics
• Custom Middleware
• Authentication
• Error Handling
• Request Logging

Middleware makes Express applications scalable and maintainable.
`,

  tip:
    "Always remember to call next() unless you're ending the request."
};

export default middleware;