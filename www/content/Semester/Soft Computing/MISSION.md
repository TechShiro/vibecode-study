# Mission: Soft Computing (CO CSC 503)

## Why

Score 9.5+ CGPA in semester 5. Soft Computing is one of five main subjects.

**Units I and II were originally built for the class test of 19 August 2026, which has passed.**
On **6 September 2026** Krish asked for them to be brought into the same shape as the OS, DAA and
IDS workspaces — so this is now **end-semester preparation**, not test preparation, and the material
was restructured and deepened rather than rebuilt. Units III–V are to be commissioned one at a time,
in his own order.

The goal is marks on the university answer sheet — not research-level understanding of fuzzy
systems, and not mastery of the field.

## Success looks like

**Unit I — Introduction** (pure theory; there is not a single numerical in it)

- Reproducing the **hard-vs-soft comparison table from memory, as a table, in under four minutes**.
- **Zadeh's definition verbatim** — *tolerance for imprecision, uncertainty and partial truth* →
  *tractability, robustness and low solution cost* — plus the guiding principle's
  **"better rapport with reality"**.
- The **four pillars with founder, year, what each handles and its weakness**: Zadeh 1965,
  Pawlak 1982, Holland 1975, McCulloch and Pitts 1943.
- Keeping **fuzzy and rough apart**: vagueness in the *concept* versus indiscernibility in the *data*.
- Closing with **"complementary, not competitive"** and *"fuzzy is knowledge representation without
  learning; neural is learning without knowledge representation."*
- Naming **applications of soft computing in engineering** by domain, with the Sendai subway as the
  one example to quote.

**Unit II — Fuzzy Systems** (where every numerical in the paper lives)

- Solving a **max–min composition** correctly without hesitating over the operator order, and
  running the check that **every max–product entry must be ≤ its max–min counterpart**.
- Solving a **centroid defuzzification** and sanity-checking that the answer lands inside the support.
- Writing the **Mamdani / Sugeno / Tsukamoto comparison table with at least six rows**, and knowing
  that the same problem gives **5.13 / 4.56 / 5.44** — three different answers from one set of inputs.
- Stating every definition — support, core, α-cut, **strong α-cut**, linguistic variable, GMP, the
  FCM objective function — precisely enough to earn full marks on a 2-mark question.
- Proving **the two classical laws that fail** in one line, and knowing that **De Morgan still holds**.
- Never writing A − B as μ_A − μ_B, never dropping the **−μ_Aμ_B** term from the algebraic sum, and
  never using **>** where the α-cut needs **≥**.
- Knowing that **Sugeno and Tsukamoto need no defuzzification**, and that Tsukamoto's consequents
  must be **monotonic** so that μ(z) = wᵢ has a unique solution.
- Checking that **FCM memberships sum to 1 across clusters**, and that **m = 2** is standard.

## Constraints

- **Exam-shaped, not mastery-shaped.** Depth beyond what the syllabus and past papers ask is waste.
- **Restructure and deepen, not rewrite** — Krish's call on 6 September 2026. The ten existing
  lessons were syllabus-complete and correct, so they were kept and added to: split into
  `lessons/unit-1/` and `lessons/unit-2/`, the single combined cheat sheet replaced by **two
  per-unit exam sheets**, quiz depth raised from 3–4 questions per lesson to **6–7**, and three
  further worked numericals added — α-cuts and cardinality (Lesson 4), a second full ten-operation
  table (Lesson 5), and a second max–min / max–product composition (Lesson 6).
- **Every worked answer was computed and verified before being written down**, including the three
  new numericals and the whole answer key on the Unit II sheet.
- **Every YouTube link was re-verified on 6 September 2026** — all five playlists and all 48 videos
  named inside the lessons. Links are read off the live page, never recalled.
- Time is scarce — five main subjects plus two improvement subjects (DAA, OS).
- Prefers Hindi-language YouTube explanation channels aimed at Indian semester exams.
- Everything must work offline from local HTML files, and must print cleanly for revision.

## Out of scope

- MATLAB / Python implementation of fuzzy systems — the lab is separate from the theory paper.
- Proofs and derivations beyond the one-line counter-examples the syllabus expects.
- **Units III–V, until asked.** Their topics are listed on the index page so the shape of the paper
  is visible, but no lessons are to be written ahead of a request. **Unit IV (neural networks) is the
  heaviest** — back-propagation is a long worked numerical, and perceptron training, Hopfield energy
  and associative memory are all mechanical and high-mark.
