// src/components/Projects.tsx
"use client";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        bg-[#0B0B0B] text-[#E5E5E5]
        px-4 py-6
        md:px-8 md:py-8
        min-h-screen
        flex items-center
      "
    >
      <div className="max-w-4xl mx-auto bg-[#1A1A1A] p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-4xl font-bold mb-2 text-white">Creations</h2>
        <p className="text-xl italic text-[#CCCCCC] mb-6">
          A gallery where code meets craft.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                bg-[#0B0B0B] border border-[#E5E5E5]
                rounded-lg p-6
                transition-transform duration-200
                hover:shadow-lg hover:scale-[1.02]
              "
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {p.title || `Project ${i + 1}`}
              </h3>
              <p className="text-base text-[#DDDDDD] mb-4">
                {p.description || "Details unfolding soon."}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {p.tech.length > 0 ? (
                  p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 border border-[#E5E5E5] rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))
                ) : (
                  <span className="text-[#777] text-sm">Tech TBD</span>
                )}
              </div>

              <div className="flex gap-4 justify-center">
                <a
                  href={p.demo || "#"}
                  className="px-4 py-1 rounded-full bg-[#222] text-white font-medium shadow hover:bg-[#333] transition-colors border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Experience
                </a>
                <a
                  href={p.github || "#"}
                  className="px-4 py-1 rounded-full bg-[#222] text-white font-medium shadow hover:bg-[#333] transition-colors border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inspect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
