"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import { Moon, Sun, Languages } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#hero", key: "home" },
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#education", key: "education" },
  { href: "#contact", key: "contact" },
] as const;

type NavKey = (typeof NAV_ITEMS)[number]["key"];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [activeHref, setActiveHref] = useState<string>("#hero");

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      aria-label="Page sections"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--surface)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={isActive ? "page" : undefined}
                style={{
                  padding: "14px 12px",
                  fontSize: "0.78rem",
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                {t.nav[item.key as NavKey]}
              </a>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onClick={toggleLanguage}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.8rem",
              fontWeight: 600,
            }}
            title="Toggle Language"
            aria-label="Toggle language"
          >
            <Languages size={18} aria-hidden="true" />
            {language === "en" ? "TH" : "EN"}
          </button>

          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text)",
              display: "flex",
              alignItems: "center",
            }}
            title="Toggle Theme"
            aria-label="Toggle theme"
          >
            <Sun size={18} className="theme-icon theme-icon-light" aria-hidden="true" />
            <Moon size={18} className="theme-icon theme-icon-dark" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
}
