const router = {
  title: "React Router",

  intro:
    "React Router allows users to navigate between pages without reloading the browser. It powers navigation in modern React applications.",

  theory: `
React applications are Single Page Applications (SPAs).

Instead of loading new pages from the server, React Router updates content dynamically.

Benefits:

• Faster Navigation
• Better User Experience
• Cleaner URLs
• Dynamic Routing

React Router is essential for creating professional React applications.
`,

  whyItMatters: `
Without React Router your application would only have one page.

React Router enables:

• Multi-page Experiences
• Dynamic URLs
• Protected Routes
• Nested Routes
• Better Application Structure

Every serious React project uses React Router.
`,

  topics: [
    "BrowserRouter",
    "Routes",
    "Route",
    "Link",
    "NavLink",
    "useNavigate",
    "useParams",
    "Nested Routes",
    "Protected Routes"
  ],

  examples: [
    "Portfolio Website",
    "Course Platform",
    "Dashboard",
    "E-commerce Store"
  ],

  codeExample: `
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
`,

  exercises: [
    "Create Home Page.",
    "Create About Page.",
    "Create Contact Page.",
    "Create Dynamic Routes.",
    "Build Navigation Bar."
  ],

  project: `
Build a Course Learning Platform.

Requirements:

1. Homepage
2. Course Page
3. Chapter Page
4. Protected Dashboard
5. Dynamic Course Routing

Use React Router for navigation.
`,

  quiz: [
    {
      question: "Which component wraps React routes?",
      answer: "BrowserRouter"
    },
    {
      question: "Which component defines routes?",
      answer: "Routes"
    },
    {
      question: "Which component creates navigation links?",
      answer: "Link"
    },
    {
      question: "Which Hook reads route parameters?",
      answer: "useParams"
    }
  ],

  summary: `
You learned:

• BrowserRouter
• Routes
• Route
• Navigation
• Dynamic Routing
• Protected Routes

React Router transforms React apps into complete web applications.
`,

  tip:
    "Learn useNavigate and useParams thoroughly. They are used in almost every React Router project."
};

export default router;