# Real Patterns as Closure: A Lumpability Criterion for Non-Gerrymandered Macro-Objecthood

## 0. Abstract

Dennett's account of real patterns remains influential because it connects ontology to compression and predictive success. Yet in its familiar form it remains vulnerable to two objections. First, it can look instrumentalist, where real means useful to us. Second, it can look permissive, where any coding trick that compresses data appears to qualify as a real pattern. This paper offers a closure-based refinement that preserves Dennett's insight while adding a non-gerrymandering constraint. The central claim is that a pattern is real when a coarse-graining induces autonomous macro-transitions, so lower-level distinctions become irrelevant for what follows at the macro level. In exact Markov settings, strong lumpability supplies the key criterion: grouped microstates must have matching macro-transition profiles. I then extend the criterion to approximate cases using graded leakiness, so the framework remains applicable to weather systems, organisms, and social structures where closure is not perfect. The result is a sharper realism about patterns that is operational in principle and strong enough to exclude pathological composites without collapsing into reductionism or convenience pragmatism (Dennett 1991; Shalizi and Crutchfield 2001; Rosas et al. 2024).

## 1. Introduction: Why Dennett Needs a Criterion

Dennett's proposal that the world contains real patterns changed how many philosophers discuss emergence and ontology. The attraction is clear. It gives us a way to respect higher-level structure without denying lower-level physics. It also captures a central feature of scientific practice. We routinely treat macro-regularities as objectively trackable because they support compression and prediction (Dennett 1991).

Still, the view is often judged incomplete. The first criticism is instrumentalist drift. If real patterns are just patterns that help us predict, then reality seems indexed to user interests. The second criticism is permissiveness. If compression is the standard, then contrived composites appear admissible under some coding conventions. Critics then invoke examples like Shoe-Moon aggregates and disjunctive kinds to argue that real-pattern talk lacks ontological discipline.

This paper argues that both criticisms identify a genuine gap, but not a fatal flaw. The gap is the absence of an explicit closure criterion. Once closure is made central, and once closure is tied to lumpability in the induced case, Dennett's core idea can be sharpened into a robust criterion.

The thesis is this: a real pattern is an autonomous coarse-graining. More precisely, a pattern is real when macrostate information is sufficient for macro-transition structure, so lower-level distinctions inside each macrostate no longer matter for macro-evolution. In exact Markov settings, this is strong lumpability. In realistic settings, this is approximate lumpability measured by leakiness.

This framing also limits instrumentalist drift. Analysts choose research aims, but admissible intervention classes are constrained by what embodied agents can actually measure and control under locality, bandwidth, and thermodynamic limits. So the target is not arbitrary preference. It is constrained inquiry in a structured world.

### 1.1 Related work and contribution

This paper sits at an intersection of four conversations. From Dennett, it takes the claim that compression and prediction can track objective structure (Dennett 1991). From computational mechanics, it takes the demand that macrostructure must preserve transition-relevant information rather than mere descriptive convenience (Shalizi and Crutchfield 2001). From recent closure work, it takes the thought that macro-autonomy can be diagnosed by screening-off relations between micro and macro trajectories (Rosas et al. 2024). From interventionist philosophy of science, it takes the idea that ontological commitment is tied to stable intervention-guiding structure, not to metaphysical fundamentality (Woodward 2003; Pearl 2000).

The novel claim here is not any one ingredient in isolation. It is their joint use as a criterion with bite: closure of macro-transition structure, exact in ideal lumpable settings and graded by leakiness in realistic settings, used specifically to filter gerrymandered partitions from autonomous macro-object candidates.

The paper proceeds as follows. Section 2 disambiguates pattern talk by separating reality, pattern, instance, and representation. Section 3 formulates closure as the governing idea. Section 4 introduces strong lumpability and provides a toy example with success and failure partitions. Section 5 extends the criterion to graded, noisy domains. Section 6 applies the view to pathological composites and high-maintenance ontological posits. Section 7 shows how canonical macro-objects pass. Section 8 states the interpretive gain for Dennett. Section 9 addresses four standard objections. Section 10 concludes with implications and future work.

## 2. Disambiguation: What Exactly Is a Pattern?

### 2.1 The reality-pattern-instance-representation ladder

Many disputes begin by mixing levels. We need a stable ladder.

