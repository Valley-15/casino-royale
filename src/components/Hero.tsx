// components/Hero.tsx

import { siteConfig } from "../data/config";

export default function Hero() {
  const { name, tagline, cta } = siteConfig;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4"
    >
      {/* Your Name */}
      <h1 className="text-5xl font-bold mb-4 text-gray-900">{name}</h1>

      {/* Tagline */}
      <p className="text-xl mb-8 text-gray-700">{tagline}</p>

      {/* CTA Button */}
      <a
        href={cta.href}
        className="
          px-6 py-3
          bg-blue-600 text-white rounded-md
          hover:bg-blue-700
          focus:outline-none focus:ring-2 focus:ring-blue-400
          transition
        "
      >
        {cta.text}
      </a>
    </section>
  );
}
