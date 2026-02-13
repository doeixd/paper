# Real Patterns Need Closure: A Dynamical Criterion for Non-Gerrymandered Macro-Objects

## 0. Abstract

Dennett's account of real patterns remains influential because it connects ontology to compression and predictive success. Yet in its familiar form it remains vulnerable to two objections. First, it can look instrumentalist, where real means useful to us. Second, it can look permissive, where any coding trick that compresses data appears to qualify as a real pattern. This paper offers a closure-based refinement that preserves Dennett's insight while adding a non-gerrymandering constraint, defined as macro-transition autonomy. The central claim is that a pattern is real when a coarse-graining induces autonomous macro-transitions, so lower-level distinctions become irrelevant for what follows at the macro level. In exact Markov settings, strong lumpability supplies the key criterion: grouped microstates must have matching macro-transition profiles. The criterion is then extended to approximate cases using graded leakiness, so the framework remains applicable to weather systems, organisms, and social structures where closure is not perfect. The framework also allows weird but disjunctive partitions when they are genuinely closed in the specified regime. The result is a sharper realism about patterns with concrete tests and with exclusion power against dynamically incoherent composites, without collapsing into reductionism or convenience pragmatism (Dennett 1991) (Shalizi 2001) (Rosas 2024).

Commitment structure in brief: interventional closure is the ontological standard, and predictive closure is the evidential proxy when intervention data are limited.

## 1. Introduction: Why Dennett Needs a Criterion

Dennett's proposal that the world contains real patterns changed how many philosophers discuss emergence and ontology. The attraction is clear. It gives us a way to respect higher-level structure without denying lower-level physics. It also captures a central feature of scientific practice. We routinely treat macro-regularities as objectively trackable because they support compression and prediction (Dennett 1991).

Still, the view is often judged incomplete. The first criticism is instrumentalist drift. If real patterns are just patterns that help us predict, then reality seems indexed to user interests. The second criticism is permissiveness. If compression is the standard, then contrived composites appear admissible under some coding conventions. Critics then invoke arbitrary aggregates and disjunctive kinds to argue that real-pattern talk lacks ontological discipline.

This paper argues that both criticisms identify a genuine gap, but not a fatal flaw. The gap is the absence of an explicit closure criterion. Once closure is made central, and once closure is tied to lumpability in the induced case, Dennett's core idea can be sharpened into a robust criterion.

The thesis is this: a real pattern is an autonomous coarse-graining. More precisely, a pattern is real when macrostate information is sufficient for macro-transition structure, so lower-level distinctions inside each macrostate no longer matter for macro-evolution. In exact Markov settings, this is strong lumpability. In realistic settings, this is approximate lumpability measured by leakiness.

In this paper, gerrymandered means dynamically incoherent: a partition that fails transition autonomy by requiring persistent within-class micro bookkeeping. It does not mean merely intuitively disjunctive.

This framing also limits instrumentalist drift. Analysts choose research aims, but admissible intervention classes are plausibly constrained by what embodied agents can measure and control under locality, bandwidth, and thermodynamic limits. So the target is not arbitrary preference. It is constrained inquiry in a structured world.

Admissibility has three constraints in this paper. Epistemic admissibility concerns what can be measured and manipulated with finite resources. Dynamical admissibility concerns interventions that keep the system in the same regime class. Explanatory admissibility concerns interventions that track stable invariances rather than one-off perturbation artifacts.

These admissibility constraints are physically anchored. Interventions must be locally propagating and energetically feasible for bounded agents. This blocks arbitrary, paper-defined intervention classes from setting ontology by stipulation.

Because closure is relative to intervention class, these admissibility constraints do substantial philosophical work. They are therefore part of the criterion, not optional heuristics.

### 1.1 Related work and contribution

This paper sits at an intersection of four conversations. From Dennett, it takes the claim that compression and prediction can track objective structure (Dennett 1991). From computational mechanics, it takes the demand that macrostructure must preserve transition-relevant information rather than mere descriptive convenience (Shalizi 2001). From recent closure work, it takes the thought that macro-autonomy can be diagnosed by screening-off relations between micro and macro trajectories (Rosas 2024). From interventionist philosophy of science, it takes the idea that ontological commitment is tied to stable intervention-guiding structure, not to metaphysical fundamentality (Woodward 2003) (Pearl 2000).

It also connects to adjacent emergence and coarse-graining debates, including weak emergence, macro-causal advantage, and naturalized metaphysics (Bedau 1997) (Hoel 2013) (Ladyman and Ross 2007) (Mitchell 2009). The contribution here is narrower: a closure criterion with explicit operational tests for dynamic coherence.

Recent work also develops the cognitive genealogy of real-pattern commitments, linking predictive coding and free-energy minimization to the construction of the manifest image (Gładziejewski 2025). That line explains how agents learn and update pattern-representations. The present paper addresses a distinct question: what makes a pattern objectively available to be found in the first place.

