Cleaned up `just --list` output by separating documentation comments from recipe declarations.

1. Inserted blank lines between comment blocks and recipe signatures (and used `##` where appropriate) so docstrings no longer appear inline with recipe definitions in `just --list`.
2. Verified the formatting fix by running `just --list`, which now lists recipe names without trailing comment text.
