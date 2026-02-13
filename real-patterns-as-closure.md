# Real Patterns Need Closure: A Dynamical Criterion for Non-Gerrymandered Macro-Objects

## 0. Abstract

Dennett's real-patterns framework rightly links ontology to compression and prediction, but it faces two persistent criticisms: it can look instrumentalist (real just means useful to us) and it can look permissive (any coding trick seems to count). This paper argues that both problems trace to a missing ingredient: an explicit closure criterion. A pattern qualifies as a real macro-object when its coarse-grained description is autonomous, meaning that differences among microstates inside a macrostate do not change what happens next at the macro level. When the macro-description carries everything needed for macro-transitions, lower-level bookkeeping is redundant, and the pattern earns ontological standing rather than mere predictive convenience. In idealized settings this reduces to strong lumpability. In realistic settings it becomes a graded condition, measured by how much hidden micro-detail still leaks into macro-forecasts. The framework excludes dynamically incoherent aggregates (like "my left shoe plus Neptune") by structural test, while still admitting unusual partitions when they genuinely satisfy closure. The result is a tighter, more defensible realism about macro-patterns, with explicit conditions for when objecthood claims succeed and when they fail.

## 1. Introduction: Why Dennett Needs a Criterion

Dennett's proposal that the world contains real patterns changed how many philosophers discuss emergence and ontology. The attraction is clear. It gives us a way to respect higher-level structure without denying lower-level physics. It also captures a central feature of scientific practice. We routinely treat macro-regularities as objectively trackable because they support compression and prediction (Dennett 1991).

Still, the view is often judged incomplete. The first criticism is instrumentalist drift. If real patterns are just patterns that help us predict, then reality seems indexed to user interests. The second criticism is permissiveness. If compression is the standard, then contrived composites appear admissible under some coding conventions. Critics then invoke arbitrary aggregates and disjunctive kinds to argue that real-pattern talk lacks ontological discipline.

A simple contrast makes the gap vivid. Consider a hurricane and "the object consisting of my left shoe and the planet Neptune." Both can be described. Both can, in some trivial coding sense, be compressed. But the hurricane supports autonomous prediction and intervention at its own level: knowing its pressure structure and rotational organization tells you what it will do next without tracking every molecule. The shoe-Neptune composite does not. Its "macro-state" tells you nothing about what happens next unless you separately track the shoe and the planet. What distinguishes them? This paper argues the answer is closure of transition structure.

Both criticisms identify a genuine gap, but not a fatal flaw. The gap is the absence of an explicit closure criterion. Once closure is made central, and once closure is tied to lumpability in the induced case, Dennett's core idea can be sharpened into a robust criterion.

The intended move is a tightening, not a rejection. Dennett's framework is broad enough to count many useful, imperfect, and purpose-relative patterns as real. The present paper asks a narrower question: which of those patterns qualify as robust macro-objects with autonomous transition structure.

The thesis is this: a real pattern is an autonomous coarse-graining. More precisely, a pattern is real when macrostate information is sufficient for macro-transition structure, so lower-level distinctions inside each macrostate no longer matter for macro-evolution. In exact Markov settings, this is strong lumpability. In realistic settings, this is approximate lumpability measured by leakiness.

In this paper, gerrymandered means dynamically incoherent: a partition that fails transition autonomy by requiring persistent within-class micro bookkeeping. It does not mean merely intuitively disjunctive.

This framing also limits instrumentalist drift. Analysts choose research aims, but the intervention classes that matter for closure are not arbitrary. They are constrained by what embodied agents can physically measure and control under locality, bandwidth, and thermodynamic limits. The detailed admissibility constraints that govern intervention-class selection are developed in Section 3.1.

A methodological point should be flagged early. Closure is diagnosed by predictive and interventional tests, but the structure being diagnosed is in the dynamics, not in the analyst's preferences. The conditional-independence relations that constitute closure hold whether or not anyone computes them. Prediction and intervention are the lenses; the causal topology is the terrain. This paper uses those lenses, but the ontological claim is about the terrain.

### 1.1 Related work and contribution

This paper sits at an intersection of four conversations. From Dennett, it takes the claim that compression and prediction can track objective structure (Dennett 1991). From computational mechanics, it takes the demand that macrostructure must preserve transition-relevant information rather than mere descriptive convenience (Shalizi 2001). From recent closure work, it takes the thought that macro-autonomy can be diagnosed by screening-off relations between micro and macro trajectories (Rosas 2024). From interventionist philosophy of science, it takes the idea that ontological commitment is tied to stable intervention-guiding structure, not to metaphysical fundamentality (Woodward 2003) (Pearl 2000).

It also connects to adjacent emergence and coarse-graining debates, including weak emergence, macro-causal advantage, and naturalized metaphysics (Bedau 1997) (Hoel 2013) (Ladyman and Ross 2007) (Mitchell 2009). Of particular relevance is Ladyman and Ross's "Rainforest Realism," which holds that real patterns exist at every scale but provides no discriminating criterion for which patterns count as autonomous macro-objects. The closure criterion fills that gap. The contribution here is narrower than the Rainforest programme but more operationally specific: a closure criterion with explicit tests for dynamic coherence.

