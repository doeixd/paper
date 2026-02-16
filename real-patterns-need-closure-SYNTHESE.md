# Real Patterns Need Closure: A Dynamical Criterion for Non-Gerrymandered Macro-Objects

## Abstract

Real-pattern realism captures an important insight: higher-level descriptions can track objective structure rather than mere convenience. The unresolved problem is permissiveness. Compression and predictive success alone do not exclude dynamically idle or gerrymandered aggregates. This paper argues that real-pattern realism therefore needs an explicit closure condition. For a fixed regime, horizon, and admissible intervention class, a candidate macro-object qualifies when macrostate information is sufficient for macro-transition structure, so within-class micro-differences do not change macro-level what-follows. In exact Markov settings, strong lumpability provides a benchmark realization of this condition. In non-ideal settings, closure is graded through leakiness and convergent diagnostics under fixed constraints. The result is realist but disciplined. It excludes high-leak composites, allows qualified verdicts in borderline cases, and remains compatible with microphysical completeness. The paper contributes a philosophical criterion and an audit protocol for applying it, while leaving domain-specific estimator engineering to downstream methodological work.

## 1. Introduction: Why Pattern Realism Needs a Stricter Criterion

Dennett's core thought is still compelling. Scientific and everyday inquiry often succeeds by tracking patterns rather than exhaustively tracking microstates, and this success is not always reducible to convenience language. His criterion is explicit: "A pattern exists in some data—is real—if there is a description of the data that is more efficient than the bit map, whether or not anyone can concoct it" (Dennett 1991, 34). In that sense, real-pattern realism captures something correct about the structure of explanation.

The persistent difficulty is permissiveness. If compression and predictive utility are the only standards, then almost any coding strategy that helps with a target prediction can look ontologically respectable. Disjunctive and high-maintenance constructions can be made to look acceptable whenever they are tuned to a narrow data slice. This is exactly the point where many critics infer instrumentalism (Elgin 2017). The worry has a well-established lineage. Haugeland pressed the question of when pattern detection crosses from descriptive convenience into genuine ontological contact (Haugeland 1998), and versions of the "cheap coding" objection recur throughout the subsequent literature on Dennett's criterion. The present paper takes that critique seriously: the permissiveness problem is not a side issue but the central obstacle standing between real-pattern realism and a defensible macro-ontology.

The thesis of this paper is that real-pattern realism needs an explicit closure condition to avoid that drift.

For a fixed regime, horizon, and admissible intervention class, a candidate macro-object qualifies when macrostate information is sufficient for macro-transitions, so within-class micro-differences do not change macro-level what-follows.

This thesis is a tightening move, not a replacement project. Existing pattern realism captures compression and projectibility insights. The present contribution adds a discriminating condition that excludes gerrymandered candidates by transition structure rather than by intuitive naturalness. The formal benchmark for this condition is strong lumpability in exact Markov settings. The non-ideal extension is graded closure via leakiness and convergent diagnostics under fixed constraints.

The argument is philosophical, not a methods paper in disguise. The paper does not claim to deliver a universal estimation recipe. It provides a criterion and a disciplined protocol for applying it. Estimator selection, finite-sample behavior, and domain-specific implementation remain downstream methodological tasks.

### 1.1 Novelty and Positioning

The novelty claim has three parts.

1. Beyond Dennett alone: compression realism is retained, but permissiveness is reduced by an explicit anti-gerrymandering condition.
2. Beyond formal closure results alone: strong lumpability is used as a benchmark for an ontological criterion, not only as a mathematical property.
3. Beyond pure interventionist pragmatism: admissibility is fixed upstream and physically constrained, so verdicts are not back-fit to analyst preference.

This is a conditional metaphysical proposal. Under structural realist and interventionist commitments, closure under admissible conditions is sufficient for macro-objecthood in regime. Readers with different priors can still accept a narrower conclusion: closure is at least a necessary anti-gerrymandering constraint on serious macro-ontology claims.

This positioning is deliberately dialogical. With Dennett, the paper keeps compression realism while rejecting permissiveness (Dennett 1991). With Ladyman and Ross, it keeps structural and projectibility ambitions while insisting on an explicit transition criterion for objecthood verdicts (Ladyman and Ross 2007). With Rosas, it treats formal closure diagnostics as benchmark machinery, then uses them to support a philosophical criterion that remains stable in non-ideal cases (Rosas 2024). With causal-emergence work, it treats macro-level gains as corroborating diagnostics rather than as a standalone ontology test (Hoel 2013). With Kim-style exclusion pressure, it defends non-redundancy at explanatory and control levels without denying microphysical implementation (Kim 1998).

### 1.2 Scope and Non-Claims

The paper is restricted to induced closure in spatiotemporal systems. It does not offer a complete metaphysics of levels, and it does not settle all questions about abstract objects or full mereology. Where those debates arise, they are handled only to protect the central claim from predictable misreadings.

Methodologically, the paper does not depend on the strongest anti-analytic rhetoric sometimes associated with naturalized metaphysics. The claim is narrower: closure is a usable philosophical constraint that can be motivated by dynamical and coarse-graining practice, whether or not one accepts every meta-metaphysical commitment in the broader ETMG program (Ladyman and Ross 2007).

The roadmap is direct. Section 2 states the criterion and admissibility framework. Section 3 gives the exact benchmark. Section 4 extends the criterion to non-ideal settings. Section 5 addresses the strongest objections. Section 6 summarizes gains and limits.

### 1.3 Three Nearby Positions

It helps to separate three nearby stances that are often run together.

1. Compression-prediction realism: successful compression and forecasting are treated as sufficient for realist commitment.
2. Pure pragmatism: model choice is guided by utility alone, with no ontological consequence.
3. Closure realism: compression and prediction matter, but objecthood requires transition autonomy under fixed regime, horizon, and admissible intervention class.

The third stance preserves the explanatory strengths of the first while avoiding its permissiveness. It also avoids reducing ontology to convenience, which is the pressure on the second.

### 1.4 Contribution Map

The paper makes three linked contributions.

1. It gives a criterion-level tightening of real-pattern realism by adding closure as a discriminating objecthood condition.
2. It provides a bridge from exact benchmark cases to non-ideal cases without changing criterion content.
3. It offers a disciplined verdict structure with explicit downgrade conditions, so realism claims remain answerable to failure.

The central payoff is selective commitment. The framework can support strong commitments where transition autonomy is robust, while avoiding forced commitments where evidence is fragile or regime-sensitive.

