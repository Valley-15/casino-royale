// components/Projects.tsx

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                {p.title || `Project ${idx + 1}`}
              </h3>
              <p className="mb-4 text-gray-600">
                {p.description || "Description coming soon."}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.length
                  ? p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))
                  : "Tech stack TBD"}
              </div>
              <div className="flex gap-4">
                <a
                  href={p.demo || "#"}
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  Live
                </a>
                <a
                  href={p.github || "#"}
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