Recent work also develops the cognitive genealogy of real-pattern commitments, linking predictive coding and free-energy minimization to the construction of the manifest image (Gładziejewski 2025). That line explains how agents learn and update pattern-representations. The present paper addresses a distinct question: what makes a pattern objectively available to be found in the first place.

Rosas et al. provide the formal machinery. The present paper uses that machinery for a philosophical purpose, to state and defend an ontological criterion with explicit exclusion conditions for dynamically incoherent partitions.

Accordingly, this paper adopts computational-mechanics closure logic and predictive-equivalence tools, but does not treat predictive equivalence alone as ontologically decisive. The added commitment is intervention-class restriction and interventional invariance as the primary objecthood condition.

The novel claim here is not any one ingredient in isolation. It is their joint use as a discriminating criterion: closure of macro-transition structure, exact in ideal lumpable settings and graded by leakiness in realistic settings, used specifically to filter gerrymandered partitions from autonomous macro-object candidates.

The paper proceeds as follows. Section 2 disambiguates pattern talk by separating reality, pattern, instance, and representation. Section 3 formulates closure as the governing idea. Section 4 introduces strong lumpability and provides a toy example with success and failure partitions. Section 5 extends the criterion to graded, noisy domains. Section 6 applies the view to dynamically incoherent composites and high-maintenance ontological posits. Section 7 shows how canonical candidates can be evaluated under the protocol. Section 8 states the interpretive gain for Dennett. Section 9 addresses five standard objections. Section 10 concludes with implications and future work.

In brief: a coarse-graining counts as a real pattern when its macro-transition structure is autonomous for a specified regime and horizon, so that within-class micro-differences do not change what happens next at the macro level. In ideal settings this reduces to strong lumpability. In realistic settings it is a graded condition measured by how much micro-detail still leaks into macro-forecasts. The formal criterion, with precise definitions and commitment structure, is stated at the end of Section 3 once the relevant concepts have been introduced.

## 2. Disambiguation: What Exactly Is a Pattern?

### 2.1 The reality-pattern-instance-representation ladder

Many disputes begin by mixing levels. We need a stable ladder.

1. **Reality itself:** the causal process independent of our models. (The atmosphere's actual dynamics.)
2. **Patterns supported by reality:** stable dependency and transition structures. (The hurricane pattern: rotating low-pressure vortex with characteristic life cycle.)
3. **Instances of patterns:** concrete tokens. (Hurricane Katrina, this particular cell, this legal proceeding.)
4. **Representations of patterns:** theories, equations, state spaces, verbal models. (The Saffir-Simpson scale; a fluid-dynamics model of vortex formation.)
5. **Representations of instances:** observations, records, memories of particular tokens. (Satellite imagery of Katrina; a court transcript.)

The same word can refer to different layers. That ambiguity creates pseudo-disputes. A representation may fail while the pattern remains real. A token may be noisy while the type remains stable. A pattern may be real even when no agent currently represents it.

Level 5 is included for auditability. Many ontology disputes depend on slippage between claims about an instance and claims about a record of that instance.

Crucially, implementation and representation must be distinguished. Implementation concerns the physical substrate running the process. Representation concerns the model used to track it. A process can be fully implemented while available representations are partial or mistaken.

### 2.2 What pattern is real means here

In this paper, calling a pattern "real" carries a specific meaning: a coarse-graining that earns autonomy in transition structure. The claim is modest and precise. We are not adding a new substance to ontology. We are identifying when macro-description tracks objective structure well enough to function as its own level of what follows. The scope is limited to world-implemented macro-objecthood; the paper makes no claims about the status of mathematics, logic, or other abstract domains.

Objecthood here means eligibility as a stable target of macro-level counterfactuals and interventions in the specified regime and horizon. It does not mean fundamentality or an extra ontological substance.

It is useful to distinguish stipulated closure from induced closure. In stipulated closure, autonomy is fixed by constitutive rules, as in chess or arithmetic. In induced closure, autonomy is discovered through dynamical screening-off in the world. This paper is restricted to induced closure in spatiotemporal systems.

## 3. From Real Patterns to Closure

### 3.1 The closure intuition

Closure can be stated without heavy formalism. A macro-pattern is real when level-description is sufficient to determine what follows at that level. In other words, closure is autonomy of what follows. If one must inspect lower-level distinctions to determine macro-futures, the level is not autonomous.

The emphasis on "what follows" matters. Closure is a transition claim, not a static shape claim. Two microstates may look similar now but diverge in macro-futures. If so, grouping them as one macrostate fails the autonomy requirement.

Definition (Closure relative to regime): a coarse-graining $Z_t = g(X_t)$ is closed over horizon $L$ and intervention class $\mathcal{I}$ when macrostate information is sufficient for what follows at the macro level, without importing additional within-class microstate distinctions.

The definition has two tests.

**Predictive test:** under the regime distribution, does the macrostate carry enough information to forecast macro-futures? Formally, closure requires that $P(Z_{t+1}^{L} \mid Z_t)$ approximates $P(Z_{t+1}^{L} \mid X_t)$ for the target task. In plain language: knowing the macro-state should be almost as good as knowing the full micro-state, for purposes of predicting what happens next at the macro level.

**Interventional test:** when we perturb the system using admissible interventions, does the macro-transition law remain stable regardless of which micro-realization sits inside the macrostate? Formally, for admissible interventions $i \in \mathcal{I}$, the induced law $P_i(Z_{t+1}^{L} \mid Z_t)$ is approximately well-defined and stable across microstates that map to the same macrostate.

"Approximate" can be instantiated by bounded conditional mutual information, bounded divergence between within-class macro-transition kernels, or bounded out-of-regime predictive regret under admissible interventions. The exact choice of metric is less important than the structural question: does hidden micro-detail still change the macro forecast?

In the idealized case where the micro-process is first-order Markov and the partition is strongly lumpable, the induced macro-process is itself Markov with well-defined, representative-independent transitions. This is transition autonomy in its cleanest form. (Formal details, including the lumpability definition, lemma, and proof sketch, are collected in Section 3.1.1 below for readers who want them.)

Because closure is relative to an intervention class, the question of which interventions count does substantial philosophical work. Three admissibility constraints govern intervention-class selection throughout this paper. **Epistemic admissibility:** the intervention can be measured and implemented by bounded agents with finite resources. **Dynamical admissibility:** it preserves the target regime class instead of pushing the system into a different dynamical phase. **Explanatory admissibility:** it probes stable invariances rather than one-off perturbation artifacts. These constraints are physically anchored: interventions must be locally propagating and energetically feasible. They mirror ordinary experimental design, not ad hoc metaphysical additions. This blocks arbitrary, paper-defined intervention classes from setting ontology by stipulation.

#### 3.1.1 Formal details (Markov exact case)

Strong lumpability means: for any two microstates $x, x'$ in macroclass $C_i$, and any macroclass $C_j$, the aggregated transition probability satisfies $\sum_{y \in C_j} P(y \mid x) = \sum_{y \in C_j} P(y \mid x')$. Transition-autonomous means the macro transition kernel is well-defined and independent of which representative microstate in $C_i$ is occupied.