1. Reality itself: the causal process independent of our models.
2. Patterns supported by reality: stable dependency and transition structures.
3. Instances of patterns: concrete tokens, this storm, this cell, this legal proceeding.
4. Representations of patterns: theories, equations, state spaces, verbal models.
5. Representations of instances: observations, records, memories of particular tokens.

The same word can refer to different layers. That ambiguity creates pseudo-disputes. A representation may fail while the pattern remains real. A token may be noisy while the type remains stable. A pattern may be real even when no agent currently represents it.

### 2.2 What pattern is real means here

In this paper, real pattern does not mean mental construct, Platonic object, or anything describable. It means a coarse-graining that earns autonomy in transition structure. The claim is modest and precise. We are not adding a new substance to ontology. We are identifying when macro-description tracks objective structure well enough to function as its own level of what follows. This is not eliminativism about mathematics or logic. It is a scope claim about world-implemented macro-objecthood in the present paper.

Formal systems are useful here as a contrast class. They are closed by stipulation. The present paper is about closure induced by empirical dynamics.

## 3. From Real Patterns to Closure

### 3.1 The closure intuition

Closure can be stated without heavy formalism. A macro-pattern is real when macro-description screens off lower-level differences for macro-futures. The key phrase is for what follows at the macro level. If lower-level distinctions still matter for macro-evolution, closure fails.

This is a transition claim, not a static shape claim. We care about dynamics. Two microstates may look similar now but diverge in macro-futures. If so, grouping them as one macrostate is not autonomous.

Definition (Closure relative to regime): a coarse-graining $Z_t = g(X_t)$ is closed over horizon $L$ and intervention class $\mathcal{I}$ when $Z_t$ is sufficient for forecasting and interventionally tracking $Z_{t+1}^{L}$ in that regime, without importing additional within-class microstate distinctions.

Lemma (Markov exact case): if the micro-process is first-order Markov and the partition induced by $g$ is strongly lumpable, then the induced macro-process is Markov and transition-autonomous at the macro level.

### 3.2 Minimal formal shape

Let a micro-process be $X_t$, and let a candidate macro-process be $Z_t = g(X_t)$. Closure for $Z$ asks whether $Z_t$ is sufficient for forecasting the distribution of $Z_{t+1}$, or a relevant horizon $Z_{t+1}^{L}$, without importing hidden distinctions among microstates inside each macrostate.

Notation: $Z_{t+1}^{L}$ denotes the macro-trajectory segment $(Z_{t+1}, Z_{t+2}, \ldots, Z_{t+L})$.

In this paper, informational diagnostics and interventional relevance are used together. Low leakiness is an operational test for autonomy, and interventional stability is the ontological interpretation of why that autonomy matters.

Stated directly, if two microstates map to the same macrostate at time $t$, they must agree on macro-transition consequences. If they do not, the macrostate hides causally relevant structure and is not autonomous.

### 3.3 Operational protocol (in principle)

To make closure relative to regime operational, use the following recipe.

1. Choose candidate macro-variables and a measurement channel from microstate data to macrostate estimates.
2. Specify an intervention class $\mathcal{I}$, what can be clamped, perturbed, or controlled at the macro level.
3. Fix a prediction horizon $L$ and evaluation window.
4. Estimate leakiness, or a proxy, for each candidate partition.
5. Compare partitions under the same $\mathcal{I}$ and $L$, then retain those with robustly lower leakiness and stronger interventional stability.

This procedure does not require one privileged estimator. It requires transparent regime specification and cross-partition comparison under fixed constraints.

### 3.4 Dennett, sharpened

Dennett's compression point is preserved. Compression tracks objective regularity when it captures a stable transition structure. Predictive utility is preserved. Useful macro-models matter because they are often exploiting closure. What is added is a clear anti-gerrymandering requirement. A compressive coding is not enough. The partition must support autonomous macro-transitions.

### 3.5 Why closure, not prediction alone

It helps to separate three nearby positions.

1. Compression-prediction realism: successful compression and forecasting are treated as sufficient for realist commitment.
2. Pure pragmatism: model choice is guided only by task utility, with no ontological consequence.
3. Closure under regime and intervention class: model success supports objecthood when macro-transitions remain autonomous under fixed $L$ and $\mathcal{I}$.

