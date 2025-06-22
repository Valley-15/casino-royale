// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "THE BEGINNING" },
  { id: "about", label: "MY PLACE" },
  { id: "projects", label: "MADE, NOT FOUND" },
  { id: "contact", label: "SEND A WHISPER" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("hero");
  const [open, setOpen] = useState<boolean>(false);

  // track which section is in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { threshold: 0.6 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const sec = document.getElementById(id);
      if (sec) obs.observe(sec);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/95">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Desktop links */}
        <div className="hidden sm:flex space-x-8">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`
                inline-block
                uppercase text-sm tracking-wider text-white
                pb-[2px] border-b-2 border-transparent
                transition
                ${
                  active === id
                    ? "border-white font-bold"
                    : "font-medium hover:border-white"
                }
              `}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="sm:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile off-canvas menu */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-8 sm:hidden"
          onClick={() => setOpen(false)} // close on backdrop click
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`
                uppercase text-2xl tracking-wide text-white
                ${active === id ? "font-bold" : "font-medium"}
              `}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
