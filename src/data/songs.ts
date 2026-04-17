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
  spectrumPosition: number;
  spectrumHint?: SpectrumStage;
  lyricsEn?: string;
  lyricsZh?: string;
  personalityZh: string;
  philosophyEn: string;
  neteaseUrl: string;
};

export const songs: Song[] = [
  {
    "id": "brutal",
    "titleEn": "brutal",
    "album": "SOUR",
    "fingerprint": {
      "d1": 9,
      "d2": 5,
      "d3": 2,
      "d4": 1,
      "d5": 10,
      "d6": 6,
      "d7": 4
    },
    "spectrumPosition": 12,
    "spectrumHint": "deep_sour",
    "lyricsEn": "I'm so insecure I think / that I'll die before I drink.",
    "lyricsZh": "",
    "personalityZh": "你不是在\"心碎\"，你是在反对整个世界对\"一个年轻人应该什么样\"的规定。你的愤怒是清醒的，你的焦虑是有对象的。",
    "philosophyEn": "Being young wasn't supposed to feel this brutal",
    "neteaseUrl": "https://163cn.tv/4UgmWbb"
  },
  {
    "id": "traitor",
    "titleEn": "traitor",
    "album": "SOUR",
    "fingerprint": {
      "d1": 6,
      "d2": 3,
      "d3": 8,
      "d4": 3,
      "d5": 2,
      "d6": 3,
      "d7": 2
    },
    "spectrumPosition": 8,
    "spectrumHint": "deep_sour",
    "lyricsEn": "You betrayed me / And I know that you'll never feel sorry.",
    "lyricsZh": "你背叛了我 / 而我知道你永远不会觉得抱歉。",
    "personalityZh": "你不会立刻让自己生气——你会先花很久，反复检查是不是自己哪里做错了。等你终于确认不是你的错的时候，那种清醒比愤怒更难受。",
    "philosophyEn": "The betrayal I understood too late",
    "neteaseUrl": "https://163cn.tv/4UhpJWF"
  },
  {
    "id": "drivers_license",
    "titleEn": "drivers license",
    "album": "SOUR",
    "fingerprint": {
      "d1": 7,
      "d2": 1,
      "d3": 10,
      "d4": 2,
      "d5": 1,
      "d6": 2,
      "d7": 1
    },
    "spectrumPosition": 5,
    "spectrumHint": "deep_sour",
    "lyricsEn": "'Cause you said forever, now I drive alone past your street.",
    "lyricsZh": "你说过永远，而现在我一个人开车经过你住的那条街。",
    "personalityZh": "你是那种会让自己完整地、毫不抵抗地沉到心碎的最底下的人。你不是想出来——你是需要先把这件事过完，哪怕它会用掉你很长一段时间。",
    "philosophyEn": "Some heartbreaks demand to be lived in",
    "neteaseUrl": "https://163cn.tv/4UgDCbX"
  },
  {
    "id": "1_step_forward_3_steps_back",
    "titleEn": "1 step forward, 3 steps back",
    "album": "SOUR",
    "fingerprint": {
      "d1": 5,
      "d2": 2,
      "d3": 9,
      "d4": 1,
      "d5": 1,
      "d6": 2,
      "d7": 1
    },
    "spectrumPosition": 10,
    "spectrumHint": "deep_sour",
    "lyricsEn": "Do you love me? / Do you hate me? / Maybe I'm the problem.",
    "lyricsZh": "",
    "personalityZh": "你活在一个循环里——进两步，退三步，再进两步。你知道这样不对，但你已经分不清这是爱情还是惯性了。你一直在想\"会不会是我的问题\"。",
    "philosophyEn": "I keep arriving at the same place I left",
    "neteaseUrl": "https://163cn.tv/4UiqmS6"
  },
  {
    "id": "deja_vu",
    "titleEn": "deja vu",
    "album": "SOUR",
    "fingerprint": {
      "d1": 6,
      "d2": 4,
      "d3": 7,
      "d4": 4,
      "d5": 3,
      "d6": 1,
      "d7": 3
    },
    "spectrumPosition": 15,
    "spectrumHint": "deep_sour",
    "lyricsEn": "Do you get déjà vu when she's with you?",
    "lyricsZh": "当她和你在一起时，你有过似曾相识的感觉吗？",
    "personalityZh": "你是那种会在所有事情发生的时候同时观察自己在经历什么的人。你记得每一个画面、每一个细节、每一个以前也发生过的瞬间。这让你比别人更痛。",
    "philosophyEn": "She's living my leftovers and doesn't even know",
    "neteaseUrl": "https://163cn.tv/4UidPbr"
  },
  {
    "id": "good_4_u",
    "titleEn": "good 4 u",
    "album": "SOUR",
    "fingerprint": {
      "d1": 10,
      "d2": 10,
      "d3": 4,
      "d4": 6,
      "d5": 8,
      "d6": 5,
      "d7": 5
    },
    "spectrumPosition": 25,
    "spectrumHint": "between_sour_guts",
    "lyricsEn": "Good for you, you look happy and healthy / Not me, if you ever cared to ask.",
    "lyricsZh": "真替你高兴，你看起来又快乐又健康 / 我可不是——如果你曾经在意过问一句。",
    "personalityZh": "你不相信\"祝你幸福\"这种体面话。如果对方伤害了你，你不会假装没事——你会让你的愤怒被看见，因为假装是对你自己的二次伤害。",
    "philosophyEn": "'I'm fine' was never a sentence I could fake",
    "neteaseUrl": "https://163cn.tv/4UidWGU"
  },
  {
    "id": "enough_for_you",
    "titleEn": "enough for you",
    "album": "SOUR",
    "fingerprint": {
      "d1": 6,
      "d2": 0,
      "d3": 9,
      "d4": 0,
      "d5": 0,
      "d6": 3,
      "d7": 1
    },
    "spectrumPosition": 7,
    "spectrumHint": "deep_sour",
    "lyricsEn": "I wore makeup when we dated / 'cause I thought you'd like me more.",
    "lyricsZh": "我们谈恋爱的时候我开始化妆，因为我以为这样你会更喜欢我。",
    "personalityZh": "你为某个人改变了你身上的很多东西——穿着、爱好、说话的方式、笑的方式。而那个人从来没真的看见过。等一切结束之后，你花了更久的时间才把自己找回来。",
    "philosophyEn": "I rewrote myself, and you never read a single page",
    "neteaseUrl": "https://163cn.tv/4UiRTfu"
  },
  {
    "id": "happier",
    "titleEn": "happier",
    "album": "SOUR",
    "fingerprint": {
      "d1": 7,
      "d2": 4,
      "d3": 7,
      "d4": 2,
      "d5": 3,
      "d6": 3,
      "d7": 2
    },
    "spectrumPosition": 18,
    "spectrumHint": "deep_sour",
    "lyricsEn": "I hope you're happy / just not like how you were with me.",
    "lyricsZh": "我希望你快乐 / 只是——别像你和我在一起时那样快乐。",
    "personalityZh": "你会祝对方幸福，但你心里有一句没说出来的补充：\"只是希望你没那么幸福。\"你不是坏，你只是诚实——诚实到连自己都无处可躲。",
    "philosophyEn": "I meant the blessing. I also meant the sting",
    "neteaseUrl": "https://163cn.tv/4UioAi2"
  },
  {
    "id": "jealousy_jealousy",
    "titleEn": "jealousy, jealousy",
    "album": "SOUR",
    "fingerprint": {
      "d1": 8,
      "d2": 6,
      "d3": 3,
      "d4": 1,
      "d5": 6,
      "d6": 6,
      "d7": 5
    },
    "spectrumPosition": 22,
    "spectrumHint": "between_sour_guts",
    "lyricsEn": "I know their beauty's not my lack / but it feels like that weight is on my back.",
    "lyricsZh": "我知道她们的美不是我的缺陷 / 但那种重量压在我背上的感觉是真的。",
    "personalityZh": "你诚实地、丑陋地嫉妒过别人，而且你没有粉饰它。你知道这是一个被设计出来的痛——但知道这件事并不能让它停下来，你只能让它被看见。",
    "philosophyEn": "I'm jealous, jealous, jealous — and I said it out loud",
    "neteaseUrl": "https://163cn.tv/4UiFqqg"
  },
  {
    "id": "favorite_crime",
    "titleEn": "favorite crime",
    "album": "SOUR",
    "fingerprint": {
      "d1": 7,
      "d2": 2,
      "d3": 10,
      "d4": 1,
      "d5": 2,
      "d6": 1,
      "d7": 2
    },
    "spectrumPosition": 14,
    "spectrumHint": "deep_sour",
    "lyricsEn": "I was your willing accomplice, honey.",
    "lyricsZh": "宝贝，我是你心甘情愿的同谋。",
    "personalityZh": "你知道那段关系毁了你。你也知道你曾经完全自愿地走进去，甚至帮着它毁你。最痛的不是被伤害——是你珍惜那段把你毁掉的时间，而你不打算假装不珍惜。",
    "philosophyEn": "You were my favorite crime, and I was a willing accomplice",
    "neteaseUrl": "https://163cn.tv/4UiNSeh"
  },
  {
    "id": "hope_ur_ok",
    "titleEn": "hope ur ok",
    "album": "SOUR",
    "fingerprint": {
      "d1": 5,
      "d2": 2,
      "d3": 4,
      "d4": 3,
      "d5": 5,
      "d6": 4,
      "d7": 3
    },
    "spectrumPosition": 30,
    "spectrumHint": "between_sour_guts",
    "lyricsEn": "I hope you know how proud I am you were created.",
    "lyricsZh": "我希望你知道，你被生出来这件事让我为你感到骄傲。",
    "personalityZh": "你心里一直装着一些别人——那些没人在意的人，那些你小时候认识但不知道后来怎么样了的人。你成为了那个会记得的人，尽管没有人要求你这样。",
    "philosophyEn": "I carry the ones no one remembered to carry",
    "neteaseUrl": "https://163cn.tv/4Uh3xva"
  },
  {
    "id": "all_american_bitch",
    "titleEn": "all-american bitch",
    "album": "GUTS",
    "fingerprint": {
      "d1": 8,
      "d2": 6,
      "d3": 3,
      "d4": 5,
      "d5": 9,
      "d6": 7,
      "d7": 5
    },
    "spectrumPosition": 48,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "I'm grateful all the time / I'm sexy, and I'm kind / I'm pretty when I cry.",
    "lyricsZh": "",
    "personalityZh": "你既在演那个\"什么都做得到、什么都不抱怨\"的好女孩，又在嘲讽这场表演本身。你最清醒的地方是：你知道你在演，而且你不打算为此道歉。",
    "philosophyEn": "I'm the perfect all-American bitch — and I know what I just said",
    "neteaseUrl": "https://163cn.tv/4UiJTvz"
  },
  {
    "id": "bad_idea_right",
    "titleEn": "bad idea right?",
    "album": "GUTS",
    "fingerprint": {
      "d1": 9,
      "d2": 2,
      "d3": 9,
      "d4": 4,
      "d5": 7,
      "d6": 7,
      "d7": 6
    },
    "spectrumPosition": 52,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "Seeing you tonight / it's a bad idea, right?",
    "lyricsZh": "今晚去见你 / 这是个坏主意，对吧？",
    "personalityZh": "你有一种奇怪的能力——明明知道某件事是坏主意，但还是会去做，而且会在做的同时对自己说\"我知道这是坏主意\"。你不是在被冲动控制——你是自愿把冲动放出去。",
    "philosophyEn": "I knew better. I went anyway. That's the whole story",
    "neteaseUrl": "https://163cn.tv/4Uh5Nu7"
  },
  {
    "id": "vampire",
    "titleEn": "vampire",
    "album": "GUTS",
    "fingerprint": {
      "d1": 9,
      "d2": 9,
      "d3": 5,
      "d4": 7,
      "d5": 7,
      "d6": 4,
      "d7": 4
    },
    "spectrumPosition": 55,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "Bloodsucker, fame-fucker / bleedin' me dry like a goddamn vampire.",
    "lyricsZh": "",
    "personalityZh": "你不是在生气——你是看清楚了。你曾经以为那是爱，后来你发现对方只是在用你。现在你不想再跟这件事纠缠，你只想把它命名出来：这不是我的错。",
    "philosophyEn": "You drained me. I'm naming it now",
    "neteaseUrl": "https://163cn.tv/4UiN2MF"
  },
  {
    "id": "lacy",
    "titleEn": "lacy",
    "album": "GUTS",
    "fingerprint": {
      "d1": 6,
      "d2": 2,
      "d3": 4,
      "d4": 1,
      "d5": 2,
      "d6": 5,
      "d7": 2
    },
    "spectrumPosition": 42,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "Lacy, oh Lacy / skin like puff pastry.",
    "lyricsZh": "",
    "personalityZh": "你心里有一种近乎温柔的嫉妒——你嫉妒一个女孩，但你嫉妒的方式不是恨她，是对她产生一种你自己都说不清楚的痴迷。这种情绪羞耻但真实，而且比恨更复杂。",
    "philosophyEn": "I'm jealous of her in a way that looks like love",
    "neteaseUrl": "https://163cn.tv/4UiUqEA"
  },
  {
    "id": "ballad_of_a_homeschooled_girl",
    "titleEn": "ballad of a homeschooled girl",
    "album": "GUTS",
    "fingerprint": {
      "d1": 8,
      "d2": 3,
      "d3": 3,
      "d4": 3,
      "d5": 6,
      "d6": 6,
      "d7": 7
    },
    "spectrumPosition": 46,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "Every time I step outside / it's social suicide.",
    "lyricsZh": "每次我一走出门 / 都是一场社交性的自杀。",
    "personalityZh": "你在人群里永远会说错话、做错事、然后在回家的路上把自己骂一整遍。你把这些尴尬变成段子讲给朋友听，一边讲一边笑，但心里知道每一个都是真的。",
    "philosophyEn": "I turn my shame into a punchline so I can still tell it",
    "neteaseUrl": "https://163cn.tv/4UiDz7P"
  },
  {
    "id": "making_the_bed",
    "titleEn": "making the bed",
    "album": "GUTS",
    "fingerprint": {
      "d1": 5,
      "d2": 2,
      "d3": 4,
      "d4": 2,
      "d5": 4,
      "d6": 3,
      "d7": 2
    },
    "spectrumPosition": 58,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "I'm the one making the bed I lay in.",
    "lyricsZh": "我现在躺的这张床，是我自己铺的。",
    "personalityZh": "你现在的痛苦是你自己选出来的——你知道这件事，你也接受这件事，但接受并不能让你停下来。你已经不再问\"为什么是我\"，你只是继续铺床、继续躺下去。",
    "philosophyEn": "I made this bed. I'm still lying in it. Both are true",
    "neteaseUrl": "https://163cn.tv/4UiL214"
  },
  {
    "id": "logical",
    "titleEn": "logical",
    "album": "GUTS",
    "fingerprint": {
      "d1": 7,
      "d2": 3,
      "d3": 8,
      "d4": 2,
      "d5": 4,
      "d6": 4,
      "d7": 2
    },
    "spectrumPosition": 50,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "'Cause love is never logical / and you're a master of deceit.",
    "lyricsZh": "因为爱从来就不讲逻辑 / 而你是个欺骗的高手。",
    "personalityZh": "你明明知道对方说的话不成立，但你还是信了。现在你在回头看——不是为了责怪自己，是因为你想搞清楚：那时候到底是我疯了，还是他们让我疯的？",
    "philosophyEn": "You made me question if two plus two was four",
    "neteaseUrl": "https://163cn.tv/4UjfwJ1"
  },
  {
    "id": "get_him_back",
    "titleEn": "get him back!",
    "album": "GUTS",
    "fingerprint": {
      "d1": 9,
      "d2": 7,
      "d3": 9,
      "d4": 6,
      "d5": 8,
      "d6": 5,
      "d7": 6
    },
    "spectrumPosition": 53,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "I want to key his car / I want to make him lunch.",
    "lyricsZh": "",
    "personalityZh": "你心里同时住着两个声音：一个想让那个人付出代价，另一个想把他重新拉回来。你不会选一边——你会把两个都承认，因为爱和恨从来都不是反义词。",
    "philosophyEn": "I want him back. I want him to pay. Both at once",
    "neteaseUrl": "https://163cn.tv/4UiztpX"
  },
  {
    "id": "love_is_embarrassing",
    "titleEn": "love is embarrassing",
    "album": "GUTS",
    "fingerprint": {
      "d1": 8,
      "d2": 2,
      "d3": 9,
      "d4": 3,
      "d5": 5,
      "d6": 5,
      "d7": 5
    },
    "spectrumPosition": 47,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "God, love's embarrassing as hell.",
    "lyricsZh": "天啊，爱真的是一件蠢到让人脸红的事。",
    "personalityZh": "你做过很多让自己事后想起来就想把头埋进枕头里的事。你不打算假装你没做过——你会笑着讲出来，因为承认自己曾经那么用力地喜欢一个不值得的人，本身就需要勇气。",
    "philosophyEn": "I made a fool of myself. I'd do it again",
    "neteaseUrl": "https://163cn.tv/4UirbUZ"
  },
  {
    "id": "the_grudge",
    "titleEn": "the grudge",
    "album": "GUTS",
    "fingerprint": {
      "d1": 5,
      "d2": 4,
      "d3": 6,
      "d4": 3,
      "d5": 3,
      "d6": 3,
      "d7": 2
    },
    "spectrumPosition": 44,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "I try to be tough / I try to stay mad / but you would know that I'm not.",
    "lyricsZh": "我努力装得很硬 / 努力保持愤怒 / 但你知道我其实不是。",
    "personalityZh": "你不是记仇的人——但你有一些事情就是过不去。不是因为你想不开，是因为那件事真的不对。你不会原谅，你也不会假装你原谅了，你只是带着它继续过日子。",
    "philosophyEn": "I'm not holding a grudge — I'm just not lying about it",
    "neteaseUrl": "https://163cn.tv/4UiDOE6"
  },
  {
    "id": "pretty_isnt_pretty",
    "titleEn": "pretty isn't pretty",
    "album": "GUTS",
    "fingerprint": {
      "d1": 6,
      "d2": 3,
      "d3": 3,
      "d4": 2,
      "d5": 6,
      "d6": 6,
      "d7": 3
    },
    "spectrumPosition": 56,
    "spectrumHint": "heart_of_guts",
    "lyricsEn": "Pretty isn't pretty enough anyway.",
    "lyricsZh": "'好看'从来就不够好看。",
    "personalityZh": "你知道那套审美标准是有毒的、是被设计出来让女人永远达不到的——但知道这件事并不能让你每天都相信自己\"够了\"。你清醒地活在一个你明知道不对的系统里。",
    "philosophyEn": "I see the cage. I'm still inside it",
    "neteaseUrl": "https://163cn.tv/4UigMpu"
  },
  {
    "id": "teenage_dream",
    "titleEn": "teenage dream",
    "album": "GUTS",
    "fingerprint": {
      "d1": 7,
      "d2": 2,
      "d3": 4,
      "d4": 2,
      "d5": 4,
      "d6": 8,
      "d7": 3
    },
    "spectrumPosition": 60,
    "spectrumHint": "between_guts_ysps",
    "lyricsEn": "They all say that it gets better / it gets better the more you grow / yeah they all say that it gets better / but what if I don't?",
    "lyricsZh": "",
    "personalityZh": "你害怕你最好的时光已经过去了。所有人都告诉你\"会越来越好的\"，但你心里有一个声音在问：\"如果我不会呢？如果我是那种不会变得更好的人呢？\"这种害怕，也是一种爱——你太爱那个相信一切的自己了。",
    "philosophyEn": "What if this was the best version of me?",
    "neteaseUrl": "https://163cn.tv/4UiYVWl"
  },
  {
    "id": "drop_dead",
    "titleEn": "drop dead",
    "album": "YSPS",
    "fingerprint": {
      "d1": 7,
      "d2": 1,
      "d3": 10,
      "d4": 6,
      "d5": 2,
      "d6": 8,
      "d7": 5
    },
    "spectrumPosition": 79,
    "spectrumHint": "between_guts_ysps",
    "lyricsEn": "Kiss me and I might drop dead.",
    "lyricsZh": "",
    "personalityZh": "你已经知道爱会让人失控，但还是愿意往前走。你不是没见过代价，只是这一次，你不想再因为清醒就错过心动。",
    "philosophyEn": "I knew it could undo me and wanted it anyway",
    "neteaseUrl": "#"
  }
];

export const songsById = Object.fromEntries(
  songs.map((song) => [song.id, song]),
) as Record<string, Song>;
