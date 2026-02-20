# 2026-02-20 - Reduce Self-Referential "Framework" Usage

## Summary

Systematically replaced approximately 40 self-referential uses of "framework" across both the submission file and the mainbody source file. The word appeared ~47 times in the submission file. After editing, only 5 instances remain: 3 references to other authors' frameworks (Pearl's framework x2, Rosas et al.'s framework x1), 1 natural compound ("the closure framework" in the phlogiston discussion), and 1 in the abstract (left untouched per instructions).

## Rationale

"Framework" sounds grandiose when used repeatedly to describe this paper's own proposal. The paper proposes a criterion, not a grand theoretical framework. Reducing the frequency and varying the alternatives makes the tone more measured and appropriately humble, consistent with the paper's actual scope (a philosophical criterion with application discipline, not a complete metaphysics).

## Replacement Strategy

Replacements were chosen for contextual fit, not mechanical substitution:

- **"the criterion"** - used where the sentence refers to the discriminating test itself
- **"the account"** - used where the sentence describes the paper's overall position or what it says
- **"the view"** - used where the sentence characterizes a philosophical stance
- **"the proposal"** - used where the sentence describes what is being offered
- **"the present approach"** - used where the sentence describes methodology
- **Restructured sentences** - in some cases, removed the noun entirely ("The framework answers this with..." became "The answer is...")

## Files Modified

1. `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex` - ~38 replacements
2. `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex` - ~38 matching replacements plus 1 additional (line 684, unique to mainbody)

## What Was Preserved

- All references to other authors' frameworks (Pearl, Rosas et al.)
- The abstract (line 26 of submission file)
- 1 instance of "the closure framework" as a natural compound noun
- The AI disclosure section's use of "framework" (mainbody only)
- No content or meaning was changed; only the word "framework" was swapped for alternatives
