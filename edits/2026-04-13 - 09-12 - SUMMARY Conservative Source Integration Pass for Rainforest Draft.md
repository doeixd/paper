## Conservative Source Integration Pass for `real-patterns-need-closure`

### What changed

This pass integrated the new source-review bundle into the Synthese LaTeX manuscript, with the main prose changes made in `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex` and then synchronized into `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex`.

The main additions were:

- **Franklin-Robertson**: the introduction and novelty framing now make their rainforest-admittance project more explicit, including the point that their emergence test is meant to remain compatible with reducibility rather than to revive a strong irreducibility demand. The common-cause proxy discussion and the `Beyond Screening Off` reply were also tightened so the paper engages their own screening-off-plus-novelty package more directly and more textually.
- **Effective OSR**: Ladyman-Lorenzetti now do more than lend general support. Their scale-relative and effective-ontology framing is used to clarify why regime-relative ontology can remain realist, and why the paper's verdicts are ontology-reporting rather than mere confidence labels.
- **Rosas**: the manuscript now uses Rosas earlier and more visibly when introducing the lattice payoff, the exact-to-approximate closure transition, and the verdict structure. The paper continues to distinguish Rosas's formal architecture from the paper's ontological interpretation.
- **Wallace and Ladyman**: the dynamic-literature discussion now has clearer textual anchors for the claim that higher-level ontology concerns structure in dynamics and projectible generalisation, while still insisting that dynamic framing alone does not settle admission.
- **Andersen**: the pluralism section now uses density of structure to explain why multiple admissible grains are not an embarrassment, while tying that point directly to ranking and reporting rather than to permissive pluralism.
- **Jiang and Millhouse**: these sources were used sparingly as nearby but weaker alternatives to closure. Jiang now supports the mechanisms and biology contrasts. Millhouse now marks the strongest nearby real-pattern tightening short of transition autonomy.

### Why these changes were made

The main purpose of the pass was to make the manuscript look better grounded in the recent debate without materially increasing its ambition. The source-review memos showed that the draft already had the right argumentative shape, but several literature engagements were too thin or too paraphrastic. Reviewers could reasonably have asked where exactly Franklin-Robertson say the admittance issue is the rainforest issue, whether Rosas really supports the lattice language, whether effective OSR was being used only as borrowed authority, or whether Wallace, Andersen, Jiang, and Millhouse were doing any real argumentative work.

These revisions were therefore designed to:

- make the paper's immediate interlocutors explicit,
- show that the literature is being used for specific argumentative purposes,
- keep quotation light and reviewer-facing,
- preserve the cumulative structure of the paper's claim.

### Objections these edits are meant to pre-empt

- **Under-engagement objection**: that the paper gestures at recent literature without showing detailed knowledge of what those authors actually say.
- **Overclaim objection**: that the paper attributes closure, lattice ontology, or verdict discipline to sources that do not clearly support those moves.
- **Straw-critic objection**: that Franklin-Robertson are being treated as if they were defending a naive or easily refuted screening-off view.
- **Permissive-pluralism objection**: that multiple admissible grains amount to arbitrariness rather than disciplined density.
- **Utility-is-enough objection**: that explanatory utility, predictive fit, or similarity already settle objecthood without any stronger transition test.

### Memo recommendations adopted

- Adopted the Franklin-Robertson recommendation to foreground rainforest admittance and reducibility-compatibility in the introduction.
- Adopted the recommendation to treat the common-cause proxy as a genuine pressure case for screening off and novelty, not as a flat refutation.
- Adopted the effective OSR recommendation to use Ladyman-Lorenzetti more explicitly for scale-relative ontology and effective ontology.
- Adopted the Rosas recommendation to make the lattice claim more visibly source-grounded and to mark the distinction between informational, causal, and computational closure.
- Adopted the Wallace/Ladyman recommendation to sharpen the dynamic framing while keeping closure as the additional admission test.
- Adopted the Andersen recommendation to tie density to disciplined pluralism and reporting.
- Adopted the Jiang/Millhouse recommendation to use both sources as nearby but still insufficient alternatives to transition autonomy.

### Memo recommendations deliberately not adopted

- I did **not** turn Franklin-Robertson into a direct target of refutation or say that the proxy straightforwardly satisfies their criterion in full.
- I did **not** present Ladyman-Lorenzetti as if they already endorsed the closure criterion or had already solved rainforest admission.
- I did **not** attribute the paper's lattice ontology or verdict protocol to Rosas et al.
- I did **not** use Wallace or Ladyman as if dynamic or phase-space language by itself settled admittance.
- I did **not** expand Andersen into a broader pluralist manifesto.
- I did **not** let Jiang 2025 become a separate debate about biological pluralism or explanatory utility.
- I did **not** add more than a few short direct quotations, since paraphrase remained cleaner in most places.

### Remaining pressure points

- The Franklin-Robertson wedge is now better grounded, but it remains the most delicate rhetorical area in the paper. Future passes should continue checking that the paper sounds like a constructive refinement rather than a hostile revision.
- The Rosas material now anchors the lattice more clearly, but the manuscript still depends on the paper's own philosophical step from formal closure diagnostics to ontology-reporting verdicts. That step remains defensible, but it is where a skeptical reviewer may still press hardest.
- Jiang and Millhouse are now placed more cleanly, but they should remain sparse. If future passes expand them further, the paper could start to look debate-sprawling rather than focused.

### Verification

After the prose revision:

- the blinded submission source was resynchronized from the revised mainbody,
- the Springer wrapper and blinded submission files were both rebuilt with the full `pdflatex -> bibtex -> pdflatex -> pdflatex` cycle,
- no undefined citations or broken-reference warnings were found in the final log scan.
