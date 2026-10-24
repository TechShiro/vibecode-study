# Units II and III built, 30 August 2026 — still no measurement

Twenty-one more lessons (0007–0027), taking the subject to Units I, II and III complete.
Reorganised into one folder per unit at Krish's request the same day.

**Still nothing measured.** Every lesson so far has been written against the syllabus, not against
any evidence of what Krish already knows or where he actually slips. That was defensible for Unit I
(introductory, probably already taught) and is less defensible now — Units II and III are where the
numericals live, and numericals are exactly where a wrong assumption is expensive.

## The four checks worth running before building anything else

These are chosen because each one fails in a *specific* way that reveals a *specific* gap:

1. **CRC:** dataword `1101011011`, divisor `10011`. Watch whether the XOR division stays aligned.
2. **Hamming:** encode `1001101`, then corrupt one bit and correct it. Watch whether the syndrome
   is read c₈c₄c₂c₁ (most significant first) or reversed.
3. **Sliding window efficiency:** T<sub>t</sub> = 1 ms, T<sub>p</sub> = 24 ms, find η for Stop-and-Wait
   and the optimal N. Watch whether *a* gets doubled.
4. **VLSM:** 172.16.0.0/22 for departments of 200, 120, 60, 25 and two point-to-point links.
   Watch whether the allocation is done largest-first.

If all four are clean, the lessons are pitched right and Units IV and V can be built the same way.
If any fails, that lesson needs a drill sheet rather than more prose.

## What I offered and he has not asked for

Repeatedly offered inside the lessons, none taken up yet:
- A **twenty-problem subnetting drill sheet** with a separate answer key (Lesson 22).
- Ten mixed **Nyquist/Shannon** problems (Lesson 8).
- Five **CRC** divisions and five **Hamming** encodings (Lesson 13).
- Ten **efficiency numericals** across the three ARQ protocols (Lesson 14).

Do not build these unprompted — see [[build-only-what-was-asked]] in memory. But if he ever reports
a test date for CN, the subnetting drill is the single highest-return thing to offer first.

## Open

- **No test date given for CN.** Everything so far is built ahead of a deadline that has not been
  named, which means nothing has been prioritised by urgency.
- **No past papers.** Still the largest gap in the whole workspace — they would let the lessons be
  weighted to this examiner rather than to the syllabus as written.
- **Was six lessons right for Unit I?** Record 0001 flagged the split as possibly over-granular.
  Unit II at twelve and Unit III at nine assume the fine-grained split is working. Unconfirmed.