## 2. Closure and Admissibility

### 2.1 Criterion in Plain Language

Closure can be stated without heavy formalism. A candidate macro-object passes when knowing its current macrostate is enough to determine macro-level what-follows over a specified horizon and intervention class. If two microstates inside one macrostate produce different macro-transitions, closure fails at that grain.

The key point is dynamic. The criterion concerns transition sufficiency, not mere descriptive fit. A representation can summarize trajectories elegantly and still fail objecthood if it requires persistent within-class micro-bookkeeping to preserve forecast quality.

### 2.2 Formal Statement

Let micro-process be $X_t$ and candidate macro-process be $Z_t = g(X_t)$. For horizon $L$, closure asks whether $Z_t$ is sufficient for forecasting $Z_{t+1}^{L}$ under a fixed regime and admissible intervention class.

The horizon object here is the $L$-step path distribution, not only one-step prediction. One-step tests can be used as diagnostics, but objecthood claims are indexed to the declared horizon target.

Informationally, the predictive side asks whether adding $X_t$ beyond $Z_t$ yields material gain for macro-future prediction. Interventionally, the causal side asks whether macro-transition laws remain stable across admissible perturbations without needing within-class micro-identification.

These are not competing tests. They are two readings of the same target: transition autonomy at the macro level.

### 2.3 Why This is More Than Compression

Compression is necessary but not sufficient for objecthood. A compressed code can hide transition-relevant heterogeneity and still score well on narrow tasks. Closure blocks that loophole by asking whether hidden heterogeneity matters for macro-level what-follows.

This is why closure functions as an anti-gerrymandering condition. It does not reward convenient coding alone. It rewards coarse-grainings that carry stable transition structure under declared constraints.

Put differently, this paper accepts Dennett's claim that compression success is evidence of objective patterning, but denies that compression success is the full ontological test (Dennett 1991). It also accepts Ladyman and Ross style concern that real patterns should be projectible and structurally disciplined, while adding an explicit transition criterion for adjudicating borderline cases (Ladyman and Ross 2007). The aim is not to replace those insights. The aim is to make their realist force less permissive.

This also answers a familiar Haugeland-style pressure point. The paper does not infer objecthood directly from "there is a useful pattern in the data." It adds an explicit transition-autonomy condition that determines when pattern talk has ontological force rather than merely descriptive convenience (Haugeland 1998).

### 2.4 Admissibility and Hierarchical Evaluation

Closure is always relative to an intervention class. The standard objection is that this invites circularity. The response is procedural and hierarchical.

Admissibility is fixed upstream of objecthood verdicts by three constraints:

1. Epistemic admissibility: interventions are measurable and implementable by bounded agents.
2. Dynamical admissibility: interventions preserve the target regime class.
3. Explanatory admissibility: interventions target variables with cross-context generalizability and non-trivial counterfactual reach, rather than one-off manipulations tuned to a single episode.

These constraints are physically anchored in available control channels and implementation structure. They are not analyst preferences about favored ontologies. The explanatory constraint is set before closure verdicts and does not assume in advance which candidate partition will prove stable.

Evaluation order matters.

1. Fix regime, horizon, admissible intervention class, diagnostics, and model class.
2. Compare candidate partitions under those fixed constraints.
3. If constraints are revised after inspecting results, restart and disclose the revision.

This order blocks back-fitting and makes disagreement tractable. If verdicts remain highly sensitive across nearby defensible admissibility specifications, commitment should be downgraded.

### 2.5 Pattern Reality Versus Macro-Objecthood

One distinction is essential for avoiding confusion. A pattern can be real in a weaker sense without satisfying this paper's objecthood criterion. A representation can capture regularities that are descriptively useful while still failing closure under admissible interventions.

The criterion in this paper is stricter. It targets macro-objecthood, not any and every projectible summary. This is why the paper can preserve a generous attitude toward pattern detection while denying ontological standing to high-leak candidates.

That distinction clarifies dialectical burden. The paper does not need to show that non-closed representations are worthless. It only needs to show that they do not meet the objecthood standard defended here.

### 2.6 Admissibility Disputes and How to Handle Them

Admissibility disputes are expected, especially across domains. The framework should not pretend they disappear. It should show how they are disciplined.

A practical adjudication rule is to compare candidate intervention classes by what they physically permit and whether they preserve the same target regime. Boundary-pressure perturbations can be admissible for storm dynamics, while molecule-by-molecule remote rewriting is not. In institutional settings, changing enforcement intensity can be admissible, while instant arbitrary rewriting of all agent commitments is not.

For transparency, three template classes are often useful as a starting grid: boundary nudges, coarse actuator controls, and policy levers. The point is not that these templates are universal. The point is that they make admissibility comparison public and repeatable. A candidate partition that appears closed only under one narrowly tuned template should be downgraded when sensitivity appears across nearby defensible templates.

Admissibility is not a naturalness surrogate. Interventions that directly target preservation of partition labels, rather than system variables, are inadmissible because they trivialize closure by design. The test concerns whether transition structure is autonomous under physically meaningful controls, not whether labels can be protected by stipulation.

A minimal vignette makes the rule concrete. Suppose two admissible templates are available for the same storm regime: boundary-pressure nudges and coarse thermal forcing. If a candidate partition appears closed only under one template but fails under the other nearby defensible template, the correct verdict is qualified or indeterminate, not robust.

When two intervention classes are both admissible and target the same regime, the framework permits plural testing rather than forced monism. The key requirement is transparency. Verdicts should report which admissibility class was used and how sensitive results are across nearby defensible classes.

This is a strength, not a weakness. A criterion that cannot represent admissibility uncertainty will hide it. A criterion that makes it explicit can discipline it.

### 2.7 Canonical Criterion Statement

For ease of reference, the core criterion can be stated compactly:

A candidate coarse-graining $Z=g(X)$ qualifies for macro-objecthood in regime when, under fixed horizon $L$ and admissible intervention class $\mathcal{I}$, macro-transition structure is autonomous up to declared tolerance, so within-class micro-differences do not materially improve macro-future prediction or intervention-guided control.

Candidate partitions must be specified independently of the particular sample trajectory used to score closure, for instance by a pre-declared construction rule or learning objective fixed before evaluation. Otherwise closure collapses into bespoke encoding, where any dataset can be made to look autonomous by post hoc recoding.

In exact Markov settings, strong lumpability is a sufficient benchmark realization of this criterion. In non-ideal settings, leakiness-centered diagnostics estimate distance from that ideal under fixed constraints.