Rosas et al. provide the formal machinery. The present paper uses that machinery for a philosophical purpose, to state and defend an ontological criterion with explicit exclusion conditions for dynamically incoherent partitions.

Accordingly, this paper adopts computational-mechanics closure logic and predictive-equivalence tools, but does not treat predictive equivalence alone as ontologically decisive. The added commitment is intervention-class restriction and interventional invariance as the primary objecthood condition.

The novel claim here is not any one ingredient in isolation. It is their joint use as a discriminating criterion: closure of macro-transition structure, exact in ideal lumpable settings and graded by leakiness in realistic settings, used specifically to filter gerrymandered partitions from autonomous macro-object candidates.

The paper proceeds as follows. Section 2 disambiguates pattern talk by separating reality, pattern, instance, and representation. Section 3 formulates closure as the governing idea. Section 4 introduces strong lumpability and provides a toy example with success and failure partitions. Section 5 extends the criterion to graded, noisy domains. Section 6 applies the view to dynamically incoherent composites and high-maintenance ontological posits. Section 7 shows how canonical candidates can be evaluated under the protocol. Section 8 states the interpretive gain for Dennett. Section 9 addresses four standard objections. Section 10 concludes with implications and future work.

Criterion statement. A coarse-graining $Z = g(X)$ counts as a real pattern for a specified regime, horizon $L$, and intervention class $\mathcal{I}$ when macro-transition structure is autonomous up to an explicit tolerance (for example, bounded leakiness, bounded within-class kernel divergence, or bounded out-of-regime predictive regret). In ideal Markov settings this reduces to strong lumpability. In realistic settings it is assessed by leakiness, transition-kernel divergence, and intervention-response invariance.

Definition (graded closure). Let leakiness be the canonical distance-from-closure quantity. In this paper, graded closure is assessed primarily by leakiness under fixed regime, horizon, and intervention class. Kernel divergence and out-of-regime predictive regret function as estimators or proxies when direct leakiness estimation is unreliable. In well-behaved settings these diagnostics should agree in rank-order; persistent disagreement triggers model revision.

Commitment structure. Primary ontological condition: invariance of induced macro-transition structure across micro-realizations within each macrostate under admissible interventions. Secondary epistemic test: predictive closure on observational data as a proxy when intervention data are sparse.

## 2. Disambiguation: What Exactly Is a Pattern?

### 2.1 The reality-pattern-instance-representation ladder

Many disputes begin by mixing levels. We need a stable ladder.

1. Reality itself: the causal process independent of our models.
2. Patterns supported by reality: stable dependency and transition structures.
3. Instances of patterns: concrete tokens, this storm, this cell, this legal proceeding.
4. Representations of patterns: theories, equations, state spaces, verbal models.
5. Representations of instances: observations, records, memories of particular tokens.

The same word can refer to different layers. That ambiguity creates pseudo-disputes. A representation may fail while the pattern remains real. A token may be noisy while the type remains stable. A pattern may be real even when no agent currently represents it.

Level 5 is included for auditability. Many ontology disputes depend on slippage between claims about an instance and claims about a record of that instance.

Crucially, implementation and representation must be distinguished. Implementation concerns the physical substrate running the process. Representation concerns the model used to track it. A process can be fully implemented while available representations are partial or mistaken.

### 2.2 What pattern is real means here

In this paper, real pattern does not mean mental construct, Platonic object, or anything describable. It means a coarse-graining that earns autonomy in transition structure. The claim is modest and precise. We are not adding a new substance to ontology. We are identifying when macro-description tracks objective structure well enough to function as its own level of what follows. This is not eliminativism about mathematics or logic. It is a scope claim about world-implemented macro-objecthood in the present paper.

Objecthood here means eligibility as a stable target of macro-level counterfactuals and interventions in the specified regime and horizon. It does not mean fundamentality or an extra ontological substance.

It is useful to distinguish stipulated closure from induced closure. In stipulated closure, autonomy is fixed by constitutive rules, as in chess or arithmetic. In induced closure, autonomy is discovered through dynamical screening-off in the world. This paper is restricted to induced closure in spatiotemporal systems.

## 3. From Real Patterns to Closure

### 3.1 The closure intuition

Closure can be stated without heavy formalism. A macro-pattern is real when level-description is sufficient to determine what follows at that level. In other words, closure is autonomy of what follows. If one must inspect lower-level distinctions to determine macro-futures, the level is not autonomous.

This is a transition claim, not a static shape claim. We care about dynamics. Two microstates may look similar now but diverge in macro-futures. If so, grouping them as one macrostate is not autonomous.

Definition (Closure relative to regime): a coarse-graining $Z_t = g(X_t)$ is closed over horizon $L$ and intervention class $\mathcal{I}$ when macrostate information is sufficient for what follows at the macro level, without importing additional within-class microstate distinctions.

The definition has two tests.

Predictive test: under the regime distribution, closure requires that $P(Z_{t+1}^{L} \mid Z_t)$ approximates $P(Z_{t+1}^{L} \mid X_t)$ for the target task.

