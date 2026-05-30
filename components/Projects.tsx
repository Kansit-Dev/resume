"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects;

  return (
    <section
      id="projects"
      style={{
        padding: "56px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="animate-fade-up delay-100">
        <div style={{ marginBottom: "36px" }}>
          <p className="section-label">{t.nav.projects}</p>
          <h2 className="section-title" style={{ marginTop: "8px" }}>
            {t.ui.featuredProjects}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project, idx) => (
            <article
              key={idx}
              id={`project-${idx}`}
              className="card animate-fade-up"
              style={{
                padding: "26px 28px",
                animationDelay: `${0.15 * (idx + 1)}s`,
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "4px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      lineHeight: 1.2,
                    }}
                  >
                    {project.name}
                  </h3>

                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-subtle)",
                      whiteSpace: "nowrap",
                      marginLeft: "12px",
                      paddingTop: "2px",
                    }}
                  >
                    {project.period}
                  </span>
                </div>

                {project.subtitle && (
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--accent)",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.subtitle}
                  </p>
                )}
              </div>

              {/* Bullets */}
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  paddingLeft: 0,
                  listStyle: "none",
                  marginBottom: "20px",
                  flex: 1,
                }}
              >
                {project.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    style={{
                      display: "flex",
                      gap: "10px",
                      fontSize: "0.84rem",
                      lineHeight: 1.65,
                      color: "var(--text-muted)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        marginTop: "9px",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-block",
                      }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "20px",
                }}
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "3px 9px",
                      borderRadius: "4px",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      background: "rgba(212,168,83,0.08)",
                      color: "var(--accent)",
                      border: "1px solid rgba(212,168,83,0.15)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.github || project.demo) && (
                <div style={{ display: "flex", gap: "12px" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.8rem",
                      }}
                    >
                      <GithubIcon />
                      Source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.8rem",
                      }}
                    >
                      <ExternalLinkIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
