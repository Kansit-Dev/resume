"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const BriefcaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Experience() {
  const { t } = useLanguage();
  const experiencesList = t.experiences;

  return (
    <section
      id="experience"
      style={{
        padding: "56px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="animate-fade-up delay-100">
        <div style={{ marginBottom: "36px" }}>
          <p className="section-label">{t.nav.experience}</p>
          <h2 className="section-title" style={{ marginTop: "8px" }}>
            {t.ui.professionalJourney}
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {experiencesList.map((exp, idx) => (
            <article
              key={idx}
              id={`experience-${idx}`}
              className="animate-fade-up"
              style={{
                animationDelay: `${0.15 * (idx + 1)}s`,
                display: "flex",
                gap: "24px",
              }}
            >
              {/* Timeline column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "6px",
                  flexShrink: 0,
                  width: "16px",
                }}
              >
                <div className="timeline-dot" />
                {idx < experiencesList.length - 1 && (
                  <div
                    className="timeline-line"
                    style={{ flex: 1, marginTop: "8px", minHeight: "40px" }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                {/* Header */}
                <div
                  className="card"
                  style={{ padding: "24px 28px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "12px",
                      marginBottom: "4px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "var(--text)",
                          marginBottom: "4px",
                        }}
                      >
                        {exp.role}
                      </h3>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "var(--accent)",
                          }}
                        >
                          <BriefcaseIcon />
                          {exp.company}
                        </span>

                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            fontSize: "0.8rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          <MapPinIcon />
                          {exp.location}
                        </span>
                      </div>
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
                      {exp.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: "var(--border)",
                      margin: "20px 0",
                    }}
                  />

                  {/* Bullets */}
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      paddingLeft: 0,
                      listStyle: "none",
                    }}
                  >
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        style={{
                          display: "flex",
                          gap: "12px",
                          fontSize: "0.875rem",
                          lineHeight: 1.7,
                          color: "var(--text-muted)",
                        }}
                      >
                        <span
                          style={{
                            flexShrink: 0,
                            marginTop: "8px",
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "var(--accent)",
                            display: "inline-block",
                          }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