Interventional test: for admissible interventions $i \in \mathcal{I}$, the induced macro-transition law $P_i(Z_{t+1}^{L} \mid Z_t)$ is approximately well-defined and stable across microstates that map to the same macrostate.

Here approximate can be instantiated by bounded conditional mutual information, bounded divergence between within-class macro-transition kernels, or bounded out-of-regime predictive regret under admissible interventions.

Lemma (Markov exact case): if the micro-process is first-order Markov and the partition induced by $g$ is strongly lumpable, then the induced macro-process is Markov and transition-autonomous at the macro level.

Formal note. Strong lumpability here means: for any two microstates $x, x'$ in macroclass $C_i$, and any macroclass $C_j$, the aggregated transition probability satisfies $\sum_{y \in C_j} P(y \mid x) = \sum_{y \in C_j} P(y \mid x')$. Transition-autonomous means that the macro transition kernel is well-defined and independent of which representative microstate in $C_i$ is occupied.

Scope note on interventions. The exact lemma targets the uncontrolled Markov case. In controlled settings, interventions can be treated as indexing kernels $P_i(\cdot \mid x)$ or as policies in a class $\Pi$. Closure is then assessed relative to the admissible class, not universally across all conceivable interventions. Admissible classes are constrained by physical implementability, including locality of influence and control-cost feasibility.

Admissibility checklist. Epistemic: the intervention can be measured and implemented by bounded agents. Dynamical: it preserves the target regime class instead of pushing into a different dynamical phase. Explanatory: it probes stable invariances rather than one-off artifacts. These constraints mirror ordinary experimental design, not ad hoc metaphysical additions.

Proof sketch (Markov exact case). Define a macro-kernel by summing micro-transition probabilities from any representative $x \in C_i$ into each macroclass $C_j$. Strong lumpability guarantees this sum is representative-independent. Hence the macro-kernel is well-defined. The induced process over macroclasses is therefore Markov with transitions given by that kernel, which is exactly transition autonomy in the exact case.

### 3.2 Minimal formal shape

Let a micro-process be $X_t$, and let a candidate macro-process be $Z_t = g(X_t)$. Closure for $Z$ asks whether $Z_t$ is sufficient for forecasting the distribution of $Z_{t+1}$, or a relevant horizon $Z_{t+1}^{L}$, without importing hidden distinctions among microstates inside each macrostate.

Notation: $Z_{t+1}^{L}$ denotes the macro-trajectory segment $(Z_{t+1}, Z_{t+2}, \ldots, Z_{t+L})$. Macro-transition profile means the vector of transition probabilities from one macrostate into the set of macro-classes.

Equivalent language from computational mechanics is useful here. Closure is the condition where the macro-level predictor from macro-pasts (the $\varepsilon$-side) matches what is obtainable from full micro-pasts for macro-futures (the $\upsilon$-side). When that equality holds, additional micro-information is redundant for the macro target (Shalizi 2001) (Rosas 2024).

In plain terms, if macro-past already carries the information needed for macro-future in the target regime, then micro-detail is not doing additional explanatory work for that target.

In the idealized settings considered here, with explicit dynamics and admissible intervention classes specified, informational diagnostics can track the same closure structure tested by interventional criteria. This matters for method.

Leakiness diagnostics are not a separate ontology test layered on top of causal claims. They are operational indicators of the same closure target when estimators are chosen carefully (Rosas 2024).

Outside first-order Markov settings, the same logic is expressed over enriched histories. Non-Markov closure asks whether macro-history screens off micro-history for macro-futures under the same admissible intervention class. Strong lumpability is the special case where relevant history reduces to the current state.

In this paper, informational diagnostics and interventional relevance are used together. Low leakiness is an operational test for autonomy, and interventional stability is the ontological interpretation of why that autonomy matters.

These diagnostics are evidential, not constitutive. Prediction and intervention do not create the pattern. They test whether a candidate coarse-graining tracks conditional-independence structure already present in the dynamics.

Predictive and interventional closure should be distinguished from the start. Predictive closure concerns screening-off for forecasts under a fixed data regime. Interventional closure concerns invariance of macro-transition structure under admissible perturbations. For objecthood claims here, interventional closure is the ontological standard, while predictive closure is usually the operational proxy.

Stated directly, if two microstates map to the same macrostate at time $t$, they must agree on macro-transition consequences. If they do not, the macrostate hides causally relevant structure and is not autonomous.

### 3.3 Operational protocol (in principle)

To make closure relative to regime operational, use the following recipe.

1. Choose candidate macro-variables and a measurement channel from microstate data to macrostate estimates.
2. Specify an intervention class $\mathcal{I}$, what can be clamped, perturbed, or controlled at the macro level.
3. Fix a prediction horizon $L$ and evaluation window.
4. Estimate leakiness, or a proxy, for each candidate partition.
5. Compare partitions under the same $\mathcal{I}$ and $L$, then retain those with robustly lower leakiness and stronger interventional stability.

