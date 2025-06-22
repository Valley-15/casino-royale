// components/Hero.tsx
"use client";
import { siteConfig } from "../data/config";
import { useState } from "react";

export default function Hero() {
  const { name, cta } = siteConfig;
  const tagline = "Weaving logic into elegance.";
  const [hover, setHover] = useState(false);

  const styles = {
    section: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      padding: "0 1rem",
      backgroundColor: "#0B0B0B",
      color: "#E5E5E5",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "4rem",
      fontWeight: 700,
      marginBottom: "0.5rem",
      color: "#FFFFFF",
      lineHeight: 1.1,
    },
    subtitle: {
      fontSize: "1.5rem",
      fontStyle: "italic" as const,
      color: "#BBBBBB",
      marginBottom: "2.5rem",
      maxWidth: "600px",
    },
    button: {
      padding: "0.75rem 2rem",
      backgroundColor: hover ? "#D1D1D1" : "#F5F5F5",
      color: "#0B0B0B",
      border: "none",
      borderRadius: "0.5rem",
      fontSize: "1rem",
      fontWeight: 500,
      cursor: "pointer",
      textDecoration: "none",
      transition: "background-color 0.2s",
    },
  };

  return (
    <section id="hero" style={styles.section}>
      <h1 style={styles.title}>{name}</h1>
      <p style={styles.subtitle}>{tagline}</p>
      <button
        style={styles.button}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => (window.location.hash = cta.href)}
      >
        Discover Creations
      </button>
    </section>
  );
}
