# Real Patterns Need Closure: A Dynamical Criterion for Non-Gerrymandered Macro-Objects

## 0. Abstract

Dennett's real-patterns view links ontology to compression and prediction, but two criticisms persist. It can appear instrumentalist, because usefulness seems to do all the ontological work, and permissive, because contrived codings can look compressive. The missing ingredient is an explicit closure criterion. A pattern qualifies as a real macro-object when its coarse-grained state is sufficient for macro-transitions, so within-class micro-differences do not change what happens next at the macro level. In idealized settings this is strong lumpability. In realistic settings it is approximate lumpability, graded by leakiness. This criterion excludes dynamically incoherent aggregates by structural test while allowing unusual partitions when they remain transition-autonomous. The result is a stricter realism: broad pattern reality is preserved, but robust macro-objecthood requires closure.

## 1. Introduction: Why Dennett Needs a Criterion

Dennett's proposal that the world contains real patterns changed how many philosophers discuss emergence and ontology. The attraction is clear. It gives us a way to respect higher-level structure without denying lower-level physics. It also captures a central feature of scientific practice. We routinely treat macro-regularities as objectively trackable because they support compression and prediction (Dennett 1991).

Still, the view is often judged incomplete. The first criticism is instrumentalist drift. If real patterns are just patterns that help us predict, then reality seems indexed to user interests. The second criticism is permissiveness. If compression is the standard, then contrived composites appear admissible under some coding conventions. Critics then invoke arbitrary aggregates and disjunctive kinds to argue that real-pattern talk lacks ontological discipline (Elgin 2017) (Haugeland 1998).

The pressure point is visible in Dennett's own formulation: "A pattern exists in some data-is real-if there is a description of the data that is more efficient than the bit map" (Dennett 1991, 34). Compression is a powerful starting criterion, but by itself it is static. It does not yet separate dynamically autonomous macro-objects from mathematically definable but dynamically idle constructions.

A simple contrast makes the gap vivid. Consider a hurricane and "the object consisting of my left shoe and the planet Neptune." Both can be described. Both can, in some trivial coding sense, be compressed. But the hurricane supports autonomous prediction and intervention at its own level: knowing its pressure structure and rotational organization tells you what it will do next without tracking every molecule. The shoe-Neptune composite does not. Its "macro-state" tells you nothing about what happens next unless you separately track the shoe and the planet. What distinguishes them? This paper argues the answer is closure of transition structure.

Both criticisms identify a genuine gap, but not a fatal flaw. The gap is the absence of an explicit closure criterion. Once closure is made central, and once closure is tied to lumpability in the induced case, Dennett's core idea can be sharpened into a robust criterion.

The intended move is a tightening, not a rejection. Dennett's framework is broad enough to count many useful, imperfect, and purpose-relative patterns as real. The present paper asks a narrower question: which of those patterns qualify as robust macro-objects with autonomous transition structure.

The thesis is this: a real pattern is an autonomous coarse-graining. More precisely, a pattern is real when macrostate information is sufficient for macro-transition structure, so lower-level distinctions inside each macrostate no longer matter for macro-evolution. In exact Markov settings, this is strong lumpability. In realistic settings, this is approximate lumpability measured by leakiness.

In this paper, gerrymandered means dynamically incoherent: a partition that fails transition autonomy by requiring persistent within-class micro bookkeeping. It does not mean merely intuitively disjunctive.

This framing also limits instrumentalist drift. Analysts choose research aims, but intervention classes are constrained by what embodied agents can physically measure and control given locality, bandwidth, and thermodynamic limits.

Closure is diagnosed by predictive and interventional tests, but the target is dynamical structure, not analyst preference. The relevant conditional-independence relations hold whether or not anyone computes them.

### 1.1 Related work and contribution

This paper sits at an intersection of four conversations. From Dennett, it takes the claim that compression and prediction can track objective structure (Dennett 1991). From computational mechanics, it takes the demand that macrostructure must preserve transition-relevant information rather than mere descriptive convenience (Shalizi 2001). From recent closure work, it takes the thought that macro-autonomy can be diagnosed by screening-off relations between micro and macro trajectories (Rosas 2024). From interventionist philosophy of science, it takes the idea that ontological commitment is tied to stable intervention-guiding structure, not to metaphysical fundamentality (Woodward 2003) (Pearl 2000).

It also connects to adjacent emergence and coarse-graining debates, including weak emergence, macro-causal advantage, and naturalized metaphysics (Bedau 1997) (Hoel 2013) (Ladyman and Ross 2007) (Mitchell 2009). Of particular relevance is Ladyman and Ross's "Rainforest Realism," which treats pattern reality as highly abundant across scales. The closure criterion accepts the realist motivation but adds a pruning condition: only partitions with robust transition autonomy count as macro-objects.

