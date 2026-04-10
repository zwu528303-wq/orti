import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const sourcePath = path.join(rootDir, "orti-questions-v1.md");
const outputPath = path.join(rootDir, "src/data/questions.ts");

const scoreKeys = ["d1", "d2", "d3", "d4", "d5", "d6", "d7"];

function createScoreMap() {
  return {
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d5: 0,
    d6: 0,
    d7: 0,
  };
}

function createSpectrumMap() {
  return {
    sour: 0,
    guts: 0,
    ysps: 0,
  };
}

function parseDimensions(line) {
  const scores = createScoreMap();
  const payload = line.replace("- 维度：", "").trim();
  const entries = payload.split(",").map((entry) => entry.trim());

  for (const entry of entries) {
    const match = entry.match(/^D(\d)\+(\d)$/);

    if (!match) {
      continue;
    }

    const [, scoreIndex, value] = match;
    const key = `d${scoreIndex}`;

    if (scoreKeys.includes(key)) {
      scores[key] = Number(value);
    }
  }

  return scores;
}

function parseSpectrum(line) {
  const spectrumScore = createSpectrumMap();
  const payload = line.replace("- Spectrum：", "").trim();
  const entries = payload.split(",").map((entry) => entry.trim());

  for (const entry of entries) {
    const match = entry.match(/^(SOUR|GUTS|YSPS)\+(\d)$/);

    if (!match) {
      continue;
    }

    const [, label, value] = match;
    const key = label.toLowerCase();
    spectrumScore[key] = Number(value);
  }

  return spectrumScore;
}

function parseQuestions(markdown) {
  const blocks = markdown.split(/\n## Q\./).slice(1);

  return blocks.map((block) => {
    const trimmedBlock = block.split("\n---")[0].trim();
    const lines = trimmedBlock.split("\n");
    const header = lines[0].trim();
    const headerMatch = header.match(/^(\d+)\s+·\s+(.+)$/);

    if (!headerMatch) {
      throw new Error(`Unable to parse question header: ${header}`);
    }

    const [, idText, category] = headerMatch;
    const questionMatch = trimmedBlock.match(/\*\*(.+?)\*\*\n\*(.+?)\*/s);

    if (!questionMatch) {
      throw new Error(`Unable to parse question copy: ${header}`);
    }

    const [, questionZh, questionEn] = questionMatch;

    const optionPattern =
      /\*\*([A-D])\.\s(.+?)\*\*\n\*(.+?)\*\n((?:- .+\n?)*)/g;
    const options = [];

    for (const optionMatch of trimmedBlock.matchAll(optionPattern)) {
      const [, letter, textZh, textEn, bulletBlock] = optionMatch;
      const bulletLines = bulletBlock
        .trim()
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      let scores = createScoreMap();
      let spectrumScore = createSpectrumMap();
      let anchorBoost;

      for (const line of bulletLines) {
        if (line.startsWith("- 维度：")) {
          scores = parseDimensions(line);
        }

        if (line.startsWith("- Spectrum：")) {
          spectrumScore = parseSpectrum(line);
        }

        if (line.startsWith("- 锚点：")) {
          anchorBoost = line.replace("- 锚点：", "").trim();
        }
      }

      options.push({
        id: `${Number(idText)}${letter.toLowerCase()}`,
        textZh,
        textEn,
        scores,
        spectrumScore,
        ...(anchorBoost ? { anchorBoost } : {}),
      });
    }

    return {
      id: Number(idText),
      category,
      questionZh,
      questionEn,
      options,
    };
  });
}

const markdown = fs.readFileSync(sourcePath, "utf8");
const questions = parseQuestions(markdown);

const fileContents = `export type ScoreKey = "d1" | "d2" | "d3" | "d4" | "d5" | "d6" | "d7";

export interface Option {
  id: string;
  textZh: string;
  textEn?: string;
  scores: Record<ScoreKey, number>;
  spectrumScore: {
    sour: number;
    guts: number;
    ysps: number;
  };
  anchorBoost?: string;
}

export interface Question {
  id: number;
  category: string;
  questionZh: string;
  questionEn?: string;
  options: Option[];
}

export const questions: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(outputPath, fileContents, "utf8");
console.log(`Generated ${questions.length} questions into ${path.relative(rootDir, outputPath)}.`);