Lemma: if the micro-process is first-order Markov and the partition induced by $g$ is strongly lumpable, then the induced macro-process is Markov and transition-autonomous at the macro level.

Proof sketch. Define a macro-kernel by summing micro-transition probabilities from any representative $x \in C_i$ into each macroclass $C_j$. Strong lumpability guarantees this sum is representative-independent. Hence the macro-kernel is well-defined. The induced process over macroclasses is therefore Markov with transitions given by that kernel.

Scope note on interventions. The exact lemma targets the uncontrolled Markov case. In controlled settings, interventions can be treated as indexing kernels $P_i(\cdot \mid x)$ or as policies in a class $\Pi$. Closure is then assessed relative to the admissible class, not universally across all conceivable interventions.

### 3.2 Minimal formal shape

Let a micro-process be $X_t$, and let a candidate macro-process be $Z_t = g(X_t)$. Closure for $Z$ asks whether $Z_t$ is sufficient for forecasting the distribution of $Z_{t+1}$, or a relevant horizon $Z_{t+1}^{L}$, without importing hidden distinctions among microstates inside each macrostate.

Notation: $Z_{t+1}^{L}$ denotes the macro-trajectory segment $(Z_{t+1}, Z_{t+2}, \ldots, Z_{t+L})$. Macro-transition profile means the vector of transition probabilities from one macrostate into the set of macro-classes.

Equivalent language from computational mechanics makes the test concrete. For any macro-process $Z$, two prediction machines can be defined (Shalizi 2001) (Rosas 2024). The $\varepsilon$-machine is the minimal model that predicts $Z$'s future from $Z$'s own past: it uses only macro-level information. The $\upsilon$-machine is the minimal model that predicts $Z$'s future from the full micro-past $X$: it has access to everything. Closure holds when these two machines are equivalent, meaning that the $\varepsilon$-machine already captures everything the $\upsilon$-machine knows about macro-futures. At that point, additional micro-information is provably redundant for the macro target.

In plain terms, if macro-past already carries the information needed for macro-future in the target regime, then micro-detail is not doing additional explanatory work for that target.

In the idealized settings considered here, with explicit dynamics and admissible intervention classes specified, informational diagnostics can track the same closure structure tested by interventional criteria. This matters for method.

Leakiness diagnostics serve as operational indicators of the same closure target that interventional criteria test. They are not a separate ontology test layered on top of causal claims (Rosas 2024).

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

Admissibility disputes are expected, especially across disciplines. A useful adjudication rule is to compare candidate intervention classes by what they physically permit and by whether they preserve the same target regime. For example, a meteorological intervention class that includes boundary-pressure perturbations can be admissible for storm dynamics, while direct molecule-by-molecule remote rewriting is not. In institutional analysis, changing enforcement intensity can be admissible, while instant arbitrary rewrites of all agent beliefs are not. When two classes are both admissible and target the same regime, the framework permits plural testing rather than forced monism.

### 3.4 Dennett, sharpened