A different but adjacent line of work traces the cognitive origins of real-pattern commitments, linking predictive coding and free-energy minimization to how agents build their picture of the world (Gładziejewski 2025). That line helps explain why bounded agents converge on some representational schemes and revise others over time, which strengthens the anti-arbitrariness side of pattern realism. But it does not by itself settle macro-objecthood, because representational success can remain task-relative unless a further test determines when a candidate grouping is dynamically available in the world. The closure criterion supplies that additional test.

Rosas et al. provide the formal diagnostics. The argument here uses that machinery to defend a philosophical contribution: an explicit ontological criterion with exclusion conditions for dynamically incoherent partitions, graded assessment for borderline cases, and application to the question of what counts as a macro-object rather than merely a useful model. Predictive equivalence alone is not decisive; intervention-class restriction and interventional invariance carry the objecthood claim. The novel claim is the joint use of closure and lumpability as a discriminating criterion: exact in ideal settings, graded by leakiness in realistic settings, and used to filter gerrymandered partitions from autonomous macro-object candidates.

In brief: a coarse-graining counts as a real pattern when its macro-transition structure is autonomous for a specified regime and horizon, so that within-class micro-differences do not change what happens next at the macro level. In ideal settings this reduces to strong lumpability. In realistic settings it is a graded condition measured by how much micro-detail still leaks into macro-forecasts. The formal criterion, with precise definitions and commitment structure, is stated at the end of Section 3 once the relevant concepts have been introduced.

## 2. Disambiguation: What Exactly Is a Pattern?

### 2.1 The reality-pattern-instance-representation ladder

Many disputes begin by mixing levels. We need a stable ladder.

