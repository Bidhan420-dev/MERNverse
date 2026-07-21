const javascript = {
  title: "JavaScript Essentials",

  intro:
    "JavaScript is the programming language of the web. It adds interactivity, logic, and dynamic behavior to websites.",

  theory: `
JavaScript was created in 1995 and is now one of the most popular programming languages in the world.

JavaScript can:

• Manipulate HTML
• Handle User Events
• Communicate with APIs
• Store Data
• Build Full Stack Applications

Unlike HTML and CSS, JavaScript is a programming language capable of making decisions and performing calculations.
`,

  whyItMatters: `
JavaScript is the heart of the MERN Stack.

Without JavaScript you cannot learn:

• React
• Node.js
• Express.js
• MongoDB Integration

Most frontend and backend development relies heavily on JavaScript.
`,

  topics: [
    "Variables",
    "Data Types",
    "Operators",
    "Functions",
    "Arrays",
    "Objects",
    "Loops",
    "Conditionals",
    "DOM Manipulation",
    "Events",
    "Promises",
    "Async Await",
    "Fetch API"
  ],

  examples: [
    "Form Validation",
    "To-Do Applications",
    "Weather Apps",
    "Interactive Dashboards"
  ],

  codeExample: `
const user = {
  name: "John",
  age: 22
};

function greet(name) {
  return "Hello " + name;
}

console.log(greet(user.name));

const numbers = [1,2,3,4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
`,

  exercises: [
    "Create a calculator.",
    "Build a counter app.",
    "Create a to-do list.",
    "Fetch data from an API.",
    "Create a quiz application."
  ],

  project: `
Build a Weather Application.

Requirements:

1. Search city
2. Fetch weather data
3. Display temperature
4. Show humidity
5. Display weather icon
6. Handle loading and errors
`,

  quiz: [
    {
      question: "Which keyword creates a constant variable?",
      answer: "const"
    },
    {
      question: "Which method loops through arrays?",
      answer: "map()"
    },
    {
      question: "What does DOM stand for?",
      answer: "Document Object Model"
    },
    {
      question: "Which keyword handles asynchronous operations?",
      answer: "async/await"
    }
  ],

  summary: `
In this chapter you learned:

• Variables
• Functions
• Arrays
• Objects
• Loops
• DOM Manipulation
• Events
• Async JavaScript

JavaScript is the foundation for React and Node.js development.
`,

  tip:
    "Master arrays, objects, functions, and async/await before learning React."
};

export default javascript;