This procedure does not require one privileged estimator. It requires transparent regime specification and cross-partition comparison under fixed constraints.

Admissibility protocol. Before running closure diagnostics, specify whether the intervention class satisfies three checks: realizable control channel (epistemic), regime preservation (dynamical), and invariance relevance (explanatory). If an intervention class fails any check, it is excluded from ontology assessment rather than treated as an alternative route to objecthood.

### 3.4 Dennett, sharpened

Dennett's compression point is preserved. Compression tracks objective regularity when it captures a stable transition structure. Predictive utility is preserved. Useful macro-models matter because they are often exploiting closure. What is added is a clear anti-gerrymandering requirement. A compressive coding is not enough. The partition must support autonomous macro-transitions.

Coding-trick contrast. A contrived encoding can compress observed trajectories by bundling states that happen to co-occur in one dataset. If those bundled states carry different onward transition profiles, the coding fails under modest perturbation and requires hidden-state repair. Closure detects this failure directly.

### 3.5 Why closure, not prediction alone

It helps to separate three nearby positions.

1. Compression-prediction realism: successful compression and forecasting are treated as sufficient for realist commitment.
2. Pure pragmatism: model choice is guided only by task utility, with no ontological consequence.
3. Closure under regime and intervention class: model success supports objecthood when macro-transitions remain autonomous under fixed $L$ and $\mathcal{I}$.

The third view has a discriminating consequence the first two can miss. Two partitions can be similarly compressive on observational fit, yet differ under interventions. If partition $P_1$ remains low-leak and stable under admissible perturbations while partition $P_2$ needs repeated micro-detail repair, closure favors $P_1$ as the better object candidate. This is not a tie-break by preference. It is a structural difference in transition autonomy that grounds objecthood rather than mere model convenience.

Mini illustration. Suppose two partitions achieve comparable one-step observational prediction in a calibration dataset. Under an admissible clamp intervention on one macro-variable, $P_1$ retains stable macro-transition parameters, while $P_2$ shows class-internal divergence that forces reintroduction of hidden micro labels. In the diagnostics of Sections 5.2 and 5.3, this appears as lower within-class kernel divergence and lower intervention-conditioned predictive gain $\Delta$ for $P_1$. The two views that rely on observational compression alone can treat this as a near tie. The closure criterion does not. It ranks $P_1$ higher because it remains interventionally coherent.

## 4. Lumpability as the Anti-Gerrymandering Constraint

### 4.1 Strong lumpability as an ideal exact benchmark

Definition (macro-transition profile). For a macrostate $M$, its macro-transition profile is the vector of transition probabilities from $M$ into the available macro-classes at the chosen horizon.

In Markov settings, the exact condition is strong lumpability. Partition the microstate space into macro-classes. For any two microstates in the same class, the total transition probability to each macro-class must be the same. If that condition holds, the induced macro-process is Markov with well-defined transitions. If it fails, macro-dynamics depend on hidden micro-history (Rosas 2024).

For the Markov template used here, strong lumpability is the canonical exact criterion for autonomous macro-transitions. It should be read as an ideal limit case. In broader modeling practice, the same role is played by equivalent closure conditions over enriched histories or augmented state spaces when first-order Markov assumptions do not hold.

Strong lumpability is sufficient for causal closure in this setting, not necessary in every modeling context. This is why approximate and non-Markov extensions remain legitimate parts of the framework rather than fallback concessions.

This condition is philosophically important because it formalizes one precise sense of non-gerrymandered. A valid macro-class is not just a set of points we grouped together. It is a set whose members are equivalent with respect to macro-relevant futures.

### 4.2 Why gerrymanders fail

Gerrymandered composites typically join microstates with different onward profiles. Aggregating them erases distinctions needed for macro-forecast and control, so the model requires hidden bookkeeping to repair prediction. That is the structural sign of non-autonomy.

### 4.3 Toy example: one successful and one failed partition

Consider a Markov chain with microstates $\{x_1, x_2, x_3, x_4\}$. Let us compare two partitions using a symbolic transition pattern.

Use parameters $\alpha, \beta, \gamma, \delta$ with $\alpha + \beta = 1$ and $\gamma + \delta = 1$, and let the micro-transition matrix have rows:

$$
\begin{aligned}
P(x_1,\cdot) &= (\alpha,\beta,0,0),\\
P(x_2,\cdot) &= (\alpha,\beta,0,0),\\
P(x_3,\cdot) &= (0,0,\gamma,\delta),\\
P(x_4,\cdot) &= (0,0,\gamma,\delta).
\end{aligned}
$$

Partition $A$: $A_1 = \{x_1, x_2\}$ and $A_2 = \{x_3, x_4\}$.

For $A$, states inside each class have matching probabilities to macro-classes. From either $x_1$ or $x_2$, the total probability to $A_1$ is $1$ and to $A_2$ is $0$. From either $x_3$ or $x_4$, the total probability to $A_1$ is $0$ and to $A_2$ is $1$. Lumpability holds, so macro-transitions are autonomous.

