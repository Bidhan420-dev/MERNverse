import { useState } from "react";
import { useNavigate } from "react-router-dom";
import courseData from "../data/courseData.js";

// ─── LEARN MORE MODAL ────────────────────────────────────────────────────────
function LearnMoreModal({ course, onClose }) {
  if (!course) return null;
//this is cousse 
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-white/10 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition text-xl leading-none"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-500">
            Course Overview
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">{course.title}</h2>
        </div>

        {/* Summary */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {course.learnMore.summary}
        </p>

        {/* What you'll learn */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
            What You'll Learn
          </h3>
          <ul className="space-y-2">
            {course.learnMore.whatYouLearn.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-cyan-400 mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Meta */}
        <div className="flex gap-4 mb-6">
          <div className="bg-slate-800 rounded-lg px-4 py-2 text-center">
            <p className="text-xs text-gray-500 mb-0.5">Duration</p>
            <p className="text-sm font-semibold text-white">{course.learnMore.duration}</p>
          </div>
          <div className="bg-slate-800 rounded-lg px-4 py-2 text-center">
            <p className="text-xs text-gray-500 mb-0.5">Level</p>
            <p className="text-sm font-semibold text-white">{course.learnMore.level}</p>
          </div>
        </div>

        {/* Prerequisites */}
        <p className="text-xs text-gray-500">
          <span className="text-gray-400 font-medium">Prerequisites: </span>
          {course.learnMore.prerequisites}
        </p>
      </div>
    </div>
  );
}

// ─── COURSES COMPONENT ───────────────────────────────────────────────────────
function Courses() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section className="px-6 py-20">
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          MERN Developer <span className="text-cyan-400">Roadmap</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Follow a structured path from complete beginner to professional full-stack developer.
        </p>
      </div>

      {/* COURSE CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courseData.map((course, index) => (
          <div
            key={course.id}
            className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:scale-105 transition hover:border-cyan-500/30"
          >
            {/* Step badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-cyan-500/70 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                Step {index + 1}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-cyan-400">{course.title}</h3>

            <p className="text-gray-400 mt-3 text-sm leading-relaxed">{course.desc}</p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setSelectedCourse(course)}
                className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                Learn More
              </button>

              <button
                onClick={() => navigate(`/course/${course.id}`)}
                className="px-4 py-2 text-sm bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition font-medium"
              >
                Start
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* GLOBAL DESCRIPTION */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-2xl font-bold text-white">What You Will Learn in MERNverse</h3>
        <p className="text-gray-400 mt-4 leading-relaxed">
          MERNverse is a complete roadmap designed to transform beginners into job-ready MERN
          stack developers. Starting with web fundamentals, you will progress through frontend
          development, backend engineering, database management, full-stack integration,
          deployment, and real-world projects.
          <br />
          <br />
          By the end of the journey, you'll have built production-ready applications, gained
          hands-on experience with industry tools, and developed a portfolio that showcases your
          skills to employers and clients.
        </p>
      </div>

      {/* LEARN MORE MODAL */}
      <LearnMoreModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
}

export default Courses;
