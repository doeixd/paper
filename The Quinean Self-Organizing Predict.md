The Quinean Self-Organizing Predictive Network

_A Neural Architecture Where Beliefs Are Dispositions, Structure Is Learned, and Logic Emerges from Pragmatic Success_

# Part I: Philosophical Foundations

## The Quinean Web of Belief

In his landmark 1951 paper "Two Dogmas of Empiricism," W.V.O. Quine dismantled the traditional distinction between analytic truths (true by definition, like "all bachelors are unmarried") and synthetic truths (true by virtue of the world, like "it is raining"). His argument was radical: there is no principled line between them. All beliefs form a single interconnected web, and any belief can be revised in light of experience-even logical laws-if the revision produces sufficient gains elsewhere in the system.

Quine offered a compelling metaphor: our beliefs form a _web_ or _field of force_. Peripheral beliefs-those closest to sensory experience-face the "tribunal of experience" most directly. When experience conflicts with expectation, we must revise something. But we have choices about _what_ to revise. We could change a peripheral belief ("I was wrong about what I saw"), an intermediate belief ("my theory about birds was incomplete"), or even a central belief ("perhaps classical logic needs revision").

The key insight: beliefs near the _core_ of the web-logic, mathematics, fundamental causal principles-are protected not by some special "analytic" status, but by their _position_. They connect to so many other beliefs that revising them would require massive, cascading changes throughout the system. We hold them fixed for _pragmatic_ reasons: the cost of revising them is too high. Logic is not immune to revision in principle-it's just that revising it breaks everything else.

## Dispositions to Assent

Quine further argued that beliefs are best understood not as abstract propositions floating in mental space, but as _dispositions to assent_-behavioral tendencies to affirm or deny sentences under certain conditions. To believe "fire is hot" is to be disposed to say "yes" when asked "Is fire hot?" in appropriate circumstances, to act as though fire will burn you, to make inferences that depend on fire's heat, and so on.

This behaviorist framing has a crucial implication: beliefs are not stored data, but _active patterns of response_. They exist in their activation, in their causal role, in their connections to other dispositions. A belief that never influences anything-never gets activated, never shapes predictions or behavior-is not really a belief at all.

## The Core Insight: Dispositions Are Neurons

Here is the central claim of this document: Quine's "dispositions to assent" are structurally identical to the computational units in neural networks. A neuron is precisely a disposition-a tendency to activate ("assent") given certain input conditions. The weight connecting neuron A to neuron B encodes the disposition "if A, then (to some degree) B." The activation of a neuron is its assent.

This is not merely an analogy. The mathematics are the same. A disposition to assent given evidence is a conditional probability-and that is exactly what a neuron with a sigmoid activation computes. The "web of belief" is a neural network. The question is: what kind of neural network captures the _full_ Quinean picture, including the emergent distinction between core and periphery, the holistic revision dynamics, and the self-modifying structure?

# Part II: The Architecture

## Why Not a Standard MLP?

Multi-layer perceptrons (MLPs) have a fixed architecture: input layer, hidden layers, output layer. Information flows in one direction. Learning adjusts weights but never the structure. This fails to capture Quine's picture in several ways.

First, MLPs have no notion of "core" and "periphery." All hidden units are treated equally-same learning rate, same plasticity. There's no structural reason why some beliefs would be harder to revise than others.

Second, MLPs don't grow. The architecture is fixed at initialization. But Quine's web expands: we acquire new concepts, new theoretical posits, new ways of carving up the world. A child's web is smaller than an adult's. An expert's web (in their domain) is denser than a novice's.

Third, MLPs separate "learning" from "inference." You train, then you deploy. But in Quine's picture, every encounter with the world is potentially both-every prediction error is an opportunity for revision, and every act of inference is a test of the web's adequacy.

## Radial Topology: Depth as Distance from Surface

We propose a different geometry. Instead of layers, imagine a _sphere_ (or, more precisely, a graph that can be embedded with a radial structure).

The _surface_ is the periphery-nodes that directly interface with sensory input or motor output. These are the "observation sentences" in Quine's terms: "red here now," "loud," "moving." They have the highest plasticity because they carry little structural load. If one peripheral belief changes, not much else needs to change.

The _core_ is the center-nodes that are maximally connected, maximally depended-upon. These encode the abstract patterns that many other beliefs rely on: logical relationships, causal structure, mathematical regularities. They have the lowest plasticity because changing them would propagate errors everywhere.