Dennett's compression point is preserved. Compression tracks objective regularity when it captures a stable transition structure. Predictive utility is preserved. Useful macro-models matter because they are often exploiting closure. What is added is a clear anti-gerrymandering requirement. A compressive coding is not enough. The partition must support autonomous macro-transitions.

Coding-trick contrast. A contrived encoding can compress observed trajectories by bundling states that happen to co-occur in one dataset. If those bundled states carry different onward transition profiles, the coding fails under modest perturbation and requires hidden-state repair. Closure detects this failure directly.

### 3.5 Why closure, not prediction alone

It helps to separate three nearby positions.

1. Compression-prediction realism: successful compression and forecasting are treated as sufficient for realist commitment.
2. Pure pragmatism: model choice is guided only by task utility, with no ontological consequence.
3. Closure under regime and intervention class: model success supports objecthood when macro-transitions remain autonomous under fixed $L$ and $\mathcal{I}$.

The third view has a discriminating consequence the first two can miss. Two partitions can be similarly compressive on observational fit, yet differ under interventions. If partition $P_1$ remains low-leak and stable under admissible perturbations while partition $P_2$ needs repeated micro-detail repair, closure favors $P_1$ as the better object candidate. The difference is structural, not preferential: $P_1$ has genuine transition autonomy while $P_2$ does not, and that difference grounds objecthood rather than mere model convenience.

Mini illustration. Suppose two partitions achieve comparable one-step observational prediction in a calibration dataset. Under an admissible clamp intervention on one macro-variable, $P_1$ retains stable macro-transition parameters, while $P_2$ shows class-internal divergence that forces reintroduction of hidden micro labels. In the diagnostics of Sections 5.2 and 5.3, this appears as lower within-class kernel divergence and lower intervention-conditioned predictive gain $\Delta$ for $P_1$. The two views that rely on observational compression alone can treat this as a near tie. The closure criterion does not. It ranks $P_1$ higher because it remains interventionally coherent.

This clarifies the paper's target. The claim is not that imperfect but useful patterns are unreal. The claim is that usefulness alone does not settle macro-objecthood. Closure is introduced as an additional robustness filter for object-level ontology.

### 3.6 Compression and closure

Compression and closure are related but not identical. Compression concerns descriptive economy. Closure concerns autonomous transition structure under admissible interventions.

In this framework, compressibility is a useful indicator but not sufficient for objecthood. A code can compress in-sample trajectories while failing interventionally. Closure is therefore the stronger condition.

Compression still matters. Without non-trivial regularity, there is no stable macro-description to test for closure. In that sense, compression is often a practical precondition for closure analysis, but closure carries the final ontological burden.

### 3.7 Criterion statement (formal)

With the relevant concepts now in place, the criterion can be stated precisely.

**Criterion.** A coarse-graining $Z = g(X)$ counts as a real pattern for a specified regime, horizon $L$, and intervention class $\mathcal{I}$ when macro-transition structure is autonomous up to an explicit tolerance (for example, bounded leakiness, bounded within-class kernel divergence, or bounded out-of-regime predictive regret). In ideal Markov settings this reduces to strong lumpability. In realistic settings it is assessed by leakiness, transition-kernel divergence, and intervention-response invariance.

**Graded closure.** Let leakiness be the canonical distance-from-closure quantity. Graded closure is assessed primarily by leakiness under fixed regime, horizon, and intervention class. Kernel divergence and out-of-regime predictive regret function as estimators or proxies when direct leakiness estimation is unreliable. In well-behaved settings these diagnostics should agree in rank-order; persistent disagreement triggers model revision.

**Commitment structure.** The primary ontological condition is invariance of induced macro-transition structure across micro-realizations within each macrostate under admissible interventions. The secondary epistemic test is predictive closure on observational data, which serves as a proxy when intervention data are sparse.

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

The intuition is straightforward. Imagine four microstates. In Partition A, we group together states that behave identically at the macro level: both members of each group have the same transition probabilities to the macro-classes. The partition preserves transition structure, so it passes the closure test. In Partition B, we group together states with different macro-futures. One member of the group goes one way; the other goes another way. Now the macro-label hides a causally relevant difference, and the partition fails.

Here is the formal version. Consider a Markov chain with microstates $\{x_1, x_2, x_3, x_4\}$. Let us compare two partitions using a symbolic transition pattern.

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

Far from a concession to arbitrariness, this result follows directly from the criterion's target. The test tracks dynamic coherence, not intuitive naturalness. A separate naturalness constraint would need to be introduced as an additional criterion beyond what this paper provides.

The exclusion claim should therefore be read precisely. The framework excludes high-leak, dynamically incoherent aggregates. It does not exclude every disjunctive grouping.

Two guardrails keep this from becoming permissive. First, closure claims must remain stable across modest horizon and regime perturbations. Second, among candidates with similar robustness, the coarsest partition is preferred.

This yields a constrained pluralism. Multiple partitions can count as real when they satisfy closure and robustness at different grains. They need not be equally useful for explanation or control. Robustness and minimality provide ranking principles for theory choice without collapsing the ontology to a single privileged partition in every context.

## 5. Approximate Lumpability: Realism Without Perfection

### 5.1 Why exact lumpability is uncommon

