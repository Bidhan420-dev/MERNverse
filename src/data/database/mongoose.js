const mongoose = {
  title: "Mongoose ODM",

  intro:
    "Mongoose is an Object Data Modeling (ODM) library that helps Node.js applications interact with MongoDB.",

  theory: `
Mongoose provides:

• Schemas
• Models
• Validation
• Middleware
• Query Helpers

It simplifies database operations in Node.js applications.
`,

  whyItMatters: `
Without Mongoose, managing MongoDB data becomes repetitive.

Mongoose helps:

• Structure data
• Validate inputs
• Improve code readability
• Simplify database operations
`,

  topics: [
    "Schemas",
    "Models",
    "Validation",
    "Queries",
    "Middleware",
    "Population"
  ],

  examples: [
    "User Model",
    "Product Model",
    "Course Model"
  ],

  codeExample: `
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model(
  "User",
  userSchema
);
`,

  exercises: [
    "Create a User schema.",
    "Create a Product schema.",
    "Add validation rules.",
    "Save a document using a model."
  ],

  project: `
Create a Student Management API using Mongoose models.
`,

  summary: `
Mongoose makes MongoDB easier to use in Node.js applications.

It is an essential tool for MERN Stack development.
`,

  tip:
    "Always define proper schemas and validations before storing data."
};

export default mongoose;