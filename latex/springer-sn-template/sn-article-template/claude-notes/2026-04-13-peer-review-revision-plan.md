# Peer Review Revision Plan

**Date:** 2026-04-13
**Target:** `real-patterns-need-closure-SYNTHESE-mainbody.tex`
**Goal:** Get past Synthese peer review. Fix structural redundancy, AI-sounding prose patterns, content gaps, and terminological vulnerabilities.

---

## 1. CUT REDUNDANCY (Highest Priority)

The paper restates its core claims far too many times. A reviewer will read this as padding or insecurity. Target: cut 15-20% of total length.

### 1A. The "staged protocol" restatement

The three-stage admittance protocol (compression -> screening off + novelty -> closure) is stated in full at least 6 times:

- Lines 46-54 (intro, dialectical structure paragraph)
- Lines 82-94 (intro, "the thesis is additive")
- Lines 260-273 (scope and non-claims, contribution summary)
- Lines 1179-1184 ("this is why the present paper treats...")
- Lines 1890-1893 (objections, beyond screening off reply)
- Lines 2326-2334 (conclusion)

**Fix:** Keep the intro statement (lines 46-54) as the first clear articulation. Keep the conclusion version (lines 2326-2334) as the final summary. Cut or radically shorten the other four. In most cases, a single forward-reference ("the staged protocol from Section 1") will do. The lines 82-94 paragraph ("The thesis is additive...") can be trimmed to 2-3 sentences max since it immediately follows the first statement.

### 1B. The "projectibility can be parasitic" restatement

This claim appears at:
- Lines 92-94
- Lines 177-183
- Lines 270-273
- Lines 1424-1431
- Lines 1890-1893 (woven into the staged protocol restatement)

**Fix:** State it once clearly in the intro (where it currently appears at lines 92-94), then reference it when needed. The Section 4.3 version (lines 1424-1431) is the most developed and should be the one retained in full. Others should cross-reference rather than restate.

### 1C. The Franklin & Robertson relationship

Restated in: intro (lines 15-27), novelty-and-positioning (108-114), dialogical positioning (139-141), the common-cause section (1084-1136), objections (1857-1893), and conclusion (2327-2330).

**Fix:** The intro (lines 15-27) and the common-cause section (1084-1136) are the two essential articulations. The dialogical positioning paragraph (137-164) should be trimmed because it lists every interlocutor in a way that reads like a catalogue rather than argument. The objection reply (1857-1893) repeats the common-cause argument from Section 3.4 almost verbatim; it should instead cross-reference Section 3.4 and focus on the reply-specific content.

### 1D. General approach to cutting

Look for paragraphs that begin with a restatement of something already established, then add one new point. In most cases, the new point can be stated directly without the windup.

---

## 2. REMOVE AI PROSE PATTERNS (High Priority)

### 2A. The "does not X. It Y" / "is not X. It is Y" tick

This is a two-sentence pattern where a negative claim is immediately followed by a positive restatement. It's a recognizable AI mannerism. Each instance should be rewritten to integrate the point into a single, more natural sentence, or to simply state the positive claim and drop the negative framing when the negative isn't doing real defensive work.

**Every instance** (with line numbers):

1. **Line 331:** "does not reward convenient coding alone. It rewards coarse-grainings..."
   - Fix: Merge. "Closure rewards coarse-grainings that carry stable transition structure, not convenient coding alone."

2. **Line 455:** "This is not a rejection of Pearl's framework. It is a restriction..."
   - Fix: "This restricts which of Pearl's outputs carry ontological weight, not the framework itself."

3. **Line 732:** "This is not a retreat to instrumentalism. It is the claim that..."
   - Fix: Fold into surrounding sentence. State the positive claim directly.

4. **Line 1236:** "Approximation here is not concession to arbitrariness. It is the expected non-ideal form..."
   - Fix: "Approximation is the expected non-ideal form of the same criterion, provided constraints are fixed and diagnostics are comparative."

5. **Line 1387:** "This does not eliminate judgment. It makes judgment auditable..."
   - Fix: "This makes judgment auditable and prevents favored partitions from being protected by moving criteria."

6. **Line 1393:** "Regime dependence does not imply observer-relativity. It states that..."
   - Fix: "Regime dependence states that closure depends on actual transition structure under specified constraints."

7. **Line 1408:** "regime dependence does not make ice epistemically subjective. It shows that..."
   - Fix: "Ice shows that objective structure can be conditional on equally objective background constraints."

8. **Line 1604:** "This does not invalidate the criterion. It changes evidential strategy."
   - Fix: "Sparse intervention access changes evidential strategy, not the criterion itself."

9. **Line 1941:** "does not force maximal realism. It forces explicit criteria..."
   - Fix: "The paper forces explicit criteria for when anti-realism remains credible."

10. **Line 2013:** "This is not a linguistic escape. It is a claim about..."
    - Fix: Merge into preceding sentence.