Exact lumpability is a useful benchmark, but complex systems are noisy, open, and high-dimensional. Boundaries leak. Couplings shift across regimes. Biological and social systems especially rarely satisfy exact closure across all scales and perturbations.

Rather than undermining the framework, this motivates the move from binary closure to graded closure.

The right standard is type-level before token-level. A pattern type can be robustly closed for a regime even when a particular token fails because of boundary violation, unusual perturbation, or timescale shift.

This implies a regime-dependent ontology. Objecthood is phase-dependent: a pattern can be robust in one thermodynamic regime and lose closure in another. This is a feature of the account, because causal structure itself can appear or disappear across regime transitions.

This does not imply metaphysical annihilation. It means the closure conditions that license object-level treatment are regime-sensitive.

Two sources of regime dependence should be distinguished. Ontic regime dependence occurs when system structure actually changes, for example across phase transitions or boundary-condition shifts. Epistemic regime dependence occurs when measurement and control access change while underlying structure remains fixed. Both matter for practice, but they have different implications for realism. The first is about world change. The second is about access limits.

### 5.2 Leakiness as graded deviation

A natural quantity is leakiness: how much micro-information inside a macrostate improves macro-future prediction once the macrostate is already known. One concise expression is the conditional mutual information $I(X_t; Z_{t+1} \mid Z_t)$.

In plain terms, leakiness asks whether hidden micro detail still changes the macro forecast after we already know the current macrostate. Low leakiness means little hidden dependence. High leakiness means the coarse-graining still hides causally relevant structure.

Leakiness can be estimated from observational data, from interventional data, or from both. Which source dominates depends on the regime and on what interventions are admissible. Interventional estimates take priority when feasible.

Crucially, "low" should be defined comparatively rather than asserted. Fix a target horizon and intervention class, then compare candidate coarse-grainings. A partition counts as low-leak relative to its competitors when adding within-class microdetail yields no substantial predictive or interventional gain over the same regime. Tolerance is set by cross-partition performance under fixed constraints, not by a free-standing universal threshold.

Several equivalent diagnostics can be used: within-class divergence between estimated macro-transition kernels, cross-validated predictive gain from adding within-class micro-features, and intervention-response invariance tests. The point is not metric monopoly. Any proxy that quantifies within-class micro-information gain about macro-futures, is comparable across candidate partitions, and remains stable under resampling will serve. When diagnostics converge in rank-order, confidence is high. When they persistently disagree, that signals a need for model revision rather than immediate ontological verdict. (A detailed decision schema and estimation protocol are provided in Appendix A.)

The ontological upshot is graded. Low leakiness supports robust macro-object claims. Moderate leakiness can still support valuable macro-variables and explanations, but with weaker objecthood status and tighter regime qualifications. High leakiness usually indicates dynamically incoherent grouping.

A related guardrail is useful here. Computational closure, understood as a successful higher-level computational description, can hold in cases where informational and interventional closure do not fully hold. For this paper's objecthood claim, computational adequacy alone is not enough; informational and interventional closure remain the decisive standards.

### 5.3 Worked regime instantiation

Consider a simulated lattice process with local coupling and boundary forcing. Compare two candidate coarse-grainings.

1. $Z^{(A)}$: spatially local energy-density bins.
2. $Z^{(B)}$: a parity-coded disjunctive grouping that mixes distant lattice regions.

Fix intervention class $\mathcal{I}$ as boundary-condition clamps and localized perturbation pulses. Evaluate two horizons, short $L=1$ and medium $L=10$.

At $L=1$, both partitions can appear similarly predictive under purely observational fitting. Under the fixed interventions, $Z^{(A)}$ remains stable while $Z^{(B)}$ shows higher leakiness and intervention-response heterogeneity within macroclasses. At $L=10$, this divergence widens because hidden within-class differences in $Z^{(B)}$ accumulate. The verdict is therefore horizon-relative and regime-relative in exactly the intended sense.

This kind of comparison makes closure relative to $L$ and $\mathcal{I}$ operational rather than merely verbal. The paper remains conceptual in scope; a full empirical benchmark study would compute the listed diagnostics on a fixed dataset across competing partitions. The detailed setup specification and estimation algorithm are provided in Appendix A.

### 5.4 Stable versus merely entailed regularities

This graded move supports an important ontological distinction. Many macro-regularities are entailed by complete microhistory. Fewer are stable enough to support repeatable macro-prediction and intervention. Objecthood tracks the stable subset. In short, stable regularities are entailed, but not all entailed regularities are stable objects.

This distinction also explains why many gerrymandered constructions feel tempting. They can be entailed by the full microhistory yet remain unstable and high-maintenance under regime shifts.

### 5.5 Practical qualification

In many domains, direct interventions are sparse or ethically constrained. In such cases predictive closure serves as an operational indicator, while the ontological target remains interventional closure relative to admissible perturbations.

Where this target is met, a practical consequence follows. Macro-level control can approach optimal controllability for the specified intervention class without continual microstate tracking.

Predictive fit alone cannot settle objecthood. Overfit representational schemes can track past trajectories while failing under novel perturbations. Closure claims should therefore be judged by out-of-regime and interventional stability, not only in-sample prediction.

