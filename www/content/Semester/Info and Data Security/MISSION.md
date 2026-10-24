# Mission: Information and Data Security (CO CSC 504)

## Why

Score 9.5+ CGPA in semester 5. IDS is one of five main subjects. **Units I and II were commissioned on
4 September 2026**; the remaining three units are to be commissioned one at a time, in Krish's own
order. No test date was given, so this is preparation ahead of one. The goal is marks on the
university answer sheet — not security engineering skill, and not mastery of cryptography.

## Success looks like

**Unit I — Message Integrity and Message Authentication**

- Writing the **SHA-512 answer end to end**: parameter table, five steps, the 80-round diagram with
  eight registers, the word-expansion formula, and Ch / Maj / Σ / σ defined.
- Solving a **SHA-512 padding numerical** in under a minute, including the two traps — a remainder
  above 896, and padding that is never zero.
- Writing the **HMAC formula from memory** — `H[(K⁺ ⊕ opad) ‖ H[(K⁺ ⊕ ipad) ‖ M]]` — with ipad
  0x36, opad 0x5C, and b = 1024 for SHA-512.
- Naming the **three resistance properties** with their given/find shape and their 2ⁿ / 2ⁿ / 2^(n/2)
  attack costs, and stating why collisions must exist but cannot be found.
- Reproducing the **MAC vs MDC vs digital signature** table, and always closing a MAC answer with
  "no non-repudiation, because the key is shared."
- Explaining the **Random Oracle Model** in three rules plus the limitation — the topic most
  students skip.
- Reproducing the **MD4 vs MD5** and **MD5 vs SHA-512 vs Whirlpool** tables.
- Stating **Miyaguchi–Preneel** for Whirlpool and naming cipher W's four transformations.

**Unit II — ECC and Digital Signature Schemes** (commissioned 4 September 2026, *numericals worked
in full* at Krish's explicit request)

- Doing **EC point addition, doubling and kP by double-and-add** cold, with the on-curve check as a
  reflex — the unit's core motor skill.
- **Finding all points on E_p(a,b)** by the quadratic-residue table, and sanity-checking the count
  against Hasse's bound.
- **ECDH and EC ElGamal** end to end, using the "express every point as a multiple of G" shortcut.
- **RSA signature** with square-and-multiply, and the three forgeries on it — existential, the
  multiplicative property and blinding — reproduced with numbers.
- **ElGamal signature**, without mixing up mod p and mod (p−1), plus **recovering the private key
  from a reused nonce**.
- **DSA signing and the w → u₁ → u₂ → v verification chain**, never dropping the second reduction.
- **ECDSA**, seen as DSA with kG in place of g^k.
- The **five-scheme comparison table**, the **attack-type and forgery-level lists**, and one line
  each on the **variations** and **applications**.

## Constraints

- **Exam-shaped, not mastery-shaped.** Depth beyond what the syllabus and past papers ask is waste.
- **Unit I: numericals limited to what the syllabus literally names** — Krish's call on 4 September
  2026. SHA-512 padding is the one calculation worked in full; birthday-attack bounds are stated as
  facts rather than drilled as problems.
- **Unit II: numericals worked in full** — his explicit instruction, and the right call, since this
  unit is examined almost entirely through calculation. Every worked answer is computed and
  verified before being written into a lesson; none are reproduced from memory.
- Time is scarce — five main subjects plus two improvement subjects (DAA, OS).
- Prefers Hindi-language YouTube explanation channels aimed at Indian semester exams; **every link
  is verified against the live page, never recalled.**
- Everything must work offline from local HTML files, and must print cleanly for revision.

## Out of scope

- **Units III–V, until asked.** The folder structure and index rows are in place for them, but no
  lessons are to be written ahead of a request.
- Practical tooling, lab work, and anything the paper does not ask for.
