# Soft Computing Glossary

Canonical terminology for this workspace. Every lesson uses these words in exactly these senses.
Covers Units I and II; extend as Units III–V are built.

## Unit I — Foundations

**Soft computing**:
A collection of methodologies that exploit the tolerance for imprecision, uncertainty and partial
truth to achieve tractability, robustness and low solution cost (Zadeh).
_Avoid_: AI, machine learning, approximate computing

**Hard computing**:
Conventional computing that requires a precisely stated analytical model and returns an exact result.
_Avoid_: Traditional computing, classical computing, normal programming

**Hybrid computing**:
The deliberate combination of two or more techniques so that one method's weakness is covered by
another's strength — neuro-fuzzy, genetic-fuzzy, neuro-genetic.
_Avoid_: Mixed systems, combined approach

## Unit II — Fuzzy sets

**Fuzzy set**:
A set in which each element has a degree of membership in [0, 1], defined completely and uniquely
by its membership function.
_Avoid_: Vague set, soft set, probabilistic set

**Membership function** (μ):
The function μ: X → [0, 1] assigning each element its degree of belonging to a fuzzy set.
_Avoid_: Belief function, weight, probability

**Fuzziness**:
Vagueness residing in the concept itself, which does not disappear on observation.
Distinct from **probability**, which is ignorance about a crisp fact and vanishes once known.

**Support**: The crisp set of elements with μ(x) > 0.

**Core**: The crisp set of elements with μ(x) = 1. Also called the nucleus.

**Boundary**: The elements with 0 < μ(x) < 1 — partial membership.

**Height**: The maximum membership value attained. A set is **normal** if its height is 1,
**subnormal** otherwise.

**α-cut** (λ-cut):
The crisp set {x | μ(x) ≥ α}. The mechanism by which a fuzzy set becomes a usable crisp decision.
_Avoid_: Threshold set, slice, cut-off. In this workspace α-cut always uses ≥; the **strong α-cut**
uses strict >.

**Crossover point**: The x at which μ(x) = 0.5.

**Convex fuzzy set**:
A fuzzy set whose membership function never dips between two points —
μ(λx₁ + (1−λ)x₂) ≥ min(μ(x₁), μ(x₂)). Every α-cut of a convex fuzzy set is a single interval.

**Fuzzy singleton**: A fuzzy set whose support is one point, with membership 1 there.

**Cardinality**: |A| = Σ μ(x), the sum of all membership degrees.

## Unit II — Operations

**Union**: max(μ_A, μ_B). **Intersection**: min(μ_A, μ_B). **Complement**: 1 − μ_A.
In this workspace these three always mean the standard Zadeh operators unless a question names others.

**Concentration** CON(A) = A²: the hedge *very*. **Dilation** DIL(A) = A^0.5: the hedge *somewhat*.

**Law of excluded middle** and **law of contradiction**:
The two classical set laws that fuzzy sets violate — A ∪ Ā ≠ X and A ∩ Ā ≠ ∅. All other classical
laws, including both De Morgan laws, continue to hold.

## Unit II — Relations and reasoning

**Fuzzy relation**:
A fuzzy set on X × Y giving a degree of association to every pair; represented as a matrix.

**Composition**:
Chaining two relations to eliminate the shared variable. **Max–min** uses max_y[min(μ_R, μ_S)];
**max–product** uses max_y[μ_R × μ_S]. Mechanically it is matrix multiplication with × → min and + → max.

**Fuzzy tolerance relation**: reflexive + symmetric. Also called a proximity relation.

**Fuzzy equivalence relation**: reflexive + symmetric + transitive. Also called a similarity relation.

**Linguistic variable**:
A variable whose values are words rather than numbers, defined by the 5-tuple (x, T(x), U, G, M).

**Hedge**: An operator that modifies a fuzzy set to represent a qualifier — *very*, *somewhat*, *not*.

**Antecedent / consequent**: The IF part and the THEN part of a fuzzy rule.
_Avoid_: Premise/conclusion when discussing rules specifically — reserve those for GMP inference.

**Implication operator**:
The rule that turns "IF x is A THEN y is B" into a relation matrix. Default in this workspace:
**Mamdani min**. Others: Larsen product, Zadeh max-min, Kleene–Dienes, Łukasiewicz.

**Generalised Modus Ponens (GMP)**:
Inference from an approximately matching observation: given "x is A′" and "IF x is A THEN y is B",
conclude "y is B′" where **B′ = A′ ∘ R** — the **compositional rule of inference**.

