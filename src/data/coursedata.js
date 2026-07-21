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
  },

  {
    id: "frontend",
    title: "Frontend Development",
    desc: "Learn React and Tailwind CSS.",
    chapters: [tailwind, react, hooks, router],
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
    ]
  }
];

export default courseData;