11. **Line 2062:** "is not a criterion at all. It is an assertion."
    - This one actually works rhetorically. Keep it. The brevity and the punch make it feel like a deliberate choice, not a tic.

12. **Line 2141:** "the result is not robust macro-objecthood. It is a warning that..."
    - Fix: "...then closure may be recovered without meaningful compression, which warns that no informative macro-partition has been found at the target grain."

13. **Line 2200:** "The present paper does not deny that such utility matters. It denies that utility by itself settles objecthood."
    - Fix: "Utility matters, but it does not by itself settle objecthood."

**Principle:** Keep 1-2 of the strongest instances where the rhetorical contrast genuinely clarifies a likely misreading (line 2062 is a good candidate). Rewrite the rest. The pattern should not appear more than 2-3 times in the whole paper.

### 2B. Formulaic transition phrases

These all announce what the next sentence will do instead of just doing it. Each should be cut or replaced with a direct statement.

1. **Line 498:** "A structural worry deserves explicit treatment here."
   - Cut. Start with the worry itself: "If regime individuation already commits to which macro-variables matter..."

2. **Line 547:** "One distinction is essential for avoiding confusion."
   - Cut. Start with the distinction: "A pattern can be real in a weaker sense without satisfying this paper's objecthood criterion."

3. **Line 443:** "A related distinction matters here."
   - Cut. Start with Pearl directly.

4. **Line 760:** "That point has a further metaphysical consequence."
   - Cut. State the consequence directly.

5. **Line 1914:** "The deeper point is that observer power changes convenience, not closure facts."
   - This one is borderline acceptable because it's short and punchy. Could keep.

### 2C. "This is also where..." transitions

Appears 4 times (lines 1958, 2195, 2311, 2375). Each signals "I'm about to connect this to something else" rather than just connecting it. Replace with direct transitions or topic sentences.

- Line 1958: "This is also where the cheap-coding objection is handled directly." -> "The cheap-coding objection fails for the same reason."
- Line 2195: "This is also where nearby real-pattern work in biology is useful as a foil." -> "Nearby real-pattern work in biology provides a useful foil."
- Line 2311: "This is also where compression and closure reconnect in a non-vacuous way." -> "Compression and closure reconnect here in a non-vacuous way." (or just cut the sentence and start with the substance)
- Line 2375: "This is also where the view separates itself from eliminativist pressure." -> "The view also separates itself from eliminativist pressure."

---

## 3. TIGHTEN THE COMMON-CAUSE PRESSURE CASE (High Priority)

**Problem:** The common-cause case (lines 1055-1136) is the paper's key dialectical move against Franklin & Robertson. A sympathetic reviewer of theirs could argue the proxy doesn't actually satisfy their novelty condition because the novelty is borrowed. The paper anticipates this (lines 1109-1125) but the defense is wordy and could be sharper.

**Fix:**
- Quote or closely paraphrase Franklin & Robertson's actual stated novelty condition (from their p. 1 or wherever they define it precisely).
- Show specifically, step by step, why the common-cause proxy satisfies the letter of that stated condition. The current version (lines 1112-1120) does this but in a long paragraph. Make the argument more linear: (a) the proxy is unconditionally relevant because..., (b) it is conditionally irrelevant because..., (c) it has macro-level novelty because... Therefore it satisfies their package. Yet closure fails.
- Trim the surrounding meta-commentary. Lines 1097-1101 ("This is not a one-step snapshot...") and 1102-1105 ("This is also the point of nearest disagreement...") can be compressed.
- The explicit disclaimer "This is not a hostile revision" (line 1886) appears twice in the paper. Once is enough.

---

## 4. LATTICE TERMINOLOGY (Medium Priority)

**Problem:** The paper calls the closure-ordered space a "lattice" repeatedly (lines 763-770, 861-868, 1150, 1158, 2108, 2369-2373) but never demonstrates that the space actually has lattice structure (meets and joins for every pair). A formally trained reviewer will flag this. If it's not technically a lattice, it's a false claim; if it is, it needs justification.

**Fix options (choose one):**
- **(A) Downgrade the term.** Replace "lattice" with "partially ordered space" or "structured space" throughout. Keep one mention that says "which may, under suitable conditions, form a lattice" citing Rosas et al. This is the safest option and costs almost nothing.
- **(B) Brief justification.** Add 2-3 sentences arguing that the refinement ordering on partitions has the relevant properties. But this risks opening a technical tangent.

**Recommendation:** Option A. The philosophical point (rainforest realism has structure, not just a list) survives perfectly well without the word "lattice."

---

## 5. CONTENT GAPS (Medium Priority)

### 5A. Organism illustration is undercooked

Lines 1484-1492 and 1719-1738 use organisms as illustrations but stay abstract. "Membrane and regulatory organization screen off large amounts of molecular variation" is vague.

