# Mission: Master the 15 Core DSA Patterns

## Why
Pass FAANG / big-tech coding interviews and place well in competitive-programming
contests by recognizing the *pattern* behind a problem within seconds, then
coding a correct, edge-case-proof solution in Java under time pressure.

## Primary target (refined 2026-07-09)
**Big-tech SWE Intern — India, off-campus** (Microsoft, Amazon, Adobe, Atlassian,
Uber, Flipkart, Goldman Sachs, quant firms, etc.). The Google off-campus attempt
is over — not selected — so prep is no longer tuned to Google's Doc-based format.
General big-tech pipeline: coding OA (2–4 DSA Qs, LC medium→hard, 60–90 min on
HackerRank/HackerEarth/CodeSignal) → 1–2 45-min DSA rounds in a shared editor →
often a CS-fundamentals round for interns (OOPS, DBMS, OS — covered by the theory
track outside this mission). Highest-signal topics: arrays/strings, **graphs**,
**DP**, **trees**, **greedy**. Priority order for all 21 patterns lives in
`utils/dsa_pattern.md` (graph ✅ done → DP 🔄 in progress → trees → window/pointers/
binary search → greedy → rest). Learner profile: ~100 LC solved (mostly medium);
strong on basics, stuck on hard problems + "confusing" Java internals. Target
~200 curated LC total. LeetCode: u/Unsung_Engineer.

## Success looks like
- Given an unseen problem, name the governing pattern (from the 15) in < 60s and justify why.
- Implement each pattern's core template in Java from memory, bug-free, in one pass.
- Handle every standard *case/variation* of a pattern (e.g. full-list vs sublist vs k-group reversal), not just the textbook one.
- Reason about and state time/space complexity correctly, including the tricky edge cases interviewers probe.

## Constraints
- Language: **Java**.
- Level: **intermediate** — comfortable with arrays, strings, recursion, basic collections. Skip beginner fundamentals.
- Pacing: **one pattern at a time, user-driven** — do not jump ahead until the user says so.
- Dual target: interview problems (LeetCode-style) **and** competitive programming (Codeforces-style).

## Out of scope (for now)
- Beginner programming fundamentals (syntax, loops).
- Patterns/algorithms not in the 15-item list (e.g. union-find, segment trees, string hashing) — revisit only if a listed pattern depends on them.
- Language-specific micro-optimizations beyond Big-O.

## Course map (all lessons authored — learner works through one at a time)
Canonical priority order and track list: see **`utils/dsa_pattern.md`**.
Every topic has its own zero-to-hero multi-lesson track folder (the old
single-lesson `pattern-lessons/` was replaced by per-topic tracks on
2026-07-09; tracks assume Java + basic DSA but ZERO pattern knowledge).

1. `graph-lessons/` (9) — ✅ **done**
2. `dp-lessons/` (12) — 🔄 **current**
3. `tree-lessons/` (6) → 4. `sliding-window-lessons/` (3) →
5. `two-pointers-lessons/` (3) → 6. `binary-search-lessons/` (3) →
7. `greedy-lessons/` (3) → 8. `top-k-lessons/` (3) →
9. `prefix-sum-lessons/` (2) → 10. `backtracking-lessons/` (3) →
11. `monotonic-stack-lessons/` (2) → 12. `intervals-lessons/` (2) →
13. `linkedlist-reversal-lessons/` (2) → 14. `fast-slow-lessons/` (2) →
15. `trie-lessons/` (2) → 16. `bit-manipulation-lessons/` (2) →
17. `cyclic-sort-lessons/` (1) → Course complete 🎉
Supporting: `java-lessons/` (3) — Java internals, read alongside.

## DP track (dedicated, `dp-lessons/`, authored 2026-07-02 — zero to advanced)
1. DP Foundations (memo vs tab, the 5-step framework)
2. 1D DP (House Robber family, Kadane, Decode Ways)
3. Grid DP (Unique Paths, Min Path Sum, Maximal Square, Dungeon Game)
4. Knapsack (0/1 + unbounded, Coin Change, the loop-order rule)
5. Two-string DP — LCS family (Edit Distance, Distinct Subsequences, Regex)
6. Palindrome DP (substring vs subsequence, min cuts)
7. LIS & friends (O(n log n) patience, Envelopes)
8. State-machine DP (all stock variants, Falling Path Sum II, Paint N×3 Grid)
9. Interval DP (Burst Balloons, MCM, game DP)
10. DP on trees (Rob III, Max Path Sum, Cameras, rerooting intro)
11. Bitmask DP (TSP, assignment, submask enumeration)
12. Digit DP + DP-optimization map + combined DP cheat sheet