### 2.8 Predictive and Interventional Closure

Predictive and interventional closure should be distinguished but not separated. Predictive closure concerns whether macrostate information screens off transition-relevant micro-detail for macro-future forecasting. Interventional closure concerns whether macro-transition structure remains stable under admissible perturbation.

The evidential relation is asymmetric. Strong interventional closure typically implies predictive adequacy for the same target and horizon, while predictive adequacy alone can persist in cases where interventional stability fails under distribution shift. This is why the criterion treats predictive evidence as important but not final.

This asymmetry also clarifies burden of proof. Claims to robust macro-objecthood need either direct interventional support or compelling indirect evidence that tracks intervention-relevant invariance. Otherwise, the responsible verdict is qualified or indeterminate.

### 2.9 Why Closure Carries Ontological Weight

A reviewer can still ask why transition autonomy should count as objecthood rather than as a mere success condition for modeling. The answer depends on the paper's explicit commitments. Under structural realism, what ontology should track is stable relational and causal organization rather than intrinsic micro-identity as such. Under interventionism, what counts as causally relevant structure is structure that supports stable manipulation and control.

Given those commitments, closure does not function as a convenient heuristic layered on top of ontology. It is the criterion that identifies when a candidate macro-description tracks stable structure at the level where explanation and intervention are being assessed. This is why the framework can remain compatible with microphysical completeness while still defending non-redundant macro commitment.

This is also why the proposal is not vulnerable to standard "bare structure" worries. The criterion is modal and dynamical, not merely extensional. It is about counterfactual transition organization under interventions, not about abstract isomorphism alone.

This also addresses Newman-style triviality pressure in structural realism. Extensional structure alone can be cheap under recoding. Closure is not extensional fit alone. It requires transition and intervention stability under declared constraints, which arbitrary recodings typically fail.

Why not stop at "good variable" language? Because that move gives up too much of the realist ambition. A good variable can be merely convenient. Closure, by contrast, is evidence that the variable tracks objective modal structure in the specified regime: stable counterfactual dependencies and lawlike transition regularities under admissible intervention. On the paper's commitments, treating that structure as merely representational would undercut the very realism the framework is designed to preserve.

A related worry is that closure only tracks our current inferential limits, making it a convenience statistic rather than evidence about what is objectively there. The framework rejects that interpretation because closure claims are indexed to intervention classes, not only to passive prediction. If a candidate partition supports reliable counterfactual control and regime-stable transition laws, then it is tracking constraint structure that survives perturbation, not merely observer-side compression. A representation can score well on retrospective fit by exploiting accidental correlations and still fail quickly when admissible interventions shift transition pathways. A closure-supporting partition survives those shifts because the screened-off structure is not accidental. The modal profile, not the in-sample fit, carries the ontological burden.

The framework therefore distinguishes epistemic humility from ontological deflation. Finite agents will often have partial, noisy, and regime-limited evidence. But that uncertainty does not collapse the difference between dynamically autonomous and dynamically incoherent partitions. That difference can be difficult to estimate, but it is still a difference in the world rather than in preference.

### 2.10 Levels of Claim and Representation

Some recurring misunderstandings come from sliding between different levels of claim. The paper uses the following distinction throughout.

1. World dynamics: the implemented process itself.
2. Pattern type: stable transition structure supported by that process.
3. Pattern token: a concrete instance under specific boundary conditions.
4. Representation: a model, equation, classifier, or narrative that tracks the pattern.

A representation can fail while the pattern type remains real. A token can fail while the type remains robust. A token can also succeed while the type is weak, for example in narrow calibration windows. Closure claims in this paper are primarily type-level claims under specified regimes, then secondarily claims about token reliability under perturbation.

This is why the criterion does not equate model performance with ontology. It asks whether the represented transition structure is genuinely autonomous, not whether one representation currently performs well.

### 2.11 Closure, Underdetermination, and Objecthood Discipline

One remaining concern is underdetermination. Even after the criterion is stated, a reviewer may argue that many distinct coarse-grainings can be tuned to look acceptable on available data. If so, closure might seem to collapse back into model choice rather than objecthood discipline.

The framework's answer is to separate three questions that are often conflated.

1. Which candidate partitions are descriptively serviceable in a dataset?
2. Which candidates remain transition-autonomous under admissible perturbation?
3. Which of those candidates remain stable under modest horizon and admissibility variation?

Underdetermination is strongest at the first question and weaker at the second. It is often weakest at the third. Many candidates can fit observed trajectories. Far fewer preserve counterfactual structure when the regime is probed. Fewer still remain stable across nearby defensible setups. This staged filtering is exactly where closure earns its metaphysical role.

The framework does not claim that every domain yields one uniquely privileged partition. It claims that objecthood commitments should be constrained by transition autonomy and robustness, rather than by fit alone. When underdetermination persists after those filters, the responsible result is qualified or plural commitment under transparent constraints, not forced monism and not unconstrained relativism.

Before moving to the formal benchmark, the framework can be summarized in three lines.

1. **Criterion:** macro-objecthood requires transition autonomy under fixed regime, horizon, and admissible intervention class.
2. **Evaluation:** when exact closure fails, leakiness-centered diagnostics estimate comparative distance from closure.
3. **Commitment rule:** commitment strength tracks evidential stability, with explicit downgrade to qualified or indeterminate status when evidence is unstable.

## 3. Exact Benchmark: Strong Lumpability

Strong lumpability is introduced as a benchmark, not as destiny. It gives a clean exact case in Markov settings where closure can be stated and checked without ambiguity.

Let partition cells under $g$ be macroclasses. Strong lumpability holds when microstates within the same macroclass induce identical transition probabilities to all macroclasses. When this condition holds, macro-transitions are autonomous by construction.

The philosophical significance is straightforward. A partition that satisfies this condition is not merely useful. It preserves transition structure at the macro grain. A partition that fails it mixes transition-heterogeneous microstates and therefore lacks macro autonomy.

Equivalent language from computational mechanics clarifies why this is not superficial bookkeeping. For any macro-process $Z$, two prediction machines can be defined. The $\varepsilon$-machine is the minimal model that predicts $Z$'s future from $Z$'s own past, using only macro-level information. The $\upsilon$-machine is the minimal model that predicts $Z$'s future from the full micro-past $X$, using everything available (Shalizi and Crutchfield 2001) (Rosas 2024). Closure holds when these two machines are equivalent: the $\varepsilon$-machine already captures everything the $\upsilon$-machine knows about macro-futures, and extra micro-information is redundant for the macro target. This gives an exact ideal where closure is not approximate.

