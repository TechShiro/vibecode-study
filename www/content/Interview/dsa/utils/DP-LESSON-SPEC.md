# DP Track — Lesson Authoring Spec

The dedicated Dynamic Programming track, `dp-lessons/`, 12 lessons from zero to
advanced. Follows the SAME contract as `LESSON-SPEC.md` and the graph track:
author by COPYING the structure of `../graph-lessons/0001-graph-foundations.html`
and reusing ONLY the classes in `../utils/assets/styles.css`. No new CSS.

## Hard requirements (every lesson)
1. `<head>` links `../utils/assets/styles.css` AND `<script src="../utils/assets/theme.js"></script>`.
   `<title>DP Lesson NN — {Name}</title>`.
2. First element in `<body>`: `<button class="theme-toggle" aria-label="Toggle dark mode"></button>`.
3. Structure, in order:
   - `<div class="kicker">DP Track · Lesson NN of 12 · {short hook}</div>`
   - `<h1>` + `<p class="subtitle">` one-line hook.
   - `<div class="ribbon">` — Mission link (`../utils/MISSION.md`) + framing: DP is ~15% of
     Google intern questions and a self-identified gap; this is lesson NN of the 12-lesson DP track.
   - `## 1 · The one idea` — the mental model (2–4 sentences).
   - A `.callout` with **Recognition trigger** — when this DP family fires.
   - `## State · Recurrence · Base case` — for THIS family: define the state in words
     ("dp[i] = ..."), the transition, base cases, iteration order, and where the answer lives.
     This 5-part framework is the spine of the whole track — repeat it every lesson.
   - `## Core template` — memorizable **Java** template(s) in `<pre><code>` with `<span class="cmt">`
     comments. State Time/Space Big-O. Show top-down memo AND bottom-up table where instructive;
     show the space-optimized (rolling array) version whenever it exists.
   - `## All the cases` — `<table>` mapping case → LC # → what changes in state/transition,
     THEN a Java snippet for each non-trivial case. THIS IS THE POINT.
   - `<h3>Worked example — dry run</h3>` — concrete small input + inline-SVG
     `<figure class="diagram">` (use `.node/.cell/.edge/.lbl/.wt`, `.done/.cur`) + a
     `<div class="trace">` step-by-step (use `.step`, `.step.now`, `.ptr`). For DP, the diagram is
     usually the DP table/array being filled, or the recursion tree collapsing under memoization.
   - `## Edge-case checklist` — `<ul>` of the traps.
   - `## Check yourself` — 2–3 `.quiz` widgets (contract below).
   - `## Do this next` — primary source (NeetCode / Striver / Aditya Verma / CP-Algorithms per
     RESOURCES.md) + a Java practice ladder of LC numbers, easiest→hardest, flagging Google-reported ones.
   - Final `.callout` "I'm your teacher — ask me": invite questions in chat, advance on **"next"**.
   - `<div class="nav">` — prev / Mission / next per ORDER below.
   - `<script src="../utils/assets/quiz.js"></script>` before `</body>`.
4. All code **Java**, method-body snippets (assume `java.util.*`), matching graph-track style.
   Audience: intermediate (~100 LC solved), Google India SWE intern target. Skip fundamentals.
   HTML-escape `<`, `>`, `&` inside `<pre><code>`.
5. Use `.callout`, `.callout.tip`, `.callout.trap`, `.trace` liberally. Tight prose.
6. NO per-lesson cheat sheet — Lesson 12 ends with the single combined DP cheat sheet.

## Quiz contract (assets/quiz.js)
```html
<div class="quiz" data-answer="1">   <!-- 0-based index of correct option -->
  <div class="q">Question?</div>
  <button class="opt">Wrong A</button>
  <button class="opt">Correct (index 1)</button>
  <button class="opt">Wrong C</button>
  <div class="fb" data-correct="why right" data-wrong="nudge"></div>
</div>
```
Options similar length; don't leak the answer.

## Lesson ORDER & nav
1 `0001-dp-foundations.html` · 2 `0002-1d-dp.html` · 3 `0003-grid-dp.html` ·
4 `0004-knapsack.html` · 5 `0005-string-dp-lcs-family.html` · 6 `0006-palindrome-dp.html` ·
7 `0007-lis-family.html` · 8 `0008-state-machine-dp.html` · 9 `0009-interval-dp.html` ·
10 `0010-tree-dp.html` · 11 `0011-bitmask-dp.html` · 12 `0012-digit-dp-and-cheat-sheet.html`
Nav prev/next = adjacent file. Lesson 1 prev → Mission only (copy graph 0001's nav shape,
but its prev slot may say `<a href="../graph-lessons/0009-advanced-graphs.html">← Graph track</a>`).
Lesson 12 next → "DP track complete 🎉".