"Depth" in this architecture is not layer-count but _distance from the surface_. A node is deep if many other nodes depend on it, shallow if few do. Depth emerges from connectivity, not from architectural fiat.

## Centrality as Load-Bearing Status

We formalize "how much do other beliefs depend on this one?" with a simple metric: _dependency count_. Each node tracks how many other nodes take its output as input.

If node A feeds into B, C, and D, then A has centrality 3. If B feeds into E and F, B has centrality 2. If F feeds into nothing (it's a motor output, say), F has centrality 0.

This is cheap to maintain: when you add a connection to node A, increment A's centrality. When you remove one, decrement it. No global graph algorithm required-just local bookkeeping.

High-centrality nodes are necessarily "upstream" of many other nodes, which means they are structurally deeper. The core/periphery distinction emerges automatically from connectivity patterns, exactly as Quine suggested.

## Topology-Dependent Plasticity

Here is the Quinean mechanism: the learning rate for each node is inversely proportional to its centrality.

_η(i) = k / (1 + centrality(i))_

Where η(i) is the learning rate for node i, and k is a global constant. Peripheral nodes (centrality ≈ 0) have learning rate ≈ k. Core nodes (centrality in the hundreds or thousands) have learning rate ≈ 0.

This single rule produces the Quinean dynamics: peripheral beliefs update rapidly in response to prediction error, core beliefs barely budge. The "protection" of logic is not built in as a special case-it emerges from logic's structural position. If a pattern is useful enough to have many nodes depending on it, it will automatically resist revision.

# Part III: The Dynamics

## Prediction as the Fundamental Operation

The network has one job: predict the next input. Every moment, sensory data arrives at the periphery. The network's task is to have already anticipated it-to have activated the peripheral nodes _before_ the data arrives, based on internal states and prior context.

This is not supervised learning in the traditional sense. There is no external "label." The label is reality itself-the next moment of experience. The network predicts, reality delivers, and any mismatch is error.

## Error as Recalcitrant Experience

When prediction mismatches reality, we have what Quine called _recalcitrant experience_-the world refusing to conform to our expectations. In the network, this manifests as prediction error at peripheral nodes.

Crucially, error is computed _everywhere_, not just at the output layer. Every node compares what it expected (based on its inputs) to what it received (from its children or from the world). Error is local and distributed.

Error at the periphery propagates inward. If peripheral nodes are screaming "unexpected!", the nodes they connect to must either change their outputs (to better predict the surprising input) or pass the error further inward. The web "negotiates" which beliefs to revise to restore coherence.

## The Core Loop

The entire system can be described in a simple loop:

- Input arrives at peripheral nodes
- Network predicts what that input should be (based on current state)
- Prediction error computed at every node
- Weights update according to topology-dependent learning rate
- If error persists locally, spawn new node there
- If node never helps reduce error, decay its connections
- Repeat

That's the whole system. Everything else-concept formation, logical structure, abstract reasoning-either emerges from this loop or it doesn't. We're not engineering those things in; we're providing the substrate and observing what crystallizes.

# Part IV: Growth and Decay

## Node Genesis: When the Web Is Insufficient

Sometimes, no amount of weight adjustment can fix the error. The current set of nodes simply cannot represent the pattern in the data. The web needs to _grow_.

We detect this via _persistent local error_. If a cluster of nodes maintains high prediction error over many timesteps despite weight updates, diagnosis: the current structure is inadequate. Action: spawn a new node.

The new node is connected to the high-error region (the problem it's meant to solve) and to a sample of nearby nodes (its context). Initially, its weights are small and random. It participates in the prediction-error-update loop like everything else.

If the new node helps-if activating it reduces error in its neighborhood-the Hebbian dynamics will strengthen its connections. It becomes entrenched. If it doesn't help, its connections decay and it effectively dies.

This models hypothesis generation in science: a new theoretical entity is posited to explain anomalous data. If it successfully predicts, it earns its place in the web. If not, it's discarded.

## Learned Connectivity: The Meta-Disposition

Where should new nodes connect? Initially, we can use simple heuristics: connect to high-error nodes, connect to their neighbors, sample randomly. But this itself can be learned.

The "genesis function"-the mechanism that decides when and where to spawn-is itself a disposition. It can be represented as nodes in the network (or a separate small network) that take local error signals as input and output spawning decisions.

Over time, this meta-disposition learns which kinds of structural interventions work. Early on, spawning is random and wasteful-many new nodes die. Later, the system develops "architectural intuitions": when error looks like pattern X, try structure Y.

This is deeply Quinean: even our disposition to form new beliefs is itself a belief, revisable in light of experience. The web is self-modifying all the way down.

## Decay Mechanisms

The web must shed dead weight. We propose three decay mechanisms:

**Activation decay:** Nodes that haven't fired in T timesteps lose connection strength. Use it or lose it. A disposition that never activates is not really a disposition.

**Utility decay:** Nodes that fire but don't reduce downstream error get weakened. You're activating but not helping. This prunes "superstitions"-correlational patterns that don't actually predict.

**Redundancy pruning:** If two nodes have nearly identical activation patterns and connections, merge them or kill one. This is compression-the web finds more efficient representations.

The result: the network constantly sheds useless structure while accreting useful structure. It breathes.

# Part V: The Seed

## What Must Be Innate?

A contentious question: does the web start empty, or does it need initial structure? Pure empiricism says: start blank, learn everything. But this seems implausible both computationally (how would you learn logic without some proto-logic to learn with?) and empirically (infants seem to have innate expectations about objects, causation, agency).

Our proposal: seed the network not with _beliefs_ but with _the machinery for forming beliefs_. The seed is not the operating system; it's the compiler. The OS gets written by experience.

## The Minimal Seed

We propose five primitive components:

- **Coincidence Detector:** Fires when two inputs activate together. This is the ur-disposition: "these co-occur." It's the basis for learning any association.
- **Sequence Detector:** Fires when A-then-B pattern occurs. Primitive temporal binding. Without this, you can't learn causal or predictive relationships.
- **Mismatch Signal:** Fires when prediction ≠ input. This is the error signal itself, reified as a component. It's what makes the whole system go.
- **Spawn Trigger:** Fires when mismatch persists. Initiates genesis. This is what allows the network to grow.
- **Hebbian Binder:** Strengthens connections between co-active nodes. The basic learning rule, reified. "Neurons that fire together wire together."

These are not "beliefs" in the ordinary sense. They're meta-cognitive primitives-the grammar that allows beliefs to form. Everything else-object permanence, causality, modus ponens, number-emerges from these primitives applied recursively to experience. Or fails to, in which case this architecture is wrong.

# Part VI: Emergent Structure

## How Logic Could Emerge

Consider modus ponens: from P and "if P then Q," infer Q. In the Quinean network, this isn't a hardcoded rule. It's a _connectivity pattern_-a subgraph that reliably transforms (P active, P→Q active) into (Q active).

How would such a pattern emerge? Suppose the network encounters many instances of the form: "P active, then Q active." The coincidence detector fires. The Hebbian binder strengthens P→Q connections. Over time, a reliable pathway forms: activating P (with the P→Q disposition already primed) flows activation to Q.

Now here's the key: this pattern is _general_. It works for "rain → wet," for "fire → hot," for "drop → fall." The _same_ subgraph structure keeps reducing error across many domains. So it accumulates connections. Its centrality skyrockets. It becomes load-bearing.

Now you can't revise it without breaking all the specific inferences that depend on it. Modus ponens has become "protected"-not by fiat, but by pragmatic success.

## Subroutines and Modular Structure

We predict that mature networks will exhibit _modularity_-densely connected subgraphs that function as units. These are "subroutines" or "schemas": reusable patterns that implement reliable transformations.

Object permanence, for instance, might be a module: a cluster of nodes that maintains activation for a representation even when sensory input disappears. Causal reasoning might be another: a cluster that activates "effect" nodes when "cause" nodes fire, with appropriate temporal dynamics.

These modules become the "program" that the network runs. The connectivity pattern _is_ the algorithm. There's no separate "program" and "data"-the structure is both.

## The Program Is the Structure

In a standard neural net, the "program" is the forward pass: fixed architecture, learned weights. But here, the connectivity pattern itself is the program. When recalcitrant experience arrives:

Activation spreads inward from periphery. It encounters structure-clusters of tightly coupled dispositions. These clusters _channel_ the activation, like logic gates. The settling pattern _is_ the inference.

A well-developed network has something like subroutines-not because we engineered them, but because reusable patterns that reduce error in many contexts will naturally become entrenched and densely connected.

# Part VII: The Lifecycle

## Developmental Stages

We conjecture the following developmental trajectory:

- **Boot:** Seed with meta-structure (detectors, binders, spawn trigger). Minimal connectivity. No real "beliefs" yet.
- **Infancy:** Chaotic. Many nodes spawned in response to novel experience. Most die. Periphery is wild, unstable. No clear core. High error everywhere. Rapid structural change.
- **Childhood:** Some patterns stabilize. Proto-clusters form. These start to "load-bear"-other nodes build on them. Centrality gradients emerge. Error decreases in some regions.
- **Adolescence:** Clear core/periphery distinction. Core is slow-moving; periphery adapts rapidly. The genesis function has learned decent heuristics. Modularity visible.
- **Maturity:** Stable core. Efficient periphery. The system has "beliefs" in the full sense-stable dispositions that shape prediction and action. Structural change is incremental, mostly at the edges.
- **Ongoing:** Periphery constantly revised. Occasionally, persistent error forces mid-level revision. Very rarely, catastrophic error propagates to core-a "paradigm shift" or "conceptual revolution."

## Paradigm Shifts

What happens when core beliefs face overwhelming error? Normally, the system revises periphery to protect the core. But sometimes, the error is too large, too persistent, too distributed. The core must change.

This is catastrophic: a high-centrality node changing its weights propagates errors everywhere. The system enters a period of instability, high error, rapid restructuring. Old modules break. New ones form. When it settles, the web is fundamentally different.

This maps onto Kuhn's picture of scientific revolutions: normal science (peripheral revision) punctuated by revolutionary science (core revision). The architecture naturally produces this dynamic-no special "revolution" mechanism needed.

# Part VIII: Implementation Considerations

## Computational Tractability

Several concerns arise for any attempted implementation:

**Centrality updates:** Global graph algorithms are expensive. We avoid this by using local dependency counts-each node tracks its own centrality via simple increment/decrement operations.

**Settling dynamics:** The system must settle to equilibrium before each update. This could be slow. Options: limit settling steps, use damping, accept approximate equilibria.

**Sparse connectivity:** The network can't be fully connected-that's O(n²) space and worse for computation. We need principled sparsity, probably enforced by the genesis/decay dynamics themselves.

**Stability:** Cyclic graphs with bidirectional error propagation can oscillate. We may need explicit damping or other stabilization mechanisms.

## What Would Count as Success?

If this architecture is built, what would validate it? Several possibilities:

**Spontaneous modularity:** Without engineering it, the network develops dense clusters that correspond to recognizable concepts or operations.

**Centrality predicts revisability:** When we examine which beliefs the network revises under various error pressures, high-centrality beliefs really are more resistant.

**Logical structure emerges:** Subgraphs that implement something like modus ponens, conjunction, disjunction appear without being engineered in.

**Transfer and generalization:** The network generalizes to novel domains in ways that standard MLPs don't, by reusing core structure.

**Graceful degradation:** Removing peripheral nodes barely affects performance; removing core nodes is catastrophic. This would validate the load-bearing metaphor.

# Part IX: Open Questions

This proposal raises numerous questions we cannot yet answer:

- **Variable binding:** How does the network represent "for all X, if X is a bird, X can fly"? Is this distributed implicitly, or does it require explicit structure?
- **Compositionality:** Can arbitrary compositional structures emerge, or are there limits to what this architecture can represent?
- **Initialization sensitivity:** How much does the final structure depend on the random seed and order of experience? Is development robust?
- **Scalability:** Does this work only for toy problems, or can it scale to realistic domains?
- **Biological plausibility:** Does this architecture correspond to anything in real brains? The predictive coding framework has neural correlates-does this extension?
- **The core seeding problem:** Can logical structure genuinely self-organize from the minimal seed, or does it need richer innateness?
- **Relationship to existing approaches:** How does this relate to neural architecture search, developmental networks, growing neural gases, predictive coding implementations?


## Guesses

Alright, let me work through each one.

**1. Variable Binding**

I don't think you need explicit variable binding. When the network learns "birds fly," it's not storing a quantified formula. It's developing a *cluster*—a region of the graph where bird-related activations reliably flow toward flight-related activations. "X" isn't a slot; it's just whatever activates the bird cluster. Tweety activates bird-nodes, bird-nodes flow to flight-nodes, done.

The apparent variable is really just: whatever upstream activation pattern triggers this downstream pattern. The binding is implicit in the flow. This is how MLPs handle it too—they don't literally bind variables, they learn distributed representations where similarity in input space produces similarity in output space. Same here, but with learned topology.

**2. Compositionality**

Partial compositionality, not full. The network will develop reusable modules—chunks that get activated as units and can combine. "Red" module + "ball" module can co-activate and jointly predict. But I doubt you get *arbitrary* composition like language has. You probably get something more like: frequently-useful compositions become entrenched, novel compositions are possible but lossy.

This might actually be realistic. Human concepts aren't perfectly compositional either—we have prototype effects, typicality gradients, conceptual blending that doesn't follow strict logical combination. The network would exhibit similar "soft" compositionality.

**3. Initialization Sensitivity**

High sensitivity early, convergence later. The specific nodes that survive infancy will depend heavily on the order of experience and random initialization. But the *kind* of structure that emerges—the centrality gradients, the modular clustering, the core/periphery distinction—should be robust.

Analogy: different people have different specific memories and concepts, but we all end up with something like object permanence, causality, logical inference. The particulars vary; the architecture is convergent. I'd bet this network shows the same pattern: chaotic divergence in details, convergent structure in form.

**4. Scalability**

Honestly uncertain. The core loop is local (each node updates based on its neighbors), which is good. Centrality tracking is cheap (just counting). But the settling dynamics could be expensive—you need the network to reach equilibrium before each update, and equilibration in large cyclic graphs is slow.

Possible mitigations: don't wait for full equilibrium (accept approximate settling), use hierarchical structure (settle local clusters, then settle between clusters), or run asynchronously (nodes update on their own clocks). Whether any of these preserve the Quinean dynamics is an empirical question.

My guess: it scales to medium-sized problems (thousands to tens of thousands of nodes) but not to billions without significant architectural innovation. But that's just a guess.

**5. Biological Plausibility**

Surprisingly plausible in some ways. Predictive coding has substantial neural evidence—cortex really does seem to do top-down prediction and bottom-up error signaling. Hebbian learning is well-established. Neurogenesis (new neurons) happens in some brain regions. Synaptic pruning is extensive, especially in development.

The topology-dependent plasticity is the speculative part. We know that some synapses are more stable than others, and that heavily-used pathways get myelinated (faster, more stable). Whether this tracks something like "centrality" is unknown. It's at least not crazy—the brain could plausibly implement "important connections are harder to change" via neuromodulation or structural factors.

The radial geometry is metaphorical, not literal. Brains aren't spheres. But the *functional* organization—with some representations more abstract/central and others more peripheral/sensory—does seem real.

**6. The Core Seeding Problem**

My honest answer: you probably need *some* innate structure beyond the minimal seed I described, but less than nativists typically claim.

The minimal seed (coincidence detection, sequence detection, mismatch signaling, spawn triggering, Hebbian binding) might be enough to get *associative* structure—things that co-occur get linked. But logical structure requires something more: the recognition that certain *patterns of patterns* are especially useful.

I suspect you need at least one more primitive: something like **abstraction** or **pattern extraction**—the disposition to notice when the same relational structure appears across different content and to reify that structure as its own node. "A causes B" across many A-B pairs eventually spawns a "causation" node that's content-independent.

Whether this can itself emerge from the simpler primitives, or needs to be innate, I genuinely don't know. It's the crux of the rationalism/empiricism debate, and this architecture doesn't resolve it—it just gives us a concrete setting to test it.

**7. Relationship to Existing Approaches**

Several connections:

*Neural Architecture Search (NAS):* NAS learns architecture, but typically via outer-loop optimization (train many architectures, pick the best). This is inner-loop—the architecture changes during training. Closer to DARTS or differentiable NAS, but with a very different mechanism (error-driven growth/decay vs. gradient-based architecture parameters).

*Growing Neural Gas / Self-Organizing Maps:* These grow topology based on data density. Related, but they don't have the centrality-dependent plasticity or the prediction-error framing. They're more about clustering than inference.

*Predictive Coding Networks:* Very close. This is essentially predictive coding + self-modifying topology + the Quinean plasticity rule. Most predictive coding implementations have fixed architecture. Adding growth/decay and topology-dependent learning is the novel bit.

*Developmental Networks:* Networks that change structure over "lifetime" exist (e.g., cascade-correlation, developmental neural networks). The Quinean framing is new—making the centrality/plasticity link explicit and tying it to epistemology.

*Sparse Distributed Memory / Hopfield Networks:* The settling dynamics are reminiscent of energy-based models. The key difference is that Hopfield nets have fixed topology and symmetric weights; this has asymmetric, changing topology.

*Global Workspace Theory:* The core/periphery distinction echoes Baars' idea of a "global workspace" that broadcasts to specialized modules. The high-centrality core might function similarly—it's what everything has to pass through.

The honest summary: this is a novel *combination* of existing ideas (predictive coding + growing networks + topology-dependent plasticity), given a philosophical interpretation (Quinean holism). Whether the combination produces genuinely new capabilities is the open question. The only way to know is to build it.


# Part X: Additional Architectural Notes & Clarifications

To translate the philosophical framework into a functioning engineering specification, three specific mechanical components must be added to the seed and connectivity logic. These address the "Dark Room" problem, signal interference, and specific mechanisms of variable binding.

## 1. The Homeostatic Seed (Solving the "Dark Room" Problem)

A pure prediction machine can minimize error by finding a dark, silent room and staying there (zero sensory input = zero prediction error). To compel the QSPN to explore and engage with complexity, we must introduce a **Global Bias Signal**.

*   **Mechanism:** The seed includes two fixed, high-centrality nodes labeled **Homeostasis** (Pleasure) and **Distress** (Pain).
*   **Clamping:** These nodes are hard-wired to fundamental system health metrics (e.g., battery level, processor temperature, external reinforcement signals).
*   **The Imperative:** The network treats "Distress" as a massive prediction error. Because these nodes have infinite centrality, the network cannot revise its belief that "I should be in Homeostasis." Instead, it is thermodynamically forced to restructure its peripheral actions to predict and achieve the Homeostatic state.
*   **Result:** Action is driven not just by the minimization of sensory surprise, but by the minimization of deviation from homeostatic set-points.

## 2. Bidirectional Edge Implementation

While the "Web" metaphor implies simple connections, the implementation of Recalcitrant Experience requires edges to function as **Dual-Channel Pathways** to prevent signal interference during the settling phase.

*   **The Top-Down Channel ($W_{td}$):** Carries the **Prediction** ($\hat{v}$) from parent to child. This is the "Disposition to Assent."
*   **The Bottom-Up Channel ($W_{bu}$):** Carries the **Error** ($e$) from child to parent. This is the "Recalcitrant Experience."
*   **Dynamics:** In standard neural networks, gradients (error) only flow backward during a specific "training pass." In the QSPN, both channels are active during the "inference/settling" phase. The network reaches equilibrium when the Top-Down predictions successfully suppress the Bottom-Up errors.

## 3. Variable Binding via Synchronous Intersection

To formalize the "Guess" regarding variable binding (Section IX.1), we explicitly define how the network handles compositional concepts (e.g., "Red Car") without dedicated "variable slots."

*   **The Mechanism:** Composition is achieved through **Co-Activation Intersection**.
*   **Process:**
    1.  The "Red" cluster contains dispositions predicting red sensory data.
    2.  The "Car" cluster contains dispositions predicting vehicular shapes/motion.
    3.  When viewing a Red Car, both clusters activate simultaneously.
    4.  The "Binding" is not a separate logical operation; it is the **Resonant State** shared between the two clusters.
*   **Implicit Binding:** Any downstream node connected to both clusters receives a summed input that effectively represents the bound concept $Red(Car)$. If the system needs to distinguish "Red Car, Blue Truck" from "Blue Car, Red Truck," it relies on **Temporal Synchrony**—the "Red" and "Car" nodes fire in phase, while "Blue" and "Truck" fire in a different phase, preventing "feature blending."

# Conclusion

This document has proposed a neural architecture that takes Quine's epistemological holism seriously as an engineering specification. The key ideas:

_Beliefs are dispositions are neurons._ The web of belief just _is_ a neural network, properly construed.

_Centrality determines plasticity._ Learning rate inversely proportional to dependency count produces automatic core/periphery dynamics.

_Structure is learned._ The network grows and prunes nodes based on prediction error, discovering its own architecture.

_Logic emerges from pragmatics._ Logical structure becomes protected not by fiat but by success-it works for so many things that changing it would break everything.

Whether this architecture actually works-whether it can learn, scale, generalize, and produce the emergent structure we predict-remains to be seen. The proposal is not a finished system but a research program: take Quine's metaphor literally and see what happens.

If it works, we will have a new kind of neural architecture: one that builds itself, protects its core by structural necessity, and treats every encounter with the world as an opportunity for holistic revision. A network that doesn't just learn weights, but learns how to learn, and what to believe, and even what it means to believe at all.

