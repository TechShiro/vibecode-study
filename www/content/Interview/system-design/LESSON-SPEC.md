# Lesson Authoring Spec — System Design Course

Every lesson in `./lessons/` MUST follow this contract so the whole course
reads as one consistent, dark-mode-capable, beautiful set.

---

## Structure (every lesson, in order)

1. `<head>` links `../assets/styles.css` AND `<script src="../assets/theme.js"></script>`.
2. First element in `<body>`: `<button class="theme-toggle" aria-label="Toggle dark mode"></button>`.
3. Structure, in order:
   - `<div class="kicker">System Design · HLD/LLD · Lesson NN of 66 · topic-keywords</div>`
   - `<h1>` topic name, `<p class="subtitle">` one-line hook.
   - `<div class="ribbon">` with Index link (`../INDEX.md`) and track framing.
   - **YouTube Lectures** — ONLY if needed (see rules below).
   - `## The one idea` — the core mental model (2–4 sentences).
   - Main content sections (see below for what to include).
   - `## Check yourself` — 2–4 `.quiz` widgets.
   - `## Do this next` — resources + what to practice.
   - Final `.callout` reminding learner to say "next" to advance.
   - `<div class="nav">` with prev / Index / next links.
   - `<script src="../assets/quiz.js"></script>` before `</body>`.

---

## YouTube Video Rules

**NOT compulsory for every lesson.** Only add YouTube links when:

- The topic is **very hard/complex** (e.g. CAP theorem, consistent hashing, Raft consensus)
- Without the video, the lesson **feels incomplete** — i.e. reading alone isn't enough
- The video adds something the text can't (visual animations, whiteboard walkthroughs)

**DO NOT add YouTube links for:**
- Simple/straightforward topics (e.g. SQL vs NoSQL basics, what is a CDN)
- Topics that are fully explainable with text + diagrams
- Every single lesson just to fill space

**VERIFICATION RULE:**
- Before adding ANY YouTube link, ALWAYS search the web to find the REAL video URL
- NEVER make up / guess a YouTube URL — only use URLs confirmed to exist
- Prefer well-known channels: Gaurav Sen (@gkcs), ByteByteGo, Tech Dummies, Hussein Nasser, sudoCODE


When added, use the `.yt-embed` block:
```html
<div class="yt-embed">
  <div class="yt-title">📺 Recommended Lecture</div>
  <a href="https://..." target="_blank">Video Title — Channel Name</a>
  <span class="yt-desc">Why this video matters, what to watch.</span>
</div>
```

---

## Diagrams (SVG / flow diagrams)

Add diagrams **only when they help understanding**. Not every lesson needs one.

**Good uses:**
- Architecture flows (client → LB → server → DB)
- Comparison flows (how two approaches differ visually)
- Decision trees (when to pick X vs Y)
- Data flow (how a request travels through the system)
- State diagrams (lifecycle of a connection/request)

**Don't force diagrams when:**
- A simple table or bullet list explains it better
- The topic is conceptual and doesn't have a visual flow

Use inline SVG with the `.diagram` CSS classes. Keep diagrams clean — not cluttered.

---

## What EVERY lesson MUST include

1. **The one idea** — core concept in 2–4 sentences
2. **Deep explanation** — cover everything about the topic, leave nothing out
   - What it is (definition)
   - Why it matters (motivation)
   - How it works (mechanics)
   - Types/variants if any
   - Real-world examples (which companies use this, how)
3. **Comparison tables** — when the topic involves X vs Y (use `.vs-table`)
4. **Trade-offs** — pros and cons (use `.tradeoff` div when appropriate)
5. **Real-world examples** — use `.real-world` boxes (how Netflix/Amazon/Uber etc. use this)
6. **Interview angle** — what interviewers ask, how to answer, common gotchas
7. **Code snippets** — if relevant (in Java, using `<pre><code>` with `.cmt` comments)
8. **Callouts** — `.callout` for info, `.callout.tip` for tips, `.callout.trap` for gotchas
9. **Quizzes** — 2–4 interactive quizzes (`.quiz` widget)
10. **Do this next** — practice suggestions + resource links

---

## What lessons should NOT include

- YouTube links for every lesson (only for complex topics)
- Forced/unnecessary diagrams
- Fluff or filler content
- Overly basic explanations for simple sub-points (be concise)
- Per-lesson cheat sheets (keep those in summary lessons only)

---

## Quiz contract (from assets/quiz.js)
```html
<div class="quiz" data-answer="1">
  <div class="q">Question?</div>
  <button class="opt">Wrong A</button>
  <button class="opt">Correct (index 1)</button>
  <button class="opt">Wrong C</button>
  <div class="fb" data-correct="why right" data-wrong="nudge"></div>
</div>
```
Keep options similar length — don't leak the answer via formatting.

---

## Multiple lessons for one topic

A topic with sub-items (i), ii), iii) etc. counts as ONE topic = ONE lesson.
But if the topic is too large to fit in one lesson without being overwhelming,
it CAN be split into multiple lessons (e.g. Design Patterns → Creational, Structural, Behavioral).

---

## Code style

- All code in **Java**
- Audience: **intermediate**, targeting **interviews**
- Use `.cmt` spans for inline comments in code
- Keep code concise — show the concept, not boilerplate

---

## CSS classes available

| Class | Use for |
|-------|---------|
| `.callout` | General info box |
| `.callout.tip` | Best practices, interview tips |
| `.callout.trap` | Common mistakes, gotchas |
| `.callout.warn` | Important warnings |
| `.real-world` | Real company examples |
| `.vs-table` | Comparison tables |
| `.tradeoff` > `.pro` + `.con` | Pros/cons side-by-side |
| `.formula` | Key formulas/theorems |
| `.diagram` | SVG diagrams |
| `.arch-flow` > `.box` | Architecture flow boxes |
| `.yt-embed` | YouTube video links |
| `.trace` | Step-by-step execution traces |

---

## Nav links

Each lesson's `<div class="nav">` points to:
- Previous lesson file: `NNNN-slug.html`
- Index: `../INDEX.md`
- Next lesson file: `NNNN-slug.html`
- First lesson prev → `← (start)`
- Last lesson next → `Course complete 🎉`
