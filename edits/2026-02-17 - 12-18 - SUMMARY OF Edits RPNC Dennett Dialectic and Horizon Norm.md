# Summary of Edits: RPNC Dennett Dialectic and Horizon Norm

**Date:** 2026-02-17
**File:** `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
**Trigger:** External AI review identified three dialectical soft spots

## Changes Made

### 1. Strengthened Dennett dialectic (Section 1, paragraph 2)

**Problem:** The paper previously said "if compression and predictive utility are the only standards, then almost any coding strategy... can look ontologically respectable." This understates that Dennett himself already excludes trivial cheats via his "general system" requirement (the "baptizing frames" discussion in the 1991 paper). A reviewer familiar with Dennett would see this as slightly straw-targeting.

**Fix:** Rewrote the permissiveness paragraph to explicitly acknowledge Dennett's own anti-cheating constraint, then show the residual gap. The argument now reads: even granting that Dennett excludes ad hoc renamings that collapse to the bitmap, his "general system" requirement still admits constructions that compress genuinely but group together microstates with divergent transition profiles. That residual permissiveness (not the trivial kind Dennett already blocks) is the paper's actual target.

**Rationale:** Makes the critique more honest and harder to dismiss. A sophisticated reviewer can no longer say "Dennett already handles this."

### 2. Added steelman-Dennett paragraph (Section 1.1, after Gladziejewski paragraph)

**Problem:** A reviewer could read Dennett's criterion charitably as already requiring projectibility and cross-context robustness. If so, does closure add anything beyond that steelman?

**Fix:** Added a new paragraph that explicitly confronts the steelman reading. The answer: projectibility constrains which predictions are worth tracking, but does not test whether the macro-description carries autonomous transition structure. A partition can be projectible across contexts and still require persistent within-class bookkeeping. Closure catches that residual failure mode by asking whether macro-level what-follows is self-contained at the declared grain.

**Rationale:** Pre-empts the strongest version of "Dennett already does this." Even the most charitable reading leaves a gap that transition-autonomy testing fills.

### 3. Tightened horizon-anchoring norm (Section 5.8)

**Problem:** The existing text already contained both requirements for horizon discipline but they were spread across prose and somewhat buried. A reviewer could still say "you've just moved arbitrariness to horizon choice."

**Fix:** Restructured the reply into two explicit requirements: (a) horizons must be anchored in independently identified timescale structure (relaxation windows, control latency, response periods), and (b) verdicts must survive a modest-extension stability check ($L + \Delta$ for small defensible $\Delta$). No new content was added; this is purely organizational clarity.

**Rationale:** Makes the anti-trivialization guard impossible to miss on a first read.

## What was NOT changed (and why)

- **No worked audit protocol example added.** The review suggested adding a step-by-step diagnostic example. This conflicts with the paper's "conceptual illustrations, not worked examples" principle and its explicit statement that it "does not claim to deliver a universal estimation recipe." Adding such an example would create empirical fragility and blur the paper's identity as a criterion paper.

- **No expanded admissibility menu.** The existing template classes (boundary nudges, coarse actuators, policy levers) plus the non-negotiable guardrail against label-protecting interventions are sufficient. Further formalization risks moving toward methods-paper territory.
