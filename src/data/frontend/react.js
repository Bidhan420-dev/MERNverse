const react = {
  title: "React Fundamentals",

  intro:
    "React is a JavaScript library used for building modern user interfaces. It allows developers to create reusable components and build fast, interactive web applications.",

  theory: `
React was developed by Facebook and is one of the most popular frontend technologies today.

Traditional websites reload entire pages whenever data changes.

React solves this problem using a Virtual DOM.

The Virtual DOM compares changes efficiently and updates only the necessary parts of the page.

Benefits of React:

• Reusable Components
• Faster Development
• Better Performance
• Easier Maintenance
• Large Ecosystem
• Huge Job Market

Everything in React revolves around components.
`,

  whyItMatters: `
React is the frontend technology used in the MERN Stack.

Companies like Facebook, Netflix, Airbnb, Instagram, and Uber use React.

Learning React opens opportunities for:

• Frontend Development
• Full Stack Development
• Mobile Development (React Native)
• Freelancing
• SaaS Development
`,

  topics: [
    "What is React?",
    "Installing React",
    "JSX",
    "Components",
    "Props",
    "State",
    "Event Handling",
    "Conditional Rendering",
    "Lists & Keys",
    "Component Reusability"
  ],

  examples: [
    "Portfolio Website",
    "Dashboard UI",
    "E-commerce Frontend",
    "Course Platform"
  ],

  codeExample: `
function Welcome() {
  return (
    <div>
      <h1>Welcome to MERNverse</h1>
      <p>Learn MERN Stack Development</p>
    </div>
  );
}

export default Welcome;
`,

  exercises: [
    "Create a Welcome Component.",
    "Create a Navbar Component.",
    "Pass Props between Components.",
    "Create a User Card.",
    "Display Dynamic Data."
  ],

  project: `
Build a Course Card Component.

Requirements:

1. Course Image
2. Course Title
3. Description
4. Start Button
5. Dynamic Props

Reuse the same component multiple times.
`,

  quiz: [
    {
      question: "Who developed React?",
      answer: "Facebook"
    },
    {
      question: "What is JSX?",
      answer: "JavaScript XML"
    },
    {
      question: "What are Components?",
      answer: "Reusable UI blocks"
    },
    {
      question: "What makes React fast?",
      answer: "Virtual DOM"
    }
  ],

  summary: `
You learned:

• React Basics
• JSX
• Components
• Props
• Rendering Dynamic Data

React is the foundation of modern frontend development.
`,

  tip:
    "Think in components. Any UI that repeats should become a reusable component."
};

export default react;