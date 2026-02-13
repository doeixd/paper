# Real Patterns as Closure: A Lumpability Criterion for Non-Gerrymandered Macro-Objecthood

## 0. Abstract

Dennett's account of real patterns remains influential because it connects ontology to compression and predictive success. Yet in its familiar form it remains vulnerable to two objections. First, it can look instrumentalist, where real means useful to us. Second, it can look permissive, where any coding trick that compresses data appears to qualify as a real pattern. This paper offers a closure-based refinement that preserves Dennett's insight while adding a non-gerrymandering constraint. The central claim is that a pattern is real when a coarse-graining induces autonomous macro-transitions, so lower-level distinctions become irrelevant for what follows at the macro level. In exact Markov settings, strong lumpability supplies the key criterion: grouped microstates must have matching macro-transition profiles. I then extend the criterion to approximate cases using graded leakiness, so the framework remains applicable to weather systems, organisms, and social structures where closure is not perfect. The result is a sharper realism about patterns that is operational in principle and strong enough to exclude pathological composites without collapsing into reductionism or convenience pragmatism (Dennett 1991; Shalizi and Crutchfield 2001; Rosas et al. 2024).

## 1. Introduction: Why Dennett Needs a Criterion

Dennett's proposal that the world contains real patterns changed how many philosophers discuss emergence and ontology. The attraction is clear. It gives us a way to respect higher-level structure without denying lower-level physics. It also captures a central feature of scientific practice. We routinely treat macro-regularities as objectively trackable because they support compression and prediction (Dennett 1991).

Still, the view is often judged incomplete. The first criticism is instrumentalist drift. If real patterns are just patterns that help us predict, then reality seems indexed to user interests. The second criticism is permissiveness. If compression is the standard, then contrived composites appear admissible under some coding conventions. Critics then invoke examples like Shoe-Moon aggregates and disjunctive kinds to argue that real-pattern talk lacks ontological discipline.

This paper argues that both criticisms identify a genuine gap, but not a fatal flaw. The gap is the absence of an explicit closure criterion. Once closure is made central, and once closure is tied to lumpability in the induced case, Dennett's core idea can be sharpened into a robust criterion.

The thesis is this: a real pattern is an autonomous coarse-graining. More precisely, a pattern is real when macrostate information is sufficient for macro-transition structure, so lower-level distinctions inside each macrostate no longer matter for macro-evolution. In exact Markov settings, this is strong lumpability. In realistic settings, this is approximate lumpability measured by leakiness.

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

## 3. From Real Patterns to Closure

### 3.1 The closure intuition

Closure can be stated without heavy formalism. A macro-pattern is real when macro-description screens off lower-level differences for macro-futures. The key phrase is for what follows at the macro level. If lower-level distinctions still matter for macro-evolution, closure fails.

This is a transition claim, not a static shape claim. We care about dynamics. Two microstates may look similar now but diverge in macro-futures. If so, grouping them as one macrostate is not autonomous.

### 3.2 Minimal formal shape

Let a micro-process be $X_t$, and let a candidate macro-process be $Z_t = g(X_t)$. Closure for $Z$ asks whether $Z_t$ is sufficient for forecasting the distribution of $Z_{t+1}$, or a relevant horizon $Z_{t+1}^{L}$, without importing hidden distinctions among microstates inside each macrostate.

Stated directly, if two microstates map to the same macrostate at time $t$, they must agree on macro-transition consequences. If they do not, the macrostate hides causally relevant structure and is not autonomous.

### 3.3 Dennett, sharpened

Dennett's compression point is preserved. Compression tracks objective regularity when it captures a stable transition structure. Predictive utility is preserved. Useful macro-models matter because they are often exploiting closure. What is added is a clear anti-gerrymandering requirement. A compressive coding is not enough. The partition must support autonomous macro-transitions.

## 4. Lumpability as the Anti-Gerrymandering Constraint

### 4.1 Strong lumpability as an exact condition

In Markov settings, the exact condition is strong lumpability. Partition the microstate space into macro-classes. For any two microstates in the same class, the total transition probability to each macro-class must be the same. If that condition holds, the induced macro-process is Markov with well-defined transitions. If it fails, macro-dynamics depend on hidden micro-history (Rosas et al. 2024).

For the Markov template used here, strong lumpability is the decisive criterion for autonomous macro-transitions. In broader modeling practice, the same role is played by equivalent closure conditions over enriched histories or augmented state spaces when first-order Markov assumptions do not hold.