Partition $B$: $B_1 = \{x_1, x_3\}$ and $B_2 = \{x_2, x_4\}$.

Now compare members of $B_1$. The probability of transitioning to $B_1$ from $x_1$ is $\alpha$, but from $x_3$ it is $\gamma$. If $\alpha \neq \gamma$, knowing only that the system is in $B_1$ is insufficient to predict movement to $B_1$ versus $B_2$. Members of one macrostate disagree on macro-transitions, and lumpability fails.

The lesson is simple. The difference between a legitimate macro-object and a contrived aggregate can be tested by whether the partition preserves transition autonomy. Arbitrary disjunctive groupings are not just unhelpful. They are dynamically incoherent as macro-candidates.

### 4.4 If a weird partition is closed

A natural objection is that an unusual, disjunctive partition might still satisfy lumpability in a symmetric system. That is correct. On this framework, if such a partition genuinely supports autonomous macro-transitions in the stated regime, it counts as real at that grain.

This is not a concession to arbitrariness. It is a consequence of the criterion's target. The test tracks dynamic coherence, not intuitive naturalness. If a reader wants a separate naturalness constraint, that must be introduced as an additional criterion.

The exclusion claim should therefore be read precisely. The framework excludes high-leak, dynamically incoherent aggregates. It does not exclude every disjunctive grouping.

Two guardrails keep this from becoming permissive. First, closure claims must remain stable across modest horizon and regime perturbations. Second, among candidates with similar robustness, the coarsest partition is preferred.

## 5. Approximate Lumpability: Realism Without Perfection

### 5.1 Why exact lumpability is uncommon

Exact lumpability is a useful benchmark, but complex systems are noisy, open, and high-dimensional. Boundaries leak. Couplings shift across regimes. Biological and social systems especially rarely satisfy exact closure across all scales and perturbations.

This is not a defect in the framework. It is a reason to move from binary closure to graded closure.

The right standard is type-level before token-level. A pattern type can be robustly closed for a regime even when a particular token fails because of boundary violation, unusual perturbation, or timescale shift.

This implies a regime-dependent ontology. Objecthood is phase-dependent: a pattern can be robust in one thermodynamic regime and lose closure in another. This is a feature of the account, because causal structure itself can appear or disappear across regime transitions.

This does not imply metaphysical annihilation. It means the closure conditions that license object-level treatment are regime-sensitive.

### 5.2 Leakiness as graded deviation

A natural quantity is leakiness: how much micro-information inside a macrostate improves macro-future prediction once the macrostate is already known. One concise expression is the conditional mutual information $I(X_t; Z_{t+1} \mid Z_t)$.

In plain terms, leakiness asks whether hidden micro detail still changes the macro forecast after we already know the current macrostate. Low leakiness means little hidden dependence. High leakiness means the coarse-graining still hides causally relevant structure.

Leakiness can be estimated from observational data, from interventional data, or from both. Which source dominates depends on the regime and on what interventions are admissible. Interventional estimates take priority when feasible.

For application, low should be defined procedurally rather than asserted. Fix a target horizon and intervention class, then compare candidate coarse-grainings. A partition counts as low-leak relative to its competitors when adding within-class microdetail yields no substantial predictive or interventional gain over the same regime.

Tolerance is comparative, not absolute. It is set by cross-partition performance under fixed constraints, rather than by a free-standing universal threshold.

Decision schema for low leakiness:

1. Choose a benchmark family of candidate partitions $\{g_k\}$ under fixed $L$ and $\mathcal{I}$.
2. Compute a standardized proxy, for example predictive gain $\Delta$ under added within-class micro-features using a proper scoring rule.
3. Select a tolerance rule, such as an elbow criterion, a point of diminishing returns in predictive gain, or a stability threshold over resamples.
4. Prefer partitions that are low-leak by that rule and remain stable under modest shifts in horizon and intervention distribution.

Equivalent diagnostics can be used when direct mutual-information estimation is hard in high-dimensional finite data settings.

1. Within-class divergence between estimated macro-transition kernels.
2. Cross-validated predictive gain from adding within-class micro-features.
3. Intervention-response invariance tests across microstates that map to one macrostate.

The point is not metric monopoly. The point is to measure how far a partition is from closure using transparent, comparable diagnostics.

Minimal requirements for any leakiness proxy are straightforward. It must quantify within-class micro-information gain about macro-futures, be comparable across candidate partitions, and remain reasonably stable under resampling or modest regime shifts.

These diagnostics need not be numerically identical in finite data. They should typically converge in rank-order for strong candidates, and disagreements should be treated as model-check signals rather than as immediate falsifications of the framework.

A related guardrail is useful here. Computational closure, understood as a successful higher-level computational description, can hold in cases where informational and interventional closure do not fully hold. For this paper's objecthood claim, computational adequacy alone is not enough; informational and interventional closure remain the decisive standards.

