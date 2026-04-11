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

function getLocalStorage() {
  if (!hasBrowserStorage()) {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function getSessionStorage() {
  if (!hasBrowserStorage()) {
    return null;
  }

  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export function saveResult(result: StoredResult) {
  const storage = getLocalStorage();

  if (!storage) {
    return;
  }

  try {
    storage.setItem(RESULT_STORAGE_KEY, JSON.stringify(result));
  } catch {
    // Ignore storage failures so quiz flow can continue in restricted browsers.
  }
}

export function getStoredResult(): StoredResult | null {
  const storage = getLocalStorage();

  if (!storage) {
    return null;
  }

  let raw: string | null = null;

  try {
    raw = storage.getItem(RESULT_STORAGE_KEY);
  } catch {
    return null;
  }

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
  const storage = getSessionStorage();

  if (!storage) {
    return;
  }

  try {
    storage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
  } catch {
    // Ignore storage failures so quiz flow can continue in restricted browsers.
  }
}

export function getDraft(): QuizDraft | null {
  const storage = getSessionStorage();

  if (!storage) {
    return null;
  }

  let raw: string | null = null;

  try {
    raw = storage.getItem(DRAFT_STORAGE_KEY);
  } catch {
    return null;
  }

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
  const storage = getSessionStorage();

  if (!storage) {
    return;
  }

  try {
    storage.removeItem(DRAFT_STORAGE_KEY);
  } catch {
    // Ignore storage failures so quiz flow can continue in restricted browsers.
  }
}

export function saveQuizLanguage(language: QuizLanguage) {
  const storage = getLocalStorage();

  if (!storage) {
    return;
  }

  try {
    storage.setItem(QUIZ_LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Ignore storage failures so the language switch remains non-blocking.
  }
}

export function getQuizLanguage(): QuizLanguage {
  const storage = getLocalStorage();

  if (!storage) {
    return "zh";
  }

  let raw: string | null = null;

  try {
    raw = storage.getItem(QUIZ_LANGUAGE_STORAGE_KEY);
  } catch {
    return "zh";
  }

  return raw === "en" ? "en" : "zh";
}
