"use client";

import { createContext, useContext, useState } from "react";

type AnswerMap = Record<number, string>;

type QuizContextValue = {
  answers: AnswerMap;
  currentQuestion: number;
  setAnswer: (questionId: number, optionId: string) => void;
  setCurrentQuestion: (questionIndex: number) => void;
  resetQuiz: () => void;
  loadQuizState: (nextAnswers: AnswerMap, questionIndex: number) => void;
};

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const value: QuizContextValue = {
    answers,
    currentQuestion,
    setAnswer: (questionId, optionId) => {
      setAnswers((previous) => ({ ...previous, [questionId]: optionId }));
    },
    setCurrentQuestion,
    resetQuiz: () => {
      setAnswers({});
      setCurrentQuestion(0);
    },
    loadQuizState: (nextAnswers, questionIndex) => {
      setAnswers(nextAnswers);
      setCurrentQuestion(questionIndex);
    },
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuizContext() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuizContext must be used within QuizProvider");
  }

  return context;
}
