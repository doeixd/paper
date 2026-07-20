# Post-Review Targeted Edits to the Closure Paper

**File edited:** `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
**Trigger:** External review of the Synthese draft. The review confirmed the arithmetic of the latent-driver countermodel and endorsed the dialectical calibration, then pressed four points: (1) the "no stated test fixes the modal reading" defense is the load-bearing wall and should be foregrounded harder; (2) the conditional-irrelevance verdict in the countermodel should state the measure-zero/vacuity point explicitly ("silent on exactly the realizations that matter" is sharper than "passes"); (3) the admissibility sections should face the objection that the criterion's bite is inversely proportional to its applicability; (4) §§2.5–2.8 repeat the declare-before-scoring / fragility-triggers-downgrade point several times. The review also observed that the driver-pair parity partition is itself strongly lumpable, giving "parasitic" exact content.

## Changes

1. **Foregrounded the load-bearing defense.** Intro wedge paragraph now states explicitly that no published test in this literature fixes the modal reading and that the two readings return opposite verdicts on candidates the debate cares about. In §2.2 the reply to the renaming rejoinder was reordered so the "a reading no stated test discriminates cannot adjudicate admission" point leads rather than arriving mid-paragraph. No new claims; promotion only.

2. **Made the vacuity point explicit in the countermodel.** The conditional-irrelevance item now says that the unvisited realizations with $V_t = 1$ receive probability zero, so the conditional is undefined on them and the strict condition holds only vacuously: the condition is not violated by the heterogeneous realizations, it is silent about them, and silent about exactly the realizations on which the closure question turns. Existing arithmetic untouched.

3. **Added the borrowed-closure structural fact.** New paragraph after the weak/strong lumpability contrast: the driver parity $V_t$ is itself strongly lumpable (since $V_{t+1} = V_t \oplus (N^1 \oplus N^2)$ regardless of reset actuation), so the autonomy in the case is real but located at the driver partition; $Z$ borrows $V$'s closure. This cashes out "parasitic" exactly: a candidate whose apparent transition structure is the closure of a different partition it neither contains nor preserves.

4. **Faced the applicability tension in §5.2.** Added the sharper form of the too-strong objection (decisive where easy, qualified/indeterminate where it matters) with a three-part reply: qualified verdicts are comparative results, not silence; rival criteria issue robust verdicts in the hard cases and the wedge cases show some certify borrowed autonomy; decisiveness tracks the maturity of a domain's control ecology and so grows with intervention practice.

5. **Deduplicated the admissibility cluster (conservative).** Four trims of repeated declare-before-scoring / fragility-downgrade statements in §§2.6 and 2.8, keeping the canonical statements in §2.6 and the safeguards list, replacing one repetition with a cross-reference after the storm example. Roughly 130 words removed; deliberately smaller than the reviewer's suggested 25–30% cut, since much of the repetition is load-bearing signposting.

## Verification

Full `pdflatex` build of `real-patterns-need-closure-SYNTHESE-sn.tex` succeeds (40 pages). The inlined blinded submission file was not regenerated; that should be redone before upload.