The important limitation is equally clear. Exact strong lumpability is uncommon in open, noisy, and path-dependent systems. That limitation motivates the graded extension. It does not undermine the criterion.

### 3.1 Minimal Formal Illustration

The anti-gerrymandering role can be shown with a minimal symbolic example. Let microstates be $\{x_1,x_2,x_3,x_4\}$ with transition rows:

$$
\begin{aligned}
P(x_1,\cdot) &= (\alpha,\beta,0,0),\\
P(x_2,\cdot) &= (\alpha,\beta,0,0),\\
P(x_3,\cdot) &= (0,0,\gamma,\delta),\\
P(x_4,\cdot) &= (0,0,\gamma,\delta),
\end{aligned}
$$

with $\alpha+\beta=1$ and $\gamma+\delta=1$.

Partition $A$ groups $\{x_1,x_2\}$ and $\{x_3,x_4\}$. Partition $B$ groups $\{x_1,x_3\}$ and $\{x_2,x_4\}$. In $A$, members of each macroclass have matching onward profiles to macroclasses, so macro-transitions are autonomous. In $B$, members of one macroclass differ in onward profiles whenever $\alpha \neq \gamma$, so the macro-label hides a transition-relevant difference.

Partition $B$ can still be made predictive by adding repeated within-class bookkeeping. That is exactly the high-maintenance case this paper excludes from robust macro-objecthood.

The philosophical lesson is simple. Both partitions are definable. Only one preserves transition autonomy. Closure therefore discriminates between legitimate macro-candidates and merely codable aggregates.

### 3.2 If an Unusual Partition Closes

A common reaction is that a strange disjunctive partition might satisfy the formal condition in a symmetric system. That is correct. On this framework, if such a partition genuinely supports autonomous macro-transitions under fixed constraints, it counts as real at that grain.

This is not a concession to arbitrariness. The criterion tracks transition coherence, not intuitive naturalness. If one wants a separate naturalness filter, that is an additional criterion and should be declared as such.

The exclusion claim should therefore be read carefully. The framework excludes dynamically incoherent, high-leak aggregates. It does not exclude every unusual grouping.

### 3.3 Compression and Closure Are Related but Not Identical

The paper relies on compression and closure, but they do different jobs. Compression concerns descriptive economy. Closure concerns autonomous transition structure under admissible interventions.

A representation can compress in-sample trajectories and still fail closure if it hides transition-relevant within-class differences. For that reason, compression is often a useful indicator but not a sufficient objecthood condition.

The division of labor is simple. Compression helps identify promising candidates. Closure carries final ontological weight.

### 3.4 What the Formal Machinery Alone Does Not Provide

A natural question is why this paper is needed if strong lumpability and causal-state constructions already exist. The answer is that the mathematical property and the philosophical criterion are different things. Four elements of the present framework have no counterpart in the formal literature alone.

First, intervention indexing. Causal-state constructions classify histories by equivalence of future distributions under the observed process. That is primarily an observational-predictive equivalence relation (Shalizi and Crutchfield 2001). The present criterion adds an admissible intervention class as a parameter of the closure test. Objecthood claims are indexed to what the system does under perturbation, not only under passive observation. This is what separates the criterion from a purely statistical diagnostic.

Second, an explicit ontological interpretation. Strong lumpability tells you when a coarse-graining preserves transition structure. It does not tell you whether that preservation warrants realist commitment. The philosophical work of this paper is to argue that, under stated commitments, transition autonomy under admissible interventions is sufficient for macro-objecthood, and to give the conditions under which that claim should be downgraded or withdrawn.

Third, a graded commitment protocol. The formal literature offers exact conditions and, more recently, approximate-closure measures. It does not supply a framework for translating those measures into warranted ontological verdicts with explicit robustness requirements and downgrade rules. The selective commitment structure (robust, qualified, indeterminate) is a philosophical addition.

Fourth, an anti-gerrymandering argument. The Dennett permissiveness problem is a philosophical problem. Lumpability provides a formal tool for solving it, but the argument that closure is the right anti-gerrymandering condition, and that compression without closure is insufficient for objecthood, is not a theorem. It is a philosophical claim defended by the structure of Sections 2 through 4.

A similar contrast applies to causal-emergence work. Effective-information analyses ask when macro-descriptions gain determinism and reduce degeneracy relative to micro-descriptions (Hoel 2013). That is a valuable diagnostic, but it does not by itself settle which macro-descriptions deserve realist commitment, because a partition can increase effective information while remaining fragile under intervention or horizon variation. The present framework treats causal-emergence gains as corroborating evidence within a closure-governed criterion, not as a standalone ontology test.

So the paper is not computational mechanics or causal-emergence analysis with new labels. It is a philosophical criterion that borrows formal tools while adding intervention-indexed objecthood conditions, an explicit commitment protocol, and a sustained argument about why closure is the right fix for pattern-realism permissiveness.

## 4. Approximate Closure Without Instrumentalist Drift

### 4.1 Why Approximation is Expected

In complex systems, boundaries leak and couplings shift across regimes. Exact closure is therefore unusual. A credible realism criterion cannot require perfect closure everywhere.

Approximation here is not concession to arbitrariness. It is the expected non-ideal form of the same criterion, provided constraints are fixed and diagnostics are comparative.

The right ontology test is type-level before token-level. A pattern type can be robustly closed for a regime even when a specific token fails because of boundary violation, atypical perturbation, or timescale mismatch. One anomalous token is therefore not decisive. The relevant question is whether failures are exceptional or systematic for the type under the stated constraints.

### 4.2 Leakiness as Canonical Target

Leakiness measures how much within-class micro-detail still improves macro-future prediction once current macrostate is fixed. A canonical quantity is $I(X_t; Z_{t+1} \mid Z_t)$. Low values support closure. High values indicate hidden transition-relevant heterogeneity.

In this paper, leakiness is the default target quantity. Other diagnostics, such as within-class transition divergence and predictive gain from added micro-features, function as estimators or proxies when direct estimation is limited.

Leakiness should therefore be read comparatively and through robustness checks, not as a context-free absolute cutoff. Absolute tolerance is domain-relative, but high sensitivity of leakiness rankings to modest defensible modeling choices is itself a downgrade trigger.

