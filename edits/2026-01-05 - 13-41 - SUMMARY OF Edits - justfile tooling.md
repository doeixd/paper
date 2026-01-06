# Summary of Edits

- Corrected the Bun/Python/PowerShell invocations in `justfile` by swapping the literal `& { { cmd } }` placeholders for proper `{{cmd}}` interpolation, restoring actual command execution instead of no-op scriptblocks.
- Verified the surrounding logic stayed intact so existing argument handling, including the pre-existing `$cmd_args` naming, remained untouched.

# Rationale

- The previous scriptblock syntax emitted the command text without executing Bun/Python, which is why `just verify-refs` only printed the PowerShell block. Using `{{cmd}}` now expands the configured executables directly, matching the automation guarantees laid out in `STYLE_GUIDE.md` about keeping tooling pathways resilient.
- No additional formatting or behavioral changes were introduced to avoid trampling prior local adjustments, consistent with the "fortress not billboard" directive in the style guide.
