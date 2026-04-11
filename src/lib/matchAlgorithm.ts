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
const stageOrder: SpectrumStage[] = [
  "deep_sour",
  "between_sour_guts",
  "heart_of_guts",
  "between_guts_ysps",
  "ysps_edge",
];
const anchorBonusPerHit = 0.06;
const anchorBonusCap = 0.12;
const closeAnchorWindow = 0.012;
const rescueWindow = 0.09;

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

function calculateAnchorHits(answers: AnswerSelection[]) {
  const hits = new Map<string, number>();

  for (const answer of answers) {
    const option = getSelectedOption(answer);

    if (!option?.anchorBoost) {
      continue;
    }

    hits.set(option.anchorBoost, (hits.get(option.anchorBoost) ?? 0) + 1);
  }

  return hits;
}

function calculateAnchorBonus(hitCount: number) {
  return Math.min(hitCount * anchorBonusPerHit, anchorBonusCap);
}

function calculateStageBonus(song: Song, stage: SpectrumStage) {
  if (!song.spectrumHint) {
    return 0;
  }

  const distance = Math.abs(
    stageOrder.indexOf(song.spectrumHint) - stageOrder.indexOf(stage),
  );

  if (distance === 0) {
    return 0.04;
  }

  if (distance === 1) {
    return 0.015;
  }

  if (distance === 2) {
    return -0.015;
  }

  return -0.05;
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
  const anchorHits = calculateAnchorHits(answers);

  const rankedSongs = songs
    .map((song) => {
      const songVector = scoreKeys.map((key) => song.fingerprint[key] / 10);
      const similarity = cosineSimilarity(normalizedUser, songVector);
      const hitCount = anchorHits.get(song.id) ?? 0;
      const anchorBonus = calculateAnchorBonus(hitCount);
      const stageBonus = calculateStageBonus(song, spectrumStage);

      return {
        song,
        hitCount,
        score: similarity + anchorBonus + stageBonus,
      };
    })
    .sort((left, right) => right.score - left.score);

  const topScore = rankedSongs[0]?.score ?? 0;
  const rescuedSong = rankedSongs
    .filter(
      (entry) =>
        entry.hitCount >= 2 && topScore - entry.score <= rescueWindow,
    )
    .sort(
      (left, right) =>
        right.hitCount - left.hitCount || right.score - left.score,
    )[0];
  const selectedSong =
    rescuedSong ??
    rankedSongs.find(
      (entry) =>
        entry.hitCount > 0 && topScore - entry.score <= closeAnchorWindow,
    ) ??
    rankedSongs[0];

  return {
    song: selectedSong.song,
    scores: userScores,
  };
}
