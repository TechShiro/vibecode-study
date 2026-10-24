# Mission: Computer Networks (CO CSC 501)

## Why

Score 9.5+ CGPA in semester 5. Computer Networks is one of five main subjects. Unit I was
commissioned on 29 August 2026, Units II and III on 30 August, and Units IV and V immediately
after — so **the whole syllabus is now built**. No test date was ever given, so this is
preparation ahead of one rather than the night before one. The goal is marks on the university
answer sheet — not practical networking skill, and not mastery of the field.

## Success looks like

**Unit I**
- Writing the **OSI seven-layer table** from memory: layer, PDU, address, device, two functions each.
- Writing the **OSI vs TCP/IP comparison** as an 8–10 row table in under eight minutes.
- Drawing **four topologies** with advantages and disadvantages, and computing mesh links both
  forwards (n → links) and backwards (links → n).
- Solving a **latency numerical** without confusing propagation and transmission time.

**Unit II** — the numerical unit
- **Nyquist and Shannon**, including the combined question where Shannon gives the ceiling and
  Nyquist gives the signal levels.
- A **CRC division** and a **Hamming encode-and-correct**, both verified at the receiver end.
- A **sliding-window efficiency** calculation, with the window size and sequence-number bits.
- **ALOHA throughput** and the **CSMA/CD minimum frame size**.
- The **Ethernet frame** drawn with byte counts, and why 64 and 1518.

**Unit III** — the addressing unit
- **Subnetting on demand**: subnet-count based, host-count based, and a full VLSM allocation.
- The **CIDR mask table** written from memory, and first/last address found without binary.
- The **IPv4 header** drawn with field sizes, plus a **fragmentation** numerical.
- **Distance vector vs link state**, with one worked Bellman-Ford iteration.
- **IPv4 vs IPv6** as a table, and the three transition strategies.

**Unit IV** — the transport unit
- The **TCP vs UDP table** at ten rows, including byte-stream vs message-oriented.
- The **three-way handshake** drawn with flags, seq and ack on every arrow.
- A **congestion window trace** through both a timeout and three duplicate ACKs, in Tahoe and Reno.
- **Silly window syndrome** with Nagle paired to the sender and Clark to the receiver.
- **SCTP's multi-homing and multi-streaming**, and why the cookie handshake stops SYN flooding.

**Unit V** — application layer and security
- **DNS resolution** drawn twice: recursive for the host half, iterative for the hierarchy half.
- **DORA**, with the reason each message is broadcast.
- **Persistent vs non-persistent HTTP** with the RTT arithmetic.
- **SMTP pushes, POP3/IMAP pulls** — and why the last hop cannot be a push.
- **RSA** end to end by square-and-multiply, verified by decrypting.
- **AH has no confidentiality, ESP does**; tunnel mode is what VPNs use.

## Constraints

- **Exam-shaped, not mastery-shaped.** Depth beyond what the syllabus and past papers ask is waste.
- Time is scarce — five main subjects plus two improvement subjects (DAA, OS).
- Prefers Hindi-language YouTube explanation channels aimed at Indian semester exams; every link
  is verified against the live page, never recalled.
- Everything must work offline from local HTML files, and must print cleanly for revision.

## Out of scope

- **Nothing further unprompted.** All five units are built; Krish paces any further work himself.
- The 2P lab component — Packet Tracer, socket programming, network commands. The theory paper
  is what the marks come from.
- Anything requiring cloud, IoT or "advanced topics" from the course overview; they are named in
  the overview but not in the five units of course contents.

## What is left

The five units are complete. What remains is **practice material, not more lessons**:

1. **A subnetting drill sheet** — twenty problems with a separate answer key. Offered repeatedly
   in Lesson 22 and never taken up; still the highest-return thing left in this subject.
2. **CRC and Hamming drills** (Lesson 13) and **efficiency numericals** (Lesson 14).
3. **Congestion-window traces** mixing timeouts and duplicate ACKs across Tahoe and Reno (Lesson 33).
4. **Past papers** — still absent, and still the single biggest gap in the workspace.

Do not build these unprompted. See `build-only-what-was-asked` in memory.

## Workspace layout

Lessons are split into one folder per unit — `lessons/unit-1/` through `lessons/unit-5/` — with
numbering continuous across them (0001–0042) so lesson order is unambiguous. Each unit has its
own exam sheet in `reference/`, and each sheet ends with a ten-point final scan.