Comparative ranking is necessary but not sufficient. A candidate can beat nearby alternatives and still fail objecthood if absolute leakiness remains high and instability persists under modest robustness checks. The framework therefore requires both relative superiority and minimum viability.

The viability floor can be stated without a numeric threshold. A partition fails minimum viability if, across the declared robustness checks, within-class micro-features yield consistent, non-negligible gains in macro-future prediction or intervention response relative to the best macro-only model. When that pattern persists across diagnostics and perturbation tests, the partition has not achieved the transition autonomy the criterion requires, regardless of how it ranks against competitors.

### 4.3 Procedural Safeguards in Non-Ideal Cases

Approximate closure claims require explicit safeguards.

1. Fix regime, horizon, admissibility class, and diagnostics before comparative scoring.
2. Compare candidate partitions under the same fixed setup.
3. Test robustness under modest changes in horizon and intervention distribution.
4. Apply a minimum-viability floor: if all candidates remain high-leak and fragile, return no robust objecthood verdict for that regime.
5. Report verdicts as robust, qualified, or indeterminate.

This keeps threshold choice procedural rather than discretionary. It also addresses a predictable confusion. Estimation difficulty is an epistemic limit on access, not a defect in the metaphysical criterion itself.

#### Selection Discipline

One concern from both reviewers and readers is that flexibility can silently re-enter through upstream choices. The framework answers this with a single discipline rule: admissibility, state construction, horizon, and diagnostics are fixed before scoring, and post hoc revisions trigger restart and disclosure. This does not eliminate judgment. It makes judgment auditable and prevents favored partitions from being protected by moving criteria.

### 4.4 Regime Dependence and Projectibility

Regime dependence does not imply observer-relativity. It states that closure depends on actual transition structure under specified constraints. A pattern can be closed in one regime and leaky in another because the structure has changed.

The metaphysical stance is explicit: regime and horizon index the modal profile being claimed, not a concession that anything goes.

Projectibility provides a further check. Defensible regime specifications should support stable induction under modest counterfactual variation. Narrowly engineered regimes that protect a favored partition usually fail under small context shifts. When that occurs, the candidate was never robustly closed in the relevant sense.

This is where the paper is closest to Ladyman and Ross. Projectibility is not treated as an optional methodological virtue. It functions as a realism-relevant stress test on whether a closure claim survives beyond calibration conditions (Ladyman and Ross 2007). Closure without projectible robustness is too cheap to support robust objecthood claims.

Regime dependence itself should be split into two forms. Ontic regime dependence occurs when system structure changes, such as phase transitions or boundary-condition shifts. Epistemic regime dependence occurs when measurement or control access changes while underlying structure remains fixed. The first changes what is there to be tracked. The second changes what can be warranted from available evidence.

### 4.5 One Distributed Illustration

Macro does not mean large or spatially contiguous. Coarse-graining can be logical and distributed. Monetary systems illustrate this point without requiring new machinery.

The macro-transition structure of transactions can remain stable across heterogeneous micro-realizations, such as cash tokens, ledger records, and digital balances, under admissible legal and financial interventions. If that stability holds, macro-objecthood is warranted in regime. If implementation channels degrade, closure can fail even while symbolic representations persist.

A minimal failure case clarifies the point. A state can retain formal legal tender rules while losing reliable payment enforcement and settlement implementation. In that case, the representation persists but transition autonomy degrades, and closure-based commitment should be downgraded.

The illustration does one job only. It shows that closure tracks transition structure, not spatial shape. Nothing in the argument depends on taking a stance on broader social ontology.

### 4.6 Failure Conditions and Downgrade Rules

The framework should also say clearly when commitment should be withdrawn or downgraded. Three failure patterns are especially relevant.

1. Persistent high leakiness across defensible diagnostics under fixed constraints.
2. Strong disagreement among diagnostics that does not resolve under modest robustness checks.
3. High sensitivity of verdicts to small, defensible changes in admissibility or horizon.
4. Candidate sets where every partition remains above the minimum-viability floor.

When these patterns appear, the right response is not forced binary judgment. The right response is explicit downgrade to qualified or indeterminate status. This keeps the criterion resilient without pretending that every case must produce a sharp ontology verdict.

Type-token reminder: a downgraded token does not automatically refute type-level closure. The key question is whether instability is exceptional at token level or systematic for the type under the stated constraints.

### 4.7 Stable Versus Merely Entailed Patterns

The graded framework also supports an important distinction. A pattern can be entailed by microhistory and laws without being stable as a macro-handle. Entailment alone is cheap. Stability under admissible perturbation is demanding.

This distinction matters for permissiveness debates. A contrived disjunctive construction can be true of a realized trajectory while still failing closure. It can require continual within-class micro repair, fail under modest regime shifts, and lose interventional reliability.

So the claim is not that gerrymandered constructions are false. The claim is that they usually fail to qualify as macro-objects. They may remain descriptions, but not object-level descriptions in the relevant regime. The same applies to computationally adequate models more broadly. A higher-level model can be useful for prediction or control without meeting closure standards. Computational adequacy means the model serves some purpose; closure requires that transition-relevant micro-differences are screened off in the specified regime. A computationally adequate but high-leak representation remains a valuable tool, but it does not automatically earn macro-object status.

### 4.8 Practical Qualification Under Sparse Intervention Access

In many domains, direct interventions are sparse, ethically constrained, or expensive. This does not invalidate the criterion. It changes evidential strategy.

Where intervention data are limited, predictive closure functions as an operational indicator while interventional closure remains the ontological target. A model can fit historical trajectories and still fail under novel perturbation. For that reason, claims should be qualified by available intervention access and downgraded when out-of-regime behavior is unstable.

The paper therefore does not treat in-sample prediction as decisive. The standard remains robustness under admissible perturbation, even when that robustness must be assessed indirectly.

This point also explains why diagnostics should be triangulated. Predictive closure can look strong in-sample while interventional closure fails under admissible perturbation. Partial observability can hide within-class heterogeneity that later appears as instability. Nonstationarity can make a previously low-leak partition unstable outside its calibration window. Triangulation does not remove these risks, but it makes them visible.

### 4.9 Conceptual Contrast: Near-Tie Prediction, Different Ontology Verdicts

Two partitions can show similar short-horizon observational performance and still receive different closure verdicts. This is where the criterion does real philosophical work.

