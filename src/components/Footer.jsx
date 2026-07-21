function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">
            MERNverse
          </h1>

          <p className="text-gray-400 mt-3">
            Learn Full MERN Stack Development from beginner to advanced with structured courses and real projects.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-400">

            <li>
              <a href="#home" className="hover:text-cyan-400">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-cyan-400">
                About
              </a>
            </li>

            <li>
              <a href="#courses" className="hover:text-cyan-400">
                Courses
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-cyan-400">
                Projects
              </a>
            </li>

          </ul>
        </div>

        {/* CTA */}
        <div>
          <h2 className="text-white font-semibold mb-4">
            Get Started
          </h2>

          <p className="text-gray-400 mb-4">
            Start your journey in full-stack development today.
          </p>

          <button className="px-5 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition">
            <a href="#courses">Select a course</a>
          </button>
        </div>

      </div>

      <div className="text-center text-gray-500 border-t border-white/10 py-6 text-sm">
        © {new Date().getFullYear()} MERNverse. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;