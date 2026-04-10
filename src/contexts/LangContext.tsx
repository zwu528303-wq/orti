"use client";

import { createContext, useContext, useState } from "react";

type Lang = "zh" | "en";

type LangContextValue = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("useLang must be used within LangProvider");
  }

  return context;
}
