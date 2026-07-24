const relationships = {
  title: "Database Relationships",

  intro:
    "Database relationships connect documents and collections together, allowing applications to organize complex data efficiently.",

  theory: `
MongoDB supports relationships through references and embedded documents.

Common relationship types:

• One-to-One
• One-to-Many
• Many-to-Many

Relationships help connect users, products, orders, and other entities.
`,

  whyItMatters: `
Real-world applications require related data.

Examples:

• User → Profile
• User → Orders
• Student → Courses
• Blog → Comments
`,

  topics: [
    "One-to-One",
    "One-to-Many",
    "Many-to-Many",
    "Embedding",
    "Referencing",
    "Populate Method"
  ],

  examples: [
    "User and Profile",
    "Author and Books",
    "Student and Courses",
    "Customer and Orders"
  ],

  codeExample: `
const orderSchema =
new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
`,

  exercises: [
    "Create a User and Profile relationship.",
    "Create Student-Course relationship.",
    "Use populate() to fetch related data."
  ],

  project: `
Build an Order Management System with User and Product relationships.
`,

  summary: `
Relationships allow applications to organize and connect data efficiently.

Understanding relationships is essential for scalable database design.
`,

  tip:
    "Use references for large datasets and embedding for small related data."
};

export default relationships;