### 5.6 Failure modes and diagnostics

Four failure modes are especially relevant.

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

The diagnosis goes beyond saying these composites are "unnatural" or inconvenient. The failure is dynamical: they simply do not support macro-transitions as their own level.

This point complements, rather than replaces, MDL-style cohesion arguments. Compression criteria explain why some models are cognitively efficient. Closure criteria explain why some targets are dynamically available for robust tracking under admissible interventions.

### 6.2 High-maintenance ontological posits

Historically, some posits survive only through repeated patches. The pattern-level diagnosis is high leakiness. If a purported macro-kind constantly requires additional hidden variables to preserve forecast quality, that is evidence against closure at that partition.

High maintenance can be stated precisely. A partition is high maintenance when reliable macro-prediction repeatedly forces refinement of within-class distinctions, so yesterday's macrostate labels must be supplemented by new micro bookkeeping to retain accuracy.

Phlogiston illustrates the pattern concretely. When metals gained weight upon burning instead of losing phlogiston as the theory predicted, theorists invented "negative phlogiston" to patch the discrepancy. When different substances showed different weight changes, more ad hoc parameters appeared. Each patch was a new within-class distinction imported to preserve macro-prediction, exactly the signature of a non-autonomous partition. By contrast, oxygen theory required no such ongoing repair: the macro-variable (oxidation state) screened off the relevant chemistry without persistent bookkeeping. The critique here is structural rather than retrospective ridicule: a candidate that continually imports corrections to preserve macro-prediction behaves like a non-autonomous partition, and the closure framework detects this failure directly.

## 7. Plausible Candidates Under the Protocol

At this stage, keep the ladder from Section 2 in view. The claim is about pattern-level autonomy, not infallibility of any one representation and not perfect behavior of every token instance.

The examples in this section are stylized protocol illustrations. They show how the criterion is applied. They are not offered as stand-alone empirical demonstrations.

### 7.1 Hurricanes and vortical structures

Hurricanes are a natural first test case. Their macrovariables (pressure organization, rotational structure, energy exchange with the sea surface) retain predictive and interventional relevance while vast numbers of micro-perturbations wash out. Meteorologists do not need molecule-level tracking to forecast track and intensity. That is precisely what closure predicts.

To apply the protocol: define a macrostate using central pressure depth, azimuthal wind structure, translation velocity, and sea-surface-energy intake. Fix an intervention class appropriate to meteorological practice (boundary-condition perturbations, not molecule-by-molecule rewriting). Then ask: does adding fine-grained molecular detail inside fixed macro bins materially improve short-horizon forecasts under that intervention class? If not, the macrostate screens off micro-variation and closure is strong at that grain. If yes, leakiness is high and the partition should be refined.

This is a Level 2 claim about pattern structure (Section 2), not a Level 4 claim that any particular forecasting model is final. The claim is not perfect closure at every token and horizon. It is that the hurricane pattern supports robust low leakiness across the intervention class that defines meteorological practice.

### 7.2 Organisms and cells

Cells and organisms are plausible candidates for boundary-mediated screening-off. What makes them interesting is that their closure is physically implemented. Cell membranes selectively gate molecular traffic. Regulatory pathways buffer intracellular states against external fluctuation. Homeostatic loops maintain operating parameters across perturbations. These are not ad hoc groupings; they are physical structures that enforce screening-off between inside and outside.

A stylized biological test: define a macrostate using membrane potential, key metabolite concentrations, and regulatory-state variables. Fix an intervention class (pharmacological perturbation, temperature shifts within the viable range). The closure question is whether these macro-variables forecast near-future functional states without needing augmentation by the positions and momenta of individual molecules. If the answer is yes across the admissible intervention class, the cell earns object-level treatment under the criterion.

The claim targets pattern-level autonomy. Any particular model of cell biology can fail while the pattern remains real, so long as alternative representations capture the same closure structure. On this framework, biological explanation at the cellular level is not merely a pragmatic shortcut. If closure conditions are met, it tracks a real pattern with substantial transition autonomy.

### 7.3 Borderline cases

Clouds, flames, and ecosystems illustrate why graded criteria matter. Consider a candle flame. Over short horizons, its macrovariables (shape, temperature profile, luminosity) are reasonably autonomous: knowing the flame's current state predicts its near future without tracking individual gas molecules. But the flame is also sensitive to small perturbations (a breeze, fuel depletion), and its closure degrades over longer horizons or under broader intervention classes. On the present framework, the flame has moderate closure: it earns qualified objecthood over limited horizons and regimes, but weaker standing than a hurricane or a cell, whose closure is more robust across perturbations.

Ecosystems push the boundary further. Their macro-variables (species composition, nutrient cycling rates, trophic structure) can support prediction and intervention over some timescales, but they are often regime-sensitive and subject to abrupt phase transitions. The leakiness spectrum handles this naturally: an ecosystem in a stable regime may be reasonably closed, while the same ecosystem near a tipping point may show rapidly increasing leakiness as hidden micro-heterogeneity becomes macro-relevant.

