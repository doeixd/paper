# Software in the Natural World: A Computational Approach to Emergence in Complex Multi-Level Systems

**Authors:** Fernando E. Rosas, Bernhard C. Geiger, Andrea I Luppi, Anil K. Seth, Daniel Polani, Michael Gastpar, and Pedro A.M. Mediano

This document provides an extremely detailed, step-by-step summary of the paper, tracing the logical progression of the authors' novel computational framework for emergence.

***

## Step 1: Defining the Problem and the Core Analogy

The paper begins by identifying a gap in the study of complex systems (e.g., the human brain, global weather). Existing information-theoretic tools can identify *when* emergent macroscopic phenomena occur, but they cannot specify *how* the underlying dynamics implement them.

The authors propose a solution by drawing an analogy between emergent macroscopic levels in nature and **software** in human-engineered systems.

> "Concretely, we articulate a view on emergence based on how software works, which is rooted on a mathematical formalism that articulates how macroscopic processes can express self-contained informational, interventional, and computational properties."

The key feature of software is its **autonomy from its substrate**—its logic is independent of the physical hardware's fine details. This concept is formalized as **Causal Closure**.

## Step 2: Formalizing Prediction and Intervention with Machines

To rigorously define "software-ness," the framework employs concepts from **Computational Mechanics**, specifically introducing two types of "machines" to model a microscopic process $X$ and its macroscopic coarse-graining $Z$.

### A. The $\epsilon$-machine (Optimal Prediction)

The $\epsilon$-machine is the optimal, minimal model for predicting a process based on its own history.
*   **Function:** Predicts the future of a process $X$ based on its past trajectories $\vec{X}_t$.
*   **Causal States ($E$):** Equivalence classes of past trajectories $\vec{X}_t$ that yield identical conditional probability distributions for all future trajectories $\vec{X}^L_{t+1}$.
*   **Property:** It is the most parsimonious deterministic automaton that generates the observed data.

### B. The $\upsilon$-machine (Prediction of a Coarse-Graining)

The $\upsilon$-machine is a novel construct that models the microscopic information necessary to predict the *macroscopic* process $Z$.
*   **Function:** Predicts the future of the coarse-graining $Z$ based on the microscopic past $\vec{X}_t$.
*   **Causal States ($U$):** Equivalence classes of microscopic past trajectories $\vec{X}_t$ that yield identical conditional probability distributions for all future coarse-grained trajectories $\vec{Z}^L_{t+1}$.
*   **Property:** It is the coarsest coarse-graining of $X$ that is **maximally predictive of $Z$** (Proposition 1).

## Step 3: Establishing the Three Closure Conditions

The paper defines three properties that characterize a self-contained, software-like macroscopic process $Z$.

| Closure Type | Definition | Focus | Key Implication |
| :--- | :--- | :--- | :--- |
| **1. Informational Closure** | The mutual information between the microscopic past $\vec{X}_t$ and the macroscopic future $\vec{Z}^L_{t+1}$ is equal to the mutual information between the macroscopic past $\vec{Z}_t$ and the macroscopic future $\vec{Z}^L_{t+1}$. | **Prediction** | Microscopic details do not enhance the predictability of the macro-scale process. |
| **2. Causal Closure** | The $\epsilon$-machine of $Z$ is equivalent to the $\upsilon$-machine of $Z$. | **Intervention** | Interventions at the macro-level are sufficient to control the macro-level dynamics. |
| **3. Computational Closure** | The $\epsilon$-machine of $Z$ is a coarse-graining of the $\epsilon$-machine of $X$. | **Renormalization** | The macro-level dynamics can be described by a simpler, deterministic automaton derived directly from the micro-level's automaton. |

### The Equivalence Theorems

The paper's central mathematical contribution is establishing the relationships between these closures:

*   **Theorem 1 (Equivalence):** Informational Closure and Causal Closure are mathematically equivalent for any macroscopic process $Z_t = g(\vec{X}_t)$.
    > "Perhaps surprisingly, a first consequence of our framework (Theorem 1) proves that information and causal closure are equivalent for any macroscopic process $Z_t = g(\vec{X}_t)$."
*   **Theorem 2 (Implication):** Spatial coarse-grainings that are Causal Closed are also Computationally Closed.
*   **Crucial Distinction:** Computational Closure is a weaker condition. The paper provides a counterexample (Counterexample 4) showing that Computational Closure does **not** imply Informational/Causal Closure. This is because computational closure only requires *sufficiency* (the macro-states are compatible with the micro-states), while causal closure requires *necessity* (the macro-states must capture all the micro-level distinctions relevant to the macro-future).

## Step 4: Connecting to Lumpability and Markov Processes

The framework connects the abstract concept of Causal Closure to the established theory of Markov chains.

