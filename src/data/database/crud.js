const crud = {
  title: "CRUD Operations",

  intro:
    "CRUD stands for Create, Read, Update, and Delete. These are the basic operations performed on database records.",

  theory: `
CRUD forms the foundation of database interaction.

Create → Add new data
Read → Retrieve data
Update → Modify data
Delete → Remove data

Every web application relies on CRUD functionality.
`,

  whyItMatters: `
Without CRUD operations, applications cannot manage user data.

Examples:

• User Registration
• Product Management
• Blog Posts
• Orders
• Comments
`,

  topics: [
    "Create",
    "Read",
    "Update",
    "Delete",
    "Queries",
    "Filtering",
    "Sorting"
  ],

  examples: [
    "Add a new product",
    "View all products",
    "Update product price",
    "Delete a product"
  ],

  codeExample: `
db.products.insertOne({
  name: "Laptop",
  price: 1000
})

db.products.find()

db.products.updateOne(
  { name: "Laptop" },
  { $set: { price: 1200 } }
)

db.products.deleteOne({
  name: "Laptop"
})
`,

  exercises: [
    "Insert a product document.",
    "Find all products.",
    "Update a product price.",
    "Delete a product."
  ],

  project: `
Build a Product Management System using CRUD operations.
`,

  summary: `
CRUD operations allow applications to manage data effectively.

Mastering CRUD is essential before building APIs.
`,

  tip:
    "Practice CRUD daily because almost every backend API uses it."
};

export default crud;