function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-3xl">

        {/* Badge */}
        <p className="text-cyan-400 mb-4">
          🚀 Learn Full MERN Stack the Smart Way
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Master <span className="text-cyan-400">MERN Stack</span>
          <br />
          Build Real World Projects
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-6 text-lg">
          Learn HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB
          step-by-step with structured courses and hands-on projects.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="#about"
            className="px-6 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
          >
            Learn More
          </a>

          <a
            href="#courses"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            Explore Courses
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;