*   **Lumpability:** A Markov chain $X$ is **strongly lumpable** with respect to a coarse-graining $Z$ if $Z$ is itself a Markov chain, regardless of the initial distribution of $X$.
*   **Proposition 4:** Strong lumpability is a **sufficient condition** for Causal Closure.
    > "If a Markov chain $X$ is strongly lumpable with respect to a coarse-graining $Z$, then $Z$ is causally closed."
*   This connection is vital for applying the theory to physical models, as demonstrated by the **Ehrenfest Diffusion Model**, where the macroscopic state (number of particles in a chamber) is strongly lumpable and thus a software-like process.

## Step 5: The Functional Architecture Blueprint (The Lattice)

The collection of all emergent (causally closed) processes in a system forms a structured hierarchy, which the authors call the **computational blueprint** or **lattice**.

*   **Structure:** The set of all computationally closed coarse-grainings forms a **sub-lattice** ordered by coarse-graining relationships.
*   **Theory Space vs. Real Space:** The hierarchy is most clearly understood not in "real space" (the coarse-grainings of states) but in **"theory space"** (the nested computational machines).
    > "Our results show how this hierarchy of nested computational machines serves as a blueprint for the functional architecture of the system, while also characterizing the computations running at each level."
*   **Interpretation:** This lattice reveals what computations take place at what level. A higher-level machine is a coarse-grained version of a lower-level machine, meaning the higher level is running a specific, autonomous subset of the total system's computations.

## Step 6: Case Studies: Emergence in Action

The paper illustrates the framework's power across diverse models:

| Model | Macroscopic State ($Z_t$) | Key Finding | Practical Implication |
| :--- | :--- | :--- | :--- |
| **Elementary Cellular Automata (Rule 150)** | Parity of the state | $Z_t$ is a non-trivial, computationally closed conserved quantity. | Demonstrates that even simple systems can have non-trivial emergent software-like properties that store information. |
| **Ehrenfest Diffusion Model** | Number of particles in a chamber | Strongly lumpable $\implies$ Causal & Computational Closure. | **Efficient Simulation:** The macro-dynamics can be simulated exactly without tracking individual particles. |
| **Ising Model (Glauber Dynamics)** | Total Energy $E(X_t)$ | Causal & Computational Closure (due to Hamiltonian symmetry). | **Controllability:** The energy dynamics are independent of the specific spin configuration, meaning control only requires macroscopic intervention on energy. |
| **Random Walk on Network** | Community Label (and Community Size) | Exhibits **multiple nested levels** of Causal Closure. | The system's computation is hierarchically partitioned, with higher levels (e.g., movement between community sizes) running autonomously from lower levels (e.g., movement between nodes). |
| **Agent-Based Models (e.g., Refugee Movement)** | Aggregate population vector | Lumpable $\implies$ Causal & Computational Closure. | **Computational Efficiency:** The simulation complexity is reduced from the number of agents to the number of locations, enabling feasible forecasting. |
| **Hopfield Network (Memory)** | Projection onto stored memory patterns | Informational & Computational Closure. | **Multiple Realizability:** Memory retrieval is a self-contained, macroscopic computation independent of the specific firing of individual neurons. |

## Step 7: Final Implications and Future Directions

The framework provides a formally rigorous foundation for understanding the benefits of emergent software-like processes in nature.

### Benefits of Emergence

*   **Optimal Controllability:** Causal closure implies that macroscopic variables can be controlled to the highest possible precision using only macroscopic interventions. This is a potential explanation for the causal efficacy of macroscopic living organisms.
*   **Efficient Prediction:** Information closure guarantees that optimal prediction of the macro-process can be achieved without reference to the microscopic details.
*   **Operationalizing Philosophy:** The framework provides a concrete, measurable operationalization for philosophical concepts like **multiple realizability** and **substrate independence** (though the authors note their approach does not satisfy substrate independence *in principle*, as the micro-causal relationships constrain the possible macro-processes).

### Connections to Related Work and Future Research

The paper explicitly links its findings to established concepts:

*   **Marr's Levels of Analysis:** The Hopfield network analysis establishes an objective procedure to evaluate when a neural process is implementing a computation at a higher level, drawing parallels with Marr's classic distinction of computational, algorithmic, and implementational levels.
*   **Integrated Information Theory (IIT):** The authors note that the framework's focus on self-contained processes is related to IIT's concept of $\Phi$ (integrated information), which also quantifies emergent properties.
*   **Future Work:** The authors suggest investigating the applicability of the framework to identify algorithms implemented on different biological processes and exploring the relationship between causal closure and the **thermodynamic cost** of control, a concept briefly introduced in the preliminaries.

> "Building on these insights, future work may investigate the applicability of such approaches to identify algorithms implemented on different biological processes — neural and beyond."
