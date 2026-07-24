const mongodb = {
  title: "MongoDB Fundamentals",

  intro:
    "MongoDB is a NoSQL database used to store and manage application data in flexible JSON-like documents.",

  theory: `
MongoDB is a document-oriented database.

Unlike SQL databases that use tables and rows, MongoDB stores data in:

• Databases
• Collections
• Documents

A document is similar to a JSON object.

Example:

{
  name: "Bidhan",
  age: 20,
  course: "BCA"
}

MongoDB is highly scalable, flexible, and widely used in MERN Stack applications.
`,

  whyItMatters: `
Every modern application needs data storage.

MongoDB provides:

• Flexible schemas
• High performance
• Easy integration with Node.js
• Scalability
• Cloud deployment through MongoDB Atlas

MongoDB is the most commonly used database in MERN development.
`,

  topics: [
    "Database",
    "Collections",
    "Documents",
    "MongoDB Atlas",
    "MongoDB Compass",
    "Insert Documents",
    "Find Documents",
    "Update Documents",
    "Delete Documents"
  ],

  examples: [
    "Student Management System",
    "E-Commerce Products",
    "Blog Posts Database",
    "User Authentication Data"
  ],

  codeExample: `
db.students.insertOne({
  name: "Bidhan",
  age: 20,
  faculty: "BCA"
})

db.students.find()
`,

  exercises: [
    "Create a database called college.",
    "Create a students collection.",
    "Insert 5 student documents.",
    "Find all students.",
    "Delete one student document."
  ],

  project: `
Build a Student Database System.

Requirements:

1. Create Database
2. Create Collection
3. Insert Records
4. Update Records
5. Delete Records
6. Query Records
`,

  summary: `
In this chapter you learned:

• MongoDB Basics
• Collections
• Documents
• CRUD Operations
• MongoDB Atlas

MongoDB is the foundation of data storage in MERN applications.
`,

  tip:
    "Practice using MongoDB Compass to visualize collections and documents."
};

export default mongodb;