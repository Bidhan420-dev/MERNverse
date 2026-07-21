import { Link } from "react-router-dom";

function EcommerceProject() {
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
            MyShop Nepal
          </h1>

          <p className="text-xl text-gray-300 mt-6 leading-8">
            MyShop Nepal is a full-stack e-commerce application developed to
            simulate a modern online shopping experience. The project follows a
            frontend and backend architecture, allowing a clear separation of
            responsibilities while providing valuable experience in building
            scalable web applications.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Project Overview
          </h2>

          <p className="mt-4 text-gray-300 leading-8">
            The goal of this project was to understand how real-world
            e-commerce platforms are structured and how different technologies
            work together to create a complete application. Instead of focusing
            only on the user interface, I wanted to learn how frontend
            applications communicate with backend services through APIs and how
            data can be managed efficiently.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            To achieve this, the application was divided into separate frontend
            and backend repositories. This approach helped me gain practical
            experience with project organization, API communication, and
            full-stack development workflows.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Key Features
          </h2>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• Responsive shopping interface</li>
            <li>• Frontend and backend separation</li>
            <li>• API-based architecture</li>
            <li>• Dynamic data handling</li>
            <li>• Modern React application structure</li>
            <li>• Scalable project organization</li>
            <li>• Reusable components</li>
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
              Node.js
            </span>
            <span className="border border-cyan-400 px-4 py-2 rounded">
              Express.js
            </span>
            <span className="border border-cyan-400 px-4 py-2 rounded">
              REST APIs
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
            Development began by planning the application's structure and
            separating responsibilities between the frontend and backend.
            React was used to create a modern user interface, while Node.js and
            Express were used to manage server-side operations. The project was
            developed incrementally, focusing on maintainability and clean code
            practices.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Challenges & Learning
          </h2>

          <p className="mt-4 text-gray-300 leading-8">
            One of the biggest learning experiences was understanding how data
            flows between the frontend and backend. Working with APIs helped me
            gain a deeper understanding of request handling, data management,
            and project architecture. This project strengthened my confidence
            in full-stack development and improved my ability to structure
            larger applications.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Future Improvements
          </h2>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• User authentication and authorization</li>
            <li>• Shopping cart functionality</li>
            <li>• Payment gateway integration</li>
            <li>• Product search and filtering</li>
            <li>• Admin dashboard</li>
            <li>• Order management system</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 mt-16">
          <a
            href="https://github.com/Bidhan420-dev/MyShop.Nepal-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-black px-5 py-3 rounded-lg font-medium hover:bg-cyan-400"
          >
            Frontend Repository
          </a>

          <a
            href="https://github.com/Bidhan420-dev/MyShop.Nepal-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-black px-5 py-3 rounded-lg font-medium hover:bg-cyan-400"
          >
            Backend Repository
          </a>
        </div>

      </div>
    </div>
  );
}

export default EcommerceProject;