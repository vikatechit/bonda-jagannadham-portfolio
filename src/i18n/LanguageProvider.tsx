"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { en } from "@/i18n/en";
import { te } from "@/i18n/te";

export type Lang = "te" | "en";

const dictionaries = { te, en };

type Dictionary = typeof te;

type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("te");

  useEffect(() => {
    const saved = window.localStorage.getItem("bonda-lang");
    if (saved === "en" || saved === "te") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "te" ? "te" : "en";
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("bonda-lang", next);
  };

  const value = useMemo<LanguageValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