**Fix:** Add 2-3 sentences specifying what makes the physiological regime a good case. For instance: cardiac electrophysiology has well-characterized macro-transitions (sinus rhythm, arrhythmia types) that are predictable from organ-level variables without tracking individual ion channel states. The admissible intervention class (pharmacological, electrical pacing) operates at the organ level. This gives the organism illustration the same concreteness the traffic and monetary illustrations already have.

### 5B. Batterman / renormalization group omission

A philosophy-of-physics reviewer will notice the absence of Batterman's work on asymptotic explanation and universality classes (Batterman 2002, "The Devil in the Details"). His argument that certain explanatory structures emerge at scale interfaces and resist single-level reduction is either an ally (universality classes are a form of closure) or a challenge (his explanations are inter-level, not level-autonomous).

**Fix:** Add one paragraph, probably in the structural contrasts subsection (Section 2.8, after line 793) or in the approximate closure section. Acknowledge Batterman's inter-level explanatory structures. Clarify that the present account is compatible: universality classes are precisely cases where multiple micro-configurations yield the same macro-behavior, which is closure at the relevant grain. The point of departure is that Batterman focuses on explanatory structure while the present criterion adds an objecthood test.

### 5C. Stipulated vs. induced closure boundary for the monetary case

Lines 233-245 restrict the paper to induced closure. But the monetary illustration (lines 1452-1482) involves institutional rules that look closer to stipulated closure.

**Fix:** Add 2-3 sentences to the monetary illustration section explicitly addressing this. Something like: "The relevant closure here is not the stipulated rules of the financial system (those are constitutive), but whether the physical and institutional infrastructure that implements those rules sustains autonomous macro-transitions under admissible perturbation. The failed-implementation case shows exactly where that induced closure breaks down even when the stipulated rules persist."

---

## 6. CITATION GAPS (Lower Priority)

### 6A. Objection 5.7 ("too strong") needs citations

Lines 2167-2207 engage with the claim that special-science kinds would be eliminated. Should cite Boyd (1991) on homeostatic property cluster kinds, and/or Craver (2009) on mechanistic kinds, as examples of positions that would press this objection.

### 6B. Proof sketch citation

Line 890: the lemma and proof sketch are standard. Add a reference to a specific theorem in Kemeny & Snell (1960) or Buchholz (1994) so a formally-minded reviewer can verify.

---

## 7. STRUCTURAL REORGANIZATION (Lower Priority)

### 7A. Move "levels of claim" taxonomy earlier

The world-dynamics / pattern-type / pattern-token / representation taxonomy (lines 800-818) currently appears at the end of Section 2, after the formal statement and several subsections. It would be more useful immediately after the plain-language criterion (Section 2.1), so the reader has it in mind during the formal statement and the compression discussion.

### 7B. Trim the dialogical positioning paragraph

Lines 137-164 list every interlocutor and their relationship to the paper. This is useful content but reads like a catalogue. Consider:
- Moving the Rosas et al. and causal-emergence positioning into Section 3.4 where those tools are actually used.
- Moving the Kim positioning into the exclusion objection reply.
- Keeping only Dennett, Franklin & Robertson, and Ladyman & Ross in the intro positioning.

This would shorten the introduction significantly and put the positioning where it's dialectically active rather than where it's merely announced.

---

## 8. MISCELLANEOUS PROSE CLEANUP

### 8A. Clause stacking violations

The paper's own style guide bans clause stacking. Check and fix:
- Lines 30-37: long sentence with multiple dependent clauses about screening-off.
- Lines 174-176: the Millhouse sentence runs very long with embedded citation list.

### 8B. Hedge symmetry

The paper sometimes pairs a negative hedge with a positive claim in adjacent sentences where only the positive claim is needed. This is related to the "does not X / It Y" pattern but also appears in other forms:
- "The paper does not claim to deliver a universal estimation recipe. It provides a criterion..." (lines 97-98)
- "The paper does not need to show that non-closed representations are worthless. It only needs to show..." (lines 577-579)

In each case, ask: does the reader need the negative claim? If the positive claim is clear enough on its own, cut the negative.

---

## Implementation Order

1. **Pass 1 (AI prose patterns):** Fix all instances from Sections 2A, 2B, 2C. This is mechanical and can be done quickly.
2. **Pass 2 (Redundancy cuts):** Tackle Sections 1A-1D. This is the most impactful change and requires careful reading to ensure nothing unique is lost in each restated paragraph.
3. **Pass 3 (Content additions):** Add Batterman paragraph, develop organism illustration, clarify monetary stipulated/induced boundary (Sections 5A-5C).
4. **Pass 4 (Common-cause tightening):** Section 3.
5. **Pass 5 (Terminology and citations):** Lattice -> structured space (Section 4), citation additions (Section 6).
6. **Pass 6 (Structural moves):** Sections 7A-7B if word count permits after cuts.
7. **Final pass:** Read through for flow, check that cross-references still work, verify no new redundancy was introduced.

After all passes, sync changes to the submission file.