---

# Per-lesson content (cover ALL cases listed)

## 0001-dp-foundations — DP Foundations: from brute force to O(n)
Idea: DP = recursion + never solving the same subproblem twice. Overlapping subproblems +
optimal substructure. The 5-step framework: (1) define state, (2) recurrence, (3) base cases,
(4) order/memoization, (5) locate answer. This framework is repeated in EVERY later lesson.
Trigger: "count the ways", "max/min over choices", "can you reach", future depends only on a
compact summary of the past.
Core: Fibonacci/Climbing Stairs (70) shown FOUR ways — naive O(2^n) recursion (draw the
recursion tree, show repeated nodes), top-down memo, bottom-up table, O(1) two-variable rolling.
Cases: Climbing Stairs (70), Min Cost Climbing Stairs (746), N-th Tribonacci (1137),
Fibonacci (509). Contrast memoization vs tabulation (when each wins: memo for sparse/hard-order
states, tab for full tables + space optimization). Explain why greedy fails where DP works.
Worked example: recursion tree of fib(5) collapsing under memoization.

## 0002-1d-dp — 1D DP on sequences
Idea: dp[i] summarizes the best answer for prefix ending at (or up to) i; answer depends on
O(1) or O(i) earlier states.
Trigger: single array/string, "max sum / count ways / min cost" scanning left→right, adjacent
constraints.
Core: House Robber (198) — dp[i] = max(dp[i-1], dp[i-2]+nums[i]), rolled to two variables.
Cases: House Robber (198), House Robber II circular (213, run twice excluding first/last),
Decode Ways (91, string counting + '0' traps), Maximum Subarray / Kadane (53 — dp[i] = max
ending here), Maximum Product Subarray (152, track max AND min), Delete and Earn (740, reduce
to House Robber), Jump Game (55, DP O(n²) vs greedy O(n) — when to abandon DP), Word Break
(139, dp over prefixes + dictionary, preview of string DP).
Worked example: House Robber trace on [2,7,9,3,1] with the dp array filling.

## 0003-grid-dp — Grid DP (2D paths)
Idea: dp[r][c] depends on a constant set of neighbor cells (usually top + left) → fill row by
row. Grid DP = graph DP on a DAG you can iterate in index order.
Trigger: "unique paths", "min/max path sum", robot moves right/down, square/rectangle in matrix.
Core: Unique Paths (62) bottom-up + 1D rolling row.
Cases: Unique Paths (62), Unique Paths II obstacles (63), Min Path Sum (64), Triangle (120,
bottom-up from last row), Maximal Square (221 — dp = min of three neighbors + 1),
Dungeon Game (174 — MUST fill backwards from princess; why forward fails),
Cherry Pickup II (1463, two robots → state (row, c1, c2), advanced),
Longest Common Subsequence preview: 2D table where axes are two strings (bridge to Lesson 5).
Worked example: 3×3 Min Path Sum grid filling with .cell diagram.

## 0004-knapsack — Knapsack: 0/1, unbounded & the loop-order rule
Idea: items + capacity; state = (items considered, capacity used). 0/1: each item once →
iterate capacity DESCENDING in 1D. Unbounded: reuse allowed → ascending. Loop order encodes
combinations (items outer) vs permutations (capacity/target outer).
Trigger: "pick a subset with sum/weight ≤/= target", "fewest coins", "number of ways to make
amount", partition into halves.
Core: 0/1 knapsack 2D → 1D descending; Coin Change (322) unbounded min; Coin Change II (518)
unbounded count.
Cases: Partition Equal Subset Sum (416), Target Sum (494 — reduce +/− signs to subset-sum
count), Last Stone Weight II (1049 — minimize |S1−S2|), Coin Change (322), Coin Change II
(518), Perfect Squares (279), Combination Sum IV (377 — PERMUTATIONS: target outer loop;
contrast with 518 side-by-side), Ones and Zeroes (474, 2D capacity).
Worked example: subset-sum boolean dp on nums=[1,5,11,5], target=11, showing descending-order
necessity (what goes wrong ascending).

