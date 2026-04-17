export type ScoreKey = "d1" | "d2" | "d3" | "d4" | "d5" | "d6" | "d7";

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

export const questions: Question[] = [
  {
    "id": 1,
    "category": "朋友圈里的你",
    "questionZh": "在你最亲密的朋友圈里，你通常是哪种角色？",
    "questionEn": "Among your closest friends, you're usually the —",
    "options": [
      {
        "id": "1a",
        "textZh": "那个所有人都在笑的时候，会回头看一眼最安静的那个人的",
        "textEn": "The one who, while everyone's laughing, glances back at the quietest person in the room",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 0,
          "d7": 1
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 0,
          "ysps": 1
        },
        "anchorBoost": "hope_ur_ok"
      },
      {
        "id": "1b",
        "textZh": "把自己当段子讲的那个，我的烂事是大家最爱听的桥段",
        "textEn": "The one who turns herself into a bit. My disasters are the part everyone tunes in for",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 1,
          "d6": 0,
          "d7": 3
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "ballad_of_a_homeschooled_girl"
      },
      {
        "id": "1c",
        "textZh": "大部分时候在听的那个。但你们说过的话我都记得",
        "textEn": "Mostly listening. But everything you've said, I've kept",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        }
      },
      {
        "id": "1d",
        "textZh": "那个会突然说出一句让全场停顿三秒的真话",
        "textEn": "The one who suddenly says something true and the whole room pauses for three seconds",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 3,
          "d6": 0,
          "d7": 2
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      }
    ]
  },
  {
    "id": 2,
    "category": "你的私号",
    "questionZh": "如果你有一个只有你自己看的账号（finsta / 私号 / 抽屉里的本子），你最常往里面放什么？",
    "questionEn": "If you have an account only you can see — a finsta, a private blog, a notebook in a drawer — what do you put in it most?",
    "options": [
      {
        "id": "2a",
        "textZh": "那些我永远不敢发到主号上的、有点丢人的真心话",
        "textEn": "The mortifying honest things I'd never let touch my main",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "love_is_embarrassing"
      },
      {
        "id": "2b",
        "textZh": "哭花了的那种自拍。我想留下证据，证明我是真的难过过的",
        "textEn": "The kind of selfie where my face is wet. I want proof that I was actually sad",
        "scores": {
          "d1": 3,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        }
      },
      {
        "id": "2c",
        "textZh": "一些聊天记录的截图。我怕有一天我会忘记我们说过这些话",
        "textEn": "Screenshots of certain conversations. I'm scared one day I'll forget we said any of it",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 2,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 0,
          "ysps": 1
        },
        "anchorBoost": "favorite_crime"
      },
      {
        "id": "2d",
        "textZh": "我没有这种账号。我连只给自己看的那一面，都会先编辑过才允许它存在",
        "textEn": "I don't have one. Even the version of me kept just for me has to be edited before I let it exist",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 0
        }
      }
    ]
  },
  {
    "id": 3,
    "category": "毕业舞会的洗手间",
    "questionZh": "毕业舞会的洗手间。镜子前面挤满了女孩。其中有一个女孩，你从来没和她说过话。这一刻你心里真实的感受是？",
    "questionEn": "Prom night, the bathroom mirror, crowded with girls. One of them you've never spoken to. What's actually going through your head?",
    "options": [
      {
        "id": "3a",
        "textZh": "她笑起来的样子让我心里咯噔一下，我装作在补口红，其实在偷看她",
        "textEn": "Something about her laugh makes my chest tight. I pretend to fix my lipstick. I'm watching her",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 1,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 1
        },
        "anchorBoost": "brutal"
      },
      {
        "id": "3b",
        "textZh": "我注意到自己想 mute 她。然后我注意到自己点了关注",
        "textEn": "I catch myself wanting to mute her. Then I catch myself hitting follow",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 2,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "lacy"
      },
      {
        "id": "3c",
        "textZh": "一种酸酸的、说不清是什么的情绪。但我心里清楚它叫什么",
        "textEn": "A sour something I can't quite name. But somewhere in me I know what it's called",
        "scores": {
          "d1": 2,
          "d2": 1,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "jealousy_jealousy"
      },
      {
        "id": "3d",
        "textZh": "我心里想：我以前也笑得那么轻过。是从什么时候开始不是了的？",
        "textEn": "I think: I used to laugh that lightly too. When did I stop?",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 1,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 0,
          "ysps": 1
        }
      }
    ]
  },
  {
    "id": 4,
    "category": "一首不能放给别人听的歌",
    "questionZh": "你手机里有一首歌，你从来不会在别人面前放——因为它会暴露你太多。它在讲什么？",
    "questionEn": "There's a song on your phone you'd never play around other people — it would give too much away. What is it about?",
    "options": [
      {
        "id": "4a",
        "textZh": "一种你以为只有你一个人有过的羞耻",
        "textEn": "A kind of shame you thought only you had ever felt",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 1,
          "ysps": 0
        },
        "anchorBoost": "lacy"
      },
      {
        "id": "4b",
        "textZh": "一个你从来没承认过你想念的人",
        "textEn": "A person you've never admitted you miss",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 3,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        },
        "anchorBoost": "drivers_license"
      },
      {
        "id": "4c",
        "textZh": "一种很大很大的、好像不该属于你这个年纪的渴望",
        "textEn": "A longing so big it feels like it shouldn't belong to someone your age",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 1,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        },
        "anchorBoost": "teenage_dream"
      },
      {
        "id": "4d",
        "textZh": "一种很小很小的、但你不愿意被任何人称作\"小事\"的感觉",
        "textEn": "A feeling so small — and you refuse to let anyone call it small",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      }
    ]
  },
  {
    "id": 5,
    "category": "你忘了摘下来的那样东西",
    "questionZh": "你在镜子前换衣服，突然看见自己脖子上还戴着 ta 送你的那条项链。已经过去很久了。这一秒你做了什么？",
    "questionEn": "Changing in front of the mirror, you suddenly notice you're still wearing the necklace they gave you. It's been a long time. What do you do in that second?",
    "options": [
      {
        "id": "5a",
        "textZh": "我愣了一下，然后假装没看见，继续穿衣服",
        "textEn": "I freeze for a second. Then I pretend I didn't see it and keep getting dressed",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 2,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        },
        "anchorBoost": "traitor"
      },
      {
        "id": "5b",
        "textZh": "我立刻摘下来，扔进抽屉最深的角落，然后用力关上",
        "textEn": "I take it off immediately. Throw it into the back of the drawer. Slam it shut",
        "scores": {
          "d1": 2,
          "d2": 2,
          "d3": 0,
          "d4": 3,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "good_4_u"
      },
      {
        "id": "5c",
        "textZh": "我摸了摸它，想起 ta 给我戴上的那个下午。然后我又一次做了那条已经发了很多遍的消息",
        "textEn": "I touch it. I remember the afternoon they put it on me. Then I draft that same message I've already sent way too many times",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 3,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 1,
          "ysps": 0
        },
        "anchorBoost": "enough_for_you"
      },
      {
        "id": "5d",
        "textZh": "我看了它很久。然后想：原来我已经可以平静地看着它了",
        "textEn": "I look at it for a long time. Then I think: oh. I can look at this calmly now",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 0,
          "d6": 0,
          "d7": 1
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 1
        }
      }
    ]
  },
  {
    "id": 6,
    "category": "心碎反应",
    "questionZh": "凌晨三点，你突然想起了那个人。你做的第一件事是？",
    "questionEn": "It's 3 AM and they cross your mind. The first thing you do is —",
    "options": [
      {
        "id": "6a",
        "textZh": "把他们的旧消息从头翻到尾，每一条都重新读了一遍",
        "textEn": "Reread every old message, beginning to end",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 3,
          "d4": 0,
          "d5": 0,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        },
        "anchorBoost": "drivers_license"
      },
      {
        "id": "6b",
        "textZh": "打开备忘录，把现在心里所有的话全部敲进去",
        "textEn": "Open my notes app and type out everything that's in there",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 2,
          "d4": 1,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 1,
          "ysps": 0
        },
        "anchorBoost": "1_step_forward_3_steps_back"
      },
      {
        "id": "6c",
        "textZh": "点开他们的 ins 翻一眼，然后立刻恨自己点开了",
        "textEn": "Open their Instagram for one second, then hate myself for it",
        "scores": {
          "d1": 1,
          "d2": 1,
          "d3": 2,
          "d4": 1,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "deja_vu"
      },
      {
        "id": "6d",
        "textZh": "什么也不做，盯着天花板，让那种感觉自己来、自己走",
        "textEn": "Do nothing. Stare at the ceiling. Let it come and let it go",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 1,
          "d4": 0,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        },
        "anchorBoost": "making_the_bed"
      }
    ]
  },
  {
    "id": 7,
    "category": "最近一次哭",
    "questionZh": "你最近一次哭，最准确的描述是？",
    "questionEn": "The most accurate description of the last time you cried —",
    "options": [
      {
        "id": "7a",
        "textZh": "在没人看见的地方，安静地哭，像有什么东西在慢慢漏出来",
        "textEn": "Somewhere no one could see. Quiet. Like something was leaking out of me, slowly",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 1,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        },
        "anchorBoost": "traitor"
      },
      {
        "id": "7b",
        "textZh": "在一个我完全没准备好的瞬间——便利店、地铁里、某首歌唱到副歌",
        "textEn": "In a moment I wasn't ready for — a convenience store, the subway, the chorus of some song",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      },
      {
        "id": "7c",
        "textZh": "我已经记不起上一次哭是什么时候了。这件事让我有一点害怕",
        "textEn": "I genuinely can't remember the last time I cried. And that scares me a little",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 1
        },
        "anchorBoost": "logical"
      },
      {
        "id": "7d",
        "textZh": "我此刻还在哭。我已经哭了挺久了",
        "textEn": "I'm still crying right now. I've been crying for a while",
        "scores": {
          "d1": 3,
          "d2": 0,
          "d3": 2,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        },
        "anchorBoost": "enough_for_you"
      }
    ]
  },
  {
    "id": 8,
    "category": "派对上的你",
    "questionZh": "你在一个挤满人的派对上。最有可能的状态是？",
    "questionEn": "You're at a crowded party. The most likely version of you is —",
    "options": [
      {
        "id": "8a",
        "textZh": "跟所有人都聊得火热。然后回家路上感到一种很深的、说不清的空",
        "textEn": "Lit up, talking to everyone. And then on the way home, a deep nameless empty",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 0,
          "d7": 3
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "ballad_of_a_homeschooled_girl"
      },
      {
        "id": "8b",
        "textZh": "站在角落看所有人，已经在脑子里写一篇关于这个房间的文章",
        "textEn": "Standing in a corner watching everyone. Already drafting an essay about this room in my head",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 0,
          "ysps": 1
        },
        "anchorBoost": "deja_vu"
      },
      {
        "id": "8c",
        "textZh": "喝多了，跟一个陌生人讲我妈的事",
        "textEn": "One drink past my limit, telling a stranger about my mom",
        "scores": {
          "d1": 3,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 0,
          "d7": 2
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "bad_idea_right"
      },
      {
        "id": "8d",
        "textZh": "我从一开始就不会去这种派对",
        "textEn": "I wouldn't have come to this kind of party in the first place",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 1,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 1
        }
      }
    ]
  },
  {
    "id": 9,
    "category": "别人夸你\"乖\"",
    "questionZh": "有人夸你\"你真的很懂事\"或者\"你很乖\"。你心里的真实感受是？",
    "questionEn": "Someone calls you \"so put-together\" or \"such a good girl.\" What you actually feel inside is —",
    "options": [
      {
        "id": "9a",
        "textZh": "心里偷偷高兴。变成那样的我，是我自己一点点做出来的",
        "textEn": "A small private pride. The version of me you're complimenting — I built her, piece by piece",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 1
        }
      },
      {
        "id": "9b",
        "textZh": "一种说不出来的不舒服，像被人小心地放进了一个漂亮的盒子",
        "textEn": "A discomfort I can't explain. Like being carefully placed inside a beautiful box",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 3,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      },
      {
        "id": "9c",
        "textZh": "我心里想笑。如果他们看见过真实的我，他们就不会这么说了",
        "textEn": "I want to laugh. If they had ever seen the real me, they wouldn't be saying this",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 3,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      },
      {
        "id": "9d",
        "textZh": "谢谢。不过老实说，做这样的人我已经累了",
        "textEn": "Thanks. Honestly though — being her is starting to wear me out",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        },
        "anchorBoost": "pretty_isnt_pretty"
      }
    ]
  },
  {
    "id": 10,
    "category": "怎么处理愤怒",
    "questionZh": "当你真正生气的时候，你是哪种？",
    "questionEn": "When you're truly angry, you're the kind who —",
    "options": [
      {
        "id": "10a",
        "textZh": "当面把所有话说清楚，哪怕场面会变得很难看",
        "textEn": "Says all of it to their face, even if the room turns ugly",
        "scores": {
          "d1": 3,
          "d2": 3,
          "d3": 0,
          "d4": 0,
          "d5": 3,
          "d6": 0,
          "d7": 1
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "good_4_u"
      },
      {
        "id": "10b",
        "textZh": "当下表现得没事。回到家以后写一封很长的信，永远不寄出去",
        "textEn": "Acts unfazed in the moment. Goes home and writes a very long letter that never gets sent",
        "scores": {
          "d1": 1,
          "d2": 1,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 0,
          "ysps": 1
        },
        "anchorBoost": "favorite_crime"
      },
      {
        "id": "10c",
        "textZh": "直接消失。让我的不出现成为我对这件事的回答",
        "textEn": "Just vanish. Let my absence be the entire answer",
        "scores": {
          "d1": 2,
          "d2": 2,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 1
        },
        "anchorBoost": "vampire"
      },
      {
        "id": "10d",
        "textZh": "把这件事悄悄记在心里一辈子，但表面上对谁都没事",
        "textEn": "Keep it, quietly, for the rest of my life. While looking completely fine to everyone",
        "scores": {
          "d1": 1,
          "d2": 2,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "the_grudge"
      }
    ]
  },
  {
    "id": 11,
    "category": "又想报复又想要回来",
    "questionZh": "有一个人，你想让 ta 付出代价。但同时，你心里有另一个声音说\"如果 ta 现在出现，我可能还是会答应\"。这种感觉熟悉吗？",
    "questionEn": "There's someone you want to make pay. And at the same time, another voice in you says \"if they showed up right now, I might say yes.\" Sound familiar?",
    "options": [
      {
        "id": "11a",
        "textZh": "太熟了。爱和恨从来就不是反义词",
        "textEn": "Too familiar. Love and hate were never opposites to begin with",
        "scores": {
          "d1": 3,
          "d2": 2,
          "d3": 3,
          "d4": 0,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 3,
          "ysps": 0
        },
        "anchorBoost": "get_him_back"
      },
      {
        "id": "11b",
        "textZh": "熟悉。但我已经学会了不让这两个声音同时出现在我脑子里",
        "textEn": "Familiar. But I've learned how not to let those two voices speak at the same time",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 0,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        }
      },
      {
        "id": "11c",
        "textZh": "我现在只想让 ta 付出代价。那个\"答应\"的声音，我已经亲手掐死了",
        "textEn": "I only want them to pay. That other voice — I strangled it with my own hands",
        "scores": {
          "d1": 2,
          "d2": 3,
          "d3": 0,
          "d4": 2,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "vampire"
      },
      {
        "id": "11d",
        "textZh": "不熟悉。让谁付出代价不是我处理事情的方式——我会直接从 ta 的世界里消失",
        "textEn": "Not familiar. \"Making someone pay\" isn't how I handle things — I just disappear from their world",
        "scores": {
          "d1": 1,
          "d2": 1,
          "d3": 0,
          "d4": 2,
          "d5": 1,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 1
        },
        "anchorBoost": "jealousy_jealousy"
      }
    ]
  },
  {
    "id": 12,
    "category": "对自己生气",
    "questionZh": "你最近一次对自己很生气，是因为？",
    "questionEn": "The last time you were really angry at yourself, it was because —",
    "options": [
      {
        "id": "12a",
        "textZh": "我又一次回到了一段我已经宣称过我离开了的关系里",
        "textEn": "I went back, again, to a relationship I'd already announced I had left",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 3,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        },
        "anchorBoost": "1_step_forward_3_steps_back"
      },
      {
        "id": "12b",
        "textZh": "我又一次为了让别人舒服，把自己的体积调小了",
        "textEn": "I shrunk my own volume, again, to make someone else more comfortable",
        "scores": {
          "d1": 1,
          "d2": 1,
          "d3": 0,
          "d4": 0,
          "d5": 1,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      },
      {
        "id": "12c",
        "textZh": "我没办法\"立刻好起来\"——而所有人已经在告诉我，\"你早就该走出来了\"",
        "textEn": "I can't just \"be okay yet\" — and everyone has started telling me I should be over this by now",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 1,
          "ysps": 0
        },
        "anchorBoost": "brutal"
      },
      {
        "id": "12d",
        "textZh": "我居然还在乎那件事 / 那个人。我以为我早就翻篇了",
        "textEn": "I still care about that thing / that person. I thought I had moved on a long time ago",
        "scores": {
          "d1": 1,
          "d2": 1,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "the_grudge"
      }
    ]
  },
  {
    "id": 13,
    "category": "最讨厌的赞美",
    "questionZh": "下面这些\"夸奖\"里，哪一句最让你心里咯噔一下？",
    "questionEn": "Of the \"compliments\" below, which one makes your heart sink the most?",
    "options": [
      {
        "id": "13a",
        "textZh": "\"你看起来一点都不像 xx 岁\"",
        "textEn": "\"You don't look your age at all\"",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 1
        }
      },
      {
        "id": "13b",
        "textZh": "\"你哭起来真好看\"",
        "textEn": "\"You look so pretty when you cry\"",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 3,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 3,
          "ysps": 0
        },
        "anchorBoost": "all_american_bitch"
      },
      {
        "id": "13c",
        "textZh": "\"你跟其他女生不一样\"",
        "textEn": "\"You're not like other girls\"",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 3,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      },
      {
        "id": "13d",
        "textZh": "\"你这么瘦还吃这个？\"",
        "textEn": "\"You eat that and you're still that thin?\"",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 1
        },
        "anchorBoost": "pretty_isnt_pretty"
      }
    ]
  },
  {
    "id": 14,
    "category": "你和镜子的关系",
    "questionZh": "你和镜子里的自己，是什么样的关系？",
    "questionEn": "The relationship between you and the person in the mirror — what is it?",
    "options": [
      {
        "id": "14a",
        "textZh": "大部分日子我们都过得去。偶尔有几天，我们谁也不想看见谁",
        "textEn": "Most days we manage. Some days neither of us wants the other in the room",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        }
      },
      {
        "id": "14b",
        "textZh": "我知道她已经\"足够好了\"。但知道这件事并不能让我每一天都相信",
        "textEn": "I know she is \"enough.\" Knowing it doesn't make me believe it every day",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 1,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "pretty_isnt_pretty"
      },
      {
        "id": "14c",
        "textZh": "我经常在她身上发现新的问题，每发现一个我就觉得自己很有觉知",
        "textEn": "I keep discovering new problems with her. Each one makes me feel oddly perceptive",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 1,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      },
      {
        "id": "14d",
        "textZh": "大部分时候我都不停下来看她。我害怕那个停下来的一刻",
        "textEn": "Most days I don't stop to actually look at her. I'm scared of the moment I'd stop",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 0,
          "ysps": 1
        }
      }
    ]
  },
  {
    "id": 15,
    "category": "当有人说你\"太多了\"",
    "questionZh": "如果有人对你说\"你这个人有点太多了\"——意思可能是太情绪化、太复杂、太敏感、太用力——你的反应是？",
    "questionEn": "If someone says to you \"you're a lot\" — meaning too emotional, too complicated, too sensitive, too intense — your reaction is —",
    "options": [
      {
        "id": "15a",
        "textZh": "立刻把自己收回去。这种话我已经听过太多次了",
        "textEn": "Immediately fold myself smaller. I've heard this way too many times",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        }
      },
      {
        "id": "15b",
        "textZh": "心里气得要命，但表面上还是笑了一下",
        "textEn": "Furious inside. Smiled a little on the outside",
        "scores": {
          "d1": 2,
          "d2": 1,
          "d3": 0,
          "d4": 0,
          "d5": 1,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "logical"
      },
      {
        "id": "15c",
        "textZh": "\"对，我就是。\"——这件事我已经决定不再为它道歉了",
        "textEn": "\"Yeah, I am.\" — I've decided I'm done apologizing for this one",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 3,
          "d5": 3,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "all_american_bitch"
      },
      {
        "id": "15d",
        "textZh": "我会问 ta：那你愿意只接受我的一部分吗？",
        "textEn": "I'd ask them: so you'd like to accept only some of me?",
        "scores": {
          "d1": 3,
          "d2": 2,
          "d3": 0,
          "d4": 2,
          "d5": 3,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 3,
          "ysps": 0
        }
      }
    ]
  },
  {
    "id": 16,
    "category": "想到 17 岁的自己",
    "questionZh": "如果你现在能给 17 岁的自己说一句话，你会说什么？",
    "questionEn": "If you could say one thing to your 17-year-old self right now, it would be —",
    "options": [
      {
        "id": "16a",
        "textZh": "那些把你哭得稀里哗啦的事，最后真的都过去了",
        "textEn": "All the things that wrecked you back then — they really did pass, in the end",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 3,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        },
        "anchorBoost": "happier"
      },
      {
        "id": "16b",
        "textZh": "别再那么用力地让所有人都喜欢你",
        "textEn": "Stop trying so hard to make every single person like you",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 2,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      },
      {
        "id": "16c",
        "textZh": "我想念你那种相信。那种还没有被磨损过的相信",
        "textEn": "I miss the way you used to believe. The kind of believing that hadn't been worn down yet",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 1,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        },
        "anchorBoost": "teenage_dream"
      },
      {
        "id": "16d",
        "textZh": "你不需要再变得更好。你这样已经够了",
        "textEn": "You don't need to keep becoming better. You are already enough",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        }
      }
    ]
  },
  {
    "id": 17,
    "category": "一个你希望的结局",
    "questionZh": "回想那件你心里最重要的事——可能是一段关系，可能是一段友情，可能是一段你和自己的故事。你现在希望它拥有什么样的结局？",
    "questionEn": "Think back to the thing that mattered most — maybe a relationship, maybe a friendship, maybe a story between you and yourself. What ending do you hope it has?",
    "options": [
      {
        "id": "17a",
        "textZh": "我希望另一方过得好。哪怕那个\"好\"里面没有我",
        "textEn": "I hope the other one ends up well. Even if \"well\" means a version without me in it",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 0,
          "d6": 3,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 3
        }
      },
      {
        "id": "17b",
        "textZh": "我希望 ta 过得好，但常常想起我，想起来的时候会后悔",
        "textEn": "I hope they end up well, but I still want them to think of me and wish they'd done things differently",
        "scores": {
          "d1": 2,
          "d2": 2,
          "d3": 2,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        },
        "anchorBoost": "happier"
      },
      {
        "id": "17c",
        "textZh": "我希望他们至少也痛过一点点。哪怕只有一点点",
        "textEn": "I hope they paid for it, at least a little. Even just a little",
        "scores": {
          "d1": 2,
          "d2": 2,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      },
      {
        "id": "17d",
        "textZh": "我已经不需要它有结局了。它自己会慢慢变成记忆",
        "textEn": "I don't need it to have an ending anymore. It'll turn into memory on its own",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 0,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 3
        }
      }
    ]
  },
  {
    "id": 18,
    "category": "一个假设",
    "questionZh": "假设你最近开始喜欢上了一个人。还没到任何确定的地步，只是心里多了一个名字。这种时候你最像哪一种？",
    "questionEn": "Suppose you've started liking someone recently. Nothing is settled. There's just a new name in your head. Which one sounds most like you?",
    "options": [
      {
        "id": "18a",
        "textZh": "我会装作没事，但其实每隔半小时就在想 ta 一次",
        "textEn": "I'd act normal. But somewhere in me, every half hour, the name comes back",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 2,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 2
        }
      },
      {
        "id": "18b",
        "textZh": "我会偷偷做一些我自己也觉得有点傻的事——比如查一下我们的星座",
        "textEn": "I'd do something I'd find slightly stupid if I caught a friend doing it. Like checking our star signs",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 2,
          "d4": 1,
          "d5": 0,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        }
      },
      {
        "id": "18c",
        "textZh": "我脑子里已经有一些画面了。我们站在某个地方，做着一件很小的事",
        "textEn": "There are already pictures in my head. The two of us standing somewhere, doing some small thing",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 3,
          "d4": 0,
          "d5": 0,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        }
      },
      {
        "id": "18d",
        "textZh": "我会先在心里劝自己别想太多。然后劝不动",
        "textEn": "I'd try to talk myself out of overthinking it. It wouldn't work",
        "scores": {
          "d1": 1,
          "d2": 1,
          "d3": 0,
          "d4": 1,
          "d5": 1,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 1
        }
      }
    ]
  },
  {
    "id": 19,
    "category": "一种姿态",
    "questionZh": "你已经走过一些事了。你大概知道爱会带你去哪里，也大概知道它会留下什么。在这件事面前，你现在的姿态最像哪一种？",
    "questionEn": "You've been through some things. You roughly know where love takes you, and roughly what it leaves behind. Standing in front of it now, which posture is most yours?",
    "options": [
      {
        "id": "19a",
        "textZh": "我学会了先看清楚再走近一点",
        "textEn": "I've learned to see clearly before stepping closer",
        "scores": {
          "d1": 0,
          "d2": 1,
          "d3": 0,
          "d4": 2,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        }
      },
      {
        "id": "19b",
        "textZh": "我看起来在保持距离，但只要 ta 转过来看我，我就会忘记我学过的所有事",
        "textEn": "From the outside it looks like distance. But if they turned and looked at me, I'd forget everything I'd learned",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 3,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 1,
          "ysps": 1
        }
      },
      {
        "id": "19c",
        "textZh": "我现在站得离它很近。我没有打算后退",
        "textEn": "I'm standing close to it now. I don't plan to step back",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 3,
          "d4": 2,
          "d5": 1,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 3
        },
        "anchorBoost": "drop_dead"
      },
      {
        "id": "19d",
        "textZh": "我和它之间还隔着一些东西。我说不清是什么",
        "textEn": "There's still something between me and it. I can't say what",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 1
        }
      }
    ]
  },
  {
    "id": 20,
    "category": "一件你最近开始原谅自己的小事",
    "questionZh": "最近，有一件你以前会反复责怪自己的事，你突然觉得没那么重要了。它是？",
    "questionEn": "Recently, something you used to beat yourself up over has started to feel less heavy. What is it?",
    "options": [
      {
        "id": "20a",
        "textZh": "我哭得太多。我现在觉得，那不是软弱，那只是我感受得很认真",
        "textEn": "That I cry too much. I've started to think — that's not weakness. I just feel things seriously",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 0,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 2
        }
      },
      {
        "id": "20b",
        "textZh": "我曾经为了让某个人喜欢我，把自己变得很小。我现在不想再为这件事讨厌当时的自己了",
        "textEn": "That I made myself smaller to be loved. I don't want to hate that version of me anymore",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 0,
          "d6": 3,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 3
        }
      },
      {
        "id": "20c",
        "textZh": "我对一件事记仇记了很久。我现在没原谅 ta，但我已经不想再用这件事消耗自己了",
        "textEn": "That I held a grudge for a long time. I haven't forgiven them. But I'm done wasting myself on it",
        "scores": {
          "d1": 0,
          "d2": 1,
          "d3": 0,
          "d4": 1,
          "d5": 1,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 2
        }
      },
      {
        "id": "20d",
        "textZh": "我还在很多事情上责怪自己。原谅这件事还没轮到我",
        "textEn": "I still blame myself for a lot of things. Forgiveness hasn't reached me yet",
        "scores": {
          "d1": 1,
          "d2": 3,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 2,
          "guts": 0,
          "ysps": 0
        }
      }
    ]
  },
  {
    "id": 21,
    "category": "那个版本的你",
    "questionZh": "所有这些版本的你——会嫉妒的、会哭的、会因为一个人忘记吃饭的、会在凌晨发狠话又删掉的——你最不想丢掉的，是哪一个？",
    "questionEn": "All these versions of you — the jealous one, the one who cries, the one who forgets to eat over a person, the one who sends harsh things at 3am and deletes them — which one do you least want to lose?",
    "options": [
      {
        "id": "21a",
        "textZh": "那个还会为某件事完全失控的我。她让我知道我是活的",
        "textEn": "The one who can still completely lose it over something. She's how I know I'm alive",
        "scores": {
          "d1": 3,
          "d2": 0,
          "d3": 2,
          "d4": 1,
          "d5": 2,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 1
        }
      },
      {
        "id": "21b",
        "textZh": "那个明明知道结果还是会去爱的我。我有点心疼她，但我没法不承认我喜欢她",
        "textEn": "The one who loves anyway, knowing how it ends. She breaks my heart a little. I also can't pretend I don't like her",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 3,
          "d4": 2,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 3
        },
        "anchorBoost": "drop_dead"
      },
      {
        "id": "21c",
        "textZh": "那个学会安静下来的我。她不再拿自己去换别人的注意了",
        "textEn": "The one who learned how to be quiet. She doesn't trade herself for someone's attention anymore",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 3,
          "d5": 0,
          "d6": 2,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 3
        }
      },
      {
        "id": "21d",
        "textZh": "那个还在变化里的我。我还没决定想保留谁",
        "textEn": "The one still in motion. I haven't decided who to keep yet",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 1,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 1
        }
      }
    ]
  }
];
