# Olivia Rodrigo 音乐人格测试 — 项目规格文档

> 这是一份给开发助手（codex）的完整规格文档。请严格按照本文档实现，所有视觉参数、交互逻辑、数据结构都已写死。文案部分会在后续提供，请预留接口。

---

## 1. 项目概述

### 1.1 项目名称与目标
**项目名称**：**ORTI**（Olivia Rodrigo Type Indicator）

一个为 Olivia Rodrigo 粉丝设计的音乐人格测试网站。用户回答 17 道情境题，得到一个匹配的 Olivia 歌曲作为人格代表，并在 girlhood spectrum 中落入一个离散阶段。

ORTI 这个命名致敬 MBTI（Myers-Briggs Type Indicator），整体气质应略带"伪学术 / 测评指标体系"的感觉，但**核心仍是文学性和情感共鸣**，不是真的科学测评。

**产品主叙事统一要求**：
- 用户进入网站时，第一理解应该是：**「你是哪首 Olivia Rodrigo？」**
- 用户拿到结果后，第二理解才是：**「这是一张属于你的人格切片」**
- 因此首页、CTA、分享文案优先使用"哪首歌"框架；结果页标题和解释文案使用"人格切片"框架

### 1.2 核心定位
- **粉丝向非盈利项目**，主要在小红书传播
- **作品集质量**：每个细节都按 portfolio 标准打磨
- **女性友好**：所有题目和文案必须对女性受众绝对尊重
- **截图传播优先**：结果页设计为天生适合社交媒体分享

### 1.3 目标用户
中文 Olivia Rodrigo 粉丝，主要为 18-30 岁女性，主要通过小红书入口访问。设备 95% 以上为移动端。

---

## 2. 技术栈与部署

### 2.1 技术栈（强制要求）
- **框架**：Next.js 14+（App Router）
- **语言**：TypeScript
- **样式**：Tailwind CSS + 少量 CSS Module（仅复杂动画）
- **状态管理**：React Context + useState（不需要 Redux/Zustand）
- **包管理**：pnpm

### 2.2 部署
- **平台**：Vercel
- **域名**：使用 Vercel 自动分配的 `xxx.vercel.app`，无需购买域名
- **代码原则**：保持平台无关，不使用 Vercel 专有 API（如 Edge Functions），方便未来迁移

### 2.3 性能要求
- 首屏加载（FCP）< 2 秒
- 字体不能引起闪烁（FOUT）
- 所有资源走 HTTPS

---

## 3. 视觉设计系统

### 3.1 设计气质
**SOUR 时期柔和感** + **极简文学卡片风**。参考要点：
- 大量留白
- 圆角卡片悬浮在浅色背景上
- 衬线字体为主
- 没有任何商业感的渐变、阴影、3D 效果
- 整体像一本诗集，不像一个 App

### 3.2 颜色规范

```css
/* 背景 */
--bg-primary: #F0E8F7;        /* 浅薰衣草紫，主背景 */
--bg-card: #FFFFFF;            /* 卡片背景，纯白 */
--bg-card-tint: #FAF6FD;       /* 卡片次要区域，极浅紫 */
--bg-quote: #EDE2F5;           /* 引号卡片，柔和紫 */

/* 文字 */
--text-primary: #2A1B3D;       /* 主文字，深紫黑 */
--text-secondary: #6B5B7E;     /* 次要文字，灰紫 */
--text-tertiary: #9A8AAB;      /* 第三级文字，浅灰紫 */
--text-on-dark: #F0E8F7;       /* 深底上的浅文字 */

/* 强调 */
--accent-primary: #6B2D8C;     /* Olivia 标志紫，按钮描边/标题 */
--accent-light: #B388CC;       /* 浅紫，hover/点缀 */
--accent-bright: #D4A5E8;      /* 亮紫，spectrum 光点 */

/* 边框 */
--border-soft: rgba(107, 45, 140, 0.12);   /* 卡片柔边 */
--border-medium: rgba(107, 45, 140, 0.25); /* 按钮描边 */

/* 阴影（极轻，不要重阴影）*/
--shadow-card: 0 4px 24px rgba(107, 45, 140, 0.06);
--shadow-card-hover: 0 6px 32px rgba(107, 45, 140, 0.10);
```

### 3.3 字体规范

**字体栈**：
```css
font-family: 
  "Noto Serif SC",
  "Source Han Serif SC",
  "Playfair Display",
  "EB Garamond",
  Georgia,
  serif;
```

**字体托管**：**自托管 + 子集化**。
- 中文：思源宋体（Noto Serif SC），只打包测试中实际用到的汉字（约 800-1200 字），子集化后约 200-400KB
- 英文：Playfair Display，常规字重 + italic，约 80-120KB
- 字体文件放在 `/public/fonts/` 目录
- 用 `next/font/local` 加载，开启 `display: swap`
- **不要用 Google Fonts CDN**