1. **Reality itself:** the causal process independent of our models. (The atmosphere's actual dynamics.)
2. **Patterns supported by reality:** stable dependency and transition structures. (The hurricane pattern: rotating low-pressure vortex with characteristic life cycle.)
3. **Instances of patterns:** concrete tokens. (Hurricane Katrina, this particular cell, this legal proceeding.)
4. **Representations of patterns:** theories, equations, state spaces, verbal models. (The Saffir-Simpson scale; a fluid-dynamics model of vortex formation.)
5. **Representations of instances:** observations, records, memories of particular tokens. (Satellite imagery of Katrina; a court transcript.)

The same word can refer to different layers, and that ambiguity creates pseudo-disputes. A representation may fail while the pattern remains real. A token may be noisy while the type remains stable. A pattern may be real even when no agent currently represents it. Level 5 is included for auditability: many ontology disputes depend on slippage between claims about an instance and claims about a record of that instance.

The type-token distinction is not optional bookkeeping. Closure is primarily a claim about pattern types in specified regimes, then secondarily about how reliably concrete tokens instantiate those types. Both distinctions do substantive work below, especially in Sections 5.1, 5.4, and 7.4.

Crucially, implementation and representation must be distinguished. Implementation concerns the physical substrate running the process. Representation concerns the model used to track it. A process can be fully implemented while available representations are partial or mistaken.

### 2.2 What pattern is real means here

In this paper, calling a pattern "real" carries a specific meaning: a coarse-graining that earns autonomy in transition structure. The claim is modest and precise. We are not adding a new substance to ontology. We are identifying when macro-description tracks objective structure well enough to function as its own level of what follows. The scope is limited to world-implemented macro-objecthood; the paper makes no claims about the status of mathematics, logic, or other abstract domains.

Objecthood here means eligibility as a stable target of macro-level counterfactuals and interventions in the specified regime and horizon. It does not mean fundamentality or an extra ontological substance.

It is useful to distinguish stipulated closure from induced closure. In stipulated closure, autonomy is fixed by constitutive rules, as in chess or arithmetic. In induced closure, autonomy is discovered through dynamical screening-off in the world. This paper is restricted to induced closure in spatiotemporal systems.

## 3. From Real Patterns to Closure

### 3.1 The closure intuition

Closure can be stated without heavy formalism. A macro-pattern is real when level-description is sufficient to determine what follows at that level. In other words, closure is autonomy of what follows. If one must inspect lower-level distinctions to determine macro-futures, the level is not autonomous.

The emphasis on "what follows" matters. Closure is a transition claim, not a static shape claim. Two microstates may look similar now but diverge in macro-futures. If so, grouping them as one macrostate fails the autonomy requirement.

Throughout this paper, a regime is a specified dynamical phase with fixed parameters, boundary conditions, and operating constraints. Closure is always assessed relative to a regime, because the same system can behave differently across phases.

Definition (Closure relative to regime): a coarse-graining $Z_t = g(X_t)$ is closed over horizon $L$ and intervention class $\mathcal{I}$ when macrostate information is sufficient for what follows at the macro level, without importing additional within-class microstate distinctions.

The definition has two tests.

**Predictive test:** under the regime distribution, does the macrostate carry enough information to forecast macro-futures? Formally, closure requires that $P(Z_{t+1}^{L} \mid Z_t)$ approximates $P(Z_{t+1}^{L} \mid X_t)$ for the target task. In plain language: knowing the macro-state should be almost as good as knowing the full micro-state, for purposes of predicting what happens next at the macro level.

**Interventional test:** when we perturb the system using admissible interventions, does the macro-transition law remain stable regardless of which micro-realization sits inside the macrostate? Formally, for admissible interventions $i \in \mathcal{I}$, the induced law $P_i(Z_{t+1}^{L} \mid Z_t)$ is approximately well-defined and stable across microstates that map to the same macrostate.

"Approximate" can be made precise in several ways: bounded conditional mutual information, bounded divergence between within-class macro-transition kernels, or bounded prediction error under admissible interventions. The exact choice of metric is less important than the structural question: does hidden micro-detail still change the macro forecast?

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

In the idealized settings considered here, informational diagnostics can track the same closure structure tested by interventional criteria. Leakiness is an operational indicator of that target, not a separate ontology test layered on top of causal claims (Rosas 2024).

The criterion is closure of macro-transition structure. Nothing in that formulation requires the micro-process to be first-order Markov. When the system has memory, the relevant state includes that memory. An immune system's repertoire of antibodies is part of its current macro-state precisely because it shapes transitions. An economy's path-dependent institutional structure is part of its macro-state for the same reason. In such cases the micro-state $X_t$ is replaced by an enriched state $H_t$ that carries the history needed for prediction at the target horizon, and closure is assessed on $Z_t = g(H_t)$ using the same tests. The enriched state is not a workaround. It is what the state is when the system has memory. Strong lumpability over $H_t$ is then the same test as before; what changes is the complexity of identifying the right state description, which is an estimation problem, not a conceptual one. In practice this can be implemented by finite-lag embeddings, predictive-state representations, or recurrent state summaries, with model selection fixed in advance for the regime. Strong lumpability over the current state is the special case where relevant history reduces to a single time-step.

In practice, informational diagnostics and interventional relevance are used together. Low leakiness is operational evidence for autonomy, and interventional stability gives the ontological interpretation.

An important caveat: these diagnostics are evidential, not constitutive. Prediction and intervention do not create the pattern. They test whether a candidate coarse-graining tracks conditional-independence structure already present in the dynamics.

With that caveat in place, predictive and interventional closure should be distinguished. Predictive closure concerns screening-off for forecasts under a fixed data regime. Interventional closure concerns invariance of macro-transition structure under admissible perturbations. For objecthood claims here, interventional closure is the ontological standard, while predictive closure is usually the operational proxy.

Stated directly, if two microstates map to the same macrostate at time $t$, they must agree on macro-transition consequences. If they do not, the macrostate hides causally relevant structure and is not autonomous.

### 3.3 Operational protocol (in principle)

To make closure relative to regime operational, use the following recipe.

1. Choose candidate macro-variables and a measurement channel from microstate data to macrostate estimates.
2. Specify an intervention class $\mathcal{I}$, what can be clamped, perturbed, or controlled at the macro level.
3. Fix a prediction horizon $L$ and evaluation window.
4. Estimate leakiness, or a proxy, for each candidate partition.
5. Compare partitions under the same $\mathcal{I}$ and $L$, then retain those with robustly lower leakiness and stronger interventional stability.

This procedure does not require one privileged estimator. It requires transparent regime specification and cross-partition comparison under fixed constraints.

Before running closure diagnostics, specify whether the intervention class satisfies three checks: realizable control channel (epistemic), regime preservation (dynamical), and invariance relevance (explanatory). If an intervention class fails any check, exclude it from ontology assessment.

Admissibility disputes are expected, especially across disciplines. A useful adjudication rule is to compare candidate intervention classes by what they physically permit and by whether they preserve the same target regime. For example, boundary-pressure perturbations can be admissible for storm dynamics, while molecule-by-molecule remote rewriting is not. In institutional analysis, changing enforcement intensity can be admissible, while instant arbitrary rewrites of all agent beliefs are not. When two classes are both admissible and target the same regime, the framework permits plural testing rather than forced monism.

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

To summarize the relationship between these two concepts: compression and closure are related but not identical. Compression concerns descriptive economy. Closure concerns autonomous transition structure under admissible interventions. A code can compress in-sample trajectories while failing interventionally, so compressibility is a useful indicator but not sufficient for objecthood. Compression is often a practical precondition for closure, since without non-trivial regularity there is no stable macro-description to test, but closure carries the final ontological burden.

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

This helps with familiar permissiveness worries. Dennett's lost-sock-center style examples are mathematically definable and sometimes trackable, but definability is not enough. If a candidate grouping does not carry autonomous transition structure under the admissible regime, it fails the objecthood test even when it is easy to describe (Elgin 2017).

Dennett explicitly notes this style of case when discussing "the center of the smallest sphere that can be inscribed around all the socks I have ever lost in my life" (Dennett 1991, 28). The present claim is stricter than calling such items real but negligible. If closure fails, the item should not count as a macro-object candidate for that regime.

More precisely, many such constructions are entailed but unstable. They can be true of the realized trajectory while failing to function as autonomous macro-handles.

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

This is not a concession to arbitrariness. The test tracks dynamic coherence, not intuitive naturalness. A naturalness filter would be an additional criterion.

The exclusion claim should therefore be read precisely. The framework excludes high-leak, dynamically incoherent aggregates. It does not exclude every disjunctive grouping.

Two guardrails keep this from becoming permissive. First, closure claims must remain stable across modest horizon and regime perturbations. Second, among candidates with similar robustness, the coarsest partition is preferred.

This yields a constrained pluralism. Multiple partitions can count as real when they satisfy closure and robustness at different grains. They need not be equally useful for explanation or control. That matters for explanatory-competition debates. Competing levels often answer different questions under different intervention classes, so apparent rivalry can be a mismatch of targets rather than a genuine conflict. Where targets are matched, robustness and minimality rank candidates without collapsing ontology to a single privileged partition in every context.

## 5. Approximate Lumpability: Realism Without Perfection

### 5.1 Why exact lumpability is uncommon

Exact lumpability is a useful benchmark, but complex systems are noisy, open, and high-dimensional. Boundaries leak. Couplings shift across regimes. Biological and social systems especially rarely satisfy exact closure across all scales and perturbations.

This motivates the move from binary closure to graded closure.

The right standard is type-level before token-level. A pattern type can be robustly closed for a regime even when a particular token fails because of boundary violation, unusual perturbation, or timescale shift.

So one anomalous token is not a decisive refutation of macro-objecthood. The relevant question is whether token failures are exceptional boundary cases or whether they reveal systematic instability in the type-level partition.

This implies a regime-dependent ontology. Objecthood is phase-dependent: a pattern can be robust in one thermodynamic regime and lose closure in another. This is a feature of the account, because causal structure itself can appear or disappear across regime transitions.

This does not imply metaphysical annihilation. It means closure conditions are regime-sensitive.

Two sources of regime dependence should be distinguished. Ontic regime dependence occurs when system structure changes, for example across phase transitions or boundary-condition shifts. Epistemic regime dependence occurs when measurement and control access change while underlying structure remains fixed.

### 5.2 Leakiness as graded deviation

A natural quantity is leakiness: how much micro-information inside a macrostate improves macro-future prediction once the macrostate is already known. One concise expression is the conditional mutual information $I(X_t; Z_{t+1} \mid Z_t)$. This gives a canonical formal expression, but in practice leakiness will be operationalized comparatively across candidate partitions, as described below.

In plain terms, leakiness asks whether hidden micro detail still changes the macro forecast after we already know the current macrostate. Low leakiness means little hidden dependence. High leakiness means the coarse-graining still hides causally relevant structure.

Leakiness can be estimated from observational data, from interventional data, or from both. Which source dominates depends on the regime and on what interventions are admissible. Interventional estimates take priority when feasible.

Crucially, "low" should be defined comparatively rather than asserted. Fix a target horizon and intervention class, then compare candidate coarse-grainings. A partition counts as low-leak relative to its competitors when adding within-class microdetail yields no substantial predictive or interventional gain over the same regime. Tolerance is set by cross-partition performance under fixed constraints, not by a free-standing universal threshold.

This makes threshold choice procedural rather than discretionary. A partition should receive robust macro-object status only when it dominates alternatives across diagnostics and remains stable under modest changes to horizon, intervention distribution, and resampling. Near-tie cases should be reported as qualified or indeterminate, not forced into binary acceptance.

Several equivalent diagnostics can be used: divergence between the transition profiles of different microstates within the same macroclass, predictive gain from adding within-class micro-features, and intervention-response invariance tests. The point is not metric monopoly. Any proxy that measures how much hidden micro-detail still helps predict macro-futures, is comparable across candidate partitions, and remains stable under resampling will serve. When diagnostics converge in rank-order, confidence is high. When they persistently disagree, that signals a need for model revision rather than immediate ontological verdict. (A detailed decision schema and estimation protocol are provided in Appendix A.)

The ontological upshot is graded. Low leakiness supports robust macro-object claims. Moderate leakiness can still support valuable macro-variables and explanations, but with weaker objecthood status and tighter regime qualifications. High leakiness usually indicates dynamically incoherent grouping.

A related guardrail is useful here. A higher-level computational description can succeed even in cases where informational and interventional closure do not fully hold. For this paper's objecthood claim, computational adequacy alone is not enough; informational and interventional closure remain the decisive standards.

### 5.3 Worked regime instantiation

Consider a simulated lattice process with local coupling and boundary forcing. Compare two candidate coarse-grainings.

1. $Z^{(A)}$: spatially local energy-density bins.
2. $Z^{(B)}$: a parity-coded disjunctive grouping that mixes distant lattice regions.

Fix intervention class $\mathcal{I}$ as boundary-condition clamps and localized perturbation pulses. Evaluate two horizons, short $L=1$ and medium $L=10$.

At $L=1$, both partitions can appear similarly predictive under purely observational fitting. Under the fixed interventions, $Z^{(A)}$ remains stable while $Z^{(B)}$ shows higher leakiness and intervention-response heterogeneity within macroclasses. At $L=10$, this divergence widens because hidden within-class differences in $Z^{(B)}$ accumulate. The verdict is therefore horizon-relative and regime-relative in exactly the intended sense.

This makes closure relative to $L$ and $\mathcal{I}$ operational rather than merely verbal. Appendix A gives the setup specification and estimation algorithm.

### 5.4 Stable versus merely entailed regularities

This graded move supports an important ontological distinction between entailed patterns and stable patterns. An entailed pattern is any macro-feature forced by the actual microhistory and laws. A stable pattern is an entailed pattern that remains a robust handle for macro-prediction and intervention under admissible perturbations.

The distinction clarifies the gerrymandering problem. A disjunctive construction can be entailed, in the sense that it is true of the realized trajectory, while still failing stability. It may require persistent micro-bookkeeping, break under modest regime shifts, and fail screening-off.

This also answers the Laplacean challenge cleanly. An ideal observer can in principle track all entailed patterns. But objecthood in this framework does not track everything that is true of the trajectory. It tracks privileged compressions that remain stable for prediction and control in a regime.

So the claim is not that gerrymandered constructs are false. The claim is that they generally fail to qualify as stable macro-objects.

Operationally: if a candidate is entailed yet fails screening-off and perturbation robustness under admissible interventions, it should be downgraded from objecthood to a description without object-level standing for that regime.

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

A failure in one representation of a macro-kind does not by itself show unreality of the pattern. The issue is whether candidate partitions remain autonomous under closure tests.

### 6.1 Disjunctive composites

Dynamically incoherent composites do not form autonomous transition structures. Their parts participate in largely independent, differently constrained dynamics. Grouping them forces additive tracking rather than screening-off. Predictive performance then depends on ongoing micro bookkeeping. Under the stated closure conditions, such composites fail the autonomy test.

The core step is heterogeneity of onward profiles. If the subsystems are independent or weakly coupled relative to $\mathcal{I}$, then a macroclass that mixes their states will contain microstates that go different places next. That heterogeneity induces leakiness unless the intervention class collapses those differences.

The diagnosis is dynamical: these composites do not support macro-transitions as their own level. This complements MDL-style cohesion arguments. Compression explains cognitive efficiency; closure explains dynamic availability under admissible interventions.

### 6.2 High-maintenance ontological posits

Historically, some posits survive only through repeated patches. The pattern-level diagnosis is high leakiness. If a purported macro-kind constantly requires additional hidden variables to preserve forecast quality, that is evidence against closure at that partition.

High maintenance can be stated precisely. A partition is high maintenance when reliable macro-prediction repeatedly forces refinement of within-class distinctions, so yesterday's macrostate labels must be supplemented by new micro bookkeeping to retain accuracy.

Phlogiston illustrates the pattern concretely. When metals gained weight upon burning instead of losing phlogiston as the theory predicted, theorists invented "negative phlogiston" to patch the discrepancy. When different substances showed different weight changes, more ad hoc parameters appeared. Each patch was a new within-class distinction imported to preserve macro-prediction, exactly the signature of a non-autonomous partition. By contrast, oxygen theory required no such ongoing repair: the macro-variable (oxidation state) screened off the relevant chemistry without persistent bookkeeping. The critique here is structural rather than retrospective ridicule: a candidate that continually imports corrections to preserve macro-prediction behaves like a non-autonomous partition, and the closure framework detects this failure directly.

## 7. Plausible Candidates Under the Protocol

The examples in this section are stylized protocol illustrations. The target claim is pattern-level autonomy, not infallibility of any one representation or perfect behavior of every token.

### 7.1 Hurricanes and vortical structures

Hurricanes are a natural first test case. Their macrovariables (pressure organization, rotational structure, energy exchange with the sea surface) retain predictive and interventional relevance while vast numbers of micro-perturbations wash out. Meteorologists do not need molecule-level tracking to forecast track and intensity. That is precisely what closure predicts.

To apply the protocol: define a macrostate using central pressure depth, azimuthal wind structure, translation velocity, and sea-surface-energy intake. Fix an intervention class appropriate to meteorological practice (boundary-condition perturbations, not molecule-by-molecule rewriting). Then ask: does adding fine-grained molecular detail inside fixed macro bins materially improve short-horizon forecasts under that intervention class? If not, the macrostate screens off micro-variation and closure is strong at that grain. If yes, leakiness is high and the partition should be refined.

This is a claim about pattern structure, not about finality of any specific forecasting model. The point is robust low leakiness across the intervention class that defines meteorological practice, not perfect closure at every token and horizon.

### 7.2 Organisms and cells

Cells and organisms are plausible candidates for boundary-mediated screening-off. What makes them interesting is that their closure is physically implemented. Cell membranes selectively gate molecular traffic. Regulatory pathways buffer intracellular states against external fluctuation. Homeostatic loops maintain operating parameters across perturbations. These are not ad hoc groupings; they are physical structures that enforce screening-off between inside and outside.

A stylized biological test: define a macrostate using membrane potential, key metabolite concentrations, and regulatory-state variables. Fix an intervention class (pharmacological perturbation, temperature shifts within the viable range). The closure question is whether these macro-variables forecast near-future functional states without needing augmentation by the positions and momenta of individual molecules. If the answer is yes across the admissible intervention class, the cell earns object-level treatment under the criterion.

Any particular model of cell biology can fail while the pattern remains real, so long as alternative representations capture the same closure structure. If closure conditions are met, cellular explanation is more than a pragmatic shortcut. It tracks a real pattern with substantial transition autonomy.

### 7.3 Borderline cases

Clouds, flames, and ecosystems illustrate why graded criteria matter. Consider a candle flame. Over short horizons, its macrovariables (shape, temperature profile, luminosity) are reasonably autonomous: knowing the flame's current state predicts its near future without tracking individual gas molecules. But the flame is also sensitive to small perturbations (a breeze, fuel depletion), and its closure degrades over longer horizons or under broader intervention classes. On the present framework, the flame has moderate closure: it earns qualified objecthood over limited horizons and regimes, but weaker standing than a hurricane or a cell, whose closure is more robust across perturbations.

Ecosystems push the boundary further. Their macro-variables (species composition, nutrient cycling rates, trophic structure) can support prediction and intervention over some timescales, but they are often regime-sensitive and subject to abrupt phase transitions. The leakiness spectrum handles this naturally: an ecosystem in a stable regime may be reasonably closed, while the same ecosystem near a tipping point may show rapidly increasing leakiness as hidden micro-heterogeneity becomes macro-relevant.

The criterion gives principled gradation rather than all-or-nothing verdicts. Borderline cases should return qualified answers.

### 7.4 Social kinds under the protocol

The criterion does not need modification for social kinds. The same closure test applies. What changes is the intervention class: legal, regulatory, and economic perturbations replace physical ones. But the admissibility constraints still hold. Interventions must be physically implementable through actual enforcement mechanisms, not paper stipulations. That requirement is already in the framework.

**Money.** The macro-state is transactional structure: unit of account, medium of exchange, store of value. The micro-realizations are wildly heterogeneous: coins, paper notes, bank ledger entries, digital balances. Closure holds because the macro-transition structure is autonomous across these realizations. One can intervene on monetary policy at the macro level (interest rate changes, reserve requirements, open market operations) and get stable, predictable responses without tracking which physical tokens carry the value. A dollar spent from a paper bill and a dollar spent from a digital account produce the same macro-transition in the transactional network. Leakiness is low. Money is a paradigmatically robust social macro-object.

**Corporations.** The macro-state is governance structure, contractual obligations, and asset position. Admissible interventions are regulatory, legal, and financial. Knowing a corporation's institutional state (its legal standing, balance sheet, contractual network) predicts its behavior without tracking individual employees. The macro-transition structure is autonomous: replacing personnel within the same institutional roles does not change the corporation's macro-dynamics in the relevant regime. Closure holds when implementation infrastructure functions: courts enforce contracts, records preserve institutional memory, regulatory bodies maintain oversight. The philosophically interesting case is what happens when that infrastructure degrades, which leads to the next example.

**Failed states.** The structure-implementation-representation distinction drawn in Section 2.1 does its sharpest work here. A state can persist as codified structure (constitutions, statutes, legal codes) and as representation (citizens and foreign governments continue to recognize it) while losing causal efficacy because implementation collapses. Courts stop functioning, enforcement channels break down, records are destroyed or become inaccessible, bureaucratic capacity evaporates. Closure fails not because the rules changed but because the physical infrastructure that enforced screening-off is gone. The macro-state label "functioning state" no longer screens off the micro-details: which warlord controls which territory, which informal network provides which service. Those micro-distinctions now determine macro-futures, and the official macro-partition requires persistent within-class bookkeeping to retain any predictive value.

This is the criterion doing distinctive work in social ontology. It explains exactly when and why a social entity stops being a real macro-object without requiring the claim that it was never real, or that it remains real because people believe in it. The pattern's reality is tied to its implementation, and implementation is testable by closure diagnostics in the same way as any other candidate partition.

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

This can also be read as an explication of one stricter strand inside Dennett's own practice. If one interprets real-pattern realism as already aiming at projectible, intervention-relevant structure, then the closure criterion makes that standard explicit rather than replacing it.

### 8.3 Sharpened slogan

The revised slogan is straightforward: a real pattern is an autonomous coarse-graining.

### 8.4 A note on composition

The closure criterion also provides a principled answer to Van Inwagen's Special Composition Question: under what conditions do parts compose a whole (Van Inwagen 1990)? On the present framework, parts compose a whole when their collective dynamics achieve closure for some intervention class and regime. This is neither too permissive (arbitrary sums fail the closure test) nor too restrictive (it includes organisms, artifacts, and institutional entities where closure holds in the relevant domain).

Van Inwagen's own answer, that composition occurs only when parts constitute a life, appears as a special case: living systems are paradigmatic achievers of closure because natural selection optimizes for boundaries that minimize thermodynamic cost while maintaining functional integrity. But life is sufficient, not necessary, for composition.

The criterion also explains why composition can be temporary and regime-dependent. Parts compose a whole when and where closure holds. The same physical components can compose a functioning entity in one regime and fail to in another, which is exactly what we observe with social institutions, organisms under extreme conditions, and machines that break down. Van Inwagen's question receives a dynamic answer rather than a static one.

## 9. Objections and Replies

### 9.1 This remains instrumentalist

Objection: choosing macro-targets reflects interests, so realism still collapses into usefulness.

Reply: target selection is interest-shaped, but closure success is not arbitrary once target and regime are fixed. Autonomy is a property of system dynamics under explicit constraints, not of analyst preference.

Dennett's own Martian thought experiment motivates this objection. He asks us to imagine "Laplacean super-physicists" who can predict behavior without the intentional stance (Dennett 1991, 29). The closure response is that observer power changes convenience, not whether a partition is transition-autonomous in the target regime.

The relevant regimes are constraint-relative, not observer-relative. Agents can choose which domain to study, but they cannot choose whether closure holds once horizon, intervention class, and target are fixed. Admissible intervention classes are bounded by locality and energetic feasibility, so ontology is not set by arbitrary intervention design.

An example of an inadmissible class is direct arbitrary manipulation of distant microstates with no physically realizable control channel. Such classes can be defined formally, but they are excluded from ontology tests because they violate implementation constraints.

For social kinds, admissibility proceeds through implementation mechanisms. A legal intervention is admissible not because a rule is written, but because enforcement institutions physically constrain behavior through courts, bureaucracies, and sanctions.

A deeper reply is available. On the structural realist metaphysics this paper is committed to, what exists is stable relational and causal structure. Given that commitment, there is no intelligible gap between "tracks causal structure" and "is real." Leakiness measures how much autonomous causal structure a partition actually has. A high-leak partition is not one where we fail to see the real object. It is one where the candidate genuinely lacks transition autonomy. The prediction shortfall is the structural fact. The charge that this is "merely predictive" only lands if one assumes a further layer of intrinsic stuff that causal structure approximates, which is exactly what structural realism denies. At the level of macro-objecthood, stable predictive and interventional structure is the kind of thing reality is.

### 9.2 Predictive sufficiency does not imply existence

Objection: prediction can work without ontological commitment.

Reply: this paper adopts an interventionist-causal criterion for objecthood. When a level supports stable intervention and control in its domain, that is a reason for ontological commitment to that level's patterns (Woodward 2003) (Pearl 2000). This is a theory-laden meta-commitment, and it is stated explicitly. The argument is not that prediction alone logically entails existence.

This also marks distance from eliminativist pressure. Churchland-style arguments warn that higher-level posits can collapse into convenient fiction when they lack disciplined integration with causal structure (Churchland 1981). The closure criterion is designed to block that slide without requiring reduction to micro-level vocabulary.

### 9.3 Markov assumptions are too restrictive

Objection: strong lumpability presupposes Markov microdynamics.

Reply: as developed in Section 3.2, the criterion applies to non-Markov systems by enriching the state to include relevant history. The Markov template is a tractable special case, not a scope limitation. The philosophical criterion is closure of transition structure, not commitment to a single stochastic formalism.

### 9.4 What about abstract objects?

Objection: if formal systems are closed by definition, does the account collapse into formalism?

Reply: formal systems are not merely arbitrary games. Mathematics can be understood as disciplined exploration of intelligible structures, constrained by stable identity, compositional inference, and coherent consequence. Those constraints are not external decorations. They are preconditions for successful tracking and reasoning by embedded agents.

This is why formal work can latch onto empirical reality without collapse into either mysticism or conventionalism. The constraints on making sense overlap with constraints on being a stable, trackable object in the world.

Still, formal closure and empirical objecthood should be distinguished. A structure can be internally coherent as mathematics, while empirical macro-objecthood requires implementation and induced closure in spatiotemporal dynamics.

So formal coherence is evidentially suggestive, not ontologically decisive, for empirical macro-object claims.

### 9.5 Causal exclusion

Objection: if microphysics is causally complete, then macro-level causes are redundant. Positing macro-level causal autonomy either overdetermines effects or conflicts with physical closure (Kim 1998).

Reply: the closure criterion does not claim that macro-descriptions compete with micro-descriptions for causal priority. It claims that macro-descriptions are sufficient for prediction and intervention in specified regimes. When a macro-partition is closed, adding micro-detail does not improve macro-level forecasts or intervention outcomes. This is compatible with microphysical completeness, because the issue is which level of description is sufficient for the target, not which level is fundamental. Macro-autonomy is explanatory and interventional sufficiency, not a rival to micro-physics. The causal work done by macro-variables is real in the interventionist sense (Woodward 2003): macro-level interventions succeed across perturbations, and that success does not require denying that micro-processes implement the transitions.

## 10. Conclusion: What Is New and What It Buys

The criterion combines closure with lumpability. It is exact in strong-lumpability settings and graded in realistic approximate settings. It excludes dynamically incoherent composites by structural test and gives a principled way to evaluate canonical macro-object candidates by asking whether partitions remain low-leak and intervention-relevant across specified regimes.

The gain is twofold. It sharpens Dennett without abandoning his core insight, and it links pattern realism to operational diagnostics used in complex-systems science.

Several disputes become more tractable. Debates about "useful fiction" versus "genuine reality" now have a resolution procedure: test closure under specified conditions. The permissiveness objection gets a direct answer, because gerrymandered composites fail transition autonomy. Instrumentalist drift is constrained by admissibility requirements tied to physical implementability. Borderline cases then receive graded assessments with explicit regime qualifications.

Future work can proceed in three directions: empirical estimation of leakiness in concrete domains, tighter links with Markov-blanket and computational-mechanics formalisms, and further extension of the social-kinds analysis begun in Section 7.4, particularly where implementation and normativity interact under explicit closure conditions. A further structural direction is to analyze closure-supporting coarse-grainings in theory space as a nested architecture of macro-models rather than as ad hoc candidates in state space.

The framework also has a clear failure condition. If proposed macro-partitions systematically fail closure tests across well-specified horizons and intervention classes, then the corresponding objecthood claims should be withdrawn or downgraded.

## References (selected)

Bedau, Mark A. 1997. "Weak Emergence." *Philosophical Perspectives* 11: 375-399.

Churchland, Paul M. 1981. "Eliminative Materialism and the Propositional Attitudes." *Journal of Philosophy* 78 (2): 67-90.

Dennett, Daniel C. 1991. "Real Patterns." *Journal of Philosophy* 88 (1): 27-51.

Elgin, Catherine Z. 2017. "From Knowledge to Understanding." In *True Enough*, 35-53. Cambridge, MA: MIT Press.

Gładziejewski, Paweł. 2025. "Real patterns, the predictive mind, and the cognitive construction of the manifest image." *Synthese* 206: 225. https://doi.org/10.1007/s11229-025-05311-0.

Haugeland, John. 1998. *Having Thought*. Cambridge, MA: Harvard University Press.

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
