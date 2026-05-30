"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const profile = t.profile;

  return (
    <section
      id="about"
      style={{
        padding: "56px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="animate-fade-up delay-100">
        <div style={{ marginBottom: "24px" }}>
          <p className="section-label">{t.nav.about}</p>
          <h2 className="section-title" style={{ marginTop: "8px" }}>
            {t.ui.aboutMe}
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            paddingLeft: "24px",
          }}
        >
          {/* Left accent line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--accent), transparent)",
              borderRadius: "2px",
            }}
          />

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "var(--text-muted)",
              maxWidth: "680px",
            }}
          >
            {profile.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
