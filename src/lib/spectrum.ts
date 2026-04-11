import type { SpectrumStage } from "@/data/songs";
import { questions } from "@/data/questions";

type AnswerSelection = {
  questionId: number;
  optionId: string;
};

type SpectrumCopy = {
  en: string;
  zh: string;
  slot: 1 | 2 | 3 | 4 | 5;
};

const questionMap = new Map(questions.map((question) => [question.id, question]));
const theoreticalSpectrumMax = questions.reduce(
  (accumulator, question) => {
    accumulator.sour += Math.max(
      ...question.options.map((option) => option.spectrumScore.sour),
    );
    accumulator.guts += Math.max(
      ...question.options.map((option) => option.spectrumScore.guts),
    );
    accumulator.ysps += Math.max(
      ...question.options.map((option) => option.spectrumScore.ysps),
    );

    return accumulator;
  },
  {
    sour: 0,
    guts: 0,
    ysps: 0,
  },
);

function getSelectedOption({ questionId, optionId }: AnswerSelection) {
  const question = questionMap.get(questionId);

  return question?.options.find((option) => option.id === optionId) ?? null;
}

export function calculateSpectrumStage(answers: AnswerSelection[]): SpectrumStage {
  let sour = 0;
  let guts = 0;
  let ysps = 0;

  for (const answer of answers) {
    const option = getSelectedOption(answer);

    if (!option) {
      continue;
    }

    sour += option.spectrumScore.sour;
    guts += option.spectrumScore.guts;
    ysps += option.spectrumScore.ysps;
  }

  const sourRatio = sour / (theoreticalSpectrumMax.sour || 1);
  const gutsRatio = guts / (theoreticalSpectrumMax.guts || 1);
  const yspsRatio = ysps / (theoreticalSpectrumMax.ysps || 1);

  if (sourRatio >= gutsRatio + 0.05 && sourRatio >= yspsRatio + 0.05) {
    return "deep_sour";
  }

  if (yspsRatio >= sourRatio + 0.05 && yspsRatio >= gutsRatio + 0.05) {
    return "ysps_edge";
  }

  if (gutsRatio >= sourRatio + 0.12 && gutsRatio >= yspsRatio + 0.12) {
    return "heart_of_guts";
  }

  const topTwoStages = [
    {
      stage: "deep_sour" as const,
      score: sourRatio,
    },
    {
      stage: "heart_of_guts" as const,
      score: gutsRatio,
    },
    {
      stage: "ysps_edge" as const,
      score: yspsRatio,
    },
  ]
    .sort((left, right) => right.score - left.score)
    .slice(0, 2)
    .map((entry) => entry.stage);

  if (
    topTwoStages.includes("deep_sour") &&
    topTwoStages.includes("heart_of_guts")
  ) {
    return "between_sour_guts";
  }

  return "between_guts_ysps";
}

export function getSpectrumCopy(stage: SpectrumStage): SpectrumCopy {
  switch (stage) {
    case "deep_sour":
      return {
        en: "You're still living deep in your SOUR years.",
        zh: "你还住在你的 SOUR 时期里，深深地。",
        slot: 1,
      };
    case "between_sour_guts":
      return {
        en: "You're living in the years between SOUR and GUTS.",
        zh: "你正活在 SOUR 与 GUTS 之间的那些年里。",
        slot: 2,
      };
    case "heart_of_guts":
      return {
        en: "Right now, you're in the heart of your GUTS era.",
        zh: "此刻，你正在你的 GUTS 时期最深处。",
        slot: 3,
      };
    case "between_guts_ysps":
      return {
        en: "You're already drifting toward YSPS.",
        zh: "你已经在向 YSPS 漂去了。",
        slot: 4,
      };
    case "ysps_edge":
      return {
        en: "You're already standing at the edge of YSPS.",
        zh: "你已经站在 YSPS 的边缘了。",
        slot: 5,
      };
  }
}
