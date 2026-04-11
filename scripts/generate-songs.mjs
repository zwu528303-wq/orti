import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const sourceArg = process.argv[2];
const sourceCandidates = sourceArg ? [sourceArg] : ["orti-songs-v1.md"];
const sourceRelativePath = sourceCandidates.find((candidate) =>
  fs.existsSync(path.join(rootDir, candidate)),
);

if (!sourceRelativePath) {
  throw new Error(
    `Unable to find a song source. Checked: ${sourceCandidates.join(", ")}`,
  );
}

const sourcePath = path.join(rootDir, sourceRelativePath);
const outputPath = path.join(rootDir, "src/data/songs.ts");

const titleToId = {
  brutal: "brutal",
  traitor: "traitor",
  "drivers license": "drivers_license",
  "1 step forward, 3 steps back": "1_step_forward_3_steps_back",
  "deja vu": "deja_vu",
  "good 4 u": "good_4_u",
  "enough for you": "enough_for_you",
  happier: "happier",
  "jealousy, jealousy": "jealousy_jealousy",
  "favorite crime": "favorite_crime",
  "hope ur ok": "hope_ur_ok",
  "all-american bitch": "all_american_bitch",
  "bad idea right?": "bad_idea_right",
  vampire: "vampire",
  lacy: "lacy",
  "ballad of a homeschooled girl": "ballad_of_a_homeschooled_girl",
  "making the bed": "making_the_bed",
  logical: "logical",
  "get him back!": "get_him_back",
  "love is embarrassing": "love_is_embarrassing",
  "the grudge": "the_grudge",
  "pretty isn't pretty": "pretty_isnt_pretty",
  "teenage dream": "teenage_dream",
};

const neteaseUrlsById = {
  brutal: "https://163cn.tv/4UgmWbb",
  traitor: "https://163cn.tv/4UhpJWF",
  drivers_license: "https://163cn.tv/4UgDCbX",
  "1_step_forward_3_steps_back": "https://163cn.tv/4UiqmS6",
  deja_vu: "https://163cn.tv/4UidPbr",
  good_4_u: "https://163cn.tv/4UidWGU",
  enough_for_you: "https://163cn.tv/4UiRTfu",
  happier: "https://163cn.tv/4UioAi2",
  jealousy_jealousy: "https://163cn.tv/4UiFqqg",
  favorite_crime: "https://163cn.tv/4UiNSeh",
  hope_ur_ok: "https://163cn.tv/4Uh3xva",
  all_american_bitch: "https://163cn.tv/4UiJTvz",
  bad_idea_right: "https://163cn.tv/4Uh5Nu7",
  vampire: "https://163cn.tv/4UiN2MF",
  lacy: "https://163cn.tv/4UiUqEA",
  ballad_of_a_homeschooled_girl: "https://163cn.tv/4UiDz7P",
  making_the_bed: "https://163cn.tv/4UiL214",
  logical: "https://163cn.tv/4UjfwJ1",
  get_him_back: "https://163cn.tv/4UiztpX",
  love_is_embarrassing: "https://163cn.tv/4UirbUZ",
  the_grudge: "https://163cn.tv/4UiDOE6",
  pretty_isnt_pretty: "https://163cn.tv/4UigMpu",
  teenage_dream: "https://163cn.tv/4UiYVWl",
};

function cleanInlineText(value) {
  return value.replace(/\*\*/g, "").trim();
}

function stripQuoteShell(value) {
  let text = value.trim();
  text = text.replace(/^>\s*/, "");
  text = text.replace(/^\*/, "").replace(/\*$/, "");
  text = text.trim();

  if (text.startsWith('"') && text.endsWith('"')) {
    text = text.slice(1, -1);
  }

  if (text.startsWith("「") && text.endsWith("」")) {
    text = text.slice(1, -1);
  }

  return text.trim();
}

function stripTrailingPeriod(value) {
  return value.endsWith(".") ? value.slice(0, -1) : value;
}

function parseFingerprint(line) {
  const payload = line.replace("**指纹**：", "").trim();
  const fingerprint = {
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d5: 0,
    d6: 0,
    d7: 0,
  };

  for (const entry of payload.split(",").map((item) => item.trim())) {
    const match = entry.match(/^D(\d)=(\d+)$/);

    if (!match) {
      continue;
    }

    const [, index, score] = match;
    fingerprint[`d${index}`] = Number(score);
  }

  return fingerprint;
}

function resolveAlbum(sections, blockIndex) {
  const section = sections
    .filter((item) => item.index <= blockIndex)
    .at(-1);

  if (!section) {
    throw new Error(`Unable to resolve album for song block at index ${blockIndex}`);
  }

  return section.album;
}

