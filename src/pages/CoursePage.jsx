import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import courseData from "../data/courseData";

// ─── CODE BLOCK ──────────────────────────────────────────────────────────────
function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-6 rounded-xl overflow-hidden border border-white/10">
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-gray-400 hover:text-white transition"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <pre className="bg-slate-950 p-5 text-sm text-gray-300 overflow-x-auto leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ─── CHAPTER CONTENT ─────────────────────────────────────────────────────────
function ChapterContent({ chapter }) {
  return (
    <div className="animate-fade-in">
      {/* Intro */}
      <p className="text-gray-300 text-lg leading-relaxed mb-8">{chapter.intro}</p>

      {/* Topics */}
      <div className="bg-slate-900 border border-white/10 rounded-xl p-6 mb-6">
        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
          Topics Covered
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {chapter.topics.map((topic, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-cyan-500 mt-0.5 shrink-0">▹</span>
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Code example */}
      {chapter.codeExample && <CodeBlock code={chapter.codeExample} />}

      {/* Pro tip */}
      {chapter.tip && (
        <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5 flex gap-3">
          <span className="text-xl shrink-0">💡</span>
          <p className="text-sm text-cyan-100 leading-relaxed">
            <span className="font-semibold text-cyan-400">Pro tip: </span>
            {chapter.tip}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── COMPLETION SCREEN ───────────────────────────────────────────────────────
function CompletionScreen({ course, nextCourse, onRestart }) {
  const navigate = useNavigate();

  return (
    <div className="text-center py-12 animate-fade-in">
      <div className="text-6xl mb-6">🎓</div>
      <h2 className="text-3xl font-bold text-white mb-3">
        Module Complete!
      </h2>
      <p className="text-gray-400 mb-2 text-lg">
        You've finished{" "}
        <span className="text-cyan-400 font-semibold">{course.title}</span>
      </p>
      <p className="text-gray-500 text-sm mb-10 max-w-md mx-auto">
        Great work pushing through every chapter. Each concept you've covered
        is a real skill that professional developers use daily.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {nextCourse ? (
          <button
            onClick={() => navigate(`/course/${nextCourse.id}`)}
            className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition"
          >
            Next Module: {nextCourse.title} →
          </button>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition"
          >
            🏆 View All Modules
          </button>
        )}
        <button
          onClick={onRestart}
          className="px-8 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition"
        >
          ↺ Review This Module
        </button>
      </div>
    </div>
  );
}

// ─── MAIN COURSE PAGE ────────────────────────────────────────────────────────
function CoursePage() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const courseIndex = courseData.findIndex((c) => c.id === courseId);
  const course = courseData[courseIndex];
  const nextCourse = courseData[courseIndex + 1] || null;

  const [currentChapter, setCurrentChapter] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [visitedChapters, setVisitedChapters] = useState(new Set([0]));

  // Reset state when course changes
  useEffect(() => {
    setCurrentChapter(0);
    setCompleted(false);
    setVisitedChapters(new Set([0]));
    window.scrollTo(0, 0);
  }, [courseId]);

  // Scroll to top on chapter change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentChapter, completed]);

  if (!course) {
    return (
      <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Course not found.</p>
          <Link to="/" className="text-cyan-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const chapters = course.chapters;
  const chapter = chapters[currentChapter];
  const isFirst = currentChapter === 0;
  const isLast = currentChapter === chapters.length - 1;

  const goNext = () => {
    if (isLast) {
      setCompleted(true);
    } else {
      const next = currentChapter + 1;
      setCurrentChapter(next);
      setVisitedChapters((prev) => new Set([...prev, next]));
    }
  };

  const goPrev = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const handleRestart = () => {
    setCurrentChapter(0);
    setCompleted(false);
    setVisitedChapters(new Set([0]));
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* ── TOP NAVBAR ── */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-white/10 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/#courses"
            className="text-cyan-400 font-bold text-lg hover:text-cyan-300 transition"
          >
            MERNverse
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm hidden sm:block">
              Step {courseIndex + 1} of {courseData.length}
            </span>
            <Link
              to="/#courses"
              className="text-sm text-gray-400 hover:text-white transition border border-white/10 px-3 py-1 rounded-lg"
            >
              ← All Modules
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-20">
        {/* ── MODULE HEADER ── */}
        <div className="mb-10">
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-1">
            Step {courseIndex + 1}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{course.title}</h1>
          <p className="text-gray-400 mt-2">{course.desc}</p>
        </div>

        {/* ── CHAPTER TABS ── */}
        {!completed && (
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
            {chapters.map((ch, i) => {
              const isVisited = visitedChapters.has(i);
              const isActive = i === currentChapter;
              return (
                <button
                  key={i}
                  onClick={() => {
                    if (isVisited) {
                      setCurrentChapter(i);
                    }
                  }}
                  className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap
                    ${isActive
                      ? "bg-cyan-500 text-black"
                      : isVisited
                      ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                      : "bg-slate-900 text-gray-600 cursor-not-allowed border border-white/5"
                    }`}
                >
                  {i + 1}. {ch.title}
                </button>
              );
            })}
          </div>
        )}

        {/* ── PROGRESS BAR ── */}
        {!completed && (
          <div className="mb-8">
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span>
                Chapter {currentChapter + 1} of {chapters.length}
              </span>
              <span>{Math.round(((currentChapter + 1) / chapters.length) * 100)}% complete</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentChapter + 1) / chapters.length) * 100}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* ── CHAPTER CONTENT OR COMPLETION ── */}
        {completed ? (
          <CompletionScreen
            course={course}
            nextCourse={nextCourse}
            onRestart={handleRestart}
          />
        ) : (
          <>
            {/* Chapter heading */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">{chapter.title}</h2>
            </div>

            {/* Chapter body */}
            <ChapterContent chapter={chapter} />

            {/* ── NAVIGATION BUTTONS ── */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/10">
              <button
                onClick={goPrev}
                disabled={isFirst}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition
                  ${isFirst
                    ? "text-gray-600 cursor-not-allowed"
                    : "border border-white/20 text-white hover:bg-white/10"
                  }`}
              >
                ← Previous
              </button>

              <span className="text-gray-600 text-sm">
                {currentChapter + 1} / {chapters.length}
              </span>

              <button
                onClick={goNext}
                className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition"
              >
                {isLast ? "Complete Module 🎓" : "Next →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CoursePage;