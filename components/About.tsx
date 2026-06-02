"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const profile = t.profile;

  return (
    <section
      id="about"
      style={{
        padding: "var(--section-py) 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <h2
        className="section-title"
        style={{ marginBottom: "24px" }}
      >
        {t.ui.aboutMe}
      </h2>

      <p
        style={{
          fontSize: "1.0625rem",
          lineHeight: 1.75,
          color: "var(--text-muted)",
          maxWidth: "65ch",
        }}
      >
        {profile.summary}
      </p>
    </section>
  );
}