## 0005-string-dp-lcs-family — Two-string DP: the LCS family
Idea: state (i, j) = answer for prefix s1[0..i) vs s2[0..j); transition compares s1[i-1] vs
s2[j-1] → match: diagonal + 1; mismatch: best of skip-left / skip-up (or edit ops). One 2D
template covers a dozen problems.
Trigger: TWO strings + "common / convert / delete / interleave / match".
Core: LCS (1143) full 2D table + rolling 1D.
Cases: LCS (1143), Edit Distance (72 — insert/delete/replace), Delete Operation for Two
Strings (583 = m+n−2·LCS), Minimum ASCII Delete Sum (712), Distinct Subsequences (115, count),
Is Subsequence (392, two-pointer beats DP — know when NOT to DP), Interleaving String (97),
Shortest Common Supersequence length (1092, = m+n−LCS), Regular Expression Matching (10) and
Wildcard Matching (44) — the '*' recurrences side by side, at recognition depth.
Worked example: LCS table for "abcde" × "ace" with the diagonal-match arrows in a .cell grid.

## 0006-palindrome-dp — Palindrome DP
Idea: palindromes nest — s[i..j] is a palindrome iff s[i]==s[j] AND s[i+1..j-1] is. State =
substring (i, j), filled by increasing length; or expand-around-center for substrings.
Trigger: "palindrom-" + longest/count/partition/insert/delete.
Core: isPal[i][j] table filled by length; expand-around-center as the O(1)-space alternative.
Cases: Longest Palindromic Substring (5 — both methods), Palindromic Substrings count (647),
Longest Palindromic SUBSEQUENCE (516 — interval state, also = LCS(s, reverse(s)); substring vs
subsequence distinction), Palindrome Partitioning II min cuts (132 — precompute isPal then 1D
cut dp), Minimum Insertion Steps to Make Palindrome (1312 = n − LPS).
Worked example: isPal table for "babad" filling by length with the answer window highlighted.

## 0007-lis-family — Longest Increasing Subsequence & friends
Idea: dp[i] = best chain ending at i, O(n²); OR patience sorting — tails[] + binary search,
O(n log n). "Sort one dimension, LIS the other" unlocks 2D problems.
Trigger: "longest increasing/chain/nested", pairs/envelopes ordering, "minimum removals to
sort".
Core: O(n²) dp AND the tails + lower-bound O(n log n) version (explain why tails works — each
tails[k] = smallest tail of any increasing subsequence of length k+1).
Cases: LIS (300), Number of LIS (673 — carry counts alongside lengths), Longest Divisible
Subset (368, sort then LIS + reconstruction), Maximum Length of Pair Chain (646, DP vs greedy),
Russian Doll Envelopes (354 — sort width ASC, height DESC, then LIS on heights; WHY the desc
tiebreak), Longest String Chain (1048, dp over predecessors with HashMap).
Worked example: patience/tails trace on [10,9,2,5,3,7,101,18].

## 0008-state-machine-dp — State-machine DP (stocks & friends)
Idea: at each index you're in one of a few named states (holding / not-holding / cooldown…);
transitions form a small automaton; dp[i][state]. Draw the machine BEFORE writing code.
Trigger: buy/sell with rules, "cooldown", "fee", "at most k transactions", alternating choices,
paint constraints.
Core: the general stock automaton — hold[i] / free[i] — then specialize.
Cases: Best Time to Buy & Sell Stock (121 — one pass, also as automaton), II unlimited (122),
with Cooldown (309 — three states, the classic), with Fee (714), III at most 2 (123), IV at
most k (188 — dp[k][state], collapse k when k ≥ n/2), Minimum Falling Path Sum (931) and
II (1289 — "Paint House with n colors": state = last column, min over others), Number of
Ways to Paint N×3 Grid (1411 — two-state counting: aba vs abc rows), Wiggle Subsequence
(376 — up/down states). FREE-TIER RULE (track-wide, added 2026-07-04): only free LeetCode
problems — no premium (e.g. 256/265/276 were replaced by 931/1289/1411).
Worked example: cooldown automaton SVG (three .node states with .arrow transitions) + trace on
prices=[1,2,3,0,2].

