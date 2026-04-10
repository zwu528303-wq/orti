export type SpectrumStage =
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
  spectrumHint?: SpectrumStage;
  lyricsEn?: string;
  lyricsZh?: string;
  personalityZh: string;
  philosophyEn: string;
  neteaseUrl: string;
};

const makeSong = (
  id: string,
  titleEn: string,
  album: Song["album"],
  fingerprint: Song["fingerprint"],
  personalityZh: string,
  philosophyEn: string,
  spectrumHint?: SpectrumStage,
): Song => ({
  id,
  titleEn,
  album,
  fingerprint,
  spectrumHint,
  lyricsEn: undefined,
  lyricsZh: undefined,
  personalityZh,
  philosophyEn,
  neteaseUrl: "#",
});

export const songs: Song[] = [
  makeSong(
    "drivers_license",
    "drivers license",
    "SOUR",
    { d1: 8, d2: 2, d3: 10, d4: 2, d5: 1, d6: 2, d7: 1 },
    "你会把回忆留到最后一层，哪怕它会反复刺痛你。",
    "Some endings keep their headlights on.",
    "deep_sour",
  ),
  makeSong(
    "deja_vu",
    "deja vu",
    "SOUR",
    { d1: 6, d2: 5, d3: 8, d4: 5, d5: 4, d6: 3, d7: 4 },
    "你对重复最敏感，因为你总能看穿感情里的旧剧本。",
    "Recognition can hurt more than surprise.",
    "between_sour_guts",
  ),
  makeSong(
    "traitor",
    "traitor",
    "SOUR",
    { d1: 6, d2: 2, d3: 8, d4: 1, d5: 1, d6: 3, d7: 2 },
    "你习惯先怀疑自己，然后才允许自己怪别人。",
    "Softness remembers every betrayal.",
    "deep_sour",
  ),
  makeSong(
    "good_4_u",
    "good 4 u",
    "SOUR",
    { d1: 9, d2: 9, d3: 5, d4: 6, d5: 8, d6: 6, d7: 8 },
    "你不是不痛，你只是更擅长把疼痛烧成锋利的火。",
    "Anger is still evidence of care.",
    "heart_of_guts",
  ),
  makeSong(
    "happier",
    "happier",
    "SOUR",
    { d1: 6, d2: 4, d3: 9, d4: 3, d5: 1, d6: 3, d7: 2 },
    "你能说祝福，但祝福里总会藏一点诚实的嫉妒。",
    "Grace does not erase the bruise.",
    "between_sour_guts",
  ),
  makeSong(
    "jealousy_jealousy",
    "jealousy, jealousy",
    "SOUR",
    { d1: 7, d2: 5, d3: 4, d4: 3, d5: 5, d6: 6, d7: 5 },
    "你很清楚那些比较没有意义，但它们还是会刺进来。",
    "Awareness does not cancel ache.",
    "heart_of_guts",
  ),
  makeSong(
    "brutal",
    "brutal",
    "SOUR",
    { d1: 9, d2: 8, d3: 3, d4: 4, d5: 9, d6: 6, d7: 6 },
    "你对世界的烦躁并不肤浅，它来自一种被压得太久的诚实。",
    "Restlessness can be a form of truth.",
    "heart_of_guts",
  ),
  makeSong(
    "favorite_crime",
    "favorite crime",
    "SOUR",
    { d1: 5, d2: 1, d3: 10, d4: 1, d5: 1, d6: 2, d7: 1 },
    "你会替关系背罪，因为那比承认真相更容易一点。",
    "Love can rehearse its own defense.",
    "deep_sour",
  ),
  makeSong(
    "hope_ur_ok",
    "hope ur ok",
    "SOUR",
    { d1: 4, d2: 1, d3: 3, d4: 6, d5: 3, d6: 7, d7: 2 },
    "你会把注意力放到那些被忽略的人身上，像一种本能。",
    "Tenderness can be radically observant.",
    "ysps_edge",
  ),
  makeSong(
    "1_step_forward_3_steps_back",
    "1 step forward, 3 steps back",
    "SOUR",
    { d1: 6, d2: 2, d3: 9, d4: 2, d5: 1, d6: 1, d7: 1 },
    "你最怕的不是结束，而是总在同一种循环里醒来。",
    "Patterns can feel louder than endings.",
    "deep_sour",
  ),
  makeSong(
    "enough_for_you",
    "enough for you",
    "SOUR",
    { d1: 5, d2: 1, d3: 9, d4: 1, d5: 1, d6: 3, d7: 2 },
    "你会下意识地把自己改小，只为了更接近一句肯定。",
    "Self-erasure never earns the right love.",
    "deep_sour",
  ),
  makeSong(
    "all_american_bitch",
    "all-american bitch",
    "GUTS",
    { d1: 8, d2: 8, d3: 4, d4: 7, d5: 10, d6: 7, d7: 7 },
    "你对乖顺这件事有敏锐的反感，因为你知道它常常只是规训。",
    "Politeness is not always peace.",
    "heart_of_guts",
  ),
  makeSong(
    "bad_idea_right",
    "bad idea right?",
    "GUTS",
    { d1: 7, d2: 6, d3: 8, d4: 6, d5: 7, d6: 8, d7: 9 },
    "你明知有些决定不高明，但还是会诚实地往前一步。",
    "Impulse can wear a knowing smile.",
    "between_guts_ysps",
  ),
  makeSong(
    "vampire",
    "vampire",
    "GUTS",
    { d1: 9, d2: 8, d3: 5, d4: 6, d5: 6, d6: 5, d7: 5 },
    "你对被消耗这件事记得很清楚，所以界限一旦立起来就很难再退。",
    "Clarity often arrives with teeth.",
    "heart_of_guts",
  ),
  makeSong(
    "lacy",
    "lacy",
    "GUTS",
    { d1: 5, d2: 2, d3: 7, d4: 4, d5: 2, d6: 5, d7: 3 },
    "你对美与嫉妒之间那条细线，有近乎残忍的感受力。",
    "Admiration and ache can share a pulse.",
    "between_guts_ysps",
  ),
  makeSong(
    "ballad_of_a_homeschooled_girl",
    "ballad of a homeschooled girl",
    "GUTS",
    { d1: 7, d2: 5, d3: 4, d4: 3, d5: 5, d6: 7, d7: 8 },
    "你擅长把尴尬讲成段子，但那不代表你真的不在乎。",
    "Comedy can be armor with a pulse.",
    "heart_of_guts",
  ),
  makeSong(
    "making_the_bed",
    "making the bed",
    "GUTS",
    { d1: 4, d2: 1, d3: 5, d4: 7, d5: 2, d6: 7, d7: 2 },
    "你已经学会承认自己也参与了故事的形成，这让你更自由，也更孤独。",
    "Acceptance can feel like a quiet room.",
    "ysps_edge",
  ),
  makeSong(
    "logical",
    "logical",
    "GUTS",
    { d1: 5, d2: 2, d3: 8, d4: 3, d5: 2, d6: 4, d7: 2 },
    "你会反复用道理复盘感情，可感情从来不只讲道理。",
    "Reason rarely closes the whole wound.",
    "between_guts_ysps",
  ),
  makeSong(
    "love_is_embarrassing",
    "love is embarrassing",
    "GUTS",
    { d1: 7, d2: 5, d3: 8, d4: 5, d5: 4, d6: 8, d7: 7 },
    "你知道自己会犯傻，但这份自觉并不会让你更少投入。",
    "Self-awareness does not prevent devotion.",
    "between_guts_ysps",
  ),
  makeSong(
    "the_grudge",
    "the grudge",
    "GUTS",
    { d1: 6, d2: 3, d3: 7, d4: 5, d5: 3, d6: 2, d7: 1 },
    "你不是忘不掉，你只是还没找到一种完全不疼的放法。",
    "Some hurts leave slowly on purpose.",
    "between_guts_ysps",
  ),
  makeSong(
    "pretty_isnt_pretty",
    "pretty isn't pretty",
    "GUTS",
    { d1: 6, d2: 2, d3: 3, d4: 2, d5: 5, d6: 7, d7: 5 },
    "你很清楚被凝视的疲惫，也清楚那不是你的错。",
    "No mirror can settle a moving standard.",
    "heart_of_guts",
  ),
  makeSong(
    "teenage_dream",
    "teenage dream",
    "GUTS",
    { d1: 5, d2: 1, d3: 5, d4: 4, d5: 2, d6: 6, d7: 3 },
    "你在向前走，但仍会回头确认那个更年轻的自己有没有被落下。",
    "Growing up still turns back sometimes.",
    "between_guts_ysps",
  ),
  makeSong(
    "get_him_back",
    "get him back!",
    "GUTS",
    { d1: 8, d2: 9, d3: 8, d4: 6, d5: 8, d6: 8, d7: 8 },
    "你最复杂的时候，爱和报复会在同一句话里同时成立。",
    "Contradiction can still sound decisive.",
    "heart_of_guts",
  ),
];

export const songsById = Object.fromEntries(
  songs.map((song) => [song.id, song]),
) as Record<string, Song>;