The third view has a discriminating consequence the first two can miss. Two partitions can be similarly compressive on observational fit, yet differ under interventions. If partition $P_1$ remains low-leak and stable under admissible perturbations while partition $P_2$ needs repeated micro-detail repair, closure favors $P_1$ as the better object candidate. This is not a tie-break by preference. It is a structural difference in transition autonomy.

## 4. Lumpability as the Anti-Gerrymandering Constraint

### 4.1 Strong lumpability as an ideal exact benchmark

In Markov settings, the exact condition is strong lumpability. Partition the microstate space into macro-classes. For any two microstates in the same class, the total transition probability to each macro-class must be the same. If that condition holds, the induced macro-process is Markov with well-defined transitions. If it fails, macro-dynamics depend on hidden micro-history (Rosas et al. 2024).

For the Markov template used here, strong lumpability is the canonical exact criterion for autonomous macro-transitions. It should be read as an ideal limit case. In broader modeling practice, the same role is played by equivalent closure conditions over enriched histories or augmented state spaces when first-order Markov assumptions do not hold.

This condition is philosophically important because it formalizes one precise sense of non-gerrymandered. A valid macro-class is not just a set of points we grouped together. It is a set whose members are equivalent with respect to macro-relevant futures.

### 4.2 Why gerrymanders fail

Gerrymandered composites typically join microstates with different onward profiles. One member tends to move toward one region of state space, another member toward a different region. Aggregating them erases exactly the distinctions needed for macro-forecast and control. The model then requires hidden bookkeeping to repair prediction. That is a structural sign of non-autonomy.

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

Now compare members of $B_1$. The probability of transitioning to $B_1$ from $x_1$ is $\alpha$, but from $x_3$ it is $\gamma$. Unless $\alpha = \gamma$, members of one macrostate disagree on macro-transitions. Knowing only $B_1$ is therefore insufficient. Macro-prediction depends on hidden microstate identity, and lumpability fails.

The lesson is simple. The difference between a legitimate macro-object and a contrived aggregate can be tested by whether the partition preserves transition autonomy. This is why Shoe-Moon style groupings are not just unhelpful. They are dynamically incoherent as macro-candidates.

### 4.4 If a weird partition is closed

A potential objection is that a disjunctive or otherwise strange partition could satisfy lumpability in a highly symmetric system. That is correct. On this criterion, such a partition counts as comparatively real for that specified regime if it genuinely supports autonomous macro-transitions. This is a feature, not a bug. The framework is designed to track closure, not intuitive naturalness alone. If one wants an additional naturalness filter, that must be added as a separate criterion.

So the core exclusion claim should be read carefully. The criterion rules out dynamically incoherent, high-leak aggregates. It does not rule out every intuitively disjunctive partition when dynamics genuinely supports closure.

## 5. Approximate Lumpability: Realism Without Perfection

### 5.1 Why exact lumpability is uncommon

Exact lumpability is a useful benchmark, but complex systems are noisy, open, and high-dimensional. Boundaries leak. Couplings shift across regimes. Biological and social systems especially rarely satisfy exact closure across all scales and perturbations.

This is not a defect in the framework. It is a reason to move from binary closure to graded closure.

### 5.2 Leakiness as graded deviation

A natural quantity is leakiness: how much micro-information inside a macrostate improves macro-future prediction once the macrostate is already known. One concise expression is the conditional mutual information $I(X_t; Z_{t+1} \mid Z_t)$. When this value is low, macro-description is nearly autonomous. When it is high, macro-description hides relevant differences.

Leakiness can be estimated from observational data, from interventional data, or from both. Which source dominates depends on the regime and on what interventions are admissible.

For application, low should be defined procedurally rather than asserted. Fix a target horizon and intervention class, then compare candidate coarse-grainings. A partition counts as low-leak relative to its competitors when adding within-class microdetail yields no substantial predictive or interventional gain over the same regime.

Equivalent diagnostics can be used when direct mutual-information estimation is hard in high-dimensional finite data settings.

1. Within-class divergence between estimated macro-transition kernels.
2. Cross-validated predictive gain from adding within-class micro-features.
3. Intervention-response invariance tests across microstates that map to one macrostate.

The point is not metric monopoly. The point is to measure how far a partition is from closure using transparent, comparable diagnostics.

### 5.3 Worked regime instantiation

Consider a simulated lattice process with local coupling and boundary forcing. Compare two candidate coarse-grainings.

