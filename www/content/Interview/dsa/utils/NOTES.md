# Teaching Notes

## Learner profile
- Language: **Java** (all code examples + practice in Java).
- Level: **intermediate** — skip fundamentals; assume comfort with recursion, collections, Big-O.
- Goals: **FAANG interviews + competitive programming** (dual target).
- Pacing: **one pattern at a time, learner drives**. Wait for "next" before advancing. Currently on **Pattern 1: LinkedList In-place Reversal**.
- Wants "all cases" of each pattern, not just the textbook version.

## CRITICAL method rule (added 2026-07-02 after failed OA — see learning-records/0003)
Learner's habit was solution-first (read editorial → retype). Result: 0/3 on a real OA.
From now on: NEVER give an approach before the learner states constraints + a brute force.
Enforce: 25-min attempt → hint layer → solution → rewrite from memory → blank re-solve in
2–3 days. Problems count as solved only after the blank re-solve.

## Teaching preferences (update as learned)
- Emphasize: pattern *recognition* triggers, edge cases, and the unifying template behind variations.
- Each pattern → one or more lessons covering its cases + a `./reference/` cheat sheet for quick revision.
- Use retrieval practice (quizzes), not just exposition.

## Course conventions
- Lessons: `./lessons/NNNN-<slug>.html`, share `./assets/styles.css`, `./assets/quiz.js`, and `./assets/theme.js`.
- **Dark mode in EVERY lesson** (learner request): include `<script src="../assets/theme.js">` in `<head>` and a `<button class="theme-toggle">` in the body. Follows OS pref + manual toggle (saved to localStorage). Already in the shared stylesheet.
- **Cheat sheets: NO per-lesson cheat sheet** (learner request). Instead, **Lesson 15 (Fast & Slow Pointers) ends with a single combined cheat sheet covering ALL 15 patterns** — one printable revision card for the whole course. The `./reference/` dir is unused.
- Complexity always stated as Big-O for time AND space.

## Learner preferences (added 2026-06-28)
- Target is **Google India SWE intern, Summer 2027** — see MISSION.md "Primary target". Ground problem picks in Google-reported questions over the LC "Google" premium tag.
- Wants **"confusing" Java internals explained inline** where they appear (int vs Integer, `Queue<int[]>` / `new ArrayDeque<>()` decoded, ArrayDeque vs LinkedList vs Deque). NOT fundamentals (loops/if-else). Lesson 0022 covers the graph-relevant set.
- Working order: **graphs → DP → trees**, then ~100 more curated LC (~200 total). Wants "basics to max" per topic.
- Authored **Graph Foundations** as the on-ramp before DFS(0007)/BFS(0008). Lives at `graph-lessons/0001-graph-foundations.html` (renumbered from 0022 → 0001 as lesson 1 of its own graph track).

## Folder layout (restructured 2026-06-28, learner request)
Root shows only: `pattern-lessons/`, `graph-lessons/`, `utils/`.
- `pattern-lessons/` — the 21-lesson numbered course (0001–0021), nav chain intact.
- `graph-lessons/` — the dedicated graph track, numbered from 0001, **complete (9 lessons)**: 01 Graph Foundations · 02 DFS (Traversal & Cycles) · 03 BFS & Shortest Paths · 04 Grid Graphs · 05 Topological Sort · 06 Union-Find · 07 Weighted Shortest Paths · 08 Minimum Spanning Tree · 09 Advanced Graphs. Lesson 01 links to the Java track; the rest chain 01→…→09. (Authored 2026-06-28; 02–09 + Java track were drafted by parallel subagents to the same LESSON-SPEC.)
- `dp-lessons/` — the dedicated DP track, numbered from 0001, **12 lessons** (authored
  2026-07-02 to `utils/DP-LESSON-SPEC.md` by parallel subagents, same method as the graph track):
  01 Foundations · 02 1D DP · 03 Grid DP · 04 Knapsack · 05 LCS family · 06 Palindrome ·
  07 LIS · 08 State-machine (stocks) · 09 Interval · 10 Tree DP · 11 Bitmask · 12 Digit DP +
  combined DP cheat sheet. Lesson 01's nav prev links back to graph lesson 09; lesson 12 ends
  the track. Learner starts the DP convo after the graph track (working order graphs → DP → trees).
- `java-lessons/` — **complete (3 lessons)** for the "confusing Java internals": 01 int vs Integer · 02 Queue/Deque/Stack · 03 PriorityQueue & Comparators. Each links assets at `../utils/assets/` and Mission at `../utils/MISSION.md`.
- **Worked examples (added 2026-06-28):** every lesson in both tracks now has a `<h3>Worked example — dry run</h3>` with (1) a concrete small input, (2) an inline-SVG `<figure class="diagram">` (graph/grid/tree/box), and (3) a `<div class="trace">` step-by-step. New reusable `.diagram` SVG component added to `assets/styles.css` (classes: node/cell/edge[.hl]/lbl[.inv]/wt/arrow + `.node.done/.cur`, `.cell.done/.cur`; `.trace .step.now` highlight). Subagents authored 9; Dijkstra (0007) + MST (0008) were applied by the main agent after subagent Edit was permission-denied on those two files.
- `utils/` — all machinery: `assets/`, `MISSION.md`, `NOTES.md`, `RESOURCES.md`, `GLOSSARY.md`, `LESSON-SPEC.md`, `dsa_pattern.md`, `learning-records/`, `reference/`, `skills-lock.json`, `.agents/`.
- Lesson links rewritten: `../assets` → `../utils/assets`, `../MISSION` → `../utils/MISSION` (both lesson folders sit one level under root, so relative depth is unchanged).
- NOTE: moving `MISSION.md`/`NOTES.md`/`assets/` out of root means the `/teach` slash command won't auto-discover its state at the workspace root next session. Teaching continues fine in chat. To restore, move those back to root.
- PENDING: root rename `dsa` → `dsa pattern and graph` could NOT be done in-session (folder locked as working directory). User must do it after closing Claude Code.

## Per-case practice convention (added 2026-07-07, learner request)
Name-only "recognition depth" sections are NOT acceptable — every technique/case in a lesson
needs (1) explanation + Java template + Big-O, and (2) a practice block directly after the case:
`<p><strong>Practice — free-tier LeetCode</strong></p><ul><li><strong>LC NNN · Title</strong> (Difficulty) — one-line hint.</li></ul>`
2–3 FREE-TIER problems per case, covering every variant across the lesson; repeats only with an
explicit "re-solve with this method" label. Learner fixed graph lesson 07 himself in this style
(BFS refresher, 0-1 BFS, Bellman-Ford, Floyd-Warshall practice); all 12 dp-lessons were brought up
to this standard on 2026-07-07 (Regex/Wildcard 10/44, Strange Printer 664, rerooting 834,
DP-optimization map in lesson 12 etc. expanded from name-only to full sections; "Smallest
Sufficient Team" corrected 943 → 1125). LeetCode: u/Unsung_Engineer — 133 solved (40E/83M/10H),
only 9 DP-tagged; public API reveals only the 20 most recent ACs, so likely-solved classics
(53/70/121) are kept but labeled "re-solve from a blank file".

## Status
- **All 21 lessons authored** (core 1–15 + bonus 16–21). Lesson 15 ends with the combined all-15 cheat sheet; Lesson 21 ends the course.
- Learner is still on **Lesson 1** — lessons exist as a self-paced library; advance only when they say "next". When they demonstrate mastery of a pattern, write a learning record.
- Code style across lessons: method-body snippets (assume `java.util.*` imports + given node classes), matching Lesson 1's convention — not standalone compilable files.
