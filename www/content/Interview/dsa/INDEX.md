# Data Structures & Algorithms — Complete Course Index

> Master Data Structures and Algorithms from absolute 0 level to competitive mastery.

---

## 🏛️ Part 1: Core Data Structure Foundations (0-Level)

### 1 · Arrays & Strings Foundations
| # | Lesson | Topic |
|---|--------|-------|
| 01 | Dynamic Arrays & Amortized Analysis | Memory layout, cache lines, geometric doubling, amortized O(1) | [Lesson 01](arrays-and-strings-lessons/0001-dynamic-arrays-and-amortized-analysis.html) |
| 02 | Kadane's Algorithm & Subarrays | Maximum subarray sum, state transition, maximum product subarray | [Lesson 02](arrays-and-strings-lessons/0002-kadane-and-subarray-patterns.html) |
| 03 | Dutch National Flag Algorithm | 3-way in-place partitioning, 3 pointers, invariant maintenance | [Lesson 03](arrays-and-strings-lessons/0003-dutch-national-flag-and-partitioning.html) |
| 04 | String Internals & StringBuilder | Immutability, String Constant Pool, avoiding O(N²) string trap | [Lesson 04](arrays-and-strings-lessons/0004-string-internals-and-stringbuilder.html) |
| 05 | KMP & Rabin-Karp String Matching | Longest Prefix Suffix (LPS), linear pattern search, rolling hash | [Lesson 05](arrays-and-strings-lessons/0005-string-matching-kmp-and-rabin-karp.html) |

### 2 · LinkedList Foundations
| # | Lesson | Topic |
|---|--------|-------|
| 01 | Pointer Mechanics & Sentinel Nodes | Node pointers, memory model, dummy sentinel heads | [Lesson 01](linkedlist-foundations-lessons/0001-singly-and-doubly-linked-lists.html) |
| 02 | LRU & LFU Cache Implementation | Combining HashMap + DoublyLinkedList for O(1) cache get/put | [Lesson 02](linkedlist-foundations-lessons/0002-lru-and-lfu-cache-implementation.html) |

### 3 · Stack & Queue Foundations
| # | Lesson | Topic |
|---|--------|-------|
| 01 | Stack Foundations & MinStack | LIFO principle, balanced parentheses, O(1) MinStack | [Lesson 01](stack-queue-foundations-lessons/0001-stack-foundations-and-applications.html) |
| 02 | Queues, Circular Buffers & Deques | FIFO principle, circular ring buffer, Queue using two stacks | [Lesson 02](stack-queue-foundations-lessons/0002-queue-and-circular-buffer.html) |

### 4 · Sorting & Searching Algorithms
| # | Lesson | Topic |
|---|--------|-------|
| 01 | Comparison Sorts & Stability | Bubble, Selection, Insertion Sort, sorting stability | [Lesson 01](sorting-and-searching-lessons/0001-comparison-sorts-and-stability.html) |
| 02 | Divide & Conquer: Merge & Quick Sort | Recurrence relations, Lomuto/Hoare partition, QuickSelect O(N) | [Lesson 02](sorting-and-searching-lessons/0002-divide-and-conquer-merge-and-quick-sort.html) |
| 03 | Non-Comparison Sorts | Breaking O(N log N): Counting Sort, Radix Sort, Bucket Sort | [Lesson 03](sorting-and-searching-lessons/0003-non-comparison-sorts.html) |

---

## ⚡ Part 2: Classic Algorithmic Patterns

### 5 · Binary Search
| # | Lesson | Topic |
|---|--------|-------|
| 01 | Boundary Template | Inclusive vs exclusive range, finding lower/upper bounds | [Lesson 01](binary-search-lessons/0001-boundary-template.html) |
| 02 | Rotated & Modified Arrays | Search in rotated sorted array, peak element finding | [Lesson 02](binary-search-lessons/0002-rotated-and-modified.html) |
| 03 | Binary Search on Answer | Monotonic search spaces, capacity/allocation optimization | [Lesson 03](binary-search-lessons/0003-binary-search-on-answer.html) |

### 6 · Two Pointers & Sliding Window
| # | Track | Lessons |
|---|-------|---------|
| — | **Two Pointers** | [Opposite Ends](two-pointers-lessons/0001-opposite-ends.html), [Same Direction](two-pointers-lessons/0002-same-direction-and-partition.html), [K-Sum Family](two-pointers-lessons/0003-k-sum-family.html) |
| — | **Sliding Window** | [Fixed Size](sliding-window-lessons/0001-fixed-size-windows.html), [Variable Size](sliding-window-lessons/0002-variable-size-windows.html), [Counting & Deque](sliding-window-lessons/0003-counting-windows-and-deque.html) |
| — | **Fast & Slow** | [Cycle Detection](fast-slow-lessons/0001-cycle-detection.html), [Gap Tricks](fast-slow-lessons/0002-gap-tricks-and-applications.html) |
| — | **Prefix Sum** | [Prefix & Hashmap](prefix-sum-lessons/0001-prefix-basics-and-hashmap.html), [2D Difference Array](prefix-sum-lessons/0002-2d-difference-and-products.html) |
| — | **Cyclic Sort** | [O(N) In-place Index Mapping](cyclic-sort-lessons/0001-cyclic-sort.html) |

