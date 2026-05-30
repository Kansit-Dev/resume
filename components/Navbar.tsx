"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import { Moon, Sun, Languages } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
          {[
            { href: "#hero", label: t.nav.home },
            { href: "#about", label: t.nav.about },
            { href: "#experience", label: t.nav.experience },
            { href: "#skills", label: t.nav.skills },
            { href: "#projects", label: t.nav.projects },
            { href: "#education", label: t.nav.education },
            { href: "#contact", label: t.nav.contact },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{
                padding: "14px 12px",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
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
          >
            <Languages size={18} />
            {language === "en" ? "TH" : "EN"}
          </button>

          {mounted && (
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
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
