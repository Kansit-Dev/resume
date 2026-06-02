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
        padding: "var(--section-py) 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <h2
        className="section-title"
        style={{ marginBottom: "32px" }}
      >
        {t.ui.technicalExpertise}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          columnGap: "48px",
          rowGap: "32px",
        }}
      >
        {categories.map((cat) => (
          <div key={cat.key} id={`skills-${cat.key}`}>
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "10px",
              }}
            >
              {cat.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skills[cat.key].map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
