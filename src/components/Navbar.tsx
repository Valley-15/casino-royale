
"use client";
import { useEffect, useState } from "react";

const NAV_HEIGHT = 64; // px

const styles = {
  bar: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    height: `${NAV_HEIGHT}px`,
    backgroundColor: "rgba(0,0,0,0.95)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1rem",
    zIndex: 1000,
  },
  container: {
    display: "flex",
    gap: "2rem",
  },
  link: {
    color: "#fff",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    fontSize: "0.9rem",
    textDecoration: "none",
    position: "relative" as const,
    lineHeight: `${NAV_HEIGHT}px`,
  },
  activeUnderline: {
    position: "absolute" as const,
    bottom: "8px",
    left: 0,
    right: 0,
    height: "2px",
    backgroundColor: "#fff",
  },
};

const navItems = [
  { id: "hero", label: "THE BEGINNING" },
  { id: "about", label: "MY PLACE" },
  { id: "projects", label: "MADE, NOT FOUND" },
  { id: "contact", label: "SEND A WHISPER" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.6 }
    );
    navItems.forEach((item) => {
      const sec = document.getElementById(item.id);
      if (sec) obs.observe(sec);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav style={styles.bar}>
      <div style={styles.container}>
        {navItems.map((nav) => (
          <a key={nav.id} href={`#${nav.id}`} style={styles.link}>
            {nav.label}
            {active === nav.id && <span style={styles.activeUnderline} />}
          </a>
        ))}
      </div>
    </nav>
  );
}