### 5.3 Worked regime instantiation

Consider a simulated lattice process with local coupling and boundary forcing. Compare two candidate coarse-grainings.

1. $Z^{(A)}$: spatially local energy-density bins.
2. $Z^{(B)}$: a parity-coded disjunctive grouping that mixes distant lattice regions.

Fix intervention class $\mathcal{I}$ as boundary-condition clamps and localized perturbation pulses. Evaluate two horizons, short $L=1$ and medium $L=10$.

At $L=1$, both partitions can appear similarly predictive under purely observational fitting. Under the fixed interventions, $Z^{(A)}$ remains stable while $Z^{(B)}$ shows higher leakiness and intervention-response heterogeneity within macroclasses. At $L=10$, this divergence widens because hidden within-class differences in $Z^{(B)}$ accumulate. The verdict is therefore horizon-relative and regime-relative in exactly the intended sense.

This kind of comparison makes closure relative to $L$ and $\mathcal{I}$ operational rather than merely verbal.

The following pieces play different roles. The table fixes the setup. Algorithm 1 states the procedure. The surrounding paragraphs state how to interpret the result.

| Component | Specification |
| --- | --- |
| Micro process | Lattice dynamics with local coupling and boundary forcing |
| Candidate $Z^{(A)}$ | Spatially local energy-density bins |
| Candidate $Z^{(B)}$ | Parity-coded disjunctive grouping |
| Intervention class $\mathcal{I}$ | Boundary clamps plus localized perturbation pulses |
| Horizons | $L=1$ and $L=10$ |
| Diagnostics | Predictive gain, within-class kernel divergence, intervention-response invariance |
| Expected verdict | $Z^{(A)}$ remains lower-leak and more invariant across $L$ |

Algorithm 1: Protocol for leakiness estimation.

This algorithm compares candidate partitions only within a fixed regime, horizon, and admissible intervention setup.

Let $g_k$ denote candidate coarse-graining maps and let $\Delta_k$ denote predictive gain from adding within-class microfeatures under a proper scoring rule.

1. For each candidate map $g_k$, estimate macrostates $Z_t = g_k(X_t)$.
2. Fit a baseline predictor for $Z_{t+1}^{L}$ from $Z_t$ alone.
3. Fit an augmented predictor adding within-class microfeatures that differentiate microstates mapped to one macrostate.
4. Compute $\Delta_k = \text{gain}(\text{augmented}) - \text{gain}(\text{baseline})$.
5. Test intervention-response invariance under the admissible intervention set $\mathcal{I}$.
6. Prefer partitions with low $\Delta_k$ and high invariance stability.

The sketch is intentionally procedural. Readers can treat it as a transparent recipe for applying the criterion rather than as a programming requirement.

### 5.4 Stable versus merely entailed regularities

This graded move supports an important ontological distinction. Many macro-regularities are entailed by complete microhistory. Fewer are stable enough to support repeatable macro-prediction and intervention. Objecthood tracks the stable subset. In short, stable regularities are entailed, but not all entailed regularities are stable objects.

This distinction also explains why many gerrymandered constructions feel tempting. They can be entailed by the full microhistory yet remain unstable and high-maintenance under regime shifts.

### 5.5 Practical qualification

In many domains, direct interventions are sparse or ethically constrained. In such cases predictive closure serves as an operational indicator, while the ontological target remains interventional closure relative to admissible perturbations.

Where this target is met, a practical consequence follows. Macro-level control can approach optimal controllability for the specified intervention class without continual microstate tracking.

Predictive fit alone cannot settle objecthood. Overfit representational schemes can track past trajectories while failing under novel perturbations. Closure claims should therefore be judged by out-of-regime and interventional stability, not only in-sample prediction.

### 5.6 Failure modes and diagnostics

Three failure modes are especially relevant.

1. Predictive closure can appear strong in-sample while interventional closure fails under admissible perturbations.
2. Finite-sample estimation can bias mutual-information and divergence proxies.
3. Partial observability can hide within-class heterogeneity that later appears as instability.
4. Nonstationarity can make a previously low-leak partition unstable outside the calibration window.

The mitigation strategy is procedural and comparative. Use multiple diagnostics, compare partitions under fixed $L$ and $\mathcal{I}$, and require robustness under modest horizon and intervention-distribution changes. When indicators disagree strongly, treat this as evidence for model revision rather than as immediate ontology verdict.

## 6. Excluding Dynamically Incoherent Composites

Before turning to pathology cases, recall the Section 2 ladder. A failure in one representation of a macro-kind does not by itself show unreality of the pattern. The issue here is whether candidate partitions remain autonomous under the closure tests.

### 6.1 Disjunctive composites

Dynamically incoherent composites do not form autonomous transition structures. Their parts participate in largely independent, differently constrained dynamics. Grouping them forces additive tracking rather than screening-off. Predictive performance then depends on ongoing micro bookkeeping. Under the stated closure conditions, such composites fail the autonomy test.

