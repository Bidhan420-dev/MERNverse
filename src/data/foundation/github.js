const github = {
  title: "Git & GitHub",

  intro:
    "Git is a version control system and GitHub is a cloud platform for storing and managing Git repositories.",

  theory: `
Before Git existed, developers shared files manually which often caused confusion and data loss.

Git solves this problem by tracking every change made to a project.

GitHub provides:

• Cloud Repository Hosting
• Team Collaboration
• Pull Requests
• Issue Tracking
• Deployment Integration

Every professional software developer uses Git daily.
`,

  whyItMatters: `
Version control is one of the most important skills for developers.

Git allows you to:

• Track Changes
• Undo Mistakes
• Collaborate with Teams
• Manage Different Features
• Deploy Applications

Without Git, managing large projects becomes difficult.
`,

  topics: [
    "Git Installation",
    "Repositories",
    "Commits",
    "Branches",
    "Merging",
    "GitHub Repositories",
    "Push & Pull",
    "Clone",
    "Pull Requests",
    "Merge Conflicts"
  ],

  examples: [
    "Uploading projects to GitHub",
    "Collaborating with teammates",
    "Deploying portfolio websites",
    "Managing project versions"
  ],

  codeExample: `
# Create Repository
git init

# Add Files
git add .

# Commit Changes
git commit -m "Initial Commit"

# Connect GitHub Repository
git remote add origin https://github.com/username/project.git

# Push Code
git push -u origin main
`,

  exercises: [
    "Create a GitHub account.",
    "Create a repository.",
    "Push your portfolio project.",
    "Create a branch.",
    "Merge branches."
  ],

  project: `
Host Your Portfolio Website.

Requirements:

1. Create GitHub Repository
2. Upload Source Code
3. Write README File
4. Add Project Screenshots
5. Push Updates Regularly
`,

  quiz: [
    {
      question: "What is Git?",
      answer: "A Version Control System"
    },
    {
      question: "What is GitHub?",
      answer: "A cloud platform for hosting Git repositories"
    },
    {
      question: "Which command creates a commit?",
      answer: "git commit"
    },
    {
      question: "Which command uploads code to GitHub?",
      answer: "git push"
    }
  ],

  summary: `
In this chapter you learned:

• Git Basics
• Repositories
• Commits
• Branches
• Merging
• GitHub Workflow
• Collaboration

Git and GitHub are essential tools for every professional developer.
`,

  tip:
    "Commit small changes frequently and use meaningful commit messages such as 'Add Login Page' instead of 'Update'."
};

export default github;