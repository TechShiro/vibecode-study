# Mission: Principles of Compiler Construction (CO CSC 502)

## Why

Score 9.5+ CGPA in semester 5. Compiler Construction is one of five main subjects. **Units I and II
were commissioned on 6 September 2026**, alongside the same request for Soft Computing; Units III–V
are to be commissioned one at a time, in Krish's own order. No test date was given.

The goal is marks on the university answer sheet — not the ability to write a compiler, and not
mastery of language theory.

## Success looks like

**Unit I — Introduction**

- **The phases-of-a-compiler answer, cold**: the vertical diagram with the symbol table and error
  handler beside it, then `position = initial + rate * 60` traced through **all six phases** —
  token stream, syntax tree, the **inttofloat coercion node**, the four lines of three-address code,
  the two optimised lines, and the five assembly instructions. *This is the most-asked question in
  the paper and it is the same one every year.*
- **Compiler vs interpreter** as a table, with the error-reporting row stated correctly: all errors
  together versus first error and stop.
- The **language processing system** drawn vertically with the intermediate forms labelled —
  modified source, target assembly, relocatable machine code.
- **Bootstrapping with T-diagrams**: the composition rule (S,T,I) + (I,M,M) → (S,T,M), the two-step
  bootstrap, and above all the **three-step cross-compiler construction**, naming (L,B,A) as the
  cross-compiler.
- The **six compiler construction tools** with the phase each generates, and the pattern behind them
  — each tool's input is the formalism that describes its phase.
- The **five applications of compiler technology**, the topic most students skip.
- **Phase vs pass**, the four error types including logical errors that no phase catches, and JIT
  against AOT and interpretation.

**Unit II — Lexical Analyser** (*conversions drilled exhaustively at Krish's explicit request*)

- **The four conversions, automatic**: Thompson's RE→NFA, the subset construction NFA→DFA,
  minimisation by partitioning, and the **direct RE→DFA by nullable/firstpos/lastpos/followpos** —
  all four worked on **(a|b)*abb**, which is Aho's example and therefore the examiner's.
- Showing **every ε-closure** in a subset construction and **every partition Π** in a minimisation,
  because that working is where the marks are.
- Knowing that the direct method on (a|b)*abb yields **the minimal DFA in one pass** — the
  cross-check between the two routes.
- **Token, pattern and lexeme** kept apart by the one-line test: rule, text, category.
- **Input buffering with sentinels**, ending with the sentence that is the point of the topic —
  *two tests per character become one* — plus the 100,000-character arithmetic.
- **Regular definitions for `id` and `number`** written exactly as Aho writes them, ε alternatives
  included, and the four templates for writing regular expressions.
- **Token counting** with the string-literal trap: `printf("i = %d, &i = %x", i, &i);` is 10 tokens.
- **Lex**: the three sections, a complete specification, `yytext`/`yyleng`/`yylex`/`yywrap`, and the
  two conflict rules proved by `if` versus `ifx`.

## Constraints

- **Exam-shaped, not mastery-shaped.** Depth beyond what the syllabus and past papers ask is waste.
- **The RE → NFA → DFA machinery is IN scope** — Krish's call on 6 September 2026. Formally it is
  covered by the Theory of Automata prerequisite, but "recognition of tokens" in this syllabus maps
  exactly onto Aho's chapter 3, and a paper that asks you to build a DFA would otherwise catch you
  out. It is also the most mechanical scoring in the unit.
- **Every worked answer was computed and verified before being written into a lesson**; none were
  reproduced from memory. This covers the Thompson NFA, the subset construction, the minimisation
  partitions, the followpos table, and the isomorphism between the minimised and direct DFAs.
- **Verified videos on the high-yield topics**, playlist pointers elsewhere. **Every link named in a
  lesson was read off the live YouTube page**, never recalled.
- Time is scarce — five main subjects plus two improvement subjects.
- Prefers Hindi-language YouTube channels aimed at Indian semester exams.
- Everything must work offline from local HTML files, and must print cleanly for revision.

## Out of scope

- **Units III–V, until asked.** Their topics are listed on the index page so the shape of the paper
  is visible, but no lessons are to be written ahead of a request. **Unit III (syntax analysis) is
  the one to do next** — parsing usually outweighs the rest of this paper combined, and SLR, CLR and
  LALR table construction are long, mechanical, high-mark questions.
- The lab work: writing actual Lex and Yacc programs, and the compiler mini-project.
- Anything the written paper does not ask for.
