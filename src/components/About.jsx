function About() {
  return (
    <section className="px-6 py-20 bg-slate-950 text-white">

      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-cyan-400">MERNverse</span>
        </h2>

        <p className="text-gray-400 mt-4">
          A modern learning platform built to help you become a full-stack MERN developer step by step.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left side text */}
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            MERNverse is a structured SaaS-style learning platform designed for beginners who want to master full-stack development.
          </p>

          <p>
            You will learn HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB through practical projects instead of just theory.
          </p>

          <p>
            Our goal is to make you job-ready by helping you build real-world applications like e-commerce apps, dashboards, and SaaS systems.
          </p>
        </div>

        {/* Right side card */}
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">
            Why MERNverse?
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>✔ Step-by-step structured learning</li>
            <li>✔ Real-world projects</li>
            <li>✔ Beginner to advanced path</li>
            <li>✔ Modern SaaS-style UI</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default About;