1. $Z^{(A)}$: spatially local energy-density bins.
2. $Z^{(B)}$: a parity-coded disjunctive grouping that mixes distant lattice regions.

Fix intervention class $\mathcal{I}$ as boundary-condition clamps and localized perturbation pulses. Evaluate two horizons, short $L=1$ and medium $L=10$.

At $L=1$, both partitions can appear similarly predictive under purely observational fitting. Under the fixed interventions, $Z^{(A)}$ remains stable while $Z^{(B)}$ shows higher leakiness and intervention-response heterogeneity within macroclasses. At $L=10$, this divergence widens because hidden within-class differences in $Z^{(B)}$ accumulate. The verdict is therefore horizon-relative and regime-relative in exactly the intended sense.

This kind of comparison is what makes closure relative to $L$ and $\mathcal{I}$ operational rather than merely verbal.

### 5.4 Stable versus merely entailed regularities

This graded move supports an important ontological distinction. Many macro-regularities are entailed by complete microhistory. Fewer are stable enough to support repeatable macro-prediction and intervention. Objecthood tracks the stable subset. In short, stable regularities are entailed, but not all entailed regularities are stable objects.

### 5.5 Predictive and interventional closure

Two closure notions should be distinguished. Predictive closure concerns screening-off for forecasts under a fixed data-generating regime. Interventional closure concerns invariance of macro-transition structure under admissible perturbations in $\mathcal{I}$.

Both matter in practice. For objecthood claims in this paper, interventional closure is primary and predictive closure is its operational indicator when direct interventions are sparse or costly.

## 6. Excluding Pathological Composites

### 6.1 Shoe-Moon and disjunctive composites

Pathological composites fail because they do not form autonomous transition structures. Their parts participate in largely independent, differently constrained dynamics. Grouping them forces additive tracking rather than screening-off. Predictive performance then depends on ongoing micro bookkeeping. Closure fails by construction.

This diagnosis is stronger than saying these composites are unnatural or inconvenient. The failure is dynamical. They do not support macro-transitions as their own level.

### 6.2 High-maintenance ontological posits

Historically, some posits survive only through repeated patches. The pattern-level diagnosis is high leakiness. If a purported macro-kind constantly requires additional hidden variables to preserve forecast quality, that is evidence against closure at that partition.

High maintenance can be stated precisely. A partition is high maintenance when reliable macro-prediction repeatedly forces refinement of within-class distinctions, so yesterday's macrostate labels must be supplemented by new micro bookkeeping to retain accuracy.

This reframes familiar examples such as phlogiston-style constructs. The critique is not retrospective ridicule. The critique is structural. A candidate that continually imports corrections to preserve macro-prediction behaves like a non-autonomous partition.

## 7. Canonical Real Patterns: Why Hurricanes and Organisms Pass

At this stage, keep the ladder from Section 2 in view. The claim is about pattern-level autonomy, not infallibility of any one representation and not perfect behavior of every token instance.

The examples in this section are stylized protocol illustrations. They show how the criterion is applied. They are not offered as stand-alone empirical demonstrations.

### 7.1 Hurricanes and vortical structures

For atmospheric vortices, macrovariables such as pressure organization, rotational structure, and energy exchange can retain predictive and interventional relevance while many micro-perturbations wash out. This is exactly what graded closure predicts. We do not need micro-complete tracking to forecast macro-trajectory in domain-relevant regimes.

A stylized test case is straightforward. Take a macrostate with central pressure depth, azimuthal wind structure, translation velocity, and sea-surface-energy intake as variables. Then ask whether adding fine-grained molecule-level distinctions inside fixed macro bins materially improves short-horizon track and intensification forecasts under the same intervention class. If not, closure is strong at that grain. If yes, leakiness is high and the partition should be refined.

The claim is not perfect closure at every token and horizon. The claim is robust low leakiness across the intervention class that defines meteorological practice.

### 7.2 Organisms and cells

Cells and organisms display boundary-mediated screening-off. Membranes, regulatory pathways, and homeostatic loops support macro-level control that is not reducible to ad hoc aggregation. Again, closure is not absolute. It is strong enough in the relevant regimes to justify object-level treatment.

A corresponding stylized biological test uses membrane potential, key metabolite concentrations, and regulatory-state variables as a macrostate. The closure question is whether these variables forecast near-future functional states better than micro-detail-augmented alternatives once intervention class and horizon are fixed.

