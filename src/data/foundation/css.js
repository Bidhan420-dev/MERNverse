const css = {
  title: "CSS Styling & Layout",

  intro:
    "CSS (Cascading Style Sheets) is used to style and design web pages. While HTML provides structure, CSS controls colors, layouts, spacing, animations, and responsiveness.",

  theory: `
CSS stands for Cascading Style Sheets.

Without CSS, websites would appear as plain text and images.

CSS allows developers to:

• Change colors
• Control spacing
• Create layouts
• Add animations
• Make websites responsive

CSS works by selecting HTML elements and applying styles to them.

Example:

h1 {
  color: blue;
}

This changes all h1 elements to blue.
`,

  whyItMatters: `
Modern websites rely heavily on CSS.

Good CSS improves:

• User Experience
• Mobile Responsiveness
• Brand Identity
• Accessibility
• Professional Appearance

Learning CSS properly is essential before moving to Tailwind CSS and React.
`,

  topics: [
    "Selectors",
    "Colors & Backgrounds",
    "Typography",
    "Box Model",
    "Flexbox",
    "Grid",
    "Positioning",
    "Responsive Design",
    "Media Queries",
    "Transitions",
    "Animations"
  ],

  examples: [
    "Creating navigation bars",
    "Building card layouts",
    "Responsive portfolio websites",
    "Animated buttons"
  ],

  codeExample: `
body {
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.card {
  background: #1e293b;
  padding: 20px;
  border-radius: 10px;
}

.card:hover {
  transform: translateY(-5px);
  transition: 0.3s ease;
}
`,

  exercises: [
    "Create a responsive navigation bar.",
    "Design a profile card.",
    "Build a pricing section using Flexbox.",
    "Create a responsive gallery using CSS Grid.",
    "Add hover animations to buttons."
  ],

  project: `
Build a Netflix Landing Page Clone.

Requirements:

1. Hero Section
2. Navigation Bar
3. Feature Cards
4. Responsive Layout
5. Hover Effects
6. Footer

Use only HTML and CSS.
`,

  quiz: [
    {
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which CSS property changes text color?",
      answer: "color"
    },
    {
      question: "What is Flexbox used for?",
      answer: "One-dimensional layouts"
    },
    {
      question: "What is Grid used for?",
      answer: "Two-dimensional layouts"
    }
  ],

  summary: `
In this chapter you learned:

• CSS Fundamentals
• Selectors
• Typography
• Box Model
• Flexbox
• Grid
• Responsive Design
• Animations

CSS transforms simple HTML pages into professional websites.
`,

  tip:
    "Master Flexbox before Grid. Flexbox solves most layout problems beginners encounter."
};

export default css;