const tailwind = {
  title: "Tailwind CSS",

  intro:
    "Tailwind CSS is a utility-first CSS framework that helps developers build modern, responsive, and professional user interfaces much faster than writing traditional CSS. Instead of creating custom CSS classes, Tailwind provides ready-to-use utility classes that can be combined directly in your HTML or JSX." ,

  theory: `
Tailwind CSS is one of the most popular frontend technologies used in modern React applications.

Unlike Bootstrap, Tailwind does not provide pre-designed components such as buttons or cards. Instead, it provides utility classes that allow developers to build completely custom designs.

Examples:

Traditional CSS:

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

HTML:

<div class="card"></div>

Tailwind CSS:

<div class="bg-white p-5 rounded-lg"></div>

This utility-first approach lets developers style elements directly in their markup using small, single-purpose classes. Tailwind is designed to speed up development while maintaining consistency across projects. :contentReference[oaicite:0]{index=0}
`,

  whyItMatters: `
Most modern React projects use Tailwind because it helps developers:

• Build interfaces faster
• Maintain consistent design systems
• Create responsive layouts easily
• Avoid writing large CSS files
• Scale applications efficiently

Tailwind has become a standard skill for frontend and MERN developers because it integrates perfectly with React and component-based development. Tailwind's utility-first philosophy focuses on composing interfaces from small reusable utility classes. :contentReference[oaicite:1]{index=1}
`,

  topics: [
    "What is Tailwind CSS?",
    "Installing Tailwind",
    "Utility Classes",
    "Spacing",
    "Colors",
    "Typography",
    "Flexbox",
    "Grid",
    "Responsive Design",
    "Dark Mode",
    "Hover Effects",
    "Transitions",
    "Animations",
    "Custom Configuration",
    "Reusable Components"
  ],

  examples: [
    "Portfolio Websites",
    "Landing Pages",
    "Admin Dashboards",
    "Course Platforms",
    "SaaS Applications",
    "E-commerce Stores"
  ],

  codeExample: `
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">

        <h1 className="text-5xl font-bold mb-4">
          Learn MERN Stack
        </h1>

        <p className="text-slate-400 mb-6">
          Master Full Stack Development
        </p>

        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Start Learning
        </button>

      </div>
    </section>
  );
}

export default Hero;
`,

  installation: `
Step 1:

npm install tailwindcss @tailwindcss/vite

Step 2:

Configure Vite and Tailwind.

Step 3:

Import Tailwind in your CSS file.

@import "tailwindcss";

Step 4:

Start using Tailwind classes inside JSX.
`,

  responsiveDesign: `
Tailwind uses a mobile-first approach.

Breakpoints:

sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px

Example:

<div className="
  text-sm
  md:text-lg
  lg:text-2xl
">
  Responsive Text
</div>

This changes text size depending on screen width.
`,

  flexboxExample: `
<div className="flex justify-between items-center">

  <h1>Logo</h1>

  <nav className="flex gap-4">
    <a>Home</a>
    <a>Courses</a>
    <a>Contact</a>
  </nav>

</div>
`,

  gridExample: `
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  <div className="bg-slate-800 p-6 rounded">
    Card 1
  </div>

  <div className="bg-slate-800 p-6 rounded">
    Card 2
  </div>

  <div className="bg-slate-800 p-6 rounded">
    Card 3
  </div>

</div>
`,

  exercises: [
    "Create a responsive Navbar using Tailwind.",
    "Build a Hero Section.",
    "Create a Pricing Card.",
    "Build a Testimonial Section.",
    "Create a Course Card Component.",
    "Create a Responsive Footer.",
    "Build a Dashboard Layout."
  ],

  commonMistakes: [
    "Using Tailwind without understanding CSS fundamentals.",
    "Adding too many classes without component extraction.",
    "Ignoring responsive breakpoints.",
    "Not organizing repeated class names.",
    "Using custom CSS when Tailwind utilities already exist."
  ],

  interviewQuestions: [
    {
      question: "What is Tailwind CSS?",
      answer:
        "A utility-first CSS framework used for building custom user interfaces."
    },
    {
      question: "What does utility-first mean?",
      answer:
        "Building interfaces using small utility classes directly in markup."
    },
    {
      question: "Why is Tailwind popular with React developers?",
      answer:
        "It speeds up development and works well with component-based architecture."
    },
    {
      question: "What are Tailwind breakpoints?",
      answer:
        "Responsive screen sizes such as sm, md, lg, xl, and 2xl."
    }
  ],

  project: `
Build a Complete SaaS Landing Page.

Requirements:

1. Responsive Navbar
2. Hero Section
3. Features Section
4. Pricing Cards
5. Testimonials
6. FAQ Section
7. Footer
8. Mobile Menu

Use only React and Tailwind CSS.
`,

  careerTips: [
    "Master CSS before relying on Tailwind.",
    "Learn Flexbox and Grid thoroughly.",
    "Study responsive design principles.",
    "Build real projects instead of only tutorials.",
    "Practice recreating existing websites."
  ],

  summary: `
In this chapter you learned:

• Tailwind Fundamentals
• Utility Classes
• Responsive Design
• Flexbox
• Grid
• Dark Mode
• Animations
• Component-Based Styling

Tailwind CSS is one of the most valuable frontend skills for modern React and MERN developers because it enables rapid UI development using utility-first classes. :contentReference[oaicite:2]{index=2}
`,

  tip:
    "Don't memorize every Tailwind class. Learn the patterns and use the documentation when needed."
};

export default tailwind;