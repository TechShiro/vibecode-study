# Working notes — Soft Computing

## How this learner wants to be taught

- **Exam-shaped, explicitly not mastery-shaped.** Stated directly: "not want to master any sub".
  Depth is only worth adding where it earns marks. When a topic could go deeper, stop and say so
  rather than expanding.
- **Every topic in the syllabus gets covered** — the ask was "each and every topic", so coverage
  breadth beats depth on any single one.
- **Wants YouTube playlists alongside notes**, per unit / per topic where possible. Prefers Hindi
  exam-oriented channels (5 Minutes Engineering, Er Sahil ka Gyan, Mahesh Huddar) over
  NPTEL-style rigour.
- **Links must be verified, never guessed.** All playlist and video links in this workspace were
  checked against the live YouTube page for title, channel and video count before being written down.

## Lesson design decisions made here

- One lesson per syllabus topic cluster, not per unit — ten lessons for Units I and II.
  Fine-grained files are easier to revise selectively the night before a test.
- Every numerical topic carries a **fully worked example with the arithmetic shown**, plus a
  sanity-check line ("z* must land inside the support"). Sanity checks catch more marks than
  extra theory does.
- Quizzes are one-shot: answering locks the question, so the answer cannot be fished for.
  Options are padded to near-equal length so length is not a tell.
- Recall cards are `<details>` elements — hidden by default, but forced open when printing.

## Scope discipline — important

Corrected by the user on 2026-08-20: **build only the units explicitly asked for.**
Playlist links across all subjects were requested and are in scope; *written lessons are not*,
until he names the subject and unit. He paces the work himself against whatever test is next.

Commissioned so far: **SC Units I and II** (19 Aug 2026), **CN Units I–V — the complete syllabus** (29–30 Aug 2026).

## Subject context

Semester 5, targeting 9.5+ CGPA. **Five main subjects, two improvement papers.**

| Subject | Folder | Status |
|---|---|---|
| Soft Computing | `Soft Computing/` | **Units I–II lessons built** (test 20 Aug 2026); III–V not commissioned |
| Computer Networks | `Computer Networks/` | **COMPLETE** — 42 lessons, 5 exam sheets, all five units (29–30 Aug 2026) |
| Information and Data Security | `Info and Data Security/` | Syllabus read (CO CSC 504); nothing built |
| Principle of Compiler Construction | `Principle of Compiler Construction/` | Playlist map only |
| Civilization, Science & Eng | `Civilization, Science & Eng/` | Playlist map only |
| DAA (improvement) | `DAA/` | Playlists only — no syllabus yet |
| OS (improvement) | `OS/` | Playlists only — no syllabus yet |

## Open questions to raise

- Are there **past papers** for any of these subjects? They would sharpen every lesson more than
  any additional video, especially for guessing examiner preference.
- DAA and OS syllabi still not in their folders.

## Lesson design decisions specific to CN

- **One folder per unit** (`lessons/unit-1/`, `unit-2/`, `unit-3/`), requested on 30 Aug 2026.
  Lesson numbering stays continuous across folders (0001–0027) so order is unambiguous.
- Lesson counts are proportionate to syllabus weight, not uniform: Unit I 6, **Unit II 12**,
  Unit III 9, Unit IV 7, Unit V 8. Unit II carries most of the numericals; Unit V is broad but shallow.
- Every numerical carries a **sanity check** line naming the specific way the arithmetic usually
  goes wrong (n−1 guard bands, multiple-of-8 fragment data, doubling *a* in efficiency, and so on).
