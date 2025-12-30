# Editorial Style Guide

## 1. The Editorial Mindset: High-Level Strategy

**The North Star: Resilience Over Novelty**
The ultimate measure of this paper is not how "new" the ideas sound, but how resilient they are to attack. We are building a fortress, not a billboard. Every sentence must reinforce the structural integrity of the argument. If a claim relies on a specific historical date or a contested number, it is a weak point. If it relies on a logical necessity derived from first principles, it is strong.

**The "Adversarial Reviewer" Heuristic**
Write as if the reader is a tired, skeptical, and pedantic peer reviewer looking for a reason to reject the paper.
*   **Do not hand-wave:** If a transition feels rough, they will notice.
*   **Pre-empt the attack:** If a paragraph invites an obvious counter-argument, address that counter-argument immediately in the next sentence.
*   **Balance:** Make strong claims, but include appropriate qualifications. Be humble but confident.

**The Principle of Linear Causality (The "Logical Baton Pass")**
Philosophy is the art of "hand-holding" the reader down a complex path. Do not teleport from Point A to Point C. You must walk them to Point B first.
*   **Continuity:** The end of one sentence must logically necessitate the beginning of the next.
*   **No "Magic" Steps:** Avoid phrases like "it clearly follows that" to bridge a gap you haven't explained.

## 2. Logical Flow & Simplicity Standards

**Goal:** Complex ideas, simple words. The sophistication should be in the *architecture of the argument*, not the obscurity of the vocabulary. Its ok to be slightly casual.

**Rule: No Clause Stacking**
Do not embed multiple dependent clauses in a single sentence. Break them into linear steps.

| Feature | ❌ **Incorrect (Academic Bloat/Dense)** | ✅ **Correct (Logical/Step-by-Step)** |
| :--- | :--- | :--- |
| **Clause Stacking** | "The model, being reliant on variable A, which inherently implies condition B, subsequently fails..." | "The model relies on variable A. Since A implies condition B, the model is constrained. Consequently, it fails..." |
| **Describing a Mechanism** | "The proliferation of systemic error manifests as a cascading failure state due to the inherent fragility..." | "As errors accumulate, the system fails. This occurs because individual nodes cannot sustain the increased load." |
| **Connecting Ideas** | "In contradistinction to the prior argument, the reality is substantively divergent." | "However, this view is incorrect. The reality is different." |

## 3. Rhetorical Standards: Logical vs. Empirical

**Goal:** Persuasion through rigorous logic and conceptual clarity.
**Constraint:** We are not writing a hard science paper. We are writing a philosophical framework.

**The "Illustration" Rule**
Examples (historical, hypothetical, or physical) are *pedagogical tools*, not evidentiary proof. They exist to help the reader visualize the logic, not to validate it.

**Subordinate Formalism to Philosophy**
If mathematical models or formal logic are used (e.g., in an appendix), explicitly state that they are **provisional, illustrative candidates**. The paper's philosophical integrity must remain independent of any specific mathematical formulation.

| Feature | ❌ **Incorrect (Scientific/Empirical)** | ✅ **Correct (Philosophical/Logical)** |
| :--- | :--- | :--- |
| **Objective** | "This paper proves the hypothesis using data." | "This paper outlines a logical framework for understanding validation." |
| **Role of Examples** | "Case Study 1 provides evidence that the theory holds." | "The following historical trend serves as a conceptual illustration of the mechanism." |
| **Logic vs. Data** | "The data shows a 95% correlation, confirming the model." | "If we accept premises A and B, the structural necessity of C follows logically." |

## 4. Quantitative Descriptions: The "No Pseudo-Quantification" Rule

**Strict Rule:** Do not assign specific numbers, percentages, or calculated indices to historical or hypothetical examples. Giving a specific number to a vague concept creates an illusion of precision ("pseudo-quantification") and introduces empirical fragility.

**Qualitative Trends:**
Describe the *shape*, *velocity*, and *direction* of a trend (escalation, collapse, stagnation) rather than the magnitude.

| Feature | ❌ **Incorrect (Pseudo-Quantification)** | ✅ **Correct (Qualitative Description)** |
| :--- | :--- | :--- |
| **Describing Change** | "The system’s complexity doubled from ~40 to ~80 nodes." | "The system’s complexity escalated dramatically." |
| **Indices/Metrics** | "The brittleness index of the regime was 5.7." | "The regime exhibited high brittleness, manifested as rising maintenance costs." |
| **Hypotheticals** | "Imagine a factory producing 38,000 units with 4% error." | "Imagine a factory with high output but significant error rates." |

