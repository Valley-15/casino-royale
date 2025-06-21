// components/About.tsx

import { siteConfig } from "../data/config";

export default function About() {
  const { bio, skills } = siteConfig;

  return (
    <section id="about" className="py-16 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">About Me</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">{bio}</p>
        <h3 className="text-2xl font-medium mb-2 text-gray-900">Skills</h3>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