The core step is heterogeneity of onward profiles. If subsystems are independent or weakly coupled relative to $\mathcal{I}$, then a disjunctive macroclass mixing their states will typically contain microstates with different transition vectors over future macroclasses. That heterogeneity induces leakiness unless the intervention class collapses those differences. In ordinary regimes, it does not.

This diagnosis is stronger than saying these composites are unnatural or inconvenient. The failure is dynamical. They do not support macro-transitions as their own level.

This point complements, rather than replaces, MDL-style cohesion arguments. Compression criteria explain why some models are cognitively efficient. Closure criteria explain why some targets are dynamically available for robust tracking under admissible interventions.

### 6.2 High-maintenance ontological posits

Historically, some posits survive only through repeated patches. The pattern-level diagnosis is high leakiness. If a purported macro-kind constantly requires additional hidden variables to preserve forecast quality, that is evidence against closure at that partition.

High maintenance can be stated precisely. A partition is high maintenance when reliable macro-prediction repeatedly forces refinement of within-class distinctions, so yesterday's macrostate labels must be supplemented by new micro bookkeeping to retain accuracy.

This reframes familiar examples such as phlogiston-style constructs. The critique is not retrospective ridicule. The critique is structural. A candidate that continually imports corrections to preserve macro-prediction behaves like a non-autonomous partition.

## 7. Plausible Candidates Under the Protocol

At this stage, keep the ladder from Section 2 in view. The claim is about pattern-level autonomy, not infallibility of any one representation and not perfect behavior of every token instance.

The examples in this section are stylized protocol illustrations. They show how the criterion is applied. They are not offered as stand-alone empirical demonstrations.

### 7.1 Hurricanes and vortical structures

For atmospheric vortices, the framework predicts that macrovariables such as pressure organization, rotational structure, and energy exchange can retain predictive and interventional relevance while many micro-perturbations wash out. Under that condition, micro-complete tracking is not required for domain-relevant forecasts.

This is a Level 2 claim about pattern structure, not a Level 4 claim that any particular forecasting representation is final.

A stylized test case is straightforward. Take a macrostate with central pressure depth, azimuthal wind structure, translation velocity, and sea-surface-energy intake as variables. Then ask whether adding fine-grained molecule-level distinctions inside fixed macro bins materially improves short-horizon track and intensification forecasts under the same intervention class. If not, closure is strong at that grain. If yes, leakiness is high and the partition should be refined.

The claim is not perfect closure at every token and horizon. The framework predicts robust low leakiness across the intervention class that defines meteorological practice when those macrovariables genuinely screen off micro-variation.

### 7.2 Organisms and cells

Cells and organisms are plausible candidates for boundary-mediated screening-off. Membranes, regulatory pathways, and homeostatic loops can support macro-level control that is not reducible to ad hoc aggregation. Again, closure is not absolute. The relevant question is whether closure is strong enough in specified regimes to justify object-level treatment.

Again, the claim targets pattern-level autonomy. Particular models can fail while the pattern remains real if alternative representations capture the same closure structure.

A corresponding stylized biological test uses membrane potential, key metabolite concentrations, and regulatory-state variables as a macrostate. The closure question is whether these variables forecast near-future functional states better than micro-detail-augmented alternatives once intervention class and horizon are fixed.

On this framework, biological explanation is not merely a pragmatic shortcut if these closure conditions are met. It is tracking a real pattern with substantial transition autonomy.

### 7.3 Borderline cases

Clouds, flames, and ecosystems illustrate why graded criteria matter. Some instances support stable macro-prediction over limited horizons; others degrade quickly. A leakiness spectrum explains this without collapsing into all-or-nothing verdicts. The framework gives principled gradation rather than intuition by anecdote.

## 8. Dennett Revisited

### 8.1 What Dennett got right

Dennett was right that compression and prediction can reveal objective structure rather than mere cognitive convenience. He was also right that pattern realism is compatible with physicalism when understood as level-specific structure rather than rival substance (Dennett 1991).

### 8.2 What needed completion

What was missing was an explicit anti-gerrymandering criterion and a graded account for imperfect real systems. Strong lumpability is a natural exact formalization of that criterion in Markov settings. Leakiness-based approximate lumpability supplies the realistic extension.

Relation to causal-emergence work should be explicit.

Agreement: Hoel-style effective-information analyses ask when macro-descriptions gain determinism and reduce degeneracy relative to micro-descriptions (Hoel 2013).

Difference: the present criterion is organized around closure under an admissible intervention class and robustness across regime and horizon choices.

Effective-information gains can therefore be treated as corroborating diagnostics inside this framework rather than as the sole ontological test.

### 8.3 Sharpened slogan

The revised slogan is straightforward: a real pattern is an autonomous coarse-graining.

## 9. Objections and Replies

### 9.1 This remains instrumentalist

Objection: choosing macro-targets reflects interests, so realism still collapses into usefulness.

