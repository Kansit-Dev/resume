"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Hero() {
  const { t } = useLanguage();
  const profile = t.profile;

  return (
    <section
      id="hero"
      style={{
        padding: "72px 0 56px",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-60px",
          left: "-80px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

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
            marginBottom: "36px",
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

        {/* Social + Download buttons */}
        <div
          className="animate-fade-up delay-400"
          style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
        >
          <a
            id="hero-github"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.875rem",
              background: "var(--surface)",
              cursor: "pointer",
            }}
          >
            <GithubIcon />
            GitHub
          </a>

          <a
            id="hero-linkedin"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.875rem",
              background: "var(--surface)",
              cursor: "pointer",
            }}
          >
            <LinkedinIcon />
            LinkedIn
          </a>

          <a
            id="hero-download-pdf"
            href="/resume.pdf"
            download
            className="hero-btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <DownloadIcon />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
