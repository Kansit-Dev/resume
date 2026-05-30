"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const skills = t.skills;

  const categories: { key: keyof typeof skills; label: string }[] = [
    { key: "languages", label: "Languages" },
    { key: "frameworks", label: "Frameworks & Libraries" },
    { key: "backend", label: "Backend & DevOps" },
    { key: "databases", label: "Databases & Storage" },
    { key: "tools", label: "Tools" },
    { key: "testing", label: "Testing" },
    { key: "spoken", label: "Spoken Languages" },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "56px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="animate-fade-up delay-100">
        <div style={{ marginBottom: "36px" }}>
          <p className="section-label">{t.nav.skills}</p>
          <h2 className="section-title" style={{ marginTop: "8px" }}>
            {t.ui.technicalExpertise}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={cat.key}
              id={`skills-${cat.key}`}
              className="card animate-fade-up"
              style={{
                padding: "20px 22px",
                animationDelay: `${0.1 * (idx + 1)}s`,
              }}
            >
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "14px",
                }}
              >
                {cat.label}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills[cat.key].map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
