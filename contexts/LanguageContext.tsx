"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { cvData } from "@/data/cv";

type Language = "en" | "th";
type CVData = typeof cvData.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: CVData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = {
    language,
    setLanguage,
    t: cvData[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