This condition is philosophically important because it formalizes the phrase non-gerrymandered. A valid macro-class is not just a set of points we grouped together. It is a set whose members are equivalent with respect to macro-relevant futures.

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

## 5. Approximate Lumpability: Realism Without Perfection

### 5.1 Why exact lumpability is uncommon

Exact lumpability is a useful benchmark, but complex systems are noisy, open, and high-dimensional. Boundaries leak. Couplings shift across regimes. Biological and social systems especially rarely satisfy exact closure across all scales and perturbations.

This is not a defect in the framework. It is a reason to move from binary closure to graded closure.

### 5.2 Leakiness as graded deviation

A natural quantity is leakiness: how much micro-information inside a macrostate improves macro-future prediction once the macrostate is already known. One concise expression is the conditional mutual information $I(X_t; Z_{t+1} \mid Z_t)$. When this value is low, macro-description is nearly autonomous. When it is high, macro-description hides relevant differences.

For application, low should be defined procedurally rather than asserted. Fix a target horizon and intervention class, then compare candidate coarse-grainings. A partition counts as low-leak relative to its competitors when adding within-class microdetail yields no substantial predictive or interventional gain over the same regime.

Equivalent diagnostics can be used, for example divergence between within-class transition kernels. The point is not metric monopoly. The point is to measure how far a partition is from closure.

### 5.3 Stable versus merely entailed regularities

This graded move supports an important ontological distinction. Many macro-regularities are entailed by complete microhistory. Fewer are stable enough to support repeatable macro-prediction and intervention. Objecthood tracks the stable subset. In short, stable regularities are entailed, but not all entailed regularities are stable objects.

## 6. Excluding Pathological Composites

### 6.1 Shoe-Moon and disjunctive composites

Pathological composites fail because they do not form autonomous transition structures. Their parts participate in largely independent, differently constrained dynamics. Grouping them forces additive tracking rather than screening-off. Predictive performance then depends on ongoing micro bookkeeping. Closure fails by construction.

This diagnosis is stronger than saying these composites are unnatural or inconvenient. The failure is dynamical. They do not support macro-transitions as their own level.

### 6.2 High-maintenance ontological posits

Historically, some posits survive only through repeated patches. The pattern-level diagnosis is high leakiness. If a purported macro-kind constantly requires additional hidden variables to preserve forecast quality, that is evidence against closure at that partition.

This reframes familiar examples such as phlogiston-style constructs. The critique is not retrospective ridicule. The critique is structural. A candidate that continually imports corrections to preserve macro-prediction behaves like a non-autonomous partition.

## 7. Canonical Real Patterns: Why Hurricanes and Organisms Pass

### 7.1 Hurricanes and vortical structures

For atmospheric vortices, macrovariables such as pressure organization, rotational structure, and energy exchange can retain predictive and interventional relevance while many micro-perturbations wash out. This is exactly what graded closure predicts. We do not need micro-complete tracking to forecast macro-trajectory in domain-relevant regimes.

The claim is not perfect closure at every token and horizon. The claim is robust low leakiness across the intervention class that defines meteorological practice.

### 7.2 Organisms and cells

Cells and organisms display boundary-mediated screening-off. Membranes, regulatory pathways, and homeostatic loops support macro-level control that is not reducible to ad hoc aggregation. Again, closure is not absolute. It is strong enough in the relevant regimes to justify object-level treatment.

This is why biological explanation is not a pragmatic shortcut only. It is often tracking a real pattern with substantial transition autonomy.

### 7.3 Borderline cases

Clouds, flames, and ecosystems illustrate why graded criteria matter. Some instances support stable macro-prediction over limited horizons; others degrade quickly. A leakiness spectrum explains this without collapsing into all-or-nothing verdicts. The framework gives principled gradation rather than intuition by anecdote.

## 8. Dennett Revisited

### 8.1 What Dennett got right

Dennett was right that compression and prediction can reveal objective structure rather than mere cognitive convenience. He was also right that pattern realism is compatible with physicalism when understood as level-specific structure rather than rival substance (Dennett 1991).

### 8.2 What needed completion

What was missing was an explicit anti-gerrymandering criterion and a graded account for imperfect real systems. Strong lumpability supplies the former in exact settings. Leakiness-based approximate lumpability supplies the latter.

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
