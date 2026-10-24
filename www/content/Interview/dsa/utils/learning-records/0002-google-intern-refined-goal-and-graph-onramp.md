# Refined goal → Google India SWE intern; graphs first via a foundations on-ramp

Status: goal section superseded by LR-0004 (Google attempt over — not selected;
target now general big-tech). Learner-level findings below remain active.

Date: 2026-06-28.

## What changed
The generic "FAANG + CP" mission is now grounded in a concrete target: **Google
SWE Intern, India, Summer 2027** (OA + 2 Doc-based interviews; no system design /
behavioral). Learner shared a detailed, source-backed research brief on the
pipeline, topic frequencies, and real reported OA/interview questions. MISSION.md
updated with a "Primary target" section; the 15-pattern course map is unchanged
and still the spine.

## Learner's actual level (updates the 0001 baseline)
- ~100 LeetCode solved, **mostly medium**. Comfortable with loops/if-else/basic
  Java — explicitly does NOT want fundamentals re-taught.
- Real gaps are two-fold: (1) **hard problems** in graphs, DP, trees; (2)
  **"confusing" Java internals** that surface in interviews — `int` vs `Integer`
  (autoboxing, `==` vs `.equals()`, the −128..127 cache, overflow),
  `Queue<int[]> q = new ArrayDeque<>()` decoded (interface vs impl vs generic
  element type; note: learner wrote the non-existent `ArrayQueue`), and
  `ArrayDeque` vs `LinkedList` vs `Deque` vs `Queue`.

## Teaching decision
Authored **Lesson 0022 — Graph Foundations** as the on-ramp *before* the existing
DFS (0007) / BFS (0008) lessons, because those assume `List<List<Integer>>`
already exists. 0022 teaches graph vocabulary + the 3 representations + the
adjacency-list **build** (the move done every time), and weaves the learner's
listed Java confusions in exactly where they appear in graph code. This is the
ZPD: their existing 100 problems mean they can traverse, but "from basic" + the
Java-internals questions point to representation/build + syntax as the real gap.

## Sequence agreed
graphs (0022 → 0007 DFS → 0008 BFS → 0009 matrix → 0016 union-find → 0020 topo)
→ DP (0011) → trees (0006). ~2 weeks for these, then ~100 more curated LC.
Pacing remains learner-driven: advance on "next".

## Open / next
- Consider a dedicated "Java for DSA internals" reference lesson if the inline
  coverage in 0022 proves insufficient (equals/hashCode, comparator overflow,
  StringBuilder, TreeMap floor/ceiling, PriorityQueue idioms).
- Add Striver A2Z, Aditya Verma (DP/heaps/sliding window), NeetCode 150 to
  RESOURCES.md — the learner's research recommends them and they're Java-friendly.
