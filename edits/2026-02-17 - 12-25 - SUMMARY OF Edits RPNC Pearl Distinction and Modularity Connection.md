# Summary of Edits: RPNC Pearl Distinction and Modularity Connection

**Date:** 2026-02-17
**File:** `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
**Trigger:** External review identifying need to preempt "Pearl already solved this" critique

## Changes Made

### 1. Ideal surgery vs admissible intervention (Section 2.4)

**Problem:** Pearl's $do(x)$ operator is defined as a mathematical ideal ("surgery") that works regardless of physical feasibility. RPNC's admissibility constraints are physically anchored. Without making this distinction explicit, a reviewer could claim the paper is just restating Pearl's interventionism.

**Fix:** Added a paragraph after the Woodward (2015) reference in Section 2.4 that explicitly contrasts Pearl's ideal surgery with the paper's admissible intervention constraints. The key move: for causal inference, Pearl's idealization is productive; but for macro-objecthood, closure must be assessed relative to control channels actually available in the regime. This is framed as a restriction on which outputs of Pearl's framework carry ontological weight, not a rejection of the framework itself.

**Rationale:** Preempts "Pearl already handles interventions" by showing the paper asks a different question (ontology, not inference) and therefore needs tighter constraints on what counts as an intervention.

### 2. Closure as ontological precondition for modularity (Section 2.9)

**Problem:** Pearl's concept of modularity (changing one mechanism without disrupting others) is closely related to closure. Without addressing this, the paper risks looking like it's reinventing modularity under a new name.

**Fix:** Added a paragraph in Section 2.9 that explicitly connects closure to Pearl's modularity while distinguishing them. Pearl treats modularity as a structural assumption about a given causal model. The present criterion asks a prior question: whether a candidate coarse-graining has earned the right to appear as a variable in such a model at all. Closure is therefore an ontological precondition for the kind of modularity Pearl's framework presupposes, not a restatement of it.

**Rationale:** Shows the paper has engaged with Pearl's actual framework and is building on it (not restating it). The "prior question" framing makes clear that RPNC operates upstream of Pearl's inference machinery.

## What was NOT changed (and why)

- **No "No Causes In, No Objects Out" slogan added.** The review suggested adapting Pearl's "No causes in, no causes out" motto. This was skipped because: (a) it introduces a named slogan, which the paper avoids; (b) the parallel is philosophically imprecise (Pearl's motto is about the logical impossibility of deriving causal claims from statistical premises; closure is a property you test for, not an assumption you feed in); (c) the rhetorical register is too blog-like for the paper's measured tone.
