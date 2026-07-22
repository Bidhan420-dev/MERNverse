import html from "./foundation/html.js";
import css from "./foundation/css.js";
import javascript from "./foundation/javascript.js";
import github from "./foundation/github.js";

import tailwind from "./frontend/tailwind.js";
import react from "./frontend/react.js";
import hooks from "./frontend/hooks.js";
import router from "./frontend/router.js";

import express from "./backend/express.js";
import jwt from "./backend/jwt.js";
import node from "./backend/node.js";
import middleware from "./backend/middleware.js";

const courseData = [
  {
    id: "foundation",
    title: "Foundation",
    desc: "Master HTML, CSS, JavaScript, Git and GitHub.",
    chapters: [html, css, javascript, github],

     learnMore: {
    summary:
      "Learn the core fundamentals of web development including HTML, CSS, JavaScript and Git.",

    whatYouLearn: [
      "HTML5 Fundamentals",
      "CSS3 Styling",
      "JavaScript Basics",
      "Git & GitHub"
    ],

    duration: "4 Weeks",
    level: "Beginner",
    prerequisites: "None"
  }
  },

  {
    id: "frontend",
    title: "Frontend Development",
    desc: "Learn React and Tailwind CSS.",
    chapters: [tailwind, react, hooks, router],

    learnMore: {
      summary:
        "Learn modern frontend development using React and Tailwind CSS. Build responsive, interactive, and professional user interfaces while understanding component-based architecture, state management, routing, and API integration.",

      whatYouLearn: [
        "Tailwind CSS Fundamentals",
        "Responsive Web Design",
        "React Components & JSX",
        "Props and State Management",
        "React Hooks",
        "React Router",
        "API Integration with Fetch & Axios",
        "Project Structure & Best Practices"
      ],

      duration: "6 Weeks",
      level: "Intermediate",
      prerequisites:
        "Basic knowledge of HTML, CSS, JavaScript, and Git"
    }
  },

  {
    id: "backend",
    title: "Backend Development",
    desc: "Build powerful backend systems using Node.js, Express.js, Middleware, and JWT Authentication.",

    chapters: [
      node,
      express,
      middleware,
      jwt
    ],

    learnMore: {
  summary:
    "Learn how to build powerful backend applications using Node.js and Express.js. Understand server-side programming, REST APIs, middleware, authentication, security practices, and how to connect applications with databases.",

  whatYouLearn: [
    "Node.js Fundamentals",
    "Express.js Framework",
    "REST API Development",
    "Middleware Implementation",
    "JWT Authentication",
    "MongoDB Integration",
    "Error Handling",
    "Backend Security Best Practices"
  ],

  duration: "8 Weeks",
  level: "Intermediate to Advanced",
  prerequisites:
    "JavaScript Fundamentals and Basic React Knowledge"
}
  }
];

export default courseData;
