# Mission: Design and Analysis of Algorithms (COCSC303)

## Why

Score 9.5+ CGPA in semester 5. DAA is one of two **improvement (re-sit) papers**, alongside OS — so
this is targeted repair of a paper already sat once, not a first pass at the subject. **Units I and
II were commissioned on 5 September 2026**; Units III–V are to be commissioned one at a time, in
Krish's own order. No test date was given.

The goal is marks on the university answer sheet — not algorithm-design skill, and not mastery of
the subject.

## Success looks like

**Unit I — Analysis of Algorithms**

- **Master theorem problems answered in two lines**, cold: read off a, b, k, p; compute bᵏ; compare
  with a; write the answer. This is the cheapest scoring in the whole subject and two or three
  appear every year. Including the **extended p sub-cases** (p > −1, p = −1, p < −1) and the
  **decreasing-function version** (a<1, a=1, a>1), which most students never learn.
- Naming the **five situations where the Master theorem does not apply**, especially unequal
  subproblem sizes.
- **Asymptotic proofs that actually produce c and n₀** — 3n+2 = O(n) with c=4, n₀=2; ½n²−3n = Θ(n²)
  with c₁=1/14, c₂=½, n₀=7 — plus the contradiction template for "show f is not O(g)".
- The **growth-rate chain** written out, with the two traps: log n is slower than √n, and n! is
  faster than 2ⁿ.
- **Code-fragment complexity by pattern recognition** — the eight patterns, especially the √n cases
  and the **harmonic-series case** (`for j ≤ n step i`), which looks like n² and is n log n.
- Solving a recurrence **by the method the question names** — back-substitution, recursion tree, or
  induction — and knowing that the recursion tree has exactly three shapes, which are the three
  Master-theorem cases.
- The **four paradigms**, their control abstractions, and above all the
  **backtracking vs branch-and-bound table**, the most-asked comparison in the subject.

**Unit II — Searching, Sorting and String Operations** (*numericals worked in full at Krish's
explicit request*)

- **AVL insertion with rotations, automatic**: balance factor beside every node, the rotation named
  before it is performed, the tree redrawn after each. Plus the **N(h) = N(h−1) + N(h−2) + 1**
  recurrence and the height bound.
- **Quick sort's three derivations** written from memory, and the fact that its worst case is on
  *already sorted* input.
- **The Ω(n log n) decision-tree proof** and **the O(n) build-heap proof** — two 5-mark derivations
  almost nobody prepares.
- **Hashing traces** for chaining, linear probing, quadratic probing and double hashing, plus the
  probe-count formulas and what α = 0.9 actually costs (50 probes for a failed linear-probe search).
- **B-tree construction and deletion** — "max = m−1, min = ⌈m/2⌉−1" written first, split on the
  median, "borrow if you can, merge if you must".
- **Red–black insertion** — "red uncle recolour, black uncle rotate" — finished with an explicit
  check of property 5.
- **The KMP LPS table** built cell by cell and spot-checked by hand, and the search trace in which
  the text pointer never backtracks.
- **Counting and radix sort traces** with the cumulative-count step shown, and the reason
  right-to-left placement matters.
- The **master sorting comparison table**, and the **AVL vs red–black** and **B vs B+** tables.

## Constraints

- **Exam-shaped, not mastery-shaped.** Depth beyond what the syllabus and past papers ask is waste.
- **Unit I paradigms kept at introduction depth** — Krish's call on 5 September 2026, and the right
  one: the syllabus says "basic introduction", and Units III and IV teach greedy, dynamic
  programming and graph algorithms properly. All the numerical weight in Unit I therefore went into
  asymptotics, complexity analysis and recurrence solving, which is what Unit I is actually examined
  on.
- **Every worked answer was computed and verified before being written into a lesson**; none were
  reproduced from memory. This covers the AVL and red–black traces, the B-tree splits and merges,
  the four hashing tables, the heap traces, all three sorting traces, the counting and radix passes,
  and the KMP LPS array.
- **Verified videos on the high-yield topics**, playlist pointers elsewhere — his call on
  5 September 2026, to keep build time in the content rather than in link-checking. **Every link
  named in a lesson was read off the live YouTube page**, never recalled.
- Time is scarce — five main subjects plus two improvement subjects.
- Prefers Hindi-language YouTube channels aimed at Indian semester exams; Abdul Bari is the
  exception, and is worth it for this subject specifically.
- Everything must work offline from local HTML files, and must print cleanly for revision.

## Out of scope

- **Units III–V, until asked.** Their topics are listed on the index page so the shape of the paper
  is visible, but no lessons are to be written ahead of a request. Note that **Unit IV is usually
  the heaviest** — matrix chain multiplication, LCS and 0/1 knapsack are high-mark table-filling
  questions.
- The lab experiments and the optimisation-algorithm mini-projects in the lab plan.
- Anything the written paper does not ask for.