## 5. Terminology & Tone: The "Authoritative Servant"

**Tone:**
Authoritative enough to command respect, humble enough to admit fallibility.
*   **Avoid:** The "Manifesto" style (grandiose, revolutionary, shouting).
*   **Avoid:** The "Blog Post" style (casual, chatty, loose).
*   **Aim For:** "High resolution, low noise."

**Minimal Terminology (Strict Constraint):**
**Do not introduce unneeded named concepts.** Only name a concept (Capitalized Term) if absolutely necessary for the framework. If you can explain it in plain English, do so. Avoid jargon.

| Feature | ❌ **Incorrect** | ✅ **Correct** |
| :--- | :--- | :--- |
| **Naming Concepts** | "We call this the *Retro-Active-Validity-Loop*." | "This creates a feedback loop where validity is retroactively applied." |
| **Confidence** | "We have undeniably solved the problem of realism." (Arrogant) | "This framework offers a robust solution to the problem of realism." (Measured) |
| **Grandiosity** | "This manifesto marks a paradigm shift for all human thought." | "This approach suggests a significant reorientation of epistemic priorities." |

## 6. Defensive Writing Strategy

**Anticipatory Nuance:**
Do not wait for the reviewer to find the flaw. Point it out yourself, then explain why the argument survives despite it.

**Abstract Hypotheticals:**
When using hypotheticals, keep them abstract. **Avoid specific, politically charged, or overly detailed contemporary examples** (e.g., specific elections or wars) that introduce confounding variables and distract the reader.

| Feature | ❌ **Incorrect** | ✅ **Correct** |
| :--- | :--- | :--- |
| **Handling Objections** | "Critics might disagree, but they are ignoring the data." (Dismissive) | "One might object that X holds true. However, under this framework, X is re-contextualized as..." (Anticipatory) |
| **Scope** | "This rule applies to every society instantly." | "While exceptions exist, the structural tendency favors this outcome over time." |

## 7. Formatting & Mechanics (Script-Critical)

The document must be formatted strictly to ensure compatibility with the project's release scripts and LaTeX conversion pipeline.

*   **LaTeX Math:** Always use LaTeX math delimiters (`$...$`) for variables (e.g., `$P(t)$`). Never use plain text for mathematical variables or mixed formatting.
*   **No Footnotes:** Incorporate all necessary explanations into the main body.
*   **No Em Dashes:** They disrupt the flow and parsing. Use commas, semi-colons, or periods instead. Its ok in the references section or in the bibliography.
*   **Limited Boldface:** Only use bold for lists or pseudo-headings (e.g., **1. Concept:** Prose...). Do not use it for emphasis in prose. Or for key terms.
*   **Citations:** Chicago format.

## 8. Workflow & Revision Standards

**Planning & Summary:**
1.  **Plan First:** Always create a detailed plan/TODO list before editing.
2.  **Summarize Changes:** After every large edit, write a summary in `edits/` prefixed with `YYYY-MM-DD - HH-MM - SUMMARY`.
3.  **Check Redundancy:** Check sections to ensure you are not repeating yourself.

**Git Commit Protocol:**
*   Write detailed summaries/rationales.
*   **NEVER** add yourself as an author.
*   **NEVER** mention "Claude," "AI," or "Assistant" in the commit message or the paper.

**Quality Checklist:**
*   Does the writing demonstrate mastery while remaining accessible?
*   Is every claim as strong as the evidence allows without overreach?
*   **Crucially: Does this revision make the core argument *more* resilient to criticism, or does it open up new lines of attack?**



