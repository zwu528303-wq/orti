import type { SpectrumStage } from "@/data/songs";

export type ScoreMap = {
  d1: number;
  d2: number;
  d3: number;
  d4: number;
  d5: number;
  d6: number;
  d7: number;
};

export interface StoredResult {
  songId: string;
  spectrumStage: SpectrumStage;
  scores: ScoreMap;
  timestamp: number;
}

export interface QuizDraft {
  currentQuestion: number;
  answers: Array<{ questionId: number; optionId: string }>;
  updatedAt: number;
}

export type QuizLanguage = "zh" | "en";

export const RESULT_STORAGE_KEY = "olivia_quiz_result";
export const DRAFT_STORAGE_KEY = "olivia_quiz_draft";
export const QUIZ_LANGUAGE_STORAGE_KEY = "olivia_quiz_language";
export const DRAFT_MAX_AGE_MS = 24 * 60 * 60 * 1000;

function hasBrowserStorage() {
  return typeof window !== "undefined";
}

export function saveResult(result: StoredResult) {
  if (!hasBrowserStorage()) {
    return;
  }

  window.localStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(result));
}

export function getStoredResult(): StoredResult | null {
  if (!hasBrowserStorage()) {
    return null;
  }

  const raw = window.localStorage.getItem(RESULT_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as StoredResult;
  } catch {
    return null;
  }
}

export function saveDraft(draft: QuizDraft) {
  if (!hasBrowserStorage()) {
    return;
  }

  window.sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
}

export function getDraft(): QuizDraft | null {
  if (!hasBrowserStorage()) {
    return null;
  }

  const raw = window.sessionStorage.getItem(DRAFT_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    const draft = JSON.parse(raw) as QuizDraft;

    if (Date.now() - draft.updatedAt > DRAFT_MAX_AGE_MS) {
      clearDraft();
      return null;
    }

    return draft;
  } catch {
    return null;
  }
}

export function clearDraft() {
  if (!hasBrowserStorage()) {
    return;
  }

  window.sessionStorage.removeItem(DRAFT_STORAGE_KEY);
}

export function saveQuizLanguage(language: QuizLanguage) {
  if (!hasBrowserStorage()) {
    return;
  }

  window.localStorage.setItem(QUIZ_LANGUAGE_STORAGE_KEY, language);
}

export function getQuizLanguage(): QuizLanguage {
  if (!hasBrowserStorage()) {
    return "zh";
  }

  const raw = window.localStorage.getItem(QUIZ_LANGUAGE_STORAGE_KEY);

  return raw === "en" ? "en" : "zh";
}
