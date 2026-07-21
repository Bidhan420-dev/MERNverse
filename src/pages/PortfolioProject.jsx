import { Link } from "react-router-dom";

function PortfolioProject() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <Link
          to="/"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Portfolio
        </Link>

        <div className="mt-8">
          <h1 className="text-5xl font-bold text-cyan-400">
            Personal Portfolio
          </h1>

          <p className="text-xl text-gray-300 mt-6 leading-8">
            A modern portfolio website built to showcase my skills, projects,
            learning journey, and development experience through a professional
            and responsive user interface.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Project Overview
          </h2>

          <p className="mt-4 text-gray-300 leading-8">
            This portfolio was created to establish a professional online
            presence and provide a central location where visitors can learn
            about my background, skills, and projects. Beyond showcasing my
            work, the project also serves as a demonstration of my frontend
            development capabilities.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            The website focuses on clean design, intuitive navigation, and
            responsive layouts. Every section was carefully structured to
            provide a smooth user experience while maintaining a modern visual
            appearance.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Key Features
          </h2>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• Hero section introduction</li>
            <li>• About section</li>
            <li>• Courses and learning journey</li>
            <li>• Dedicated project showcase</li>
            <li>• GitHub repository integration</li>
            <li>• Responsive design</li>
            <li>• React Router project pages</li>
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="border border-cyan-400 px-4 py-2 rounded">
              React
            </span>
            <span className="border border-cyan-400 px-4 py-2 rounded">
              JavaScript
            </span>
            <span className="border border-cyan-400 px-4 py-2 rounded">
              Tailwind CSS
            </span>
            <span className="border border-cyan-400 px-4 py-2 rounded">
              React Router
            </span>
            <span className="border border-cyan-400 px-4 py-2 rounded">
              Git & GitHub
            </span>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Development Process
          </h2>

          <p className="mt-4 text-gray-300 leading-8">
            The portfolio was built using React's component-based architecture.
            Individual sections such as Hero, About, Courses, and Projects were
            developed as reusable components. This approach improved code
            organization and simplified future maintenance.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Challenges & Learning
          </h2>

          <p className="mt-4 text-gray-300 leading-8">
            One challenge was balancing visual design with usability. Through
            this project, I improved my understanding of React components,
            routing, responsive layouts, and user interface design principles.
            The project also strengthened my ability to structure larger
            frontend applications.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Future Improvements
          </h2>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• Contact form integration</li>
            <li>• Dark and light mode support</li>
            <li>• Blog section</li>
            <li>• Project filtering system</li>
            <li>• Analytics integration</li>
            <li>• Additional project case studies</li>
          </ul>
        </div>

        <a
          href="https://github.com/Bidhan420-dev/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-16 bg-cyan-500 text-black px-5 py-3 rounded-lg font-medium hover:bg-cyan-400"
        >
          View Repository
        </a>

      </div>
    </div>
  );
}

export default PortfolioProject;