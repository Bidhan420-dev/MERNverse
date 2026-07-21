import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-950/70 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          MERNverse
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-4 text-gray-300 space-y-3 border-t border-white/10">
          <a href="#home" className="block">
            Home
          </a>

          <a href="#about" className="block">
            About
          </a>

          <a href="#courses" className="block">
            Courses
          </a>

          <a href="#projects" className="block">
            Projects
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;