Suppose partition $P_1$ and partition $P_2$ produce comparable one-step observational fit in calibration data. Under fixed admissible interventions, $P_1$ preserves stable macro-transition structure while $P_2$ requires repeated within-class micro refinements to maintain performance. Observationally, they may look close. Structurally, they are not.

On the present framework, $P_1$ receives the stronger objecthood verdict because it remains transition-autonomous under the fixed constraints. $P_2$ can remain useful as a representation, but its dependence on recurring hidden repair counts against macro-object standing.

A concrete sketch helps. In traffic modeling, one partition may track density and flow by lane segment. A rival partition may track arbitrary vehicle-ID clusters that happen to fit one week of observations. In-sample one-step fit can be similar. Under admissible perturbations, such as ramp metering changes and speed-limit adjustments, the lane-flow partition remains stable while the ID-cluster partition becomes brittle. Under modest horizon extension, leakiness for the ID-cluster partition rises sharply. The verdict is then robust or qualified objecthood for the lane-flow partition and downgrade for the rival.

### 4.10 Reporting and Evidential Discipline

To keep conclusions comparable across cases, closure assessments should report five items explicitly.

1. Target partition and rationale.
2. Regime and horizon specification.
3. Admissible intervention class and justification.
4. Diagnostics used and their agreement or disagreement.
5. Final verdict category: robust, qualified, or indeterminate.

This reporting structure is simple, but philosophically important. It prevents silent shifts in target, timescale, or admissibility from being mistaken for genuine ontological progress.

For consistent application, the assessment sequence should be explicit.

1. Specify candidate partitions for one target process.
2. Fix regime, horizon $L$, admissible intervention class $\mathcal{I}$, diagnostics, and model classes in advance.
3. Evaluate all candidates comparatively under that same fixed setup.
4. Report verdict category and sensitivity under modest perturbation checks.

This sequence is not an optional implementation preference. It is part of what makes closure claims epistemically disciplined rather than post hoc.

Diagnostics do not replace criterion-level argument. They provide evidence about whether a candidate satisfies the criterion under declared constraints. This distinction matters because reviewers can otherwise misread the framework as reducing ontology to whichever metric happens to be available. The evidential logic is comparative and convergent. No single proxy is treated as infallible. Confidence increases when different diagnostics track the same rank-order among candidate partitions and when those rankings remain stable under modest perturbation tests. Confidence decreases when diagnostics diverge persistently or when rankings are brittle under small design changes.

This is why verdict categories are graded. Robust verdicts require convergence and stability. Qualified verdicts fit mixed but non-trivial evidence. Indeterminate verdicts fit persistent instability. The diagnostic set can vary by domain, but it should answer one fixed question: do within-class micro-differences still matter for macro-what-follows? In practice, three checks are usually enough.

1. Leakiness proxy based on predictive gain from added within-class micro-features.
2. Within-class transition-profile divergence.
3. Intervention-response invariance under admissible perturbation.

Agreement across these checks increases warrant. Persistent disagreement is evidence for revision or downgrade, not for forced commitment.

Minimal triangulation recipe: require stability under modest horizon variation and under at least two defensible admissibility perturbations, while at least two diagnostics agree on candidate rank-order. If this condition fails, return qualified or indeterminate status rather than robust objecthood.

## 5. Objections and Replies

The objections are organized as a progression from foundational worries to evidential-discipline worries. The order is deliberate, but the core answer remains stable: closure under fixed constraints supplies ontological discipline without demanding a single privileged descriptive level.

Three standing commitments apply throughout the replies below and will not be restated each time. First, the framework does not deny microphysical completeness; it claims non-redundancy at the explanatory and interventional level for declared macro-targets. Second, all verdicts are indexed to regime, horizon, and admissible intervention class, so objections that presuppose context-free ontological claims address a view the paper does not hold. Third, the strongest conclusion is conditional on structural realist and interventionist commitments; readers who withhold those commitments can still accept the narrower anti-gerrymandering result.

### 5.1 "Instrumentalism and Admissibility"

Objection: target selection is interest-relative, so the view still collapses into usefulness.

Reply: target selection can be interest-shaped without making closure verdicts preference-shaped. Once regime, horizon, and admissibility are fixed, whether macro-transitions are autonomous is a system fact under explicit constraints.

The stronger version invokes Dennett's Martian. If an ideal micro-predictor can forecast everything, macro realism looks optional. The mistake is to infer ontological redundancy from representational power. Micro omniscience can coexist with objectively better macro bottlenecks for target dynamics. Refusing those bottlenecks increases representational burden. It does not erase macro transition structure.

The deeper point is that observer power changes convenience, not closure facts. Whether a partition is transition-autonomous under fixed constraints does not vary with who computes it.

Admissibility version of the same objection: admissibility criteria already encode what counts as the relevant level. The framework answers this by hierarchical order and disclosure rules. Admissibility is fixed by physically realizable, regime-preserving control channels before partition scoring. Post hoc admissibility revision triggers restart. This makes back-fitting explicit and sanctionable.

Residual disagreement can remain. The framework does not promise universal convergence from one pass. It promises disciplined comparison and explicit downgrade when verdicts are unstable across nearby defensible admissibility specifications. This is a feature for skeptical readers: hard cases are flagged as unresolved rather than settled by stipulation.

This reply matters because instrumentalist pressure often hides in two different forms. One form says ontology should track predictive utility only. The other says ontology is unnecessary once predictive utility is available. The framework rejects both forms. Utility without closure is too permissive, but closure without ontology understates what stable intervention-guiding structure provides.

What closure adds is not metaphysical extravagance. It is commitment discipline. If a candidate repeatedly supports stable counterfactual control under fixed constraints, then refusing any ontological standing starts to look like an empty verbal policy rather than a substantive alternative. The paper does not force maximal realism. It forces explicit criteria for when anti-realism remains credible.

This is also where the cheap-coding objection is handled directly. A recoding can improve local fit and still fail closure under admissible perturbation. The criterion is therefore representation-hostile in exactly the way permissiveness critiques demand.

### 5.2 "Causal Exclusion Still Defeats Macro Claims"

Objection: if microphysics is causally complete, macro-level causal claims are redundant (Kim 1998).

Reply: closure does not posit a second fundamental cause layer. It identifies when macro-description is sufficient for prediction and intervention at the relevant target level. Microphysical implementation remains untouched.

The non-redundancy claim is explanatory and control-theoretic. A closed macro-partition carries autonomous transition structure for target dynamics. In that respect, macro-level variables are not placeholders for arbitrary omitted micro-details. They are level-appropriate carriers of intervention-relevant structure.

