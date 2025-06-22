import { siteConfig } from "../data/config";

const styles = {
  section: {
    minHeight: "100vh", // cover the full viewport
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    backgroundColor: "#0B0B0B", // soft on the eyes
    color: "#E5E5E5", // gentle off-white
  },
  container: {
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#1A1A1A", // card-style dark gray
    padding: "2.5rem",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "#FFFFFF", // pure white for impact
  },
  subtitle: {
    fontSize: "1.25rem",
    fontStyle: "italic" as const,
    color: "#BBBBBB", // a touch lighter
    marginBottom: "2rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: "2.5rem",
  },
  badgeContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.75rem",
  },
  badge: {
    border: "1px solid #E5E5E5",
    borderRadius: "999px",
    padding: "0.4rem 1rem",
    fontSize: "0.875rem",
    color: "#E5E5E5",
  },
};

export default function About() {
  const { bio, skills } = siteConfig;

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Reflections in Code</h2>
        <p style={styles.subtitle}>
          Every line whispers a fragment of a journey.
        </p>

        <p style={styles.text}>{bio}</p>

        <h3 style={styles.title}>Arsenal of Creation</h3>
        <div style={styles.badgeContainer}>
          {skills.map((skill) => (
            <span key={skill} style={styles.badge}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
