# DSA Patterns Glossary

Canonical terms for this workspace. All lessons adhere to these. Terms are added
only once the learner can use them correctly.

## Terms

**Pattern**:
A reusable problem-solving template (one of the 15) that, once recognized, dictates the data structure and loop/recursion shape of the solution.
_Avoid_: trick, approach

**In-place**:
Transforming a structure using O(1) extra space by rewiring existing nodes/elements rather than allocating a new structure.
_Avoid_: without memory, no new array

**Node re-pointing**:
Changing a linked-list node's `next` reference (not its value) to restructure the list. The basis of in-place LinkedList reversal.
_Avoid_: moving nodes, swapping data

**Dummy (sentinel) node**:
A throwaway head node placed before the real head so that operations on the first element need no special-casing. Return `dummy.next`.
_Avoid_: fake head, placeholder