**Phase 1: Logical Integrity & Technical Sanity (The "Bug Hunt")**
*   [ ] **Heading Hierarchy:** Are headings correctly and sequentially numbered? (e.g., 1 -> 1.1 -> 1.1.1). Ensure no levels are skipped (e.g., do not jump from 1 to 1.1.1).
*   [ ] **The "Definition Drift" Check:** Do key terms (e.g., "brittleness," "validity") mean exactly the same thing in Section 1 as they do in Section 5?
*   [ ] **The "Circular Dependency" Scan:** Does any argument assume the conclusion as a premise?
*   [ ] **The "Equivocation" Audit:** Am I using the same word to mean two different things in the same argument?
*   [ ] **The "Is-Ought" Bridge:** If making ethical claims, have I established the bridge between descriptive facts and normative claims?
*   [ ] **The "Strawman" Check:** When I refute an opposing view, is it the strongest possible version of that view?
*   [ ] **Technical Glitches:**
    *   Are there unclosed LaTeX delimiters (`$`)?
    *   Are there broken Markdown links or reference tags?
    *   Are list indentations consistent?

**Phase 2: Clarity & Simplicity (The "Fog" Filter)**
*   [ ] **The "Clause Stacking" Audit:** Did I bury the subject under three dependent clauses? (If yes, break into linear sentences).
*   [ ] **The "Ten-Dollar Word" Tax:** Did I use "utilize/elucidate" where "use/explain" works?
*   [ ] **The "High-Res, Low-Noise" Ratio:** Is the complexity in the *idea*, not the *syntax*?
*   [ ] **Pronoun Precision:** Do "This," "That," or "It" have unambiguous antecedents? (Replace "This proves..." with "This mechanism proves...").
*   [ ] **word choice and complexity:** Do I use complex words where simple words work? (e.g., "utilize" instead of "use"). Is the prose overly complex for no reason?
*   [ ] **The "Hand-Holding" Test:** Could a bright undergraduate track the argument without getting lost?


**Phase 3: Flow & Architecture (The "Baton Pass")**
*   [ ] **Linear Velocity:** Does the end of Sentence A create the logical momentum for Sentence B?
*   [ ] **No Teleportation:** Did I skip a logical step? (Look for "clearly," "obviously," or "it follows that"—these often hide gaps).
*   [ ] **Causal Connectors:** Do "Therefore/Consequently/Thus" represent actual causal relationships, or am I just listing things?
*   [ ] **The "Hand-Holding" Test:** Could a bright undergraduate track the argument without getting lost?

**Phase 4: Rhetorical Strategy (The "Resilience" Filter)**
*   [ ] **No Pseudo-Quantification:** Did I assign numbers to abstract concepts? (e.g., "~30% increase"). **Delete and replace with qualitative trends.**
*   [ ] **No Case Studies as Proof:** Did I frame an example as "evidence"? Rewrite as "conceptual illustration."
*   [ ] **No Specific Hypotheticals:** Did I reference a specific recent election, war, or celebrity? Replace with abstract archetypes.

**Phase 5: Voice & Tone (The "Authoritative Servant")**
*   [ ] **Grandiosity Purge:** Removed "undeniable," "revolutionary," "paradigm-shifting"?
*   [ ] **Humility Check:** Do I sound like a logician proposing a framework (Good) or a prophet declaring truth (Bad)?
*   [ ] **Confidence Calibration:** Avoided weak "weasel words" ("it seems," "might be") while maintaining academic caution?
*   [ ] **No Anthropomorphism:** Did I attribute agency to inanimate concepts? (e.g., "The theory wants..." → "The theory implies...").

**Phase 6: Redundancy & Economy (The "Trim" Filter)**
*   [ ] **The "Echo" Hunt:** Did I make the same point more than once?
*   [ ] **Modifier Pruning:** Deleted "strictly," "very," "basically," "essentially"?
*   [ ] **Preposition Bloat:** Changed "In order to" → "To"; "For the purpose of" → "For."
*   [ ] **Redundant Examples:** Do I use the same example more than once?
*   [ ] **Redundant Definitions:** Do I define the same term more than once?
*   [ ] **Redundant Clarifications:** Do I make the same clarification more than once?
*   [ ] **Mistakes Issues Errors and Glitches:** Are any mistakes, issues, errors, or glitches left in the text?
*   [ ] **Logical Fallacies:** Are any logical fallacies present?


**Phase 7: Script-Safe Mechanics**
*   [ ] **LaTeX Math:** All variables wrapped in `$..$`? (e.g., `$P(t)$`).
*   [ ] **No Footnotes:** Integrated or deleted?
*   [ ] **No Em Dashes:** Replaced with commas/semicolons/periods/colons/parentheses?
*   [ ] **Bold Usage:** Restricted *only* to list headers?
*   [ ] **Citations:** Chicago format, alphabetical?

