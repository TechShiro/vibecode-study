# Lesson Authoring Spec (shared contract)

Every lesson in `./lessons/` MUST follow this exact contract so the whole course
reads as one consistent, dark-mode-capable, beautiful set. Author by COPYING the
structure of `./lessons/0001-linkedlist-in-place-reversal.html` and the classes in
`./assets/styles.css`. Do not invent new CSS — reuse existing classes.

## Hard requirements (every lesson)
1. `<head>` links `../assets/styles.css` AND `<script src="../assets/theme.js"></script>`.
2. First element in `<body>`: `<button class="theme-toggle" aria-label="Toggle dark mode"></button>` (dark mode in EVERY lesson).
3. Structure, in order:
   - `<div class="kicker">DSA Patterns · Lesson NN of 15</div>` (core) or `DSA Patterns · Bonus Lesson` (bonus 16+).
   - `<h1>` pattern name, `<p class="subtitle">` one-line hook.
   - `<div class="ribbon">` with a Mission link (`../MISSION.md`) and the recognition framing.
   - `## The one idea` — the mental model (2–4 sentences).
   - A `.callout` with **Recognition trigger** (when this pattern fires in an interview/contest).
   - `## Core template` — the memorizable **Java** template in a `<pre><code>` block, with `<span class="cmt">` comments. State **Time/Space Big-O**.
   - `## All the cases` — a `<table>` mapping each case → LeetCode # → what changes, THEN a `<pre>` Java snippet for each non-trivial case. THIS IS THE POINT — cover every case listed below.
   - `## Edge-case checklist` — `<ul>` of the traps.
   - `## Check yourself` — 2–3 `.quiz` widgets (see quiz contract below).
   - `## Do this next` — primary source link (prefer NeetCode/LeetCode/CP-Algorithms/Codeforces from `../RESOURCES.md`) + a Java practice ladder of LC numbers.
   - A final `.callout` reminding the learner I'm their teacher (ask questions) and to say "next" to advance.
   - `<div class="nav">` with prev / Mission / next per the ORDER table below.
   - `<script src="../assets/quiz.js"></script>` before `</body>`.
4. All code in **Java**. Audience: **intermediate**, targeting **FAANG interviews + competitive programming**. Skip fundamentals.
5. Use `.callout`, `.callout.tip`, `.callout.trap`, `.trace` where they aid understanding. Keep prose tight — working memory is small.
6. NO per-lesson cheat sheet. (The combined cheat sheet lives only in Lesson 15.)

## Quiz contract (from assets/quiz.js)
```html
<div class="quiz" data-answer="1">   <!-- 0-based index of correct option -->
  <div class="q">Question?</div>
  <button class="opt">Wrong A</button>
  <button class="opt">Correct (index 1)</button>
  <button class="opt">Wrong C</button>
  <div class="fb" data-correct="why right" data-wrong="nudge"></div>
</div>
```
Keep options similar length — don't leak the answer via formatting.

## Lesson ORDER & nav (titles)
Core (Lesson NN of 15):
1 LinkedList In-place Reversal · 2 Monotonic Stack · 3 Top K Elements ·
4 Overlapping Intervals · 5 Modified Binary Search · 6 Binary Tree Traversal ·
7 Depth-First Search · 8 Breadth-First Search · 9 Matrix Traversal ·
10 Backtracking · 11 Dynamic Programming · 12 Sliding Window · 13 Prefix Sum ·
14 Two Pointers · 15 Fast & Slow Pointers
Bonus (Bonus Lesson): 16 Union-Find (DSU) · 17 Trie · 18 Bit Manipulation ·
19 Greedy · 20 Topological Sort · 21 Cyclic Sort
Nav "prev/next" point to the adjacent file: `NNNN-slug.html`. Lesson 15's next → `0016-union-find.html`. Lesson 21's next → "Course complete 🎉".

---

# Per-lesson content (cases to cover — ALL of them)

## 0002-monotonic-stack — Monotonic Stack
Idea: a stack kept sorted (incr/decr) so each element is pushed/popped once → O(n). Use `Deque<Integer>` as stack (store indices).
Trigger: "next/previous greater/smaller element", histogram, "span", "warmer temperature".
Core: decreasing stack for Next Greater Element.
Cases: Next Greater Element I (496), Next Greater Element II circular (503), Daily Temperatures (739), Largest Rectangle in Histogram (84), Trapping Rain Water (42, stack variant), Sum of Subarray Minimums (907), Online Stock Span (901), Remove K Digits / monotonic for lexicographic min (402), Previous smaller element (generic). Explain increasing vs decreasing choice and storing indices vs values.

