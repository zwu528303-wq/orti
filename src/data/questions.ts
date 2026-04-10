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
    "category": "心碎反应",
    "questionZh": "凌晨三点，你突然想起了那个人。你做的第一件事是？",
    "questionEn": "It's 3 AM and they cross your mind. The first thing you do is —",
    "options": [
      {
        "id": "1a",
        "textZh": "把他们的旧消息从头翻一遍，每一条都重新读",
        "textEn": "Reread every old message, one by one",
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
        "id": "1b",
        "textZh": "打开备忘录，把现在心里的话全部写下来",
        "textEn": "Open my notes app and write everything down",
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
        }
      },
      {
        "id": "1c",
        "textZh": "翻一下他们的 ins，然后立刻后悔自己点开了",
        "textEn": "Check their Instagram, then hate myself for it",
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
        "id": "1d",
        "textZh": "什么都不做，盯着天花板让那种感觉自己来自己走",
        "textEn": "Stare at the ceiling and let it move through me",
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
    "id": 2,
    "category": "嫉妒",
    "questionZh": "你刷社交媒体的时候看到一个女生，她的生活看起来比你的更轻盈、更被爱、更不费力。你的第一反应是？",
    "questionEn": "You're scrolling and you see a girl whose life looks lighter than yours — more loved, more effortless. What goes through your head?",
    "options": [
      {
        "id": "2a",
        "textZh": "我知道滤镜骗人，但我还是难受了三秒钟",
        "textEn": "I know it's all filters, but it still stings for three seconds",
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
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "jealousy_jealousy"
      },
      {
        "id": "2b",
        "textZh": "关掉手机，今天不刷了",
        "textEn": "Close the app. I'm done for today",
        "scores": {
          "d1": 0,
          "d2": 1,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 1
        }
      },
      {
        "id": "2c",
        "textZh": "开始幻想：如果我是她会怎样？她的早晨是什么样子？",
        "textEn": "I start imagining her life in detail. What does her morning look like?",
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
          "guts": 1,
          "ysps": 0
        },
        "anchorBoost": "lacy"
      },
      {
        "id": "2d",
        "textZh": "我也想要那种生活，但我没有办法假装我不嫉妒",
        "textEn": "I want what she has, and I can't pretend I don't",
        "scores": {
          "d1": 2,
          "d2": 2,
          "d3": 0,
          "d4": 1,
          "d5": 1,
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
    "id": 3,
    "category": "看到前任过得好",
    "questionZh": "那个伤害过你的人，你后来发现 ta 现在过得很好。你的反应更接近于？",
    "questionEn": "The person who hurt you — you find out they're doing fine. Maybe more than fine. Your reaction is closest to —",
    "options": [
      {
        "id": "3a",
        "textZh": "我恨他们过得好，但我不会说出来",
        "textEn": "I hate that they're okay, and I'd never say it out loud",
        "scores": {
          "d1": 2,
          "d2": 2,
          "d3": 0,
          "d4": 0,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "happier"
      },
      {
        "id": "3b",
        "textZh": "我已经不在意了，真的",
        "textEn": "I genuinely don't care anymore",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
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
        "id": "3c",
        "textZh": "公平吗？这不公平。",
        "textEn": "Is this fair? This isn't fair.",
        "scores": {
          "d1": 3,
          "d2": 3,
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
        "anchorBoost": "vampire"
      },
      {
        "id": "3d",
        "textZh": "我假装替他们高兴，然后回家一个人很难过",
        "textEn": "I pretend to be happy for them, then go home and fall apart",
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
          "sour": 2,
          "guts": 0,
          "ysps": 0
        },
        "anchorBoost": "happier"
      }
    ]
  },
  {
    "id": 4,
    "category": "喜欢的人不回消息",
    "questionZh": "你给某个人发了消息，已经两个小时了，对方在线，没回。你心里的声音是？",
    "questionEn": "You sent them a message. Two hours, no reply, even though they're clearly online. The voice in your head says —",
    "options": [
      {
        "id": "4a",
        "textZh": "ta 是不是看到我说错话了",
        "textEn": "Did I say something wrong",
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
        "id": "4b",
        "textZh": "算了，我也有事忙",
        "textEn": "Whatever, I'm busy too",
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
      },
      {
        "id": "4c",
        "textZh": "如果两小时不回，那他们就配不上我两小时之外的等待",
        "textEn": "If they can't reply in two hours, they don't deserve me waiting any longer",
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
        "id": "4d",
        "textZh": "我会再发一条，故作轻松的那种",
        "textEn": "I'll send another one. Casual. Pretending I don't care",
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
        "anchorBoost": "love_is_embarrassing"
      }
    ]
  },
  {
    "id": 5,
    "category": "朋友圈里的你",
    "questionZh": "在你最亲密的朋友圈里，你通常是哪种角色？",
    "questionEn": "Among your closest friends, you're usually the —",
    "options": [
      {
        "id": "5a",
        "textZh": "那个会在所有人都笑的时候，注意到角落里有人没在笑的",
        "textEn": "The one who notices, when everyone's laughing, that someone in the corner isn't",
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
        "id": "5b",
        "textZh": "永远在讲故事的那个，我的烂事是大家的下酒菜",
        "textEn": "The storyteller. My disasters are everyone's entertainment",
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
        "id": "5c",
        "textZh": "安安静静在听的那个，但我什么都记得",
        "textEn": "The quiet one who listens, but remembers everything",
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
        "id": "5d",
        "textZh": "那个会突然爆出一句真话让大家安静三秒的",
        "textEn": "The one who blurts out something honest and makes the room go quiet for three seconds",
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
        },
        "anchorBoost": "all_american_bitch"
      }
    ]
  },
  {
    "id": 6,
    "category": "一段关系结束之后",
    "questionZh": "一段重要的关系结束之后，你需要多久才能\"重新成为自己\"？",
    "questionEn": "After an important relationship ends, how long does it take you to feel like yourself again?",
    "options": [
      {
        "id": "6a",
        "textZh": "我不知道。可能我从来没有完全回去过",
        "textEn": "I don't know. Maybe I never fully come back",
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
        "anchorBoost": "favorite_crime"
      },
      {
        "id": "6b",
        "textZh": "一段时间。我会让自己沉到底再浮起来",
        "textEn": "A while. I let myself sink before I come back up",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 2,
          "d4": 0,
          "d5": 0,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 1,
          "guts": 1,
          "ysps": 0
        }
      },
      {
        "id": "6c",
        "textZh": "比我以为的更快。这件事让我有点害怕",
        "textEn": "Faster than I thought. And that scares me a little",
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
          "guts": 1,
          "ysps": 2
        },
        "anchorBoost": "logical"
      },
      {
        "id": "6d",
        "textZh": "我会用工作 / 朋友 / 新爱好把自己塞满，直到我没空想",
        "textEn": "I fill my life with work, friends, new hobbies — until there's no room left to think",
        "scores": {
          "d1": 1,
          "d2": 1,
          "d3": 1,
          "d4": 0,
          "d5": 0,
          "d6": 2,
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
    "id": 7,
    "category": "别人夸你\"乖\"",
    "questionZh": "有人夸你\"你真的很懂事\"或者\"你很乖\"。你心里的真实感受是？",
    "questionEn": "Someone compliments you for being \"so put-together\" or \"such a good girl.\" Inside, you actually feel —",
    "options": [
      {
        "id": "7a",
        "textZh": "暗暗高兴，因为我确实努力让自己变成那样",
        "textEn": "Quietly proud. I worked hard to become that",
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
        "id": "7b",
        "textZh": "一种说不出来的别扭，像被关进了一个漂亮的盒子",
        "textEn": "An odd discomfort. Like being put in a beautiful box",
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
        },
        "anchorBoost": "all_american_bitch"
      },
      {
        "id": "7c",
        "textZh": "想笑。如果他们知道我真实的样子就不会这么说了",
        "textEn": "I want to laugh. If they knew the real me, they'd take it back",
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
        },
        "anchorBoost": "all_american_bitch"
      },
      {
        "id": "7d",
        "textZh": "谢谢，但我已经累了",
        "textEn": "Thanks. But I'm tired",
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
    "id": 8,
    "category": "怎么处理愤怒",
    "questionZh": "当你真正生气的时候，你是哪种？",
    "questionEn": "When you're truly angry, you're the kind who —",
    "options": [
      {
        "id": "8a",
        "textZh": "当面把话说清楚，哪怕场面会很难看",
        "textEn": "Says it to their face, even if it gets ugly",
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
        "id": "8b",
        "textZh": "表面没事，回家以后写一封永远不会发出去的长信",
        "textEn": "Acts fine, then writes a long letter at home that never gets sent",
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
        }
      },
      {
        "id": "8c",
        "textZh": "切断联系，让消失成为我的回答",
        "textEn": "Cut them off. Let my silence be the answer",
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
        "id": "8d",
        "textZh": "把这件事记一辈子，但表面上跟谁都没事",
        "textEn": "Hold the grudge forever, while looking perfectly fine",
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
    "id": 9,
    "category": "你最害怕被人看见的一面",
    "questionZh": "有一面的你，你最不希望被人看见。它更接近于？",
    "questionEn": "There's a side of you that you'd rather no one ever see. It's closest to —",
    "options": [
      {
        "id": "9a",
        "textZh": "我有多需要被爱",
        "textEn": "How much I need to be loved",
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
        "anchorBoost": "lacy"
      },
      {
        "id": "9b",
        "textZh": "我有多嫉妒，多狭隘，多记仇",
        "textEn": "How jealous, how petty, how unforgiving I can be",
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
        "anchorBoost": "jealousy_jealousy"
      },
      {
        "id": "9c",
        "textZh": "我有多累，累到我有时候不想再做一个\"积极向上\"的人",
        "textEn": "How tired I am — too tired to keep being the \"positive\" one",
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
          "guts": 0,
          "ysps": 2
        },
        "anchorBoost": "brutal"
      },
      {
        "id": "9d",
        "textZh": "我其实没有大家以为的那么坚强",
        "textEn": "That I'm not nearly as strong as everyone thinks",
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
          "guts": 1,
          "ysps": 0
        }
      }
    ]
  },
  {
    "id": 10,
    "category": "派对上的你",
    "questionZh": "你在一个挤满人的派对上。最有可能的状态是？",
    "questionEn": "You're at a crowded party. The most likely version of you is —",
    "options": [
      {
        "id": "10a",
        "textZh": "跟所有人都聊得火热，但回家后会立刻感到一种深深的空",
        "textEn": "Talking to everyone, glowing — and then feeling a deep empty after I get home",
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
        "id": "10b",
        "textZh": "在角落里观察所有人，构思一篇关于这个房间的文章",
        "textEn": "Watching everyone from a corner, drafting an essay about this room in my head",
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
        "id": "10c",
        "textZh": "喝得有点多，跟陌生人讲我妈的事",
        "textEn": "A little too drunk, telling a stranger about my mom",
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
        "id": "10d",
        "textZh": "我根本不会去派对",
        "textEn": "I wouldn't go to the party in the first place",
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
    "id": 11,
    "category": "想到 17 岁的自己",
    "questionZh": "如果你现在能给 17 岁的自己说一句话，你会说什么？",
    "questionEn": "If you could say one thing to your 17-year-old self right now, it would be —",
    "options": [
      {
        "id": "11a",
        "textZh": "那些让你哭的事情，最后真的都过去了",
        "textEn": "All the things that made you cry — they really did pass",
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
        }
      },
      {
        "id": "11b",
        "textZh": "别那么努力让所有人喜欢你",
        "textEn": "Stop trying so hard to make everyone like you",
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
        "id": "11c",
        "textZh": "我想念你的那种相信，那种还没被磨损的相信",
        "textEn": "I miss your kind of believing — the kind that hadn't been worn down yet",
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
        "id": "11d",
        "textZh": "你不需要变得更好。你已经够了。",
        "textEn": "You don't need to become better. You're already enough.",
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
    "id": 12,
    "category": "最讨厌的赞美",
    "questionZh": "有一种赞美，听起来是好话，但你听到的时候会感到一种说不出的不适。它最可能是？",
    "questionEn": "There's a compliment that sounds like a compliment, but makes you weirdly uncomfortable. It's probably —",
    "options": [
      {
        "id": "12a",
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
        },
        "anchorBoost": "teenage_dream"
      },
      {
        "id": "12b",
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
        "id": "12c",
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
        "id": "12d",
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
    "id": 13,
    "category": "周日下午",
    "questionZh": "一个完美的周日下午，对你来说是？",
    "questionEn": "A perfect Sunday afternoon, for you, is —",
    "options": [
      {
        "id": "13a",
        "textZh": "一个人，一杯咖啡，一本书，没有人找我",
        "textEn": "Alone. Coffee. A book. No one trying to reach me",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 1,
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
        "id": "13b",
        "textZh": "跟最好的朋友在某个地方笑到肚子疼",
        "textEn": "Somewhere with my closest friends, laughing until my stomach hurts",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 1,
          "d6": 0,
          "d7": 3
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 1,
          "ysps": 1
        }
      },
      {
        "id": "13c",
        "textZh": "在床上躺着，什么都不做，让一整个下午自己流走",
        "textEn": "In bed. Doing nothing. Letting the whole afternoon slip past me",
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
          "sour": 2,
          "guts": 0,
          "ysps": 0
        },
        "anchorBoost": "making_the_bed"
      },
      {
        "id": "13d",
        "textZh": "走在一个我从来没去过的城市的某条街上",
        "textEn": "Walking down a street in a city I've never been to",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 3,
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
    "id": 14,
    "category": "最讨厌别人说你的话",
    "questionZh": "有一句话，如果有人这么说你，你会立刻心情很差。它最接近？",
    "questionEn": "There's a sentence that, if someone said it about you, would ruin your day. It's closest to —",
    "options": [
      {
        "id": "14a",
        "textZh": "\"你想太多了\"",
        "textEn": "\"You're overthinking it\"",
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
        }
      },
      {
        "id": "14b",
        "textZh": "\"你太敏感了\"",
        "textEn": "\"You're too sensitive\"",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 3,
          "d6": 0,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "brutal"
      },
      {
        "id": "14c",
        "textZh": "\"你应该开心一点\"",
        "textEn": "\"You should be happier\"",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 0,
          "d5": 2,
          "d6": 1,
          "d7": 0
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 0,
          "ysps": 1
        },
        "anchorBoost": "happier"
      },
      {
        "id": "14d",
        "textZh": "\"你怎么还没放下这件事\"",
        "textEn": "\"Why are you still hung up on this\"",
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
          "sour": 1,
          "guts": 1,
          "ysps": 0
        },
        "anchorBoost": "the_grudge"
      }
    ]
  },
  {
    "id": 15,
    "category": "你和镜子的关系",
    "questionZh": "你和镜子里的自己，是什么样的关系？",
    "questionEn": "The relationship between you and the person in the mirror — what is it?",
    "options": [
      {
        "id": "15a",
        "textZh": "我们大部分时候相处得不错。偶尔会有几天我们谁都不想看见谁",
        "textEn": "We get along most days. Some days neither of us wants to see the other",
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
        "id": "15b",
        "textZh": "我知道她已经\"足够了\"，但知道这件事并不能让我每天都相信",
        "textEn": "I know she's \"enough.\" But knowing that doesn't make me believe it every day",
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
        "id": "15c",
        "textZh": "我经常在她身上找新的问题，找到了就觉得自己很有洞察力",
        "textEn": "I keep finding new problems with her, and feel weirdly insightful when I do",
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
        "id": "15d",
        "textZh": "大多数时候我不会停下来看。我害怕停下来",
        "textEn": "Most days I don't stop to look. I'm scared of stopping",
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
    "id": 16,
    "category": "如果可以删掉一段记忆",
    "questionZh": "如果你可以彻底删掉一段记忆，干干净净的那种，你会删吗？",
    "questionEn": "If you could erase one memory, completely, no trace — would you?",
    "options": [
      {
        "id": "16a",
        "textZh": "会。立刻就会。我已经想过太多次了",
        "textEn": "Yes. Immediately. I've thought about this too many times",
        "scores": {
          "d1": 2,
          "d2": 1,
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
        }
      },
      {
        "id": "16b",
        "textZh": "不会。那段记忆塑造了现在的我，我不想动它",
        "textEn": "No. That memory shaped who I am. I don't want to touch it",
        "scores": {
          "d1": 0,
          "d2": 0,
          "d3": 0,
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
        "id": "16c",
        "textZh": "会，但我会先把它写下来，然后再删",
        "textEn": "Yes, but I'd write it down first, then erase it",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 1,
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
        "id": "16d",
        "textZh": "不会。我宁愿记得，哪怕痛",
        "textEn": "No. I'd rather remember, even if it hurts",
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
          "sour": 1,
          "guts": 1,
          "ysps": 0
        },
        "anchorBoost": "favorite_crime"
      }
    ]
  },
  {
    "id": 17,
    "category": "你想成为的那种人",
    "questionZh": "你最想成为的那种人是？",
    "questionEn": "The kind of person you most want to become is —",
    "options": [
      {
        "id": "17a",
        "textZh": "一个能允许自己全身心去感受任何事情的人，哪怕那种感受是难受的",
        "textEn": "Someone who lets themselves feel everything fully, even when feeling hurts",
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
          "sour": 1,
          "guts": 0,
          "ysps": 1
        }
      },
      {
        "id": "17b",
        "textZh": "一个看清楚一切之后还选择温柔的人",
        "textEn": "Someone who sees through everything and still chooses to be gentle",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 1,
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
        "id": "17c",
        "textZh": "一个不再为了让别人喜欢自己而道歉的人",
        "textEn": "Someone who's done apologizing for being themselves",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 3,
          "d5": 3,
          "d6": 1,
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
        "id": "17d",
        "textZh": "一个能笑着讲自己最丢脸的事的人",
        "textEn": "Someone who can laugh while telling their most embarrassing story",
        "scores": {
          "d1": 2,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 2,
          "d6": 1,
          "d7": 2
        },
        "spectrumScore": {
          "sour": 0,
          "guts": 2,
          "ysps": 0
        },
        "anchorBoost": "love_is_embarrassing"
      }
    ]
  }
];
