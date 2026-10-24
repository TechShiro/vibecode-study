# DSA Pattern Roadmap — sorted by big-tech OA/interview importance

Order: graph and DP first (done / in progress), then by how often the pattern
decides an OA or interview question at big companies (Microsoft, Amazon, Adobe,
Atlassian, Uber, Flipkart, Goldman, quant firms — general, not Google-specific).
Work top to bottom. Every topic has its own zero-to-hero lesson track (authored
2026-07-09, assuming Java + basic DSA but zero pattern knowledge). Tracks chain
via prev/next links in this order; each track's last lesson ends with that
topic's cheat sheet.

| # | Pattern | Status | Track |
|---|---------|--------|-------|
| 1 | Graph (DFS, BFS, grids, topo sort, union-find, shortest paths, MST) | ✅ done | `graph-lessons/` (9) |
| 2 | Dynamic Programming | 🔄 in progress | `dp-lessons/` (12) |
| 3 | Trees (traversals, recursion patterns, LCA, BST, construction) | ⬜ | `tree-lessons/` (6) |
| 4 | Sliding Window | ⬜ | `sliding-window-lessons/` (3) |
| 5 | Two Pointers | ⬜ | `two-pointers-lessons/` (3) |
| 6 | Binary Search (boundary, rotated, search-on-answer) | ⬜ | `binary-search-lessons/` (3) |
| 7 | Greedy | ⬜ | `greedy-lessons/` (3) |
| 8 | Top K / Heaps (PriorityQueue, two heaps, k-way merge) | ⬜ | `top-k-lessons/` (3) |
| 9 | Prefix Sum (+ hashmap, 2D, difference array) | ⬜ | `prefix-sum-lessons/` (2) |
| 10 | Backtracking | ⬜ | `backtracking-lessons/` (3) |
| 11 | Monotonic Stack | ⬜ | `monotonic-stack-lessons/` (2) |
| 12 | Overlapping Intervals (merge, sweep line) | ⬜ | `intervals-lessons/` (2) |
| 13 | LinkedList In-place Reversal | ⬜ | `linkedlist-reversal-lessons/` (2) |
| 14 | Fast & Slow Pointers | ⬜ | `fast-slow-lessons/` (2) |
| 15 | Trie (Prefix Tree) | ⬜ | `trie-lessons/` (2) |
| 16 | Bit Manipulation | ⬜ | `bit-manipulation-lessons/` (2) |
| 17 | Cyclic Sort | ⬜ | `cyclic-sort-lessons/` (1) |

Supporting: `java-lessons/` (3) — Java internals for DSA (int vs Integer,
Queue/Deque/Stack, PriorityQueue comparators). Read alongside, referenced from
the tracks where relevant.

## Why this order

- **1–2 Graph, DP** — the two highest-weight interview topics, and your self-identified gaps.
- **3 Trees** — the single most common interview data structure after arrays; nearly every onsite has one tree question. Also feeds DP-on-trees (dp lesson 0010).
- **4–6 Sliding Window, Two Pointers, Binary Search** — the array/string trio that dominates OAs. Most OA question 1s are one of these; "binary search on the answer" (track lesson 3) is the classic OA question 2.
- **7 Greedy** — Indian big-tech OAs (Flipkart, PhonePe, Uber, Goldman) lean heavily on greedy/ad-hoc; often unprovable-feeling, so practice volume matters.
- **8–9 Top-K, Prefix Sum** — frequent OA question 2s (heap selection, subarray-sum-equals-k family).
- **10–12 Backtracking, Monotonic Stack, Intervals** — more interview than OA; monotonic stack is the classic "hard question 2" generator.
- **13–14 LinkedList Reversal, Fast & Slow** — quick wins, small pattern space, common phone-screen questions.
- **15–17 Trie, Bits, Cyclic Sort** — lower frequency; do last or on demand.
