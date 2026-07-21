const html = {
  title: "HTML Fundamentals",

  intro:
    "HTML (HyperText Markup Language) is the standard markup language used to create web pages. Every website on the internet is built on HTML. It provides the structure and content that browsers display to users.",

  theory: `
HTML stands for HyperText Markup Language.

HyperText means text that contains links to other pages.

Markup Language means a system of tags used to structure content.

HTML is not a programming language because it does not contain logic, loops, or conditions. Instead, it is used to define the structure of a webpage.

Every website you visit uses HTML.

Browsers such as Chrome, Firefox, Safari, and Edge read HTML files and convert them into visual web pages.

Think of a website as a house:

HTML = Structure and walls
CSS = Paint and decoration
JavaScript = Electricity and functionality

Without HTML, a webpage cannot exist.
`,

  whyItMatters: `
HTML is the foundation of web development.

Before learning CSS, JavaScript, React, Node.js, or any other technology, you must understand HTML.

Good HTML improves:

• Accessibility
• Search Engine Optimization (SEO)
• Website performance
• Code maintainability

Professional developers spend time writing semantic HTML because it makes websites easier to understand for both humans and machines.
`,

  topics: [
    "HTML Document Structure",
    "Headings",
    "Paragraphs",
    "Links",
    "Images",
    "Lists",
    "Tables",
    "Forms",
    "Semantic HTML",
    "Accessibility",
    "SEO Basics"
  ],

  examples: [
    "Creating a personal portfolio page",
    "Building a blog layout",
    "Designing a contact form",
    "Creating navigation menus"
  ],

  codeExample: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website</title>
</head>
<body>

  <header>
    <h1>Welcome to My Website</h1>
  </header>

  <main>
    <section>
      <h2>About Me</h2>
      <p>I am learning MERN Stack Development.</p>
    </section>

    <section>
      <h2>My Skills</h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>Copyright 2026</p>
  </footer>

</body>
</html>
`,

  exercises: [
    "Create a page containing your name and bio.",
    "Add a profile image using the img tag.",
    "Create a navigation menu with links.",
    "Build a contact form with name, email, and message fields.",
    "Create a table displaying student information."
  ],

  project: `
Build a complete Personal Portfolio Website using only HTML.

Requirements:

1. Header section
2. About section
3. Skills section
4. Projects section
5. Contact section
6. Footer

Do not use CSS yet.
Focus only on proper HTML structure.
`,

  quiz: [
    {
      question: "What does HTML stand for?",
      answer: "HyperText Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink?",
      answer: "<a>"
    },
    {
      question: "Which tag displays an image?",
      answer: "<img>"
    },
    {
      question: "What is the purpose of semantic HTML?",
      answer:
        "To provide meaningful structure and improve accessibility and SEO."
    }
  ],

  summary: `
HTML is the backbone of every website.

In this chapter you learned:

• What HTML is
• How browsers read HTML
• HTML document structure
• Common HTML elements
• Semantic HTML
• Accessibility basics
• SEO benefits

Mastering HTML is the first step toward becoming a professional MERN developer.
`,

  tip:
    "Always prefer semantic elements such as header, main, section, article, and footer instead of using unnecessary div tags."
};

export default html;