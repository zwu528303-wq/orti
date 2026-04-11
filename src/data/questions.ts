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
    "category": "一个深夜的瞬间",
    "questionZh": "凌晨你又一次刷到那个一直被算法推给你的女孩。你不认识她，但你已经看完了她的几十条视频。这一刻你心里真实的感受是？",
    "questionEn": "Late at night, the algorithm shows you that girl again. You don't know her, but you've watched dozens of her videos. What do you actually feel?",
    "options": [
      {
        "id": "1a",
        "textZh": "一种说不清楚的累。我也想笑得那么轻",
        "textEn": "A tired feeling I can't name. I want to laugh that lightly too",
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
        "id": "1b",
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
        "id": "1c",
        "textZh": "一种诚实的、丑陋的羡慕。我不打算粉饰它",
        "textEn": "An honest, ugly kind of envy. I'm not dressing it up",
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
        "id": "1d",
        "textZh": "我心里想的是：我以前也笑得那么轻过。是从什么时候开始不是了的？",
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
        },
        "anchorBoost": "teenage_dream"
      }
    ]
  },
  {
    "id": 2,
    "category": "你的私号",
    "questionZh": "如果你有一个只有你自己看的账号（finsta / 私号 / 抽屉里的本子），你最常发的是什么？",
    "questionEn": "If you have an account only you can see — a finsta, a private blog, a notebook in a drawer — what do you put in it most often?",
    "options": [
      {
        "id": "2a",
        "textZh": "一些我永远不会发到主号上的、丢人的真心话",
        "textEn": "The embarrassingly honest things I'd never put on my main",
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
        "textZh": "我哭花了的脸的自拍。我想留下证据",
        "textEn": "Selfies of me with my face wet. I want a record",
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
        "textZh": "截图——我和某些人的对话，因为我害怕忘记",
        "textEn": "Screenshots — conversations with certain people, because I'm afraid of forgetting",
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
        "textZh": "我没有这种账号。我连对自己都很 curated",
        "textEn": "I don't have one. Even to myself, I'm curated",
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
    "category": "朋友圈里的你",
    "questionZh": "在你最亲密的朋友圈里，你通常是哪种角色？",
    "questionEn": "Among your closest friends, you're usually the —",
    "options": [
      {
        "id": "3a",
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
        "id": "3b",
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
        "id": "3c",
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
        "id": "3d",
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
    "id": 4,
    "category": "一首不能放给别人听的歌",
    "questionZh": "你手机里有一首歌，你从来不会在别人面前放——因为它会暴露你太多。它在讲什么？",
    "questionEn": "There's a song on your phone you'd never play around other people — it would give too much away. What is it about?",
    "options": [
      {
        "id": "4a",
        "textZh": "一种你以为只有你一个人有的羞耻",
        "textEn": "A kind of shame you thought only you had",
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
        "textZh": "一种很大很大的、不属于你这个年纪的渴望",
        "textEn": "A longing that feels too big — like it shouldn't belong to someone your age",
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
        "textZh": "一种很小很小的、但你不愿意被人当成\"小事\"的感觉",
        "textEn": "A feeling that's small — but you refuse to let anyone call it small",
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
        },
        "anchorBoost": "brutal"
      }
    ]
  },
  {
    "id": 5,
    "category": "等待消息",
    "questionZh": "你发出去的那条消息，两小时了，对方明明在线。这两个小时里，你脑子里反复出现的是哪句话？",
    "questionEn": "The message you sent — two hours ago, they're clearly online. Over those two hours, which line keeps repeating in your head?",
    "options": [
      {
        "id": "5a",
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
        "id": "5b",
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
        "id": "5c",
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
        "id": "5d",
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
    "id": 6,
    "category": "心碎反应",
    "questionZh": "凌晨三点，你突然想起了那个人。你做的第一件事是？",
    "questionEn": "It's 3 AM and they cross your mind. The first thing you do is —",
    "options": [
      {
        "id": "6a",
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
        "id": "6b",
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
        "id": "6c",
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
        "id": "6d",
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
    "id": 7,
    "category": "最近一次哭",
    "questionZh": "你最近一次哭，最准确的描述是？",
    "questionEn": "The most accurate description of the last time you cried —",
    "options": [
      {
        "id": "7a",
        "textZh": "在没人看见的地方，安静地、像漏水一样地哭",
        "textEn": "Somewhere no one could see. Quiet, leaking, like a slow drip",
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
        "textZh": "在某个意想不到的瞬间——超市里、地铁上、听一首歌的副歌时",
        "textEn": "In a moment I didn't see coming — at the supermarket, on the train, during the chorus of some song",
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
        "textEn": "I can't remember the last time I cried. And that scares me a little",
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
        "textZh": "我还在哭。我哭了挺久了",
        "textEn": "I'm still crying. I've been crying for a while",
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
        "anchorBoost": "making_the_bed"
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
        "id": "8b",
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
        "id": "8c",
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
        "id": "8d",
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
    "id": 9,
    "category": "别人夸你\"乖\"",
    "questionZh": "有人夸你\"你真的很懂事\"或者\"你很乖\"。你心里的真实感受是？",
    "questionEn": "Someone compliments you for being \"so put-together\" or \"such a good girl.\" Inside, you actually feel —",
    "options": [
      {
        "id": "9a",
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
        "id": "9b",
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
        "id": "9c",
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
        "id": "9d",
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
    "id": 10,
    "category": "怎么处理愤怒",
    "questionZh": "当你真正生气的时候，你是哪种？",
    "questionEn": "When you're truly angry, you're the kind who —",
    "options": [
      {
        "id": "10a",
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
        "id": "10b",
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
        "id": "10c",
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
        "id": "10d",
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
    "id": 11,
    "category": "又想报复又想要回来",
    "questionZh": "有一个人，你想让 ta 付出代价。但同时，你心里有另一个声音说\"如果 ta 现在出现，我可能还是会答应\"。这种感觉熟悉吗？",
    "questionEn": "Someone you want to make pay. And at the same time, another voice in you says \"if they showed up right now, I might say yes.\" Does this feeling ring a bell?",
    "options": [
      {
        "id": "11a",
        "textZh": "太熟悉了。爱和恨从来都不是反义词",
        "textEn": "Way too familiar. Love and hate were never opposites",
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
        "textZh": "熟悉。但我已经学会不让那两个声音同时存在了",
        "textEn": "Familiar. But I've learned not to let those two voices exist at the same time",
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
        "textZh": "我只想让 ta 付出代价。那个\"答应\"的声音，我已经掐灭了",
        "textEn": "I just want them to pay. That other voice? I killed it",
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
        "textZh": "不熟悉。\"让谁付出代价\"不是我处理事情的方式——我会选择直接消失",
        "textEn": "Not familiar. \"Making someone pay\" isn't how I process things. I just disappear",
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
        }
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
        "textZh": "我又一次回到了一段我已经说我离开了的关系里",
        "textEn": "I went back, again, to a relationship I said I'd left",
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
        "textZh": "我又一次为了让别人舒服而把自己压低了",
        "textEn": "I shrunk myself, again, to make someone else comfortable",
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
        "textZh": "我没有办法\"立刻好起来\"——所有人都已经在告诉我\"你应该走出来了\"",
        "textEn": "I can't just \"be ok\" — and everyone has started telling me I should be over this by now",
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
        "textZh": "我居然还在乎那件事 / 那个人。我以为我已经超过它了",
        "textEn": "I still care about that thing / that person. I thought I was past it",
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
    "questionEn": "Which of these \"compliments\" makes your heart sink the most?",
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
        },
        "anchorBoost": "teenage_dream"
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
        "id": "14b",
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
        "id": "14c",
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
        "id": "14d",
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
    "id": 15,
    "category": "当有人说你\"太多了\"",
    "questionZh": "如果有人对你说\"你这个人有点太多了\"——意思可能是太情绪化、太复杂、太敏感、太用力——你的反应是？",
    "questionEn": "If someone tells you \"you're a lot\" — too emotional, too complicated, too sensitive, too intense — what's your reaction?",
    "options": [
      {
        "id": "15a",
        "textZh": "立刻把自己收回去。我已经被这样说过太多次了",
        "textEn": "Immediately fold myself smaller. I've heard this too many times",
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
        },
        "anchorBoost": "traitor"
      },
      {
        "id": "15b",
        "textZh": "心里气得不行，但表面上笑一笑",
        "textEn": "Furious inside, smiling on the outside",
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
        }
      },
      {
        "id": "15c",
        "textZh": "\"对，我就是。\"——我不会再为这件事道歉了",
        "textEn": "\"Yeah, I am.\" I'm done apologizing for this",
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
        "textZh": "我会问 ta：那你愿意只要我的一部分吗？",
        "textEn": "I'd ask them: so you only want some of me?",
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
        },
        "anchorBoost": "vampire"
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
        "id": "16b",
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
        "id": "16c",
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
        "id": "16d",
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
    "id": 17,
    "category": "你想成为的那种人",
    "questionZh": "你最想成为的那种人，最接近？",
    "questionEn": "The kind of person you most want to become is closest to —",
    "options": [
      {
        "id": "17a",
        "textZh": "一个不会因为感受太多而道歉的人",
        "textEn": "Someone who doesn't apologize for feeling too much",
        "scores": {
          "d1": 1,
          "d2": 0,
          "d3": 0,
          "d4": 2,
          "d5": 3,
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
        "textZh": "一个不再为了被喜欢而把自己变小的人",
        "textEn": "Someone who's stopped making themselves smaller to be liked",
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
        "textZh": "一个对自己温柔得，跟对最爱的人一样温柔的人",
        "textEn": "Someone who treats themselves with the same tenderness they save for the people they love most",
        "scores": {
          "d1": 0,
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
      }
    ]
  }
];
