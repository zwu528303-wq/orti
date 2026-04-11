"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { QuestionCard } from "@/components/Quiz/QuestionCard";
import { questions } from "@/data/questions";
import { trackEvent } from "@/lib/analytics";
import { matchSong } from "@/lib/matchAlgorithm";
import { buildResultHref } from "@/lib/resultUrl";
import {
  calculateSpectrumStage,
  getSpectrumCopy,
} from "@/lib/spectrum";
import {
  clearDraft,
  getDraft,
  saveDraft,
  saveResult,
  type QuizDraft,
} from "@/lib/storage";
import { useQuizContext } from "@/contexts/QuizContext";

const QUESTION_TOTAL = questions.length;

function answerMapToDraftAnswers(answerMap: Record<number, string>) {
  return Object.entries(answerMap)
    .map(([questionId, optionId]) => ({
      questionId: Number(questionId),
      optionId,
    }))
    .sort((left, right) => left.questionId - right.questionId);
}

function draftAnswersToMap(draft: QuizDraft) {
  return draft.answers.reduce<Record<number, string>>((accumulator, answer) => {
    accumulator[answer.questionId] = answer.optionId;
    return accumulator;
  }, {});
}

export function QuizExperience() {
  const router = useRouter();
  const restoredRef = useRef(false);
  const startedRef = useRef(false);
  const [isLocked, setIsLocked] = useState(false);
  const { answers, currentQuestion, loadQuizState, resetQuiz, setAnswer, setCurrentQuestion } =
    useQuizContext();

  useEffect(() => {
    if (restoredRef.current) {
      return;
    }

    const draft = getDraft();
    restoredRef.current = true;

    if (draft) {
      loadQuizState(draftAnswersToMap(draft), draft.currentQuestion);
      trackEvent("quiz_resumed");
      startedRef.current = true;
      return;
    }

    if (!startedRef.current) {
      trackEvent("quiz_started");
      startedRef.current = true;
    }
  }, [loadQuizState]);

  const question = questions[currentQuestion];
  const selectedOptionId = answers[question.id];

  const handleBack = () => {
    if (currentQuestion === 0 || isLocked) {
      return;
    }

    const nextQuestionIndex = currentQuestion - 1;
    setCurrentQuestion(nextQuestionIndex);
    saveDraft({
      currentQuestion: nextQuestionIndex,
      answers: answerMapToDraftAnswers(answers),
      updatedAt: Date.now(),
    });
  };

  const handleSelect = (optionId: string) => {
    if (isLocked) {
      return;
    }

    setIsLocked(true);

    const nextAnswers = {
      ...answers,
      [question.id]: optionId,
    };

    setAnswer(question.id, optionId);

    const nextDraftAnswers = answerMapToDraftAnswers(nextAnswers);

    window.setTimeout(() => {
      if (currentQuestion === QUESTION_TOTAL - 1) {
        const spectrumStage = calculateSpectrumStage(nextDraftAnswers);
        const { song, scores } = matchSong({
          answers: nextDraftAnswers,
          spectrumStage,
        });

        const spectrumCopy = getSpectrumCopy(spectrumStage);
        const result = {
          songId: song.id,
          spectrumStage,
          scores,
          timestamp: Date.now(),
        };

        clearDraft();
        saveResult(result);
        trackEvent("quiz_completed", {
          songId: song.id,
          stage: spectrumStage,
          slot: spectrumCopy.slot,
        });
        resetQuiz();
        startTransition(() => {
          router.push(buildResultHref(result));
        });
        return;
      }

      const nextQuestionIndex = currentQuestion + 1;
      setCurrentQuestion(nextQuestionIndex);
      saveDraft({
        currentQuestion: nextQuestionIndex,
        answers: nextDraftAnswers,
        updatedAt: Date.now(),
      });
      setIsLocked(false);
    }, 220);
  };

  return (
    <main className="app-shell flex min-h-screen flex-col justify-center">
      <div
        className="transition-all duration-300 ease-out"
        key={question.id}
      >
        <QuestionCard
          canGoBack={currentQuestion > 0}
          current={currentQuestion + 1}
          isLocked={isLocked}
          onBack={handleBack}
          onSelect={handleSelect}
          question={question}
          selectedOptionId={selectedOptionId}
          total={QUESTION_TOTAL}
        />
      </div>
    </main>
  );
}
