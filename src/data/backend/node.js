const node = {
  title: "Node.js Fundamentals",

  intro:
    "Node.js is a JavaScript runtime environment that allows developers to run JavaScript outside the browser. It enables developers to build servers, APIs, real-time applications, and complete backend systems using JavaScript.",

  theory: `
Before Node.js existed, JavaScript could only run inside web browsers.

Developers used JavaScript for frontend development and different languages such as PHP, Java, Python, or C# for backend development.

In 2009, Ryan Dahl created Node.js.

Node.js uses Google's V8 JavaScript Engine (the same engine used by Chrome) to execute JavaScript on servers.

This changed web development forever because developers could now use a single language (JavaScript) for both frontend and backend development.

This eventually led to the creation of the MERN Stack:

MongoDB
Express.js
React.js
Node.js

Node.js is not a programming language.

Node.js is not a framework.

Node.js is a runtime environment that executes JavaScript code outside the browser.

This means:

JavaScript + Browser = Frontend

JavaScript + Node.js = Backend

Node.js allows JavaScript to:

• Access files
• Access databases
• Create servers
• Handle requests
• Communicate with APIs
• Manage authentication
• Process large amounts of data

Without Node.js, React applications would only be capable of displaying user interfaces.

Node.js enables those applications to become full-stack applications.
`,

  whyItMatters: `
Node.js is the foundation of backend development in the MERN stack.

Every modern application requires a backend.

Examples:

• User Authentication
• Database Operations
• Payment Processing
• File Uploads
• API Development
• Real-Time Messaging

Node.js handles all of these tasks.

Companies using Node.js include:

Netflix
PayPal
Uber
LinkedIn
Trello
Walmart

Learning Node.js gives you the ability to create complete applications rather than just user interfaces.
`,

  architecture: `
Node.js uses an event-driven, non-blocking architecture.

Traditional servers often create a new thread for every request.

Node.js uses a single-threaded event loop.

This allows Node.js to handle thousands of simultaneous requests efficiently.

Event Loop Process:

Request Received
↓
Event Queue
↓
Event Loop
↓
Execute Task
↓
Send Response

This architecture makes Node.js extremely fast for I/O operations.
`,

  workflow: `
User Request
↓
Node Server
↓
Business Logic
↓
Database Query
↓
Database Response
↓
Node Server
↓
Client Response

This workflow powers most modern web applications.
`,

  topics: [
    "What is Node.js?",
    "Installing Node.js",
    "Node Runtime",
    "Modules",
    "File System",
    "Path Module",
    "HTTP Module",
    "NPM",
    "Package Management",
    "Event Loop",
    "Asynchronous Programming",
    "CommonJS",
    "ES Modules"
  ],

  examples: [
    "Creating a Web Server",
    "Reading Files",
    "Writing Files",
    "Building APIs",
    "Connecting Databases"
  ],

  codeExample: `
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to MERNverse Backend");
  res.end();
});

server.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
`,

  exercises: [
    "Install Node.js.",
    "Create your first server.",
    "Read a file using Node.js.",
    "Write data into a file.",
    "Create a custom module.",
    "Use NPM packages."
  ],

  commonMistakes: [
    "Confusing Node.js with JavaScript.",
    "Blocking the event loop.",
    "Ignoring asynchronous operations.",
    "Not handling errors.",
    "Installing unnecessary packages."
  ],

  interviewQuestions: [
    {
      question: "What is Node.js?",
      answer:
        "A JavaScript runtime environment used to run JavaScript outside the browser."
    },
    {
      question: "What engine powers Node.js?",
      answer:
        "Google V8 JavaScript Engine."
    },
    {
      question: "What is the Event Loop?",
      answer:
        "A mechanism that handles asynchronous operations efficiently."
    },
    {
      question: "Why is Node.js fast?",
      answer:
        "Because of its non-blocking event-driven architecture."
    }
  ],

  project: `
Build a Basic HTTP Server.

Requirements:

1. Home Route
2. About Route
3. Contact Route
4. Error Route
5. Custom Response Messages

Use only Node.js built-in modules.
`,

  summary: `
In this chapter you learned:

• What Node.js is
• Why Node.js was created
• Runtime Environment
• Event Loop
• Server Creation
• Modules
• NPM

Node.js forms the foundation of backend development in the MERN Stack.
`,

  tip:
    "Focus on understanding the Event Loop and asynchronous programming. These concepts separate beginner developers from professional Node.js developers."
};

export default node;