**字号系统**：
```css
--text-xs: 12px;     /* 辅助说明 */
--text-sm: 14px;     /* 次要文字 */
--text-base: 16px;   /* 正文 */
--text-lg: 18px;     /* 强调正文 */
--text-xl: 22px;     /* 题干 */
--text-2xl: 28px;    /* 副标题 */
--text-3xl: 36px;    /* 主标题 */
--text-4xl: 48px;    /* 结果页歌名 */
```

**行高**：
- 标题：1.3
- 正文：1.7
- 卡片内引文：1.8

### 3.4 间距系统
基础单位 4px，使用倍数：
```
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
```

### 3.5 圆角规范
- 卡片：`24px`
- 按钮（胶囊形）：`9999px`
- 引号卡片：`16px`
- 输入框/小元素：`12px`

### 3.6 移动端尺寸
- **最大宽度**：480px
- **桌面端**：内容居中，背景延伸到全屏，两侧用 `--bg-primary` 填充
- **基础内边距**：左右各 24px，顶部 32px，底部 48px

### 3.7 ORTI Wordmark / Logo 规范

ORTI 是一个 wordmark 为主的品牌标识，不需要图形 logo。规则如下：

**默认 wordmark**：
- 字体：Playfair Display Regular（不要 Bold）
- 字间距：`letter-spacing: 0.15em`（明显增宽）
- 颜色：`--accent-primary` (#6B2D8C)
- 全大写：`ORTI`

**使用场景与尺寸**：

| 场景 | 字号 | 备注 |
|---|---|---|
| 封面页主标题位置 | 64px | 最大 |
| 测试页顶部 | 16px | 极小，灰紫色 |
| 结果页核心卡片角落水印 | 14px | 灰紫色，作为截图水印 |

**完整品牌锁定（用在封面页）**：
```
        ORTI
Olivia Rodrigo Type Indicator
```
- 第一行：上述 wordmark 规则
- 第二行：英文小字，14px，italic，`letter-spacing: 0.05em`，颜色 `--text-secondary`
- 两行居中对齐，行间距 12px

### 3.8 动画规范
- **过渡时长**：200ms（小元素）/ 400ms（页面切换）/ 600ms（spectrum 光点入场）
- **缓动函数**：`cubic-bezier(0.4, 0, 0.2, 1)`（标准 ease-out）
- **页面切换**：fade + 轻微上移（translateY 8px → 0）
- **避免**：bounce、弹性、过度活泼的动画。整体气质要"安静"。

---

## 4. 页面结构

整个网站只有 3 个主要页面（路由）。

### 4.1 路由结构
```
/                    →  封面页
/quiz                →  测试页（17 道题在同一页面切换）
/result/[songId]     →  结果页（动态路由，根据匹配到的歌曲展示）
```

测试结果通过 URL 参数传递（不只是 songId，还包括 `stage` 和 7 个维度的得分），这样用户**直接分享 URL** 也能让别人看到完整结果。

### 4.2 封面页 `/`

**布局**（从上到下）：
1. 顶部 `safe-area`（适配 iPhone 刘海）
2. **ORTI 品牌锁定区**（占据约 50% 视口高度，垂直居中）
   - 大 wordmark：`ORTI`（64px，Playfair Display Regular，字间距 0.15em，紫色 `--accent-primary`）
   - 副标题（英文 italic）：`Olivia Rodrigo Type Indicator`（14px，灰紫色）
   - 分隔元素：一条 24px 宽的紫色细线（`--accent-light`），垂直居中
   - 中文主标题：「你是哪首 Olivia Rodrigo？」（22px，Noto Serif SC，主文字色）
3. 钩子文案（一段 50-80 字的引子，文案待定，预留位置）
4. "开始测试" 按钮（胶囊形，描边款，不是实心）
5. 底部小字：「17 questions · 约 3 分钟 · 找到属于你的那首歌」

**重要交互**：
- 如果 `sessionStorage` 里有未完成测试草稿，首页优先显示一个小卡片：
  > 你上次做到 Q.08  
  > [继续测试] [重新开始]
- 当未完成草稿存在时，**这一状态优先级高于**"上次结果"卡片
- 如果 `localStorage` 里有上次测试结果，**不要直接跳转**，而是在按钮下方加一个小卡片：
  > 上次你测到的是《歌名》  
  > [查看上次结果] [重新开始]

### 4.3 测试页 `/quiz`

**布局**（从上到下）：
1. 顶部 `safe-area`
2. **顶部 ORTI 小 wordmark**：`ORTI`（16px，Playfair Display，灰紫色 `--text-secondary`，居中）
3. **进度条**（细线，紫色，从 0% 到 100%）
4. **进度数字**（小字，灰紫色）：`01 / 17`
5. **题号 + 题干区域**
   - 题号：`Q.01`（大字 36px，Playfair Display italic，浅紫色 `--accent-light`）
   - 题干（中文）：22px，主文字色
   - 题干（英文小字，可选）：14px italic，次要文字色
6. **选项卡片**（3-4 个，垂直排列）
   - 每个选项是一个卡片，白底圆角，内容左对齐
   - 选项文字 16px，主文字色
   - 卡片之间间距 16px
   - 点击选项后**自动进入下一题**，不需要"下一题"按钮
7. **左上角小按钮**：「← 上一题」（极小，只在第 2 题及以后显示）

**交互细节**：
- 选项卡片点击时：先变深紫色背景 200ms，然后页面 fade out，新题目 fade in
- 进度条平滑过渡（400ms）
- 题目切换时**整个题目区域**做轻微上移 + 淡入

**数据流**：
- 用户的答案存在 React Context 中
- 用户每答一题，当前进度同步写入 `sessionStorage`
- 17 题答完后，前端立刻计算结果，路由跳转到 `/result/[songId]?stage=between_sour_guts&d1=x&d2=x...`
- 同时清除 `sessionStorage` 草稿，并把完整结果存入 `localStorage`
- 如果用户中途离开页面、切后台或误关浏览器，再进入 `/quiz` 时应自动恢复上次进度

### 4.4 结果页 `/result/[songId]`

这是整个项目的**核心页面**。所有视觉精力都应该投在这里。

**核心设计约束**：结果页**没有分享卡片生成功能**，但必须做到**用户手动截屏就能得到一张完美的小红书封面图**。这意味着：

1. **核心内容必须在一屏内完整呈现**——用户不需要滚动就能看到完整的"可截图区域"
2. **核心可截图区域**整体接近 **3:4 比例**（手机竖屏的天然比例），方便直接做小红书封面
3. **核心区域内必须包含 ORTI 水印**（角落小字），保证用户截图后的图片自带获客信息
4. **按钮、外链、声明放在核心区域之外**（下方），用户截屏时这些元素会被自然裁掉

**布局**（从上到下）：

#### Part A：核心可截图区域（一屏内完整呈现，接近 3:4 比例）

这个区域是一个**视觉上独立的大卡片**，背景是 `--bg-card` 纯白，圆角 24px，柔边阴影。整体采用**左侧纵向专辑轴 + 右侧文本内容**的杂志式排版。所有可截图元素都在这个卡片内：

1. **卡片顶部条**
   - 左侧：极小的 `ORTI` wordmark（14px，灰紫色，Playfair Display，字间距 0.15em）
   - 右侧：极小的 `your type` 或 `Q.17 / 17` 标签
   - 这一行作为"水印 + 测试身份证明"，确保截图自带品牌信息

2. **主体为左右双栏布局**
   - **左栏**：固定宽度 `84-96px`，放 Olivia 时期纵向轴
   - **右栏**：弹性宽度，放阶段标题、歌名、歌词、短句
   - 在移动端也保持左右双栏，不要把时间轴折叠到文字下方；这是结果页的视觉骨架

3. **左栏：纵向专辑轴**
   - 一根极细竖线（`--accent-light`，1px）贯穿上下，作为时间轴主干
   - 三张专辑封面沿竖线依次排列：`SOUR`、`GUTS`、`YSPS`
   - 封面尺寸约 `56-64px`，圆角 12px，和竖线保持轻微错位，避免过于机械
   - 一个亮紫色 marker（圆点或短胶囊均可，约 10-12px，带柔光）表示用户当前阶段
   - **marker 只允许落在 5 个预设槽位之一，不做 0-100 连续插值**：
     - `deep_sour` → `SOUR` 封面中心
     - `between_sour_guts` → `SOUR` 与 `GUTS` 中间
     - `heart_of_guts` → `GUTS` 封面中心
     - `between_guts_ysps` → `GUTS` 与 `YSPS` 中间
     - `ysps_edge` → `YSPS` 封面中心
   - marker 入场动画：淡入 + 沿竖线滑到目标槽位，时长 600ms，缓动 ease-out

4. **右栏：阶段标题**
   - 顶部先显示一条动态提示语（详见 §6.4）
   - 中文为主，14-16px，灰紫色
   - 英文可作为更小一行辅助文字，12-14px，italic，颜色更浅
   - 这部分负责回答："你现在处在 Olivia 的哪一段时期"

5. **歌名**
   - 最大字号 44-48px，Playfair Display Regular，主文字色
   - 左对齐或略偏左对齐，不要居中
   - 行高 1.15-1.2，必须是整个页面最强视觉中心

6. **副标题**
   - `Olivia Rodrigo · SOUR`（或 GUTS / YSPS）
   - 14px，italic，灰紫色
   - 与歌名保持 8-12px 的小间距

7. **歌词区**
   - 采用轻量引文排法，不必做大块居中 quote card
   - 英文原歌词 1-2 行（18px，Playfair Display italic，主文字色）
   - 中文翻译 1-2 行（14px，Noto Serif SC，灰紫色）
   - 翻译可为空：如果该歌词翻译生硬，只显示英文
   - **必须支持版权降级模式**：当全局内容策略切到 `safe` 时，整个歌词区直接隐藏，页面仍然要保持完成态，不得留下尴尬空白

8. **一句中文人格描述**
   - 14-16px，主文字色，约 30-50 字，行高 1.7
   - 长度必须可控，避免把右栏撑得过长

9. **一句英文哲思短语**
   - 18px，Playfair Display italic，紫色 `--accent-primary`
   - 约 5-10 词，必须是金句级别
   - 放在右栏底部，作为收束

10. **卡片底部水印行**
    - `orti.vercel.app`（12px，灰紫色）
    - 放在卡片底部偏右或居中，不抢主视觉，但截图里必须清晰可见

**关键尺寸要求**：
- 核心卡片整体宽度：vw 减去左右 24px 内边距（约 mobile screen width - 48px）
- 核心卡片高度：根据内容自适应，但**整体外接比例必须接近 3:4**
- 左栏和右栏之间的间距建议 `20-24px`
- codex 在实现时需要测试：在常见 mobile 视口（375 × 667 / 390 × 844 / 414 × 896）下，**核心卡片必须完整出现在首屏**，不需要滚动

#### Part B：核心区域之外的辅助内容（用户截屏时可被自然裁掉）

11. **复制结果链接按钮**
    - 胶囊形，描边款或文字按钮均可，但视觉层级低于歌名
    - 文字：「复制结果链接」
    - 点击后复制当前结果页 URL，并提示「链接已复制」
    - 如果剪贴板 API 不可用，则退化为弹出可手动复制的只读输入框
    - 这个按钮必须放在可截图核心区域之外，避免破坏出片感

12. **网易云音乐链接按钮**
    - 胶囊形，描边款（`--accent-primary` 1.5px 描边）
    - 文字：「♫ 在网易云音乐听这首歌」
    - 链接到对应歌曲（链接由后续提供，先留占位符 `#`）
    - 注意：在小红书内嵌浏览器中外链可能无法跳转，需要做兼容（点击时复制链接到剪贴板 + 提示「链接已复制，请在浏览器打开」作为 fallback）

13. **重新测试按钮**
    - 胶囊形，描边款（更细，`--border-medium` 1px，颜色更淡）
    - 文字：「重新测一次」
    - 点击后清除 React state，跳转回 `/quiz`，**保留 localStorage 里的旧结果**

14. **底部 fan-made 声明**（极小字 11px，灰紫色 `--text-tertiary`，居中）：
    > 本网站为非盈利的粉丝创作，与 Olivia Rodrigo 及 Geffen Records 无任何关联。所有歌名与歌词版权归原作者所有。
    > 
    > This is a fan-made project. Not affiliated with Olivia Rodrigo or Geffen Records.

#### 4.4.1 截图友好性验证清单

codex 实现完结果页之后，请用以下清单自测：

- [ ] 在 iPhone 13 (390×844) 视口下，Part A 核心卡片完整出现在首屏
- [ ] 用 iPhone 截屏功能截取整个屏幕，截到的图正中间是核心卡片
- [ ] 截图中左侧三张专辑封面和当前 marker 同时可见
- [ ] marker 只会落在 5 个离散槽位之一，不会停在任意中间像素位置
- [ ] 截图中歌名、歌词、哲思短句都完整可见
- [ ] 截图中能看到 ORTI wordmark 和 orti.vercel.app 水印
- [ ] 核心卡片外接矩形比例接近 3:4（容差 ±10%）
- [ ] 关闭歌词区（safe 模式）后，核心卡片仍然成立、不会出现突兀留白

---

## 5. 数据结构

所有内容用 TypeScript 接口定义，文案存为单独的 JSON 文件，方便后续更新和 i18n。

### 5.1 题目数据结构

```typescript
// src/data/questions.ts
export interface Question {
  id: number;
  category: string;  // 主题分类，用于内部组织
  questionZh: string;
  questionEn?: string;  // 可选的英文版本
  options: Option[];
}

export interface Option {
  id: string;  // "1a", "1b", "1c", "1d"
  textZh: string;
  textEn?: string;
  // 7 个维度的加分（每项 0-3 分）
  scores: {
    d1: number;  // 情绪强度
    d2: number;  // 攻击方向
    d3: number;  // 浪漫沉溺度
    d4: number;  // 自我认知
    d5: number;  // 反叛指数
    d6: number;  // 时间倾向
    d7: number;  // 社交能量
  };
  // spectrum 阶段加分
  spectrumScore: {
    sour: number;   // 0-2 分
    guts: number;   // 0-2 分
    ysps: number;   // 0-2 分（you seem pretty sad...）
  };
  // 锚点指向（可选，用于"主题极其具体的歌"）
  anchorBoost?: string;  // 歌曲 id，触发该选项给该歌曲额外加分
}

export const questions: Question[] = [
  // 17 道题目数据，由文案阶段提供，先用占位符
];
```

### 5.2 歌曲数据结构

```typescript
// src/data/songs.ts
export type SpectrumStage =
  | "deep_sour"
  | "between_sour_guts"
  | "heart_of_guts"
  | "between_guts_ysps"
  | "ysps_edge";

export interface Song {
  id: string;  // 如 "drivers_license"
  titleEn: string;  // 显示用的英文歌名（保留原始大小写）
  album: "SOUR" | "GUTS" | "YSPS";
  // 7 维指纹（每项 0-10 分）
  fingerprint: {
    d1: number;
    d2: number;
    d3: number;
    d4: number;
    d5: number;
    d6: number;
    d7: number;
  };
  // 可选：内容层面的阶段倾向，仅用于校准结果气质，不参与主匹配
  spectrumHint?: SpectrumStage;
  // 结果页内容
  lyricsEn?: string;  // 1-2 行英文歌词；safe 模式下可为空
  lyricsZh?: string;  // 中文翻译，可选
  personalityZh: string;  // 中文人格描述
  philosophyEn: string;  // 英文哲思短语
  neteaseUrl: string;  // 网易云链接，先用 "#"
}

export const songs: Song[] = [
  // 23 首歌的数据，由文案阶段提供
];
```

### 5.3 时期 / 专辑轴数据结构

结果页左侧的纵向专辑轴必须**数据驱动**，不要在组件里写死顺序、封面路径或文案。

```typescript
// src/data/eras.ts
export interface EraNode {
  id: "sour" | "guts" | "ysps";
  label: "SOUR" | "GUTS" | "YSPS";
  coverSrc: string;
  releaseLabel?: string;  // 例如 "2021" / "2023" / "2025"
  anchorSlot: 1 | 3 | 5;  // 对应纵向 rail 上的专辑中心槽位
}

export const eras: EraNode[] = [
  {
    id: "sour",
    label: "SOUR",
    coverSrc: "/images/sour-cover.jpg",
    releaseLabel: "2021",
    anchorSlot: 1,
  },
  {
    id: "guts",
    label: "GUTS",
    coverSrc: "/images/guts-cover.jpg",
    releaseLabel: "2023",
    anchorSlot: 3,
  },
  {
    id: "ysps",
    label: "YSPS",
    coverSrc: "/images/ysps-cover.jpg",
    releaseLabel: "2025",
    anchorSlot: 5,
  },
];
```

`SpectrumRail` 组件只读取这份数据，不要在 JSX 里硬编码 `SOUR / GUTS / YSPS`。

### 5.4 i18n 文案结构

```typescript
// src/data/i18n/zh.json
{
  "landing": {
    "title": "你是哪首 Olivia Rodrigo？",
    "subtitle": "Which Olivia Rodrigo song are you?",
    "hook": "...",  // 待填
    "cta": "开始测试",
    "meta": "17 questions · 约 3 分钟",
    "draftHint": "你上次做到 Q.{num}",
    "resumeQuiz": "继续测试",
    "discardDraft": "重新开始",
    "lastResult": "上次你测到的是《{songName}》",
    "viewLast": "查看上次结果",
    "restart": "重新开始"
  },
  "quiz": {
    "progress": "{current} / {total}",
    "questionLabel": "Question {num}",
    "back": "上一题"
  },
  "result": {
    "header": "你的 Olivia 人格切片",
    "stageLabel": "你的 Olivia 时期",
    "copyLink": "复制结果链接",
    "copyLinkSuccess": "链接已复制",
    "neteaseButton": "♫ 在网易云音乐听这首歌",
    "retake": "重新测一次",
    "disclaimer": "本网站为非盈利的粉丝创作..."
  }
}

// src/data/i18n/en.json - 之后再做，先预留文件
```

加载逻辑：
```typescript
// 简单的 i18n hook，不引入完整 i18n 库
import { useContext } from 'react';
import { LangContext } from '@/contexts/LangContext';
import zh from '@/data/i18n/zh.json';
import en from '@/data/i18n/en.json';

export const useT = () => {
  const { lang } = useContext(LangContext);
  return lang === 'en' ? en : zh;
};
```

### 5.5 内容策略配置

为了应对歌词引用的版权风险，需要预留一个全局内容策略开关。

```typescript
// src/config/content.ts
export const contentPolicy = {
  resultQuoteMode: "lyrics" as "lyrics" | "safe",
};
```

- `lyrics`：正常显示 1-2 行歌词
- `safe`：结果页隐藏整个歌词区，只保留歌名、人格描述、哲思短句
- 页面布局必须兼容这两种模式

---

## 6. 算法逻辑

### 6.1 7 个维度定义

| 维度 | 名称 | 低分（0）端 | 高分（10）端 |
|---|---|---|---|
| D1 | 情绪强度 | 隐忍内化 | 外放爆发 |
| D2 | 攻击方向 | 向内自责 | 向外对抗 |
| D3 | 浪漫沉溺度 | 清醒抽离 | 沉迷投入 |
| D4 | 自我认知 | 自我怀疑 | 自信张扬 |
| D5 | 反叛指数 | 顺从乖巧 | 叛逆质疑 |
| D6 | 时间倾向 | 沉溺过去 | 活在当下/未来 |
| D7 | 社交能量 | 内向独处 | 外向社交 |

### 6.2 歌曲匹配算法

```typescript
function matchSong(userScores: number[], songs: Song[]): Song {
  // 1. 归一化用户得分（每个维度除以理论最大值，得到 0-1）
  const normalizedUser = normalizeScores(userScores);
  
  // 2. 对每首歌计算"距离"
  const distances = songs.map(song => {
    const songVector = Object.values(song.fingerprint).map(v => v / 10);
    
    // 使用余弦相似度而不是欧氏距离
    // 余弦相似度更适合"模式匹配"，欧氏距离会偏向中位数歌曲
    const similarity = cosineSimilarity(normalizedUser, songVector);
    
    // 加上锚点 boost（如果有题目专门指向这首歌）
    const anchorBonus = calculateAnchorBonus(song.id, userAnswers);
    
    return {
      song,
      score: similarity + anchorBonus,
    };
  });
  
  // 3. 取得分最高的歌
  distances.sort((a, b) => b.score - a.score);
  return distances[0].song;
}
```

**重要**：测试上线前，codex 需要写一个**模拟脚本**，随机生成 1000 个用户答案，跑一遍算法，确认 23 首歌**每首至少都有几次被匹配到**。如果发现某些歌从来不被匹配（"死区"），需要调整该歌曲的指纹或相关题目权重。这一步在内容填充完成后做。

### 6.3 Spectrum 阶段判定

```typescript
function calculateSpectrumStage(answers: Answer[]): SpectrumStage {
  // 累加 sour / guts / ysps 三个 bucket 的分数
  let sour = 0, guts = 0, ysps = 0;
  answers.forEach(a => {
    sour += a.option.spectrumScore.sour;
    guts += a.option.spectrumScore.guts;
    ysps += a.option.spectrumScore.ysps;
  });
  
  const total = sour + guts + ysps || 1;
  const sourRatio = sour / total;
  const gutsRatio = guts / total;
  const yspsRatio = ysps / total;
  
  // 结果页只保留 5 档离散阶段，不做 0-100 连续位置
  if (sourRatio >= 0.50) return "deep_sour";
  if (yspsRatio >= 0.38) return "ysps_edge";
  if (gutsRatio >= 0.42 && yspsRatio < 0.24) return "heart_of_guts";
  if (sour >= guts) return "between_sour_guts";
  return "between_guts_ysps";
}
```

这些阈值是**第一版默认值**。等真实题目数据填完之后，可以通过模拟脚本微调，但**最终输出必须始终是 5 档中的一种**。

### 6.4 动态文案逻辑

根据 `SpectrumStage`，结果页左轴 marker 和顶部阶段提示语同步变化。**写 5 组固定文案**：

```typescript
function getSpectrumCopy(stage: SpectrumStage): {
  en: string;
  zh: string;
  slot: 1 | 2 | 3 | 4 | 5;
} {
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
```

---

## 7. Storage 逻辑

```typescript
interface StoredResult {
  songId: string;
  spectrumStage: SpectrumStage;
  scores: {d1: number; d2: number; d3: number; d4: number; d5: number; d6: number; d7: number};
  timestamp: number;
}

interface QuizDraft {
  currentQuestion: number;
  answers: Array<{ questionId: number; optionId: string }>;
  updatedAt: number;
}

const RESULT_STORAGE_KEY = 'olivia_quiz_result';
const DRAFT_STORAGE_KEY = 'olivia_quiz_draft';

// 保存结果
function saveResult(result: StoredResult) {
  localStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(result));
}

// 读取结果
function getStoredResult(): StoredResult | null {
  const raw = localStorage.getItem(RESULT_STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

// 保存草稿
function saveDraft(draft: QuizDraft) {
  sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
}

// 读取草稿
function getDraft(): QuizDraft | null {
  const raw = sessionStorage.getItem(DRAFT_STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

// 清除草稿
function clearDraft() {
  sessionStorage.removeItem(DRAFT_STORAGE_KEY);
}
```

**封面页逻辑**：
- 优先检查是否存在未完成 draft
- 如果有 draft，显示「继续测试」卡片
- 加载时检查是否有 stored result
- 如果没有 draft 但有 stored result，在按钮下方显示「上次结果」卡片
- 用户可以选择「查看上次结果」（直接跳转 `/result/[songId]`）或「重新开始」

**重测逻辑**：
- 从结果页重测时**不删除** localStorage 里的旧结果
- 新结果生成后覆盖旧结果

**中断恢复逻辑**：
- 用户每回答一题，就更新一次 `sessionStorage` 草稿
- 如果用户重新打开 `/quiz`，且草稿未过期（默认 24 小时内），自动恢复到上次题号
- 用户完成测试后，必须立即清除草稿
- 用户点击首页或草稿卡片里的「重新开始」时，只清除草稿，不删除旧结果

---

## 8. 统计接入

### 8.1 Vercel Analytics
在 `app/layout.tsx` 加入：
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 8.2 自定义事件追踪
追踪以下事件，用于数据分析：
- `quiz_started` - 用户开始测试
- `quiz_resumed` - 用户恢复未完成测试
- `quiz_completed` - 用户完成测试（带 songId 参数）
- `result_link_copied` - 用户复制结果链接
- `netease_clicked` - 用户点击网易云链接
- `retake_clicked` - 用户点击重新测试

```typescript
import { track } from '@vercel/analytics';

track('quiz_completed', { songId: 'drivers_license' });
```

---

## 9. 文件结构

```
orti/
├── public/
│   ├── fonts/
│   │   ├── NotoSerifSC-subset.woff2
│   │   ├── PlayfairDisplay-Regular.woff2
│   │   └── PlayfairDisplay-Italic.woff2
│   └── images/
│       ├── sour-cover.jpg          # 待提供
│       ├── guts-cover.jpg          # 待提供
│       └── ysps-cover.jpg          # 待提供
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 根布局，引入字体、analytics
│   │   ├── page.tsx                # 封面页 /
│   │   ├── quiz/
│   │   │   └── page.tsx            # 测试页 /quiz
│   │   └── result/
│   │       └── [songId]/
│   │           └── page.tsx        # 结果页 /result/[songId]
│   ├── components/
│   │   ├── Landing/
│   │   ├── Quiz/
│   │   │   ├── QuestionCard.tsx
│   │   │   ├── OptionButton.tsx
│   │   │   └── ProgressBar.tsx
│   │   ├── Result/
│   │   │   ├── SongCard.tsx        # 核心可截图卡片
│   │   │   └── SpectrumRail.tsx    # 左侧纵向专辑轴
│   │   └── shared/
│   │       ├── Button.tsx
│   │       ├── Wordmark.tsx        # ORTI wordmark 复用组件
│   │       └── Disclaimer.tsx
│   ├── data/
│   │   ├── questions.ts            # 17 题数据
│   │   ├── eras.ts                 # 左侧纵向专辑轴数据
│   │   ├── songs.ts                # 23 首歌数据
│   │   └── i18n/
│   │       ├── zh.json
│   │       └── en.json             # 留空，未来用
│   ├── config/
│   │   └── content.ts              # 歌词显示策略（lyrics / safe）
│   ├── lib/
│   │   ├── matchAlgorithm.ts       # 歌曲匹配
│   │   ├── spectrum.ts             # spectrum 阶段判定 + 动态文案
│   │   └── storage.ts              # localStorage + sessionStorage 封装
│   ├── contexts/
│   │   ├── QuizContext.tsx         # 用户答案状态
│   │   └── LangContext.tsx         # 语言切换
│   └── styles/
│       └── globals.css             # Tailwind + CSS 变量
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 10. 占位内容（让 codex 知道真实内容会长什么样）

### 10.1 题目占位示例
```typescript
{
  id: 1,
  category: "心碎反应",
  questionZh: "凌晨三点，你想起了那个人。你做的第一件事是？",
  questionEn: "It's 3 AM and you're thinking about them. The first thing you do?",
  options: [
    {
      id: "1a",
      textZh: "翻他们的旧消息，一条一条看完",
      textEn: "Reread every old message",
      scores: { d1: 7, d2: 1, d3: 9, d4: 2, d5: 1, d6: 1, d7: 0 },
      spectrumScore: { sour: 2, guts: 0, ysps: 0 },
      anchorBoost: "drivers_license"
    },
    // ... 其他选项
  ]
}
```

### 10.2 歌曲占位示例
```typescript
{
  id: "drivers_license",
  titleEn: "drivers license",
  album: "SOUR",
  fingerprint: { d1: 7, d2: 1, d3: 10, d4: 2, d5: 1, d6: 2, d7: 1 },
  spectrumHint: "deep_sour",
  lyricsEn: "I still fuckin' love you, babe",
  lyricsZh: "我他妈还是爱你，宝贝",
  personalityZh: "你是那种会把心碎写进日记的人，明知道这样会更痛，但你需要让悲伤有一个形状。",
  philosophyEn: "Some heartbreaks demand to be lived in.",
  neteaseUrl: "#"
}
```

---

## 11. 开发顺序建议

请按以下顺序开发：

1. **基础架构**：Next.js 项目初始化、Tailwind 配置、字体加载、CSS 变量
2. **路由骨架**：三个空白页面 + 路由跳转
3. **设计系统组件**：Button、Card、ProgressBar、Disclaimer
4. **数据与配置层**：questions、songs、eras、content policy 基础文件
5. **封面页**：完整实现，包含结果检测 + 草稿恢复入口
6. **测试页**：用占位题目数据，实现题目切换、进度条、状态管理、sessionStorage 草稿
7. **算法逻辑**：matchSong、calculateSpectrumStage、getSpectrumCopy
8. **结果页**：左侧纵向专辑轴 + 右侧歌曲信息 + 复制结果链接
9. **动画与过渡**：所有页面切换、按钮 hover、spectrum 光点入场
10. **统计接入**：Vercel Analytics + 自定义事件
11. **测试**：模拟脚本验证算法没有死区，并验证 lyrics / safe 两种内容模式
12. **部署**：推送到 GitHub，连接 Vercel

---

## 12. 待办：内容填充清单

以下内容由项目方提供，请预留接口并标注位置：

- [ ] 17 道题目的题干和选项文案（中英）
- [ ] 17 道题每个选项的 7 维度评分和 spectrum 评分
- [ ] 23 首歌的完整文案（歌词、人格描述、哲思短语）
- [ ] 23 首歌的 7 维度指纹
- [ ] 23 首歌的网易云链接
- [ ] 三张专辑封面图片文件
- [ ] 歌词引用是否允许公开展示；如果不允许，统一切换 `safe` 模式
- [ ] 封面页的钩子文案

---

## 13. 关键质量标准

请把这些当作交付检查清单：

- [ ] 在 iPhone Safari 上无任何视觉异常（特别是 safe-area、字体、动画）
- [ ] 在小红书 App 内嵌浏览器中可正常打开和操作
- [ ] 首屏加载 < 2 秒（4G 网络模拟）
- [ ] 字体不闪烁
- [ ] 所有按钮和交互元素有 hover/active 状态
- [ ] 复制结果链接在 iOS / Android / 桌面端都可用，并有失败 fallback
- [ ] 网易云链接在小红书内嵌浏览器中有 fallback 处理
- [ ] localStorage 数据结构稳定，不会因为代码升级丢失旧数据
- [ ] sessionStorage 草稿恢复在中断场景下可靠
- [ ] 所有页面包含 fan-made 声明
- [ ] `lyrics` / `safe` 两种内容模式下结果页都成立
- [ ] 代码通过 TypeScript 严格模式检查，无 any 类型
- [ ] README 写清楚如何本地运行、如何部署

---

## 14. 不要做的事

请明确**不要**实现以下功能：

- ❌ 不要做用户登录/注册
- ❌ 不要做任何形式的支付、广告、商业化元素
- ❌ 不要嵌入 Olivia 的歌曲音频片段（版权风险）
- ❌ 不要使用 Olivia 的官方艺术照、MV 截图
- ❌ 不要做后端 API（所有逻辑前端完成）
- ❌ 不要引入重型依赖（如 Redux、MUI、Chakra UI）
- ❌ 不要使用 Vercel 专有 API（保持平台无关）
- ❌ 不要默认深色模式（这是个浅色系产品）
- ❌ 不要做加载页/启动屏（直接呈现内容）
- ❌ 不要在结果页用 emoji 装饰（破坏文学气质）

---

文档结束。如有任何不明确的地方，先按"作品集质量、女性友好、文学气质、为分享优化"四条原则做判断。