## 0003-top-k-elements — Top K Elements
Idea: a size-k heap (PriorityQueue) keeps the k best in O(n log k); or Quickselect for O(n) average. Min-heap for k-largest, max-heap for k-smallest.
Trigger: "k largest/smallest/most frequent/closest".
Core: Kth Largest Element (215) via min-heap of size k AND via Quickselect.
Cases: Kth Largest (215), Top K Frequent Elements (347, heap + bucket sort O(n)), K Closest Points to Origin (973), Kth Largest in a Stream (703), Merge k Sorted Lists (23, heap), Sort Characters by Frequency (451), Find K Pairs with Smallest Sums (373). Note heap comparator direction is the classic bug.

## 0004-overlapping-intervals — Overlapping Intervals (Merge Intervals)
Idea: sort by start, then sweep merging when `cur.start <= prev.end`.
Trigger: intervals/ranges/meetings, "merge", "overlap", "minimum rooms".
Core: Merge Intervals (56).
Cases: Merge Intervals (56), Insert Interval (57), Interval List Intersections (986, two pointers), Non-overlapping Intervals / erase minimum (435, greedy sort by end), Meeting Rooms (252), Meeting Rooms II / min rooms (253, min-heap of end times OR sweep-line/chronological events), Employee Free Time (759). Contrast sort-by-start vs sort-by-end.

## 0005-modified-binary-search — Modified Binary Search
Idea: binary search isn't just on sorted arrays — it's on any monotonic predicate. Two templates: lower/upper bound, and "binary search on the answer".
Trigger: sorted/rotated array, "minimum X such that feasible(X)", "find boundary".
Core: lower_bound / first-true predicate template (avoid off-by-one with `lo<hi`, `mid=lo+(hi-lo)/2`).
Cases: Classic search (704), First/Last Position (34), Search in Rotated Sorted Array (33) and with duplicates (81), Find Minimum in Rotated Sorted Array (153/154), Find Peak Element (162), Search Insert Position (35), Sqrt(x) (69), Koko Eating Bananas (875, search on answer), Capacity to Ship Packages in D Days (1011), Median of Two Sorted Arrays (4, partition search). Emphasize predicate monotonicity.

## 0006-binary-tree-traversal — Binary Tree Traversal
Idea: visit order (pre/in/post/level) determines what you can compute. Recursive is natural; iterative needs an explicit stack; Morris gives O(1) space.
Trigger: tree + "traverse/serialize/construct/level".
Core: recursive inorder + iterative inorder with a stack.
Cases: Preorder/Inorder/Postorder recursive (144/94/145), Iterative inorder & preorder (stack), Level Order (102) + Zigzag (103), Right Side View (199), Construct from Preorder+Inorder (105), Serialize/Deserialize (297), Morris Inorder (O(1) space), Vertical Order (314/987), Binary Tree Maximum Path Sum (124, postorder DP). Note inorder of BST is sorted.

## 0007-depth-first-search — Depth-First Search (DFS)
Idea: go deep via recursion/explicit stack + visited set. Works on trees, graphs, grids.
Trigger: "connected", "path exists", "all paths", "cycle", "islands".
Core: graph DFS with adjacency list + visited.
Cases: Number of Islands (200, grid DFS), Clone Graph (133), Connected Components / Number of Provinces (547), Cycle Detection undirected & directed (color/white-gray-black), Course Schedule cycle check (207), All Paths Source→Target (797), Path Sum II (113), Word Search (79, DFS + backtracking link), Pacific Atlantic Water Flow (417), Surrounded Regions (130). Recursion depth / stack-overflow caveat → iterative stack.

## 0008-breadth-first-search — Breadth-First Search (BFS)
Idea: a queue explores level by level → shortest path in unweighted graphs. Mark visited at enqueue time.
Trigger: "shortest/fewest steps", "level", "nearest", "spread/rotting".
Core: grid/graph BFS with queue + level-size loop.
Cases: Binary Tree Level Order (102), Shortest Path in Binary Matrix (1091), Rotting Oranges multi-source (994), Word Ladder (127), 01 Matrix multi-source (542), Open the Lock (752), Knight Minimum Moves, 0-1 BFS (deque) for 0/1 weights, Topological Sort via Kahn's algorithm (indegree queue, 207/210). Contrast BFS vs DFS for shortest path; note visited-at-enqueue bug.