This is why biological explanation is not a pragmatic shortcut only. It is often tracking a real pattern with substantial transition autonomy.

### 7.3 Borderline cases

Clouds, flames, and ecosystems illustrate why graded criteria matter. Some instances support stable macro-prediction over limited horizons; others degrade quickly. A leakiness spectrum explains this without collapsing into all-or-nothing verdicts. The framework gives principled gradation rather than intuition by anecdote.

## 8. Dennett Revisited

### 8.1 What Dennett got right

Dennett was right that compression and prediction can reveal objective structure rather than mere cognitive convenience. He was also right that pattern realism is compatible with physicalism when understood as level-specific structure rather than rival substance (Dennett 1991).

### 8.2 What needed completion

What was missing was an explicit anti-gerrymandering criterion and a graded account for imperfect real systems. Strong lumpability is a natural exact formalization of that criterion in Markov settings. Leakiness-based approximate lumpability supplies the realistic extension.

### 8.3 Sharpened slogan

The revised slogan is straightforward: a real pattern is an autonomous coarse-graining.

## 9. Objections and Replies

### 9.1 This remains instrumentalist

Objection: choosing macro-targets reflects interests, so realism still collapses into usefulness.

Reply: target selection is interest-shaped, but closure success is not arbitrary once target and regime are fixed. Autonomy is a property of system dynamics under explicit constraints, not of analyst preference.

### 9.2 Predictive sufficiency does not imply existence

Objection: prediction can work without ontological commitment.

Reply: this paper adopts an interventionist-causal criterion for objecthood. When a level supports stable intervention and control in its domain, that is a reason for ontological commitment to that level's patterns (Woodward 2003; Pearl 2000). This is a theory-laden meta-commitment, and it is stated explicitly. The argument is not that prediction alone logically entails existence.

### 9.3 Markov assumptions are too restrictive

Objection: strong lumpability presupposes Markov microdynamics.

Reply: the Markov template is a clean tractable case. Non-Markov systems can be addressed by state augmentation or by equivalent conditional-independence formulations over enriched histories. The philosophical criterion is closure of transition structure, not commitment to a single stochastic formalism.

### 9.4 What about abstract objects?

Objection: if formal systems are closed by definition, does the account collapse into formalism?

Reply: this paper focuses on world-implemented macro-objecthood. Formal systems can be discussed in parallel as stipulated closure, but the present argument is about induced closure and anti-gerrymandering constraints in empirical domains. Scope control is intentional, and it is consistent with the companion claim that one closure concept can have distinct sources.

## 10. Conclusion: What Is New and What It Buys

The paper offered a precise criterion for real patterns by combining closure with lumpability. The criterion is exact in strong-lumpability settings and graded in realistic approximate settings. It excludes gerrymandered composites by structural test, not rhetorical dismissal. It also recovers canonical macro-objects by showing why their partitions are low-leak and intervention-relevant across their proper regimes.

The conceptual gain is twofold. First, it sharpens Dennett without abandoning his core insight. Second, it gives a principled bridge from philosophical pattern realism to operational diagnostics used in complex-systems science.

Future work can proceed in three directions: empirical estimation of leakiness in concrete domains, tighter links with Markov-blanket and computational-mechanics formalisms, and disciplined extension to social kinds where implementation and normativity interact under explicit closure conditions.

The framework also has a clear failure condition. If proposed macro-partitions systematically fail closure tests across well-specified horizons and intervention classes, then the corresponding objecthood claims should be withdrawn or downgraded.

## References (selected)

Dennett, Daniel C. 1991. "Real Patterns." *Journal of Philosophy* 88 (1): 27-51.

Pearl, Judea. 2000. *Causality*. Cambridge: Cambridge University Press.

Rosas, Fernando E., Bernhard C. Geiger, Andrea I. Luppi, Anil K. Seth, Daniel Polani, Michael Gastpar, and Pedro A. M. Mediano. 2024. "Software in the natural world: A computational approach to hierarchical emergence." arXiv preprint arXiv:2402.09090.

Shalizi, Cosma Rohilla, and James P. Crutchfield. 2001. "Computational Mechanics: Pattern and Prediction, Structure and Simplicity." *Journal of Statistical Physics* 104 (3-4): 817-879.

Woodward, James. 2003. *Making Things Happen: A Theory of Causal Explanation*. Oxford: Oxford University Press.