function mapSpectrumHint(position) {
  if (position < 20) {
    return "deep_sour";
  }

  if (position < 40) {
    return "between_sour_guts";
  }

  if (position < 60) {
    return "heart_of_guts";
  }

  if (position < 80) {
    return "between_guts_ysps";
  }

  return "ysps_edge";
}

function parseSongs(markdown) {
  const sectionPattern = /^#\s+(SOUR|GUTS|YSPS)\s+·/gm;
  const sections = Array.from(markdown.matchAll(sectionPattern)).map((match) => ({
    album: match[1],
    index: match.index ?? 0,
  }));

  const songPattern =
    /^##\s+(\d+)\.\s+(.+)\n([\s\S]*?)(?=^##\s+\d+\.\s+|^#\s+数据自查|\Z)/gm;

  return Array.from(markdown.matchAll(songPattern)).map((match) => {
    const [, sequence, rawTitle, body] = match;
    const titleEn = cleanInlineText(rawTitle);
    const id = titleToId[titleEn];

    if (!id) {
      throw new Error(`Missing song id mapping for title: ${titleEn}`);
    }

    const album = resolveAlbum(sections, match.index ?? 0);
    const fingerprintMatch = body.match(/\*\*指纹\*\*：(.+)/);
    const spectrumPositionMatch = body.match(/\*\*spectrumPosition\*\*：(\d+)/);
    const lyricsSectionMatch = body.match(
      /\*\*代表歌词\*\*\s*\n([\s\S]*?)\n\s*\*\*中文人格描述\*\*/,
    );
    const personalityMatch = body.match(
      /\*\*中文人格描述\*\*\s*\n([\s\S]*?)\n\s*\*\*英文哲思短语\*\*/,
    );
    const philosophyMatch = body.match(/\*\*英文哲思短语\*\*\s*\n([\s\S]*?)$/);

    if (
      !fingerprintMatch ||
      !spectrumPositionMatch ||
      !lyricsSectionMatch ||
      !personalityMatch ||
      !philosophyMatch
    ) {
      throw new Error(`Unable to parse song block: ${sequence}. ${titleEn}`);
    }

    const lyricsLines = lyricsSectionMatch[1]
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const lyricsEnLine = lyricsLines.find((line) => line.startsWith(">"));
    const lyricsZhLine = lyricsLines.find((line) => line.startsWith("> 「"));

    if (!lyricsEnLine) {
      throw new Error(`Missing English lyric for song: ${titleEn}`);
    }

    const personalityZh = cleanInlineText(
      personalityMatch[1].split("\n").map((line) => line.trim()).join(" "),
    );
    const philosophyLine = philosophyMatch[1]
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line.startsWith(">"));

    if (!philosophyLine) {
      throw new Error(`Missing philosophy line for song: ${titleEn}`);
    }

    const spectrumPosition = Number(spectrumPositionMatch[1]);

    return {
      id,
      titleEn,
      album,
      fingerprint: parseFingerprint(fingerprintMatch[0]),
      spectrumPosition,
      spectrumHint: mapSpectrumHint(spectrumPosition),
      lyricsEn: stripQuoteShell(lyricsEnLine),
      lyricsZh: lyricsZhLine ? stripQuoteShell(lyricsZhLine) : "",
      personalityZh,
      philosophyEn: stripTrailingPeriod(stripQuoteShell(philosophyLine)),
      neteaseUrl: neteaseUrlsById[id] ?? "#",
    };
  });
}

const markdown = fs.readFileSync(sourcePath, "utf8");
const songs = parseSongs(markdown);

const fileContents = `export type SpectrumStage =
  | "deep_sour"
  | "between_sour_guts"
  | "heart_of_guts"
  | "between_guts_ysps"
  | "ysps_edge";

export type Song = {
  id: string;
  titleEn: string;
  album: "SOUR" | "GUTS" | "YSPS";
  fingerprint: {
    d1: number;
    d2: number;
    d3: number;
    d4: number;
    d5: number;
    d6: number;
    d7: number;
  };
  spectrumPosition: number;
  spectrumHint?: SpectrumStage;
  lyricsEn?: string;
  lyricsZh?: string;
  personalityZh: string;
  philosophyEn: string;
  neteaseUrl: string;
};

export const songs: Song[] = ${JSON.stringify(songs, null, 2)};

export const songsById = Object.fromEntries(
  songs.map((song) => [song.id, song]),
) as Record<string, Song>;
`;

fs.writeFileSync(outputPath, fileContents, "utf8");
console.log(
  `Generated ${songs.length} songs from ${sourceRelativePath} into ${path.relative(rootDir, outputPath)}.`,
);
