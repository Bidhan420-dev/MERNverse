import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce Website",
    desc: "Fully responsive online shopping website.",
    details:
      "Built using HTML, CSS, and JavaScript. Includes product cards, cart system UI, responsive layout, and modern design principles.",
    pageLink: "/projects/ecommerce",
    githubLinks: [
      {
        label: "Frontend",
        url: "https://github.com/Bidhan420-dev/MyShop.Nepal-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/Bidhan420-dev/MyShop.Nepal-backend",
      },
    ],
  },
  {
    title: "Hotel Website",
    desc: "Luxury hotel landing page with booking UI.",
    details:
      "Includes room showcase, booking section UI, navigation system, and responsive design using Flexbox and Grid.",
    pageLink: "/projects/hotel",
    githubLinks: [
      {
        label: "GitHub",
        url: "https://github.com/Bidhan420-dev/Hotel-Website",
      },
    ],
  },
  {
    title: "Personal Portfolio",
    desc: "Developer portfolio with projects showcase.",
    details:
      "Includes hero section, project cards, about section, and responsive layout to represent developer identity professionally.",
    pageLink: "/projects/portfolio",
    githubLinks: [
      {
        label: "GitHub",
        url: "https://github.com/Bidhan420-dev/Portfolio",
      },
    ],
  },
];

function Projects() {
  return (
    <section className="px-6 py-20 bg-slate-950">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Some <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-gray-400 mt-3">
          Real-world projects I built during my learning journey
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:scale-105 transition duration-300 flex flex-col"
          >
            {/* Top Content */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">{project.desc}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to={project.pageLink}
                className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                Learn More
              </Link>

              {project.githubLinks.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
                >
                  {repo.label}
                </a>
              ))}
            </div>

            {/* Bottom Description */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-sm text-gray-500 leading-relaxed">
                {project.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;