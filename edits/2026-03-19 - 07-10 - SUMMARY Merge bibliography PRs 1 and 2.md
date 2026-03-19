Merged the two open bibliography PRs by integrating PR #2 into `master`, since PR #2 already contains PR #1 as an ancestor. This was the cleanest way to bring both contributions in without duplicating history or creating an unnecessary second merge.

The merge adds `pragmatism-bayesian-sources.md`, carries over the follow-up completion work on that bibliography, updates `references.md` with the corresponding published entries, and preserves the branch-level edit summaries that document the intermediate bibliography cleanup steps.

Rationale:
- PR #2 superseded PR #1, so merging it captured the full intended state of the pragmatism bibliography work.
- Keeping an explicit merge commit preserves the reviewable history that these changes arrived as PR work rather than as a fresh local rewrite.
- A separate summary note here records the integration decision, which matters because the branch topology is slightly non-obvious: one open PR was already nested inside the other.

Verification:
- Confirmed that the remote exposed two PR heads and that PR #2 contained PR #1.
- Reviewed the changed file set before merging to ensure the branch was self-contained.
- Ran `git diff --check HEAD~1..HEAD` after the merge to confirm there were no whitespace or conflict-marker issues.
