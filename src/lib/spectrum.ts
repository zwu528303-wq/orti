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

  const total = sour + guts + ysps || 1;
  const sourRatio = sour / total;
  const gutsRatio = guts / total;
  const yspsRatio = ysps / total;

  if (sourRatio >= 0.5) return "deep_sour";
  if (yspsRatio >= 0.38) return "ysps_edge";
  if (gutsRatio >= 0.42 && yspsRatio < 0.24) return "heart_of_guts";
  if (sour >= guts) return "between_sour_guts";
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