The framework gives principled gradation rather than all-or-nothing verdicts. A borderline case is not an embarrassment; it is a case where the criterion does exactly what it should, returning a qualified answer rather than forcing a binary one.

## 8. Dennett Revisited

### 8.1 What Dennett got right

Dennett was right that compression and prediction can reveal objective structure rather than mere cognitive convenience. He was also right that pattern realism is compatible with physicalism when understood as level-specific structure rather than rival substance (Dennett 1991).

He was also right to allow useful-but-imperfect patterns. Many scientifically central patterns are noisy, ceteris paribus, and exception-tolerant, yet still earn realist treatment because they improve understanding and prediction relative to brute micro-description.

### 8.2 What needed completion

What was missing was an explicit anti-gerrymandering criterion and a graded account for imperfect real systems. Strong lumpability is a natural exact formalization of that criterion in Markov settings. Leakiness-based approximate lumpability supplies the realistic extension.

Relation to causal-emergence work should be explicit.

Agreement: Hoel-style effective-information analyses ask when macro-descriptions gain determinism and reduce degeneracy relative to micro-descriptions (Hoel 2013).

Difference: the present criterion is organized around closure under an admissible intervention class and robustness across regime and horizon choices.

Effective-information gains can therefore be treated as corroborating diagnostics inside this framework rather than as the sole ontological test.

The reconciliation can be stated directly. Dennett supplies a broad criterion for pattern reality. The present framework adds a stricter criterion for macro-objecthood. On that view, leaky but predictive structures can remain real patterns while failing to count as robust macro-objects in a given regime.

### 8.3 Sharpened slogan

The revised slogan is straightforward: a real pattern is an autonomous coarse-graining.

### 8.4 A note on composition

The closure criterion also provides a principled answer to Van Inwagen's Special Composition Question: under what conditions do parts compose a whole (Van Inwagen 1990)? On the present framework, parts compose a whole when their collective dynamics achieve closure for some intervention class and regime. This is neither too permissive (arbitrary sums fail the closure test) nor too restrictive (it includes organisms, artifacts, and institutional entities where closure holds in the relevant domain). Van Inwagen's own answer, that composition occurs only when parts constitute a life, appears as a special case: living systems are paradigmatic achievers of closure because natural selection optimizes for boundaries that minimize thermodynamic cost while maintaining functional integrity. But life is sufficient, not necessary, for composition.

## 9. Objections and Replies

### 9.1 This remains instrumentalist

Objection: choosing macro-targets reflects interests, so realism still collapses into usefulness.

Reply: target selection is interest-shaped, but closure success is not arbitrary once target and regime are fixed. Autonomy is a property of system dynamics under explicit constraints, not of analyst preference.

More strongly, the relevant regimes are constraint-relative, not observer-relative. Agents can choose which domain to study, but they cannot choose whether closure holds once horizon, intervention class, and target are fixed. Admissible intervention classes are bounded by locality and energetic feasibility, so ontology is not set by arbitrary intervention design. There is also a practical asymmetry worth noting: ignoring a genuine closure boundary does not merely reduce convenience. It inflates the algorithmic complexity cost of maintaining prediction, because the agent must now track micro-detail that a closed macro-description would have screened off. The boundary is real in the sense that the world forces you to track it, or pay escalating costs for refusing to.

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

### 9.5 Causal exclusion

Objection: if microphysics is causally complete, then macro-level causes are redundant. Positing macro-level causal autonomy either overdetermines effects or conflicts with physical closure (Kim 1998).

Reply: the closure criterion does not claim that macro-descriptions compete with micro-descriptions for causal priority. It claims that macro-descriptions are sufficient for prediction and intervention in specified regimes. When a macro-partition is closed, adding micro-detail does not improve macro-level forecasts or intervention outcomes. This is compatible with microphysical completeness, because the issue is which level of description is sufficient for the target, not which level is fundamental. Macro-autonomy is explanatory and interventional sufficiency, not a rival to micro-physics. The causal work done by macro-variables is real in the interventionist sense (Woodward 2003): macro-level interventions succeed across perturbations, and that success does not require denying that micro-processes implement the transitions.

## 10. Conclusion: What Is New and What It Buys

The paper offered a precise criterion for real patterns by combining closure with lumpability. The criterion is exact in strong-lumpability settings and graded in realistic approximate settings. It excludes dynamically incoherent composites by structural test, not rhetorical dismissal. It also provides a principled way to evaluate canonical macro-object candidates by testing whether their partitions remain low-leak and intervention-relevant across specified regimes.

The conceptual gain is twofold. First, it sharpens Dennett without abandoning his core insight. Second, it gives a principled bridge from philosophical pattern realism to operational diagnostics used in complex-systems science.

What changes if this criterion is adopted? Several long-standing disputes become more tractable. The debate over whether higher-level entities are "merely useful fictions" or "genuinely real" gets a concrete resolution procedure: test for closure and see. The permissiveness objection to pattern realism acquires a definite answer: gerrymandered composites fail the transition-autonomy test. The worry about instrumentalist drift is addressed by the admissibility constraints, which anchor intervention classes to physical implementability rather than analyst preference. And borderline cases (flames, ecosystems, contested social kinds) no longer require all-or-nothing verdicts; the framework returns graded assessments with explicit regime qualifications. None of this eliminates philosophical disagreement, but it shifts the disagreement from "is this real?" to "does this satisfy closure under these conditions?"

