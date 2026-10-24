# Mission: Operating Systems (COCSC301)

## Why

Score 9.5+ CGPA in semester 5. OS is one of two **improvement (re-sit) papers**, alongside DAA — so
this is targeted repair of a paper already sat once, not a first pass at the subject. **Units I and
II were commissioned on 5 September 2026**; Units III–V are to be commissioned one at a time, in
Krish's own order. No test date was given.

The goal is marks on the university answer sheet — not systems-programming skill, and not mastery of
operating systems.

## Success looks like

**Unit I — Overview and Process Management**

- Drawing the **five-state process diagram** cold, with all six transitions named, and knowing the
  two arrows that must *not* be there (waiting → running, ready → waiting).
- Reciting the **eight PCB fields** and the **eight OS functions** as headings.
- Reproducing the **three-schedulers table** — long-term controls the degree of multiprogramming,
  short-term is fastest, medium-term swaps — and the **I/O-bound vs CPU-bound job-mix** argument.
- Explaining **dual-mode operation and the timer** in four steps, and naming five privileged
  instructions.
- Drawing all six **OS structures**, and reproducing the **monolithic vs microkernel** table.
- Naming the **eight types of OS** with one distinguishing line each, and keeping *distributed vs
  network* and *multiprogramming vs multiprocessing* apart.
- The **six types of system call** with UNIX and Windows names, and the **three parameter-passing
  methods**.
- **`fork()` counting**: 2ⁿ processes from n unconditional forks; drawing the tree when the forks are
  conditional.
- **Shared memory vs message passing**, and the bounded-buffer code with its `BUFFER_SIZE − 1` limit.
- **Process vs thread**, the **three multithreading models** with a diagram each, and **Amdahl's law**
  computed forwards and backwards.

**Unit II — CPU Scheduling and Process Synchronisation** (*numericals drilled exhaustively at
Krish's explicit request*)

- **The scheduling numerical, automatic**: FCFS, SJF, SRTF, priority in both forms, and Round Robin
  at any quantum — Gantt chart, CT/TAT/WT table, averages shown as a division, one sentence of
  comment. This is the guaranteed 10–15 marks in the paper.
- Never confusing **TAT = CT − AT** with **WT = TAT − BT**, never dropping the arrival time, never
  missing a CPU idle gap, always stating the tie-breaking rule.
- The **Round Robin queue rule** — arrivals join before the preempted process — which is the single
  most common source of wrong answers.
- Naming the **convoy effect**, **starvation and ageing**, and the **quantum trade-off** without
  prompting.
- **Multilevel queue vs multilevel feedback queue** in one sentence (a process can move), plus the
  **five MLFQ parameters** and a worked three-level trace.
- **AMP vs SMP**, processor affinity, push and pull migration, and why affinity fights load balancing.
- The **three critical-section conditions** verbatim, and knowing which one each failed attempt
  violates.
- **Peterson's solution** written from memory with `turn = j` (not `i`), plus the three-part proof and
  the three limitations.
- **Semaphore value numericals**: final value = initial − waits + signals, and **a negative value's
  magnitude is the number of blocked processes**.
- The **three classic problems** with every semaphore's initial value stated, the bounded-buffer
  ordering trap, the first-reader/last-reader lines, and the dining-philosophers deadlock with its
  **four remedies**.
- **Monitor vs semaphore**, especially that `x.signal()` on an empty queue **does nothing**.

## Constraints

- **Exam-shaped, not mastery-shaped.** Depth beyond what the syllabus and past papers ask is waste.
- **Unit II numericals drilled exhaustively** — Krish's explicit call on 5 September 2026, and the
  right one for an improvement paper: scheduling is free marks once it is mechanical. **Every one of
  the fourteen worked answers was computed by simulation and verified before being written into a
  lesson**; none were reproduced from memory. The simulator covered FCFS, SJF, SRTF, priority in both
  forms, Round Robin at three quanta, multilevel queue and multilevel feedback queue.
- **Verified videos on the high-yield topics**, playlist pointers elsewhere — his call on
  5 September 2026, to keep build time in the content rather than in link-checking. **Every link
  named in a lesson was read off the live YouTube page**, never recalled.
- Time is scarce — five main subjects plus two improvement subjects.
- Prefers Hindi-language YouTube channels aimed at Indian semester exams.
- Everything must work offline from local HTML files, and must print cleanly for revision.

## Out of scope

- **Units III–V, until asked.** Their topics are listed on the index page so the shape of the paper is
  visible, but no lessons are to be written ahead of a request.
- Lab work, shell programming and the mini-projects in the lab plan.
- Anything the written paper does not ask for.
