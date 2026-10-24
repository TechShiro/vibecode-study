# Database Management Systems (DBMS) — Zero to Deep Mastery

Comprehensive, zero-level to deep-dive mastery of Database Management Systems. Covering formal relational foundations, normal forms, transaction theory, ACID internals, MVCC, recovery protocols (ARIES/WAL), storage engine mechanics (Slotted Pages, B+ Trees, LSM Trees), and query optimizer execution.

---

## Course Structure Overview

| Module | Focus Area | Lessons |
| :--- | :--- | :--- |
| **Module A** | Foundations, ANSI-SPARC Architecture & Relational Theory | Lessons 01 – 03 |
| **Module B** | Functional Dependencies, Normalization & Denormalization | Lessons 04 – 06 |
| **Module C** | Transactions, Serializability, Concurrency & Crash Recovery | Lessons 07 – 12 |
| **Module D** | Storage Engine, Indexing Structures & Query Optimization | Lessons 13 – 17 |

---

## Complete Lesson Index

### Module A · Foundations & Data Modeling
1. [0001 · DBMS Architecture & ANSI-SPARC 3-Tier Model](lessons/0001-dbms-architecture-and-ansi-sparc-3-tier.html)
   - File Systems vs DBMS, ANSI-SPARC 3-Tier Schema, Logical vs Physical Data Independence, DBMS Engine Subsystems.
2. [0002 · ER Modeling & Relational Schema Mapping](lessons/0002-er-modeling-and-relational-mapping.html)
   - Strong vs Weak Entities, Cardinality (1:1, 1:N, M:N), Participation constraints, ER to Relational schema translation rules.
3. [0003 · Relational Algebra & Relational Calculus](lessons/0003-relational-algebra-and-calculus.html)
   - Primitives (Selection, Projection, Cross Product, Union, Difference), Joins (Theta, Natural, Division), TRC vs DRC, Codd's Theorem.

### Module B · Database Normalization & Schema Rigor
4. [0004 · Functional Dependencies & Armstrong's Axioms](lessons/0004-functional-dependencies-and-armstrong-axioms.html)
   - FD Definition, Armstrong's Axioms (Sound & Complete), Attribute Closure Algorithm ($X^+$), Candidate Key Discovery, Canonical Cover.
5. [0005 · Normalization: 1NF, 2NF, 3NF & BCNF](lessons/0005-normalization-1nf-to-bcnf.html)
   - Update/Insert/Delete Anomalies, 1NF to BCNF step-by-step rules, Lossless Join Decomposition vs Dependency Preservation. *(Includes Abdul Bari Video)*
6. [0006 · 4NF, 5NF & Pragmatic Denormalization](lessons/0006-advanced-normalization-and-denormalization.html)
   - Multivalued Dependencies (MVD) & 4NF, Join Dependencies & 5NF, Real-world OLTP vs OLAP Denormalization, Star & Snowflake schemas.

### Module C · Transactions, Concurrency & Recovery
7. [0007 · Transactions & ACID Properties](lessons/0007-transactions-and-acid-properties.html)
   - Transaction Lifecycle States, Mechanistic breakdown of Atomicity, Consistency, Isolation, and Durability, Subsystem roles.
8. [0008 · Schedules, Serializability & Precedence Graphs](lessons/0008-schedules-and-serializability.html)
   - Conflicting Operations, Conflict Serializability, Precedence Graph cycle detection, View Serializability & Blind Writes, Strict/Cascadeless.
9. [0009 · Concurrency Control & Two-Phase Locking (2PL)](lessons/0009-concurrency-control-and-2pl.html)
   - Read/Write Anomaly Matrix, Shared vs Exclusive Locks, Growing vs Shrinking Phases, Strict/Rigorous 2PL, Multiple Granularity Locking (IS/IX).
10. [0010 · Deadlock Handling in Databases](lessons/0010-deadlock-handling-in-databases.html)
    - Wait-For Graph (WFG) cycle detection, Victim Selection strategies, Wait-Die vs Wound-Wait Timestamp Prevention schemes, Lock timeouts.
11. [0011 · MVCC & ANSI SQL Isolation Levels](lessons/0011-mvcc-and-sql-isolation-levels.html)
    - Read Uncommitted, Read Committed, Repeatable Read, Serializable, Postgres `xmin`/`xmax`, InnoDB Undo Logs, Write Skew anomaly.
12. [0012 · Database Crash Recovery & ARIES Algorithm](lessons/0012-database-recovery-and-wal-aries.html)
    - STEAL/NO-FORCE buffer policies, Write-Ahead Logging (WAL) Protocol, LSNs, Fuzzy Checkpointing, ARIES 3 Phases (Analysis, Redo, Undo).

### Module D · Storage Engine, Indexing & Query Optimization
13. [0013 · Storage Engine Architecture & Slotted Pages](lessons/0013-storage-engine-and-page-layout.html)
    - Disk block architecture, Slotted Page layout (Header, Slot Array, Free Space, Tuples), Row-Store (NSM) vs Column-Store (DSM).
14. [0014 · Indexing Foundations: Clustered vs Secondary](lessons/0014-indexing-foundations-clustered-vs-secondary.html)
    - Dense vs Sparse Indexes, Clustered Index vs Secondary Index, Bookmark lookup penalty, Covering Index & Leftmost Prefix rule.
15. [0015 · B-Trees & B+ Trees Deep Dive](lessons/0015-b-trees-and-b-plus-trees-deep-dive.html)
    - Why Disk-Oriented M-way Search Trees, B-Tree vs B+ Tree, Invariants, Node Splitting on Insert, Node Merging on Delete. *(Includes Abdul Bari Video)*
16. [0016 · Hash Indexing & Log-Structured Merge (LSM) Trees](lessons/0016-hash-indexing-and-lsm-trees.html)
    - Extendible Hashing (Global/Local depth), B+ Tree Write Amplification, LSM Tree architecture (MemTable, WAL, SSTables, Bloom Filters).
17. [0017 · Query Execution Engine & Cost-Based Optimizer](lessons/0017-query-execution-engine-and-optimization.html)
    - Parser, AST, Logical Plan (Predicate Pushdown), Cost-Based Optimizer, Join Algorithms (Nested Loop, Hash, Sort-Merge), Volcano Iterator, `EXPLAIN ANALYZE`.