## 0009-matrix-traversal — Matrix Traversal
Idea: a 2D grid is a graph; plus index-geometry patterns (spiral/rotate/transpose). Use a `int[][] dirs` array.
Trigger: grid/matrix problems, "spiral", "rotate", "flood fill", "regions".
Core: 4-directional neighbor iteration with `dirs` + bounds check.
Cases: Flood Fill (733), Number of Islands (200), Spiral Matrix (54) + Spiral Matrix II (59), Rotate Image 90° in place (48, transpose+reverse), Set Matrix Zeroes O(1) (73), Game of Life (289, in-place encoding), Diagonal Traverse (498), Search a 2D Matrix (74, binary search), Word Search (79). Directions array + visited or in-place marking.

## 0010-backtracking — Backtracking
Idea: build a candidate incrementally; choose → explore → un-choose; prune invalid branches early.
Trigger: "all combinations/permutations/subsets", "generate", constraint puzzles.
Core: the choose/explore/unchoose template; dedup with sorting + skip.
Cases: Subsets (78) & Subsets II with dups (90), Permutations (46) & Permutations II (47), Combinations (77), Combination Sum (39) & II (40), Palindrome Partitioning (131), Generate Parentheses (22), N-Queens (51), Sudoku Solver (37), Word Search (79), Letter Combinations of a Phone Number (17). Emphasize pruning and the dedup-skip idiom `if(i>start && a[i]==a[i-1]) continue;`.

## 0011-dynamic-programming — Dynamic Programming (DP)
Idea: optimal substructure + overlapping subproblems → define a state, a recurrence, base cases; memoize (top-down) or tabulate (bottom-up). Largest pattern; teach the TAXONOMY.
Trigger: "max/min/count ways", "can you reach", choices with overlapping subproblems.
Core: top-down memo vs bottom-up table, using Coin Change (322) as the worked example.
Cases (by family): 1D — Climbing Stairs (70), House Robber (198), Coin Change (322), Word Break (139); 2D grid — Unique Paths (62), Min Path Sum (64); Knapsack — 0/1 Subset Sum (416), Unbounded (coin change II 518); Sequences — LIS (300, O(n log n) patience), LCS (1143), Edit Distance (72); Strings — Longest Palindromic Substring (5), Palindromic Substrings (647); Intervals — Burst Balloons (312); State machine — Best Time to Buy/Sell Stock with cooldown (309); Bitmask DP — Traveling Salesman intro. Show space optimization (rolling array). Keep it a map, not a textbook.

## 0012-sliding-window — Sliding Window
Idea: maintain a window [l,r] over a sequence; expand r, shrink l to keep an invariant → O(n). Fixed-size vs variable-size.
Trigger: "subarray/substring", "longest/shortest/contains", "at most k".
Core: variable-window template (expand then while-invalid shrink) — Longest Substring Without Repeating Characters (3).
Cases: Max Sum Subarray of size K (fixed), Longest Substring Without Repeating Characters (3), Minimum Window Substring (76), Longest Substring with At Most K Distinct (340), Longest Repeating Character Replacement (424), Permutation in String (567) / Find All Anagrams (438), Fruit Into Baskets (904), Subarrays with K Different Integers (992, atMost(K)-atMost(K-1) trick), Sliding Window Maximum (239, monotonic deque). Fixed vs variable decision.

## 0013-prefix-sum — Prefix Sum
Idea: precompute cumulative sums so any range query is O(1): `sum(i,j)=P[j+1]-P[i]`. Combine with a hashmap of prefix counts for "subarray with property".
Trigger: "range sum", "subarray sum equals", "divisible by k", immutable repeated queries.
Core: 1D prefix array + Subarray Sum Equals K (560) with HashMap.
Cases: Range Sum Query Immutable (303), Subarray Sum Equals K (560), Contiguous Array equal 0/1 (525), Subarray Sums Divisible by K (974), Continuous Subarray Sum (523), Product of Array Except Self (238, prefix/suffix products), 2D Range Sum / Matrix Region Sum (304), Range Update via Difference Array (1109), Prefix XOR for subarray XOR. Note the empty-prefix base `map.put(0,1)`.

## 0014-two-pointers — Two Pointers
Idea: two indices moving under a rule, replacing an O(n^2) scan with O(n). Opposite-ends vs same-direction (fast/slow) vs partition.
Trigger: sorted array + pair/triple, "in place" array compaction, palindrome.
Core: opposite-ends template — Two Sum II sorted (167).
Cases: Two Sum II (167), 3Sum (15) & 3Sum Closest (16), Container With Most Water (11), Trapping Rain Water (42, two-pointer), Remove Duplicates from Sorted Array (26), Move Zeroes (283), Sort Colors / Dutch National Flag (75), Valid Palindrome (125), Merge Sorted Array (88, from the back), Squares of a Sorted Array (977). Note this overlaps Fast & Slow (Lesson 15) for linked lists.