Future work can proceed in three directions: empirical estimation of leakiness in concrete domains, tighter links with Markov-blanket and computational-mechanics formalisms, and disciplined extension to social kinds where implementation and normativity interact under explicit closure conditions.

Social kinds are likely the hardest extension case. Their closure profile is often recursive: collective recognition helps sustain the very constraints being recognized. This does not refute the framework, but it means admissibility and implementation must be specified with unusual care in institutional domains.

An additional direction is structural. The space of closure-supporting coarse-grainings can be analyzed in theory space as a nested architecture of macro-models, rather than only as ad hoc candidates in state space.

The framework also has a clear failure condition. If proposed macro-partitions systematically fail closure tests across well-specified horizons and intervention classes, then the corresponding objecthood claims should be withdrawn or downgraded.

## References (selected)

Bedau, Mark A. 1997. "Weak Emergence." *Philosophical Perspectives* 11: 375-399.

Dennett, Daniel C. 1991. "Real Patterns." *Journal of Philosophy* 88 (1): 27-51.

Gładziejewski, Paweł. 2025. "Real patterns, the predictive mind, and the cognitive construction of the manifest image." *Synthese* 206: 225. https://doi.org/10.1007/s11229-025-05311-0.

Hoel, Erik P., Larissa Albantakis, and Giulio Tononi. 2013. "Quantifying Causal Emergence Shows that Macro Can Beat Micro." *Proceedings of the National Academy of Sciences* 110 (49): 19790-19795.

Kim, Jaegwon. 1998. *Mind in a Physical World*. Cambridge, MA: MIT Press.

Ladyman, James, and Don Ross. 2007. *Every Thing Must Go: Metaphysics Naturalized*. Oxford: Oxford University Press.

Mitchell, Sandra D. 2009. *Unsimple Truths*. Chicago: University of Chicago Press.

Pearl, Judea. 2000. *Causality*. Cambridge: Cambridge University Press.

Rosas, Fernando E., Bernhard C. Geiger, Andrea I. Luppi, Anil K. Seth, Daniel Polani, Michael Gastpar, and Pedro A. M. Mediano. 2024. "Software in the natural world: A computational approach to hierarchical emergence." arXiv preprint arXiv:2402.09090.

Shalizi, Cosma Rohilla, and James P. Crutchfield. 2001. "Computational Mechanics: Pattern and Prediction, Structure and Simplicity." *Journal of Statistical Physics* 104 (3-4): 817-879.

Van Inwagen, Peter. 1990. *Material Beings*. Ithaca: Cornell University Press.

Woodward, James. 2003. *Making Things Happen: A Theory of Causal Explanation*. Oxford: Oxford University Press.

## Appendix A: Estimation Protocol and Worked Setup

This appendix collects the procedural details referenced in Section 5. Readers can treat this material as a transparent recipe for applying the criterion rather than as a programming requirement.

### A.1 Decision schema for low leakiness

1. Choose a benchmark family of candidate partitions $\{g_k\}$ under fixed $L$ and $\mathcal{I}$.
2. Compute a standardized proxy, for example predictive gain $\Delta$ under added within-class micro-features using a proper scoring rule.
3. Select a tolerance rule, such as an elbow criterion, a point of diminishing returns in predictive gain, or a stability threshold over resamples.
4. Prefer partitions that are low-leak by that rule and remain stable under modest shifts in horizon and intervention distribution.

### A.2 Algorithm: Protocol for leakiness estimation

This algorithm compares candidate partitions only within a fixed regime, horizon, and admissible intervention setup.

Let $g_k$ denote candidate coarse-graining maps and let $\Delta_k$ denote predictive gain from adding within-class microfeatures under a proper scoring rule.

1. For each candidate map $g_k$, estimate macrostates $Z_t = g_k(X_t)$.
2. Fit a baseline predictor for $Z_{t+1}^{L}$ from $Z_t$ alone.
3. Fit an augmented predictor adding within-class microfeatures that differentiate microstates mapped to one macrostate.
4. Compute $\Delta_k = \text{gain}(\text{augmented}) - \text{gain}(\text{baseline})$.
5. Test intervention-response invariance under the admissible intervention set $\mathcal{I}$.
6. Prefer partitions with low $\Delta_k$ and high invariance stability.

### A.3 Worked setup specification

| Component | Specification |
| --- | --- |
| Micro process | Lattice dynamics with local coupling and boundary forcing |
| Candidate $Z^{(A)}$ | Spatially local energy-density bins |
| Candidate $Z^{(B)}$ | Parity-coded disjunctive grouping |
| Intervention class $\mathcal{I}$ | Boundary clamps plus localized perturbation pulses |
| Horizons | $L=1$ and $L=10$ |
| Diagnostics | Predictive gain, within-class kernel divergence, intervention-response invariance |
| Expected verdict | $Z^{(A)}$ remains lower-leak and more invariant across $L$ |
