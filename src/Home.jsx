import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      {/* Home */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Courses */}
      <section id="courses">
        <Courses />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Footer */}
      <Footer />
    </div>

    
  );
}

export default App;