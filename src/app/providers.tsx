"use client";

import { LangProvider } from "@/contexts/LangContext";
import { QuizProvider } from "@/contexts/QuizContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <QuizProvider>{children}</QuizProvider>
    </LangProvider>
  );
}
