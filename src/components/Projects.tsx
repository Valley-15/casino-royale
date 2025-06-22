"use client";
import { projects } from "../data/projects";
import { CSSProperties } from "react";

const NAV_HEIGHT = 64;

const styles: Record<string, CSSProperties> = {
  section: {
    /* own the screen below the navbar */
    minHeight: `calc(100vh - ${NAV_HEIGHT}px)`,
    scrollMarginTop: `${NAV_HEIGHT}px`,
    padding: "3rem 2rem",
    backgroundColor: "#0B0B0B",
    color: "#E5E5E5",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#1A1A1A",
    padding: "2rem",
    borderRadius: "1.5rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "0.25rem",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "#CCCCCC",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gap: "1.5rem",
    justifyItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#0B0B0B",
    border: "1px solid #E5E5E5",
    borderRadius: "1rem",
    padding: "1.5rem",
    transition: "box-shadow 0.2s, transform 0.2s",
    cursor: "default",
  },
  cardHover: {
    boxShadow: "0 0 15px rgba(255,255,255,0.2)",
    transform: "translateY(-4px)",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "0.75rem",
    color: "#FFFFFF",
  },
  desc: {
    color: "#DDDDDD",
    marginBottom: "1rem",
    fontSize: "0.95rem",
  },
  techList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1.5rem",
    justifyContent: "center",
  },
  techItem: {
    border: "1px solid #E5E5E5",
    borderRadius: "999px",
    padding: "0.3rem 0.75rem",
    fontSize: "0.85rem",
    color: "#E5E5E5",
  },
  links: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
  link: {
    color: "#E5E5E5",
    textDecoration: "underline",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};

export default function Projects() {
  const count = projects.length;
  const cols = count >= 3 ? count : 2;

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Creations</h2>
        <p style={styles.subtitle}>A gallery where code meets craft.</p>

        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              style={styles.card}
              onMouseEnter={(e) =>
                Object.assign(
                  (e.currentTarget as HTMLElement).style,
                  styles.cardHover
                )
              }
              onMouseLeave={(e) =>
                Object.assign((e.currentTarget as HTMLElement).style, {
                  boxShadow: "none",
                  transform: "none",
                })
              }
            >
              <h3 style={styles.title}>{p.title || `Project ${i + 1}`}</h3>
              <p style={styles.desc}>
                {p.description || "Details unfolding soon."}
              </p>
              <div style={styles.techList}>
                {p.tech.length > 0 ? (
                  p.tech.map((t) => (
                    <span key={t} style={styles.techItem}>
                      {t}
                    </span>
                  ))
                ) : (
                  <span style={{ color: "#777", fontSize: "0.85rem" }}>
                    Tech TBD
                  </span>
                )}
              </div>
              <div style={styles.links}>
                <a href={p.demo || "#"} style={styles.link}>
                  Experience →
                </a>
                <a href={p.github || "#"} style={styles.link}>
                  Inspect →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
