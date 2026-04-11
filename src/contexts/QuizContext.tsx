"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

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

  const setAnswer = useCallback((questionId: number, optionId: string) => {
    setAnswers((previous) => ({ ...previous, [questionId]: optionId }));
  }, []);

  const resetQuiz = useCallback(() => {
    setAnswers({});
    setCurrentQuestion(0);
  }, []);

  const loadQuizState = useCallback(
    (nextAnswers: AnswerMap, questionIndex: number) => {
      setAnswers(nextAnswers);
      setCurrentQuestion(questionIndex);
    },
    [],
  );

  const value: QuizContextValue = useMemo(
    () => ({
      answers,
      currentQuestion,
      setAnswer,
      setCurrentQuestion,
      resetQuiz,
      loadQuizState,
    }),
    [answers, currentQuestion, loadQuizState, resetQuiz, setAnswer],
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuizContext() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuizContext must be used within QuizProvider");
  }

  return context;
}