### 7 · Trees & Graphs
| # | Track | Lessons |
|---|-------|---------|
| — | **Binary Trees** | [Traversals](tree-lessons/0001-tree-foundations-and-recursive-traversals.html), [Iterative & Level-order](tree-lessons/0002-iterative-traversals-and-level-order.html), [Recursion Patterns](tree-lessons/0003-recursion-patterns.html), [LCA & Paths](tree-lessons/0004-lca-and-path-problems.html), [BST](tree-lessons/0005-bst.html), [Serialization](tree-lessons/0006-construction-serialization-and-cheat-sheet.html) |
| — | **Graphs** | [Foundations](graph-lessons/0001-graph-foundations.html), [DFS Cycles](graph-lessons/0002-dfs-traversal-and-cycles.html), [BFS Shortest Path](graph-lessons/0003-bfs-and-shortest-paths.html), [Grid Graphs](graph-lessons/0004-grid-graphs.html), [Topological Sort](graph-lessons/0005-topological-sort.html), [Union Find](graph-lessons/0006-union-find.html), [Dijkstra](graph-lessons/0007-weighted-shortest-paths.html), [MST](graph-lessons/0008-minimum-spanning-tree.html), [Advanced](graph-lessons/0009-advanced-graphs.html) |
| — | **Trie** | [Prefix Trees](trie-lessons/0001-trie-basics.html), [Advanced Bitwise Trie](trie-lessons/0002-trie-advanced.html) |

### 8 · Dynamic Programming (12 Master Lessons)
| # | Topic | File |
|---|-------|------|
| 01 | DP Foundations & Memoization | [Lesson 01](dp-lessons/0001-dp-foundations.html) |
| 02 | 1D Dynamic Programming | [Lesson 02](dp-lessons/0002-1d-dp.html) |
| 03 | 2D Grid DP & Paths | [Lesson 03](dp-lessons/0003-grid-dp.html) |
| 04 | Knapsack Family (0/1, Unbounded) | [Lesson 04](dp-lessons/0004-knapsack.html) |
| 05 | String DP & Longest Common Subsequence | [Lesson 05](dp-lessons/0005-string-dp-lcs-family.html) |
| 06 | Palindromic DP Substrings | [Lesson 06](dp-lessons/0006-palindrome-dp.html) |
| 07 | Longest Increasing Subsequence (LIS) | [Lesson 07](dp-lessons/0007-lis-family.html) |
| 08 | State Machine DP (Stock Trading) | [Lesson 08](dp-lessons/0008-state-machine-dp.html) |
| 09 | Interval / Matrix Chain DP | [Lesson 09](dp-lessons/0009-interval-dp.html) |
| 10 | Tree DP & Subtree Aggregations | [Lesson 10](dp-lessons/0010-tree-dp.html) |
| 11 | Bitmask DP (Subset Travelling Salesman) | [Lesson 11](dp-lessons/0011-bitmask-dp.html) |
| 12 | Digit DP & Master Cheat Sheet | [Lesson 12](dp-lessons/0012-digit-dp-and-cheat-sheet.html) |

---

## 🚀 Part 3: Advanced Competitive Structures

### 9 · Advanced Range Queries & Connectivity
| # | Track | Lessons |
|---|-------|---------|
| — | **Segment Trees** | [Range Queries & Updates](advanced-trees-and-range-queries-lessons/0001-segment-trees.html) |
| — | **Fenwick Tree (BIT)** | [Lowbit Math & Prefix Sums](advanced-trees-and-range-queries-lessons/0002-fenwick-tree-binary-indexed-tree.html) |
| — | **Balanced BSTs** | [AVL Rotations & Red-Black Invariants](advanced-trees-and-range-queries-lessons/0003-balanced-bst-avl-and-red-black.html) |
| — | **Disjoint Set Union** | [Path Compression & Rank Optimization](disjoint-set-union-lessons/0001-disjoint-set-union-fundamentals.html) |

---

## ☕ Supporting Tracks
- **Java Internals for DSA:** [Primitives vs Objects](java-lessons/0001-int-vs-integer.html) · [Queue/Deque/Stack](java-lessons/0002-queue-deque-stack.html) · [PriorityQueue & Comparators](java-lessons/0003-priorityqueue-and-comparators.html)
- **Monotonic Stack:** [Next Greater Element](monotonic-stack-lessons/0001-next-greater-family.html) · [Largest Rectangle in Histogram](monotonic-stack-lessons/0002-histograms-and-hard-applications.html)
- **Backtracking:** [Choose-Explore-Unchoose](backtracking-lessons/0001-choose-explore-unchoose.html) · [Combinations & Permutations](backtracking-lessons/0002-combination-sum-and-strings.html) · [N-Queens & Sudoku](backtracking-lessons/0003-grid-and-constraint-puzzles.html)