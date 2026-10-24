# Syllabus complete, 30 August 2026 — and still nothing measured

Units IV and V added (lessons 0028–0042), taking Computer Networks to **all five units, 42 lessons,
five exam sheets**. Nothing in the CO CSC 501 course contents is now uncovered.

## The thing this record exists to say

**Forty-two lessons have been written against the syllabus. Zero have been written against evidence
of what Krish actually knows.** That was defensible for Unit I. It is much less defensible now:
Units II, III and IV are where the numericals live, and a numerical is exactly the kind of thing
where an unchecked assumption about the starting level is expensive in both directions — either
the lesson patronises, or it skips the step that was actually the problem.

Records [[0001-starting-point]] and [[0002-units-2-3-built]] both flagged this. It has not changed.

## The diagnostic now exists

Built 30 August 2026 as `reference/diagnostic-six-problems.html` and linked from the top of the CN
hub. It contains the six problems below, plus full worked solutions and — the actual point — a
**diagnostic table per problem mapping specific wrong answers to specific misunderstandings**.
Solutions are hidden when the page prints, so it prints as a blank problem sheet.

All six answers were computed twice: by hand and independently in code
(`scratchpad/check6.py`). The answers are CRC `1110`; Hamming codeword `01110010101` with
syndrome 9; VLSM 172.16.0.0/24, 1.0/25, 1.128/26, 1.192/27, 1.224/30, 1.228/30 with 536 free;
fragmentation 1376 bytes × 3 plus 852, offsets 0/172/344/516; the Reno trace ending 6 at RTT 15;
and RSA d = 103, C = 48.

**Nothing has been measured yet.** The sheet is built; the answers have not come back.

## The six checks

Each fails in a *specific* way that identifies a *specific* gap:

1. **CRC** (L13): dataword `1101011011`, divisor `10011`. Watch whether the XOR division stays aligned.
2. **Hamming** (L13): encode `1001101`, corrupt one bit, correct it. Watch whether the syndrome is
   read c₈c₄c₂c₁ (most significant first) or reversed.
3. **VLSM** (L22): 172.16.0.0/22 for departments of 200, 120, 60, 25 and two point-to-point links.
   Watch whether the allocation is done largest-first.
4. **Fragmentation** (L23): 5000-byte datagram, MTU 1400. Watch whether the data per fragment is
   rounded *down* to a multiple of 8.
5. **Congestion window** (L33): ssthresh 16, cwnd 1, three duplicate ACKs at RTT 7, timeout at RTT 12.
   Trace 15 rounds in Reno. Watch whether cwnd doubles past ssthresh, and whether the two loss
   events are treated differently.
6. **RSA** (L41): p = 11, q = 13, e = 7. Find d, encrypt M = 9, decrypt to verify. Watch whether
   φ(n) is confused with n, and whether the reduction is done at every step.

If all six are clean, the pitch is right and only drill sheets are needed. Any failure points at
one lesson that needs practice material rather than more prose.

## Offered repeatedly, never taken up

- **Twenty-problem subnetting drill sheet** with a separate answer key (L22) — the highest-return
  item left in the subject.
- Ten mixed Nyquist/Shannon problems (L8).
- Five CRC divisions and five Hamming encodings (L13).
- Ten efficiency numericals across the three ARQ protocols (L14).
- Five congestion-window traces mixing timeouts and duplicate ACKs (L33).
- Three more CDMA problems (L17) and three distance-vector networks (L26).

Do not build any of these unprompted — see [[build-only-what-was-asked]] in memory. But if a CN
test date is ever mentioned, **offer the subnetting drill first**.

## Design decisions worth remembering

- **Lesson counts track syllabus weight, not uniformity**: 6 / 12 / 9 / 7 / 8. Unit II got double
  Unit I because it carries most of the numericals; Unit V is broad but shallow, so eight short
  lessons rather than four long ones.
- **Every numerical carries a named sanity check** — the specific way that particular calculation
  usually goes wrong (n−1 guard bands, multiple-of-8 fragment data, doubling *a* in efficiency,
  never doubling past ssthresh, reducing mod n at every RSA step).
- **The security half of Unit V leans entirely on the 5 Minutes Engineering *Information and Cyber
  Security* playlist**, because the CN playlists cover SSL, IPsec, firewalls and IDS very thinly.

## Still open

- **No test date has ever been given for CN.** Everything is built against a deadline that was
  never named, so nothing has been prioritised by urgency.
- **No past papers.** Still the largest gap in the whole workspace — they would let the weighting
  follow this examiner rather than the syllabus as written.
- **The lab component (2P)** is deliberately out of scope: Packet Tracer, socket programming,
  network commands. If it turns out to be examined, that is a gap.
