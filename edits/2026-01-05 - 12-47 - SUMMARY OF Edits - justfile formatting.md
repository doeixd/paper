Normalized the justfile so every recipe command line begins with the single tab Just expects.

1. Rebuilt the file with canonical indentation (one leading tab per command) and removed nested tabs/spaces that caused “extra leading whitespace” parsing errors on constructs like the `citations` recipe.
2. Verified the fix by running `just --list`, which now prints the available recipes without errors.