## Unit II — Inference and output

**Fuzzification**: Converting a crisp input into degrees of membership in the input fuzzy sets.

**Defuzzification**: Collapsing an aggregated output fuzzy set into a single crisp value.
Default method in this workspace: **centroid** (centre of gravity).

**Firing strength** (w):
The degree to which a rule's antecedent is satisfied, obtained by min over its clauses for AND.
_Avoid_: Rule weight, activation, confidence

**Aggregation**:
Merging the outputs of all fired rules. **Disjunctive** (OR-ed, max) is the standard;
**conjunctive** (AND-ed, min) is the alternative.

**Fuzzy Inference System (FIS)**:
The complete crisp-in / crisp-out machine: fuzzifier, knowledge base (**rule base + database**),
inference engine, defuzzifier. The knowledge base always has two components in this workspace.

**Mamdani model**: consequent is a fuzzy set; needs aggregation and defuzzification.
**Sugeno model**: consequent is a crisp function z = px + qy + r; output is Σwᵢzᵢ / Σwᵢ.
**Tsukamoto model**: consequent is a monotonic fuzzy set; zᵢ = μ⁻¹(wᵢ); output is Σwᵢzᵢ / Σwᵢ.

**Fuzzy C-Means (FCM)**:
Soft clustering in which every point belongs to every cluster, with memberships summing to 1
across clusters for each point.
_Avoid_: Fuzzy K-means, soft K-means

**Fuzzifier** (m):
The exponent in the FCM objective function controlling clustering softness; standard value 2.
Note the collision: *fuzzifier* also names the fuzzification block of a FIS. In this workspace,
**fuzzifier = m** in any FCM context and **fuzzification module** is always written out in full
when the FIS block is meant.


## Unit V — Optimization Techniques

**Genetic Algorithm (GA)**:
A population-based metaheuristic inspired by Darwinian natural selection (John Holland, 1975). Utilizes selection, crossover, and mutation to evolve candidate solutions.

**Chromosome**:
An encoded representation of a candidate solution (genotype), commonly expressed as a binary string, real-valued vector, or permutation.

**Fitness function**:
A problem-specific objective evaluation metric that assigns a scalar score indicating how well a chromosome solves the target optimization problem.

**Roulette Wheel Selection**:
Fitness-proportionate selection where the probability of selecting chromosome i is P_i = f_i / Σf_j.

**Tournament Selection**:
A selection mechanism where k individuals are chosen at random from the population and the fittest among them is selected into the mating pool.

**Elitism**:
Directly copying the top 1–2 best performing individuals into the next generation without undergoing crossover or mutation, preserving the global best.

**Crossover**:
Recombination operator that swaps genetic segments between parent chromosomes to generate offspring schemas (single-point, two-point, uniform).

**Mutation**:
Genetic operator that modifies one or more gene alleles with a small probability p_m to maintain population diversity and escape local optima.

**Pareto Dominance**:
Solution u dominates solution v (u ≺ v) if u is no worse than v in all objectives and strictly better in at least one objective.

**Pareto Front**:
The set of all non-dominated trade-off solutions plotted in multi-objective space.

**NSGA-II**:
Non-dominated Sorting Genetic Algorithm II (Kalyanmoy Deb, 2002), featuring fast non-dominated sorting (O(M·N²)), crowding distance, and (2N → N) elitism.

**Particle Swarm Optimization (PSO)**:
Swarm intelligence optimization algorithm (Kennedy & Eberhart, 1995) based on bird flocking and fish schooling, updating particle velocities and positions.

**Personal Best (pbest)**:
The best position coordinate achieved by an individual particle in its trajectory history.

**Global Best (gbest)**:
The best position discovered by any particle across the entire swarm.

**Inertia Weight (w)**:
Parameter in PSO controlling momentum and governing the trade-off between global exploration and local exploitation.

**Ant Colony Optimization (ACO)**:
Metaheuristic optimization technique (Marco Dorigo, 1992) inspired by ant foraging and pheromone trail dynamics.

**Stigmergy**:
Indirect coordination and communication among agents mediated through modifications of the local physical environment (e.g. pheromone deposition).

**Heuristic Visibility (η)**:
The greedy, local attractiveness of an edge in ACO, typically defined as the inverse of distance (η_ij = 1 / d_ij).

**Pheromone Evaporation (ρ)**:
The exponential decay of pheromone intensity over time, preventing early paths from locking the swarm into sub-optimal local minima.