## 0015-fast-and-slow-pointers — Fast & Slow Pointers  (+ COMBINED CHEAT SHEET)
Idea: two pointers at different speeds; the gap they create detects cycles and finds midpoints in O(1) space (Floyd's tortoise & hare).
Trigger: linked-list cycle, "find the duplicate", "middle", "happy number".
Core: Floyd's cycle detection + finding the cycle start (reset one pointer to head).
Cases: Linked List Cycle (141), Cycle II find start (142), Middle of the Linked List (876), Happy Number (202), Find the Duplicate Number (287, treat array as linked list), Palindrome Linked List (234, find mid + reverse — link back to Lesson 1), Reorder List (143), Remove Nth Node From End (19, two-pointer gap). 
THEN add a final `## Course cheat sheet — all 15 patterns` section: a `<table>` with columns Pattern | Trigger | Core template (1 line) | Time/Space | Canonical LC#, one row per pattern 1–15. This is the single combined revision card. Make it print-friendly. Add a closing note that bonus patterns 16–21 follow.

---

# Bonus patterns (16–21) — important beyond the core 15

## 0016-union-find — Union-Find (Disjoint Set Union)
Idea: near-O(1) merge/connectivity via parent array with path compression + union by rank/size.
Trigger: "connected/groups/provinces", dynamic connectivity, undirected cycle, Kruskal MST.
Cases: Number of Provinces (547), Redundant Connection undirected cycle (684), Accounts Merge (721), Number of Connected Components (323), Graph Valid Tree (261), Kruskal's MST sketch, Number of Islands II (online). Show the DSU class template.

## 0017-trie — Trie (Prefix Tree)
Idea: a tree keyed by characters for O(L) prefix queries.
Trigger: "prefix", dictionary/autocomplete, many-word search, bitwise-max via binary trie.
Cases: Implement Trie (208), Add and Search Word with '.' wildcard (211), Word Search II (212, trie+DFS on grid), Replace Words (648), Longest Word in Dictionary (720), Maximum XOR of Two Numbers (421, binary trie). Show the TrieNode template (children array vs map).

## 0018-bit-manipulation — Bit Manipulation
Idea: integers as bitsets; XOR/AND/shift tricks for O(1) space or subset enumeration.
Trigger: "without extra space", parity, "single number", subset masks, powers of two.
Cases: Single Number XOR (136), Single Number II (137) & III (260), Number of 1 Bits (191), Counting Bits DP (338), Reverse Bits (190), Power of Two (231), Sum of Two Integers without + (371), Subsets via bitmask enumeration (78), Missing Number (268). List the essential tricks (`x&-x`, `x&(x-1)`, masks).

## 0019-greedy — Greedy
Idea: make the locally optimal choice with a proof (exchange argument) that it stays globally optimal; usually sort + sweep or a heap.
Trigger: "minimum/maximum number of", scheduling, "can you reach", when a greedy choice is provably safe.
Cases: Jump Game (55) & Jump Game II (45), Gas Station (134), Task Scheduler (621), Assign Cookies (455), Partition Labels (763), Non-overlapping Intervals (435), Minimum Number of Arrows (452), Huffman/merge-cost sketch. Stress: greedy needs justification; contrast with DP when greedy fails.

## 0020-topological-sort — Topological Sort
Idea: linear ordering of a DAG respecting dependencies; Kahn's (BFS indegree) or DFS post-order. Detects cycles.
Trigger: "ordering with prerequisites/dependencies", build order, "is it a DAG".
Cases: Course Schedule (207) & II (210), Alien Dictionary (269), Minimum Height Trees (310, peeling leaves), Parallel Courses (1136), Sequence Reconstruction (444). Show both Kahn and DFS; cycle → no valid order.

## 0021-cyclic-sort — Cyclic Sort
Idea: when values are in a known range [1..n] (or [0..n]), place each at index value−1 in O(n) with O(1) space; missing/duplicates fall out.
Trigger: array of n integers in range 1..n, "find missing/duplicate/all missing".
Cases: Missing Number (268), Find All Numbers Disappeared (448), Find the Duplicate (287, cyclic-sort view), Find All Duplicates (442), First Missing Positive (41), Set Mismatch (645). Show the swap-into-place template. Nav next → "Course complete 🎉".