This reply aligns with interventionist causation. Macro-level interventions can be successful and projectible across perturbations without denying microphysical realization (Woodward 2003) (Pearl 2000). Compatibility with microphysical completeness is a design feature, not a concession.

The overdetermination worry can be handled directly. The framework does not claim two independent sufficient causes at one event. It claims one implemented process with multiple adequate descriptions for different explanatory and control targets. Exclusion pressure weakens once adequacy is indexed to target and intervention class rather than to a single privileged descriptive level.

This leaves a clear limit in place. The paper does not claim that every macro-description is causally on par with every micro-description. It claims that when closure conditions are met, macro-level variables earn non-redundant standing for the relevant explanatory and interventional tasks. That is the level of commitment needed to answer exclusion pressure in its strongest contemporary form (Kim 2005).

One further clarification helps. The framework does not infer macro-causal relevance from semantic convenience or explanatory taste. It ties relevance to intervention-guiding difference-making under fixed constraints. If intervening on macro-variables systematically shifts target outcomes while micro-identity within macroclasses does not add control leverage, exclusion-style redundancy claims lose force for that target.

Relative to Kim's strongest formulations, the key move is target-indexing rather than layer multiplication (Kim 1998) (Kim 2005). If explanatory and interventional adequacy is indexed to declared macro-targets, a closed macro-description can be non-redundant without competing for micro-level fundamentality. Target-indexing is not a linguistic escape. It is a claim about which counterfactual dependencies remain stable for a declared class of interventions. Non-redundancy is inferred when micro-detail ceases to add control-relevant information for the target outcome.

This is also where closure improves on generic compatibility claims. Compatibility with microphysical completeness by itself is too weak, because it leaves open whether macro-variables are dispensable shorthand. Closure narrows that space. When closure holds, dispensability is no longer free to assert. It must be argued against a stated record of interventional and predictive sufficiency under fixed constraints.

### 5.3 "Autonomy, Pluralism, and Distinctiveness"

Objection: the view sounds like a formal restatement of familiar special-sciences autonomy claims, not a distinctive realism thesis.

Reply: the paper is continuous with autonomy insights, but it is not equivalent to them. Generic autonomy claims often remain permissive about what qualifies as a level-worthy grouping. The present view adds a discriminating closure condition with explicit exclusion and downgrade rules. That addition changes verdict structure.

The difference is practical and philosophical. Practical, because the framework gives a protocol for ruling out high-maintenance, transition-incoherent candidates. Philosophical, because it ties realism commitment to transition autonomy under admissible interventions rather than to explanatory convenience alone. In this respect, causal-emergence style results are treated as evidence within a closure-governed framework, not as a replacement for the criterion itself (Hoel 2013).

So the paper should be read as a constrained realism refinement of autonomy views, not as an unrelated alternative and not as a mere restatement.

Pluralism version of the objection: if multiple grains can satisfy closure, ontology becomes permissive again. The reply is that plurality of closed grains does not imply arbitrariness. Once regime, horizon, and admissibility are fixed, which partitions close is determined by transition structure, not by analyst choice. When multiple candidates remain viable, robustness and minimality rank them as an objective relation among candidates under fixed constraints.

This is a virtue for complex systems, not an embarrassment. Forcing a single grain in every context would be a stronger and less defensible claim than the paper needs.

### 5.4 "The Markov Template is Too Restrictive"

Objection: strong lumpability presupposes first-order Markov microdynamics and excludes memory-dependent systems.

Reply: the criterion is transition sufficiency, not first-order Markovity. Strong lumpability is an exact benchmark. In memory-bearing systems, state can be enriched with relevant history and the same closure question can be asked over that enriched state. This changes state representation, not criterion content.

Minimality still matters. Enrichment should be the least extension needed to preserve closure performance under fixed constraints. The framework also accepts an important edge case: if the minimally sufficient enriched state approaches micro-level complexity, then closure may be recovered without meaningful compression. In that regime, the result is not robust macro-objecthood. It is a warning that no informative macro-partition has been found at the target grain.

### 5.5 "Formal Closure Collapses the View into Formalism"

Objection: formal systems are closed by stipulation, so closure cannot ground empirical objecthood.

Reply: stipulated and induced closure must be separated. Formal systems can have objective internal closure under constitutive rules. The present criterion concerns induced closure in implemented spatiotemporal dynamics. Internal formal coherence does not by itself settle empirical macro-objecthood claims.

This does not reduce formal systems to arbitrary invention. Formal systems are invented, but not freely. What counts as intelligible formal practice is constrained by stable identity conditions, compositional inference, and coherent consequence. Those constraints explain why formal work can guide empirical reasoning without itself deciding empirical objecthood.

No collapse follows. The paper's argument is narrower and clearer: induced closure is the objecthood criterion for implemented macro-patterns in regime.

### 5.6 "Closure Is Too Strong and Eliminates Most Special Sciences"

Objection: if closure requires that within-class micro-differences not matter for macro-transitions, then most special-science kinds will fail. Biological species, psychological states, and economic categories are notoriously leaky. The criterion eliminates the ontology it was supposed to discipline.

Reply: this objection conflates robust objecthood with any objecthood verdict at all. The framework provides three verdict categories, not one. Robust objecthood requires stable closure under fixed constraints. Qualified objecthood fits cases where closure is partial, regime-limited, or supported by convergent but incomplete evidence. Indeterminate status fits cases where evidence is too unstable to warrant commitment.

Most special-science kinds fall into the qualified range, and that is the correct result. Biological species exhibit substantial transition autonomy within ecological and evolutionary regimes while leaking at boundary cases (hybrid zones, ring species, horizontal gene transfer). Psychological kinds often support predictive and interventional regularity within clinical or experimental regimes while failing under broader perturbation. The framework does not eliminate these kinds. It gives them the status their closure evidence supports: qualified objecthood with explicit regime limitations, rather than either full robust status or wholesale elimination.

The objection therefore proves too much. A criterion that granted robust objecthood to every special-science kind regardless of leakiness would be the permissive framework this paper is designed to replace. The gain from graded verdicts is that they match evidential reality rather than forcing a binary choice between full realism and eliminativism.

### 5.7 "Predictive Success and Failure Conditions"

Objection: a model can predict well without warranting ontological commitment.

Reply: that is correct, and the framework does not deny it. Prediction alone is not the criterion. The criterion is transition autonomy under admissible interventions and fixed constraints. Predictive success functions as evidence only when it aligns with closure diagnostics and interventional stability.

