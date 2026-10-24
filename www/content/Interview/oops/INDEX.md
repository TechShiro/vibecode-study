# OOPS Track — Master OOPS for interviews, from zero

Learner: knows Java/JS syntax, zero formal OOPS. Lessons teach in Java, with a
dedicated lesson mapping the C++-flavored interview concepts (senior's material)
to Java terms. Sources: senior's Top-25 OOPS questions + 30 MCQs
(`materials\Interview_Question.pdf`, `materials\OOPS.pdf`).

Reading order (say "next" to advance; each lesson has quizzes):

1. [Classes & Objects](lessons/0001-classes-and-objects.html) — why OOP, class vs object, constructors, `this`, stack vs heap, static
2. [Encapsulation & Access Modifiers](lessons/0002-encapsulation-and-access-modifiers.html) — getters/setters, visibility table, `final`, immutability taste
3. [Inheritance](lessons/0003-inheritance.html) — `extends`, `super`, constructor chaining, overriding vs hiding, inheritance types, is-a vs has-a
4. [Polymorphism](lessons/0004-polymorphism.html) — overloading vs overriding, upcasting, dynamic dispatch/vtable, `instanceof`
5. [Abstraction & Interfaces](lessons/0005-abstraction-and-interfaces.html) — abstract class vs interface, default methods, pure-virtual mapping
6. [Object Class, Composition & Copies](lessons/0006-object-class-composition-and-copies.html) — equals/hashCode, composition vs aggregation, deep vs shallow copy, GC
7. [C++ Interview Concepts in Java Terms](lessons/0007-cpp-interview-concepts-in-java-terms.html) — virtual functions, friend, operator overloading, diamond problem, object slicing
8. [SOLID & Interview Drill](lessons/0008-solid-and-interview-drill.html) — SOLID, all 25 model answers, 12-MCQ drill, cheat sheet

After lesson 8 → continue to the [LLD track](../system-design/INDEX.md).

## Module B — Advanced OOP Internals & Modern Architectures

9. [Java Memory Model, Object Lifecycle & Garbage Collection](lessons/0009-java-memory-model-and-gc.html) — Stack vs Heap, Generational GC (Eden, Survivor, Tenured), Strong/Weak/Soft/Phantom references
10. [Immutability, Java Records & Value Objects](lessons/0010-immutability-records-value-objects.html) — 5 rules of immutability, defensive copying, Java 14+ records, Domain-Driven Value Objects
11. [Generics, Type Erasure & The PECS Rule](lessons/0011-generics-type-erasure-and-pecs.html) — compile-time type safety, type erasure mechanics, Producer Extends Consumer Super
12. [Exception Handling Architecture & Anti-Patterns](lessons/0012-exception-architecture-and-antipatterns.html) — Checked vs Unchecked, AutoCloseable try-with-resources, 4 deadly anti-patterns
13. [Reflection, Annotations & Metaprogramming](lessons/0013-reflection-annotations-and-metaprogramming.html) — Reflection API, custom runtime annotations, building a mini Spring DI container

## Module C — Applied OOP Architecture & Cross-Language Paradigms

14. [OOP Case Study: The Extensible Notification Engine](lessons/0014-oop-case-study-notification-system.html) — composing Observer, Strategy, Factory, and Decorator into production code
15. [Multi-Paradigm OOP: Java vs C++ vs Python vs JS](lessons/0015-multi-paradigm-oop-comparison.html) — class vs prototype, C3 MRO, duck typing, RAII vs Garbage Collection