Reply: target selection is interest-shaped, but closure success is not arbitrary once target and regime are fixed. Autonomy is a property of system dynamics under explicit constraints, not of analyst preference.

More strongly, the relevant regimes are constraint-relative, not observer-relative. Agents can choose which domain to study, but they cannot choose whether closure holds once horizon, intervention class, and target are fixed. Admissible intervention classes are bounded by locality and energetic feasibility, so ontology is not set by arbitrary intervention design.

An example of an inadmissible class is direct arbitrary manipulation of distant microstates with no physically realizable control channel. Such classes can be defined formally, but they are excluded from ontology tests because they violate implementation constraints.

For social kinds, admissibility usually proceeds through implementation mechanisms. A legal intervention is admissible not because a rule is written, but because enforcement institutions physically constrain behavior through courts, bureaucracies, and sanctions. Stipulation has causal force only through implementation.

### 9.2 Predictive sufficiency does not imply existence

Objection: prediction can work without ontological commitment.

Reply: this paper adopts an interventionist-causal criterion for objecthood. When a level supports stable intervention and control in its domain, that is a reason for ontological commitment to that level's patterns (Woodward 2003) (Pearl 2000). This is a theory-laden meta-commitment, and it is stated explicitly. The argument is not that prediction alone logically entails existence.

### 9.3 Markov assumptions are too restrictive

Objection: strong lumpability presupposes Markov microdynamics.

Reply: the Markov template is a clean tractable case. Non-Markov systems can be addressed by state augmentation or by equivalent conditional-independence formulations over enriched histories. The philosophical criterion is closure of transition structure, not commitment to a single stochastic formalism.

### 9.4 What about abstract objects?

Objection: if formal systems are closed by definition, does the account collapse into formalism?

Reply: this paper is restricted to spatiotemporal, world-implemented patterns. Formal systems are treated as a contrast class and best understood as stipulated closure, whereas the present argument targets induced closure in empirical dynamics. Scope control is intentional.

## 10. Conclusion: What Is New and What It Buys

The paper offered a precise criterion for real patterns by combining closure with lumpability. The criterion is exact in strong-lumpability settings and graded in realistic approximate settings. It excludes dynamically incoherent composites by structural test, not rhetorical dismissal. It also provides a principled way to evaluate canonical macro-object candidates by testing whether their partitions remain low-leak and intervention-relevant across specified regimes.

The conceptual gain is twofold. First, it sharpens Dennett without abandoning his core insight. Second, it gives a principled bridge from philosophical pattern realism to operational diagnostics used in complex-systems science.

Future work can proceed in three directions: empirical estimation of leakiness in concrete domains, tighter links with Markov-blanket and computational-mechanics formalisms, and disciplined extension to social kinds where implementation and normativity interact under explicit closure conditions.

Social kinds are likely the hardest extension case. Their closure profile is often recursive: collective recognition helps sustain the very constraints being recognized. This does not refute the framework, but it means admissibility and implementation must be specified with unusual care in institutional domains.

An additional direction is structural. The space of closure-supporting coarse-grainings can be analyzed in theory space as a nested architecture of macro-models, rather than only as ad hoc candidates in state space.

The framework also has a clear failure condition. If proposed macro-partitions systematically fail closure tests across well-specified horizons and intervention classes, then the corresponding objecthood claims should be withdrawn or downgraded.

## References (selected)

Bedau, Mark A. 1997. "Weak Emergence." *Philosophical Perspectives* 11: 375-399.

Dennett, Daniel C. 1991. "Real Patterns." *Journal of Philosophy* 88 (1): 27-51.

Hoel, Erik P., Larissa Albantakis, and Giulio Tononi. 2013. "Quantifying Causal Emergence Shows that Macro Can Beat Micro." *Proceedings of the National Academy of Sciences* 110 (49): 19790-19795.

Ladyman, James, and Don Ross. 2007. *Every Thing Must Go: Metaphysics Naturalized*. Oxford: Oxford University Press.

Mitchell, Sandra D. 2009. *Unsimple Truths*. Chicago: University of Chicago Press.

Gładziejewski, Paweł. 2025. "Real patterns, the predictive mind, and the cognitive construction of the manifest image." *Synthese* 206: 225. https://doi.org/10.1007/s11229-025-05311-0.

Pearl, Judea. 2000. *Causality*. Cambridge: Cambridge University Press.

Rosas, Fernando E., Bernhard C. Geiger, Andrea I. Luppi, Anil K. Seth, Daniel Polani, Michael Gastpar, and Pedro A. M. Mediano. 2024. "Software in the natural world: A computational approach to hierarchical emergence." arXiv preprint arXiv:2402.09090.

Shalizi, Cosma Rohilla, and James P. Crutchfield. 2001. "Computational Mechanics: Pattern and Prediction, Structure and Simplicity." *Journal of Statistical Physics* 104 (3-4): 817-879.

Woodward, James. 2003. *Making Things Happen: A Theory of Causal Explanation*. Oxford: Oxford University Press.