This point carries two immediate consequences.

First, protocol language has a bounded philosophical role. The paper includes diagnostics to avoid a familiar failure mode, where a criterion is asserted but left too unconstrained to guide verdicts. The claim remains conceptual. Diagnostics do not replace argument. They operationalize what the argument says should matter.

Second, the framework is falsifiable in its own terms. If candidate partitions repeatedly fail closure diagnostics across defensible regimes and admissibility classes, commitment should be withdrawn or downgraded. The same applies when verdicts are unstable under small, defensible changes in horizon, admissibility, or diagnostic proxy. A proposal that cannot risk downgrade is not a serious realism criterion.

The broader upshot is methodological modesty with ontological discipline. The framework does not promise certainty from one metric or one pass. It promises explicit criteria for when confidence increases, when confidence should pause, and when commitment should retreat.

### 5.8 "Horizon-Relativity Makes the Criterion Too Weak"

Objection: if closure is indexed to horizon, any candidate can be made to pass at a short enough horizon.

Reply: horizon indexing is a constraint, not an escape clause. The framework requires horizons to be specified in advance, justified by regime structure, and tested for robustness under modest variation. A candidate that only passes at a razor-thin horizon and fails immediately under slight extension receives, at best, qualified status.

So horizon-relativity does not trivialize the criterion. It forces explicit timescale discipline and prevents silent switching between incompatible temporal targets.

The same point can be put as a burden-of-proof rule. Horizon flexibility is acceptable when it tracks independently motivated timescale structure in the domain, such as known relaxation windows, intervention latency, or policy response periods. Horizon flexibility is not acceptable when it is introduced only after score inspection to salvage a preferred partition.

This distinction is central for pre-emption. Critics are right that any framework can be trivialized if timescales are unconstrained. The present framework avoids that outcome by tying horizons to ex ante justification and by requiring modest-extension robustness. If robustness fails, the verdict downgrades. The criterion does not break. It reports that the claim was too strong for the evidence.

### 5.9 "The Criterion Is Too Conservative"

Objection: by demanding closure and downgrade discipline, the framework may be too conservative and may miss emerging macro-objects.

Reply: conservatism is partly intentional. The paper aims to avoid premature ontological inflation. Still, the framework is not rigid. It allows qualified verdicts for emerging patterns when closure evidence is partial but improving, and it allows verdict revision as regimes stabilize and intervention evidence accumulates.

So the criterion does not require all-or-nothing maturity before any commitment. It requires that commitment strength track available closure evidence. This is a virtue for dynamic systems where objecthood can be developmental rather than instantaneous.

This is also where compression and closure reconnect in a non-vacuous way. Early in a domain's development, compression gains may appear before robust closure is demonstrated. The framework treats this as evidential lead, not ontological conclusion. As closure evidence accumulates, commitment can strengthen. If closure evidence fails to accumulate, commitment should remain qualified or be withdrawn even when short-run compression remains attractive.

## 6. Conclusion: A Disciplined Realism Claim

The paper advances a constrained upgrade of real-pattern realism. Compression and prediction are retained, but permissiveness is reduced by an explicit closure condition tied to transition autonomy under fixed constraints.

Strong lumpability provides the exact benchmark. Leakiness and convergent diagnostics provide a disciplined non-ideal extension. Together they support a realism claim that is neither naively permissive nor implausibly perfectionist.

The central philosophical move can be stated compactly. Real-pattern realism is plausible but underconstrained. Closure supplies the missing discriminating condition. Exact lumpability and graded leakiness then show how that condition can be used across ideal and non-ideal settings without changing criterion content.

What this framework buys is selective commitment. It supports robust commitment where closure is stable, qualified commitment in borderline cases, and downgrade where verdicts depend on fragile admissibility or horizon choices.

The proposal is intentionally middle-range. It is stronger than permissive pattern realism because it adds explicit exclusion and downgrade structure. It is weaker than a total-level metaphysics because it is restricted to induced closure in spatiotemporal systems under declared constraints.

The paper also marks clear limits. It is not a complete metaphysics of levels and not a universal methods manual. Its contribution is a philosophical criterion with application discipline. Future work should test the criterion across domains by comparing candidate partitions under fixed constraints, rather than by multiplying new concepts. If rejected, it should be rejected because one rejects its stated commitments, not because circularity, instrumentalist drift, or scope ambiguity were left unresolved.

## References

Dennett, Daniel C. 1991. "Real Patterns." *Journal of Philosophy* 88(1): 27-51. https://doi.org/10.2307/2027085.

Elgin, Catherine Z. 2017. "From Knowledge to Understanding." In *True Enough*, 35-53. Cambridge, MA: MIT Press. https://doi.org/10.7551/mitpress/9780262036535.003.0003.

Haugeland, John. 1998. *Having Thought*. Cambridge, MA: Harvard University Press. ISBN 978-0674198234.

Hoel, Erik P., Larissa Albantakis, and Giulio Tononi. 2013. "Quantifying Causal Emergence Shows that Macro Can Beat Micro." *Proceedings of the National Academy of Sciences* 110(49): 19790-19795. https://doi.org/10.1073/pnas.1314922110.

Kim, Jaegwon. 1998. *Mind in a physical world*. Cambridge, MA: MIT Press. ISBN 978-0262112345.

Kim, Jaegwon. 2005. *Physicalism, or Something Near Enough*. Princeton, NJ: Princeton University Press. ISBN 978-0691113753.

Ladyman, James, and Don Ross. 2007. *Every Thing Must Go: Metaphysics Naturalized*. Oxford: Oxford University Press.

Pearl, Judea. 2000. *Causality*. Cambridge: Cambridge University Press. ISBN 978-0521773621.

Rosas, Fernando E., Bernhard C. Geiger, Andrea I. Luppi, Anil K. Seth, Daniel Polani, Michael Gastpar, and Pedro A. M. Mediano. 2024. "Software in the natural world: A computational approach to hierarchical emergence" arXiv preprint arXiv:2402.09090.

Shalizi, Cosma Rohilla, and James P. Crutchfield. 2001. "Computational Mechanics: Pattern and Prediction, Structure and Simplicity." *Journal of Statistical Physics* 104(3-4): 817-879. https://doi.org/10.1023/A:1010388907793.

Woodward, James. 2003. *Making Things Happen*. Oxford: Oxford University Press. ISBN 978-0195155273.