## 0009-interval-dp — Interval DP (& game DP)
Idea: dp[i][j] = answer for subarray/substring i..j; choose the LAST operation (last balloon
to burst, last cut) so subproblems become independent; iterate by increasing length. O(n³)
typical. Game variants: minimax on the same interval state.
Trigger: "burst/merge/remove/cut over a range", cost depends on chosen split point,
two players alternate taking from ends.
Core: Burst Balloons (312) — pad with 1s, k = last balloon in (i, j).
Cases: Burst Balloons (312), Matrix Chain Multiplication (CP classic, no LC — show it, it IS
the template), Minimum Cost to Cut a Stick (1547 — same as MCM on cut positions), Guess Number
Higher or Lower II (375), Minimum Score Triangulation (1039), Stone Game (877) + Predict the
Winner (486) — game DP: dp[i][j] = best score DIFFERENCE for player to move, Strange Printer
(664, recognition depth).
Worked example: Burst Balloons on [3,1,5,8] — interval table by length + the "last balloon"
choice trace.

## 0010-tree-dp — DP on trees
Idea: postorder DFS returns a small tuple per node summarizing its subtree; parent combines
children. State = (node, small enum) — e.g. robbed / not-robbed. This is Lesson 6 of the
pattern course (tree traversal) meeting DP.
Trigger: tree + "max/min/count over paths or subtrees", "camera/coin placement", non-adjacent
selection on a tree.
Core: House Robber III (337) — int[]{rob, skip} returned from DFS.
Cases: House Robber III (337), Diameter of Binary Tree (543 — return height, update global),
Binary Tree Maximum Path Sum (124 — the return-vs-record distinction: path through node vs
path ending at node), Longest Univalue Path (687), Binary Tree Cameras (968 — three states:
covered/has-camera/needs), Distribute Coins (979 — flow = excess), Sum of Distances in Tree
(834 — rerooting technique, recognition depth for CP).
Worked example: House Robber III on a 5-node tree with per-node {rob, skip} pairs on an SVG tree.

## 0011-bitmask-dp — Bitmask DP
Idea: when n ≤ ~20, a subset IS an int; dp indexed by mask. Iterate masks 0..2^n−1 (a mask's
subsets are always smaller numbers). Assignment problems: dp[mask] over "who's used";
TSP: dp[mask][last].
Trigger: n ≤ 20 + "assign/visit/partition all", "every permutation would work but n! is too big".
Core: bit toolkit recap (check/set/clear bit, `mask & (1<<i)`, `Integer.bitCount`) then
assignment dp[mask] template and TSP dp[mask][last] template.
Cases: Partition to K Equal Sum Subsets (698), Number of Ways to Wear Different Hats (1434 —
mask over PEOPLE not hats: mask the smaller side), Minimum XOR Sum of Two Arrays (1879),
Smallest Sufficient Team (1125; NOT 943 — LC 943 is Find the Shortest Superstring, a dp[mask][last] problem), Traveling Salesman template (CP: shortest Hamiltonian path),
Maximum Students Taking Exam (1349, row-by-row masks), submask enumeration idiom
`for (int sub = mask; sub > 0; sub = (sub-1) & mask)` and its O(3^n) total cost.
Worked example: TSP dp[mask][last] on a 4-city distance matrix, tracing a few mask expansions.

## 0012-digit-dp-and-cheat-sheet — Digit DP, DP-optimization map & THE CHEAT SHEET
Idea: count numbers in [0, N] with a digit property by building digits left→right with a
`tight` flag (still glued to N's prefix?) + property state; memoize on (pos, state, tight).
Trigger: "how many integers ≤ N such that …", ranges up to 10^18 (iterating is impossible).
Core: the digit-DP template (pos, tight, state) with memo, in Java.
Cases: Numbers At Most N Given Digit Set (902), Non-negative Integers without Consecutive
Ones (600), Number of Digit One (233), Count of Integers (from CP, [L,R] = f(R)−f(L−1) trick).
THEN a short `## DP-optimization map (CP recognition depth)` section — one paragraph + example
each, NO full implementations: monotonic-deque / sliding-window-max optimization (LC 1425
Constrained Subsequence Sum), prefix-max/sum optimization, and name-check Knuth / divide &
conquer / convex-hull-trick as Codeforces-level.
THEN `## DP track cheat sheet — all 12 families`: a single `<table>`, one row per lesson —
Family | Trigger | State dp[...] = | Transition (1 line) | Time | Canonical LC#. Print-friendly,
the one revision card for the whole track.
Worked example: digit-DP trace counting numbers ≤ 234 using digits {1,2,3}.
Nav next → "DP track complete 🎉".
