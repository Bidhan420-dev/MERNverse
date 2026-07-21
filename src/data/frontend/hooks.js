const hooks = {
  title: "React Hooks",

  intro:
    "Hooks allow React functional components to use state, lifecycle methods, and other React features without writing class components.",

  theory: `
Before React Hooks, developers used class components to manage state.

Hooks were introduced in React 16.8.

Hooks make code:

• Cleaner
• Easier to Read
• Easier to Reuse
• Less Complex

The most important hooks are:

• useState
• useEffect
• useRef
• useContext

You will use useState and useEffect in almost every React project.
`,

  whyItMatters: `
Hooks are essential in modern React.

Without Hooks you cannot effectively:

• Manage State
• Fetch Data
• Handle Forms
• Create Dynamic Applications

Hooks are one of the most frequently asked React interview topics.
`,

  topics: [
    "useState",
    "useEffect",
    "Dependency Arrays",
    "useRef",
    "useContext",
    "Custom Hooks",
    "State Management"
  ],

  examples: [
    "Counter App",
    "Weather App",
    "API Data Fetching",
    "Theme Switcher"
  ],

  codeExample: `
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
`,

  exercises: [
    "Build a Counter App.",
    "Build a Theme Toggle.",
    "Create a Stopwatch.",
    "Fetch User Data from API.",
    "Create a Search Filter."
  ],

  project: `
Build a Notes Application.

Requirements:

1. Add Notes
2. Delete Notes
3. Edit Notes
4. Save State
5. Responsive Design

Use React Hooks throughout the project.
`,

  quiz: [
    {
      question: "Which Hook manages state?",
      answer: "useState"
    },
    {
      question: "Which Hook handles side effects?",
      answer: "useEffect"
    },
    {
      question: "Which Hook stores DOM references?",
      answer: "useRef"
    },
    {
      question: "Which Hook shares global data?",
      answer: "useContext"
    }
  ],

  summary: `
You learned:

• useState
• useEffect
• useRef
• useContext
• Custom Hooks

Hooks are the backbone of modern React applications.
`,

  tip:
    "Master useState and useEffect before learning advanced hooks."
};

export default hooks;