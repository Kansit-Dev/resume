"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.08 6.08l1.12-1.12a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Contact() {
  const { t } = useLanguage();
  const profile = t.profile;

  const contactLinks = [
    {
      id: "contact-email",
      icon: <EmailIcon />,
      label: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      id: "contact-phone",
      icon: <PhoneIcon />,
      label: profile.phone,
      href: `tel:${profile.phone.replace(/-/g, "")}`,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "var(--section-py) 0 clamp(64px, 9vw, 96px)",
      }}
    >
      <div className="animate-fade-up delay-100">
        <h2 className="section-title" style={{ marginBottom: "32px" }}>
          {t.ui.getInTouch}
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          {contactLinks.map((link, idx) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              className="card animate-fade-up contact-card"
              style={{
                padding: "16px 22px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "0.9rem",
                animationDelay: `${0.1 * (idx + 1)}s`,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p
          style={{
            marginTop: "48px",
            fontSize: "0.78rem",
            color: "var(--text-subtle)",
            textAlign: "center",
            letterSpacing: "0.04em",
          }}
        >
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </section>
  );
}
