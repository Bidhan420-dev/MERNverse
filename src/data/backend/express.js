const express = {
  title: "Express.js Framework",

  intro:
    "Express.js is a fast, lightweight, and flexible Node.js framework used for building web applications and APIs. It simplifies backend development by providing routing, middleware support, and request handling.",

  theory: `
Building servers using pure Node.js becomes complicated as applications grow.

Express.js solves this problem by providing a simpler and more organized way to build backend applications.

Express is built on top of Node.js and is the most popular backend framework in the JavaScript ecosystem.

Without Express:

• More Boilerplate Code
• Complex Routing
• Difficult Request Handling

With Express:

• Clean Routing
• Middleware Support
• Faster Development
• Better Project Structure

Express follows a request-response cycle.

Client Request
↓
Express Route
↓
Controller Logic
↓
Database
↓
Response Sent Back

Most MERN applications use Express as the backend framework.
`,

  whyItMatters: `
Express is responsible for creating APIs.

Frontend applications cannot directly communicate with databases.

Instead:

React
↓
Express API
↓
MongoDB

Express acts as the bridge between frontend and database.
`,

  topics: [
    "Express Installation",
    "Creating Server",
    "Routing",
    "Request Object",
    "Response Object",
    "Route Parameters",
    "Query Parameters",
    "REST APIs",
    "Controllers",
    "Error Handling"
  ],

  codeExample: `
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to MERNverse API");
});

app.listen(5000, () => {
  console.log("Server Running");
});
`,

  exercises: [
    "Create Express Server",
    "Create Home Route",
    "Create About Route",
    "Create Dynamic Route",
    "Create REST API"
  ],

  commonMistakes: [
    "Forgetting app.listen()",
    "Sending multiple responses",
    "Incorrect route order",
    "Ignoring error handling"
  ],

  interviewQuestions: [
    {
      question: "What is Express.js?",
      answer:
        "A backend framework built on top of Node.js."
    },
    {
      question: "Why use Express?",
      answer:
        "To simplify backend development and API creation."
    }
  ],

  project: `
Build a Student Management API.

Requirements:

1. Create Student
2. Get Students
3. Update Student
4. Delete Student

Use Express Routing.
`,

  summary: `
You learned:

• Express Basics
• Routing
• APIs
• Request Handling
• Response Handling

Express is the backbone of backend API development.
`,

  tip:
    "Keep route logic clean by separating routes and controllers."
};

export default express;