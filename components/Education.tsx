"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const GraduationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export default function Education() {
  const { t } = useLanguage();
  const educationList = t.education;

  return (
    <section
      id="education"
      style={{
        padding: "56px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="animate-fade-up delay-100">
        <div style={{ marginBottom: "36px" }}>
          <p className="section-label">{t.nav.education}</p>
          <h2 className="section-title" style={{ marginTop: "8px" }}>
            {t.ui.academicBackground}
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {educationList.map((edu, idx) => (
            <article
              key={idx}
              id={`education-${idx}`}
              className="card animate-fade-up"
              style={{
                padding: "26px 28px",
                animationDelay: `${0.15 * (idx + 1)}s`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>
                      <GraduationIcon />
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text)",
                      }}
                    >
                      {edu.degree}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    {edu.institution}
                  </p>
                </div>

                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "99px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    background: "rgba(212,168,83,0.1)",
                    color: "var(--accent)",
                    border: "1px solid rgba(212,168,83,0.2)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {edu.period}
                </span>
              </div>

              <div
                style={{
                  height: "1px",
                  background: "var(--border)",
                  marginBottom: "16px",
                }}
              />

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  paddingLeft: 0,
                  listStyle: "none",
                }}
              >
                {edu.details.map((detail, dIdx) => (
                  <li
                    key={dIdx}
                    style={{
                      display: "flex",
                      gap: "10px",
                      fontSize: "0.855rem",
                      lineHeight: 1.65,
                      color: "var(--text-muted)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        marginTop: "8px",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-block",
                      }}
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
