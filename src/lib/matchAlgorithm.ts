import { questions } from "@/data/questions";
import { songs, type Song, type SpectrumStage } from "@/data/songs";
import type { ScoreMap } from "@/lib/storage";

type AnswerSelection = {
  questionId: number;
  optionId: string;
};

const zeroScores: ScoreMap = {
  d1: 0,
  d2: 0,
  d3: 0,
  d4: 0,
  d5: 0,
  d6: 0,
  d7: 0,
};

const scoreKeys = Object.keys(zeroScores) as Array<keyof ScoreMap>;
const questionMap = new Map(questions.map((question) => [question.id, question]));

const theoreticalMax = questions.reduce<ScoreMap>((accumulator, question) => {
  for (const key of scoreKeys) {
    const maxForQuestion = Math.max(
      ...question.options.map((option) => option.scores[key]),
    );
    accumulator[key] += maxForQuestion;
  }

  return accumulator;
}, { ...zeroScores });

function cosineSimilarity(a: number[], b: number[]) {
  const dot = a.reduce((sum, current, index) => sum + current * b[index], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, current) => sum + current ** 2, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, current) => sum + current ** 2, 0));

  if (!magnitudeA || !magnitudeB) {
    return 0;
  }

  return dot / (magnitudeA * magnitudeB);
}

function getSelectedOption(answer: AnswerSelection) {
  const question = questionMap.get(answer.questionId);

  return question?.options.find((option) => option.id === answer.optionId) ?? null;
}

export function calculateUserScores(answers: AnswerSelection[]): ScoreMap {
  const scores = { ...zeroScores };

  for (const answer of answers) {
    const option = getSelectedOption(answer);

    if (!option) {
      continue;
    }

    for (const key of scoreKeys) {
      scores[key] += option.scores[key];
    }
  }

  return scores;
}

function normalizeScores(scores: ScoreMap) {
  return scoreKeys.map((key) => {
    const max = theoreticalMax[key] || 1;
    return scores[key] / max;
  });
}

function calculateAnchorBonus(songId: string, answers: AnswerSelection[]) {
  return answers.reduce((total, answer) => {
    const option = getSelectedOption(answer);

    if (!option?.anchorBoost) {
      return total;
    }

    return option.anchorBoost === songId ? total + 0.045 : total;
  }, 0);
}

function calculateStageBonus(song: Song, stage: SpectrumStage) {
  if (!song.spectrumHint) {
    return 0;
  }

  return song.spectrumHint === stage ? 0.03 : 0;
}

export function matchSong({
  answers,
  spectrumStage,
}: {
  answers: AnswerSelection[];
  spectrumStage: SpectrumStage;
}) {
  const userScores = calculateUserScores(answers);
  const normalizedUser = normalizeScores(userScores);

  const rankedSongs = songs
    .map((song) => {
      const songVector = scoreKeys.map((key) => song.fingerprint[key] / 10);
      const similarity = cosineSimilarity(normalizedUser, songVector);
      const anchorBonus = calculateAnchorBonus(song.id, answers);
      const stageBonus = calculateStageBonus(song, spectrumStage);

      return {
        song,
        score: similarity + anchorBonus + stageBonus,
      };
    })
    .sort((left, right) => right.score - left.score);

  return {
    song: rankedSongs[0].song,
    scores: userScores,
  };
}
