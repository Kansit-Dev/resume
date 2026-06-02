"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.08 6.08l1.12-1.12a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Hero() {
  const { t } = useLanguage();
  const profile = t.profile;

  return (
    <section
      id="hero"
      style={{
        padding: "clamp(72px, 10vw, 96px) 0 var(--section-py)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="animate-fade-up">
        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 700,
            color: "var(--text)",
            lineHeight: 1.05,
            marginBottom: "4px",
          }}
        >
          {profile.name}
        </h1>

        {/* Title badge */}
        <div
          className="animate-fade-up delay-200"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--accent)",
              letterSpacing: "0.04em",
            }}
          >
            {profile.title}
          </span>
        </div>

        {/* Contact info row */}
        <div
          className="animate-fade-up delay-300"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <a
            id="hero-email"
            href={`mailto:${profile.email}`}
            className="link-hover"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontSize: "0.875rem",
            }}
          >
            <EmailIcon />
            {profile.email}
          </a>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontSize: "0.875rem",
              color: "var(--text-muted)",
            }}
          >
            <PhoneIcon />
            {profile.phone}
          </span>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontSize: "0.875rem",
              color: "var(--text-muted)",
            }}
          >
            <LocationIcon />
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
