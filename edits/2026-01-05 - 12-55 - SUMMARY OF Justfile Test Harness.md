# Justfile Test Harness Addition

## Summary of Changes
- Added a 	est-organizer recipe to the justfile so the Python references organizer tests can be run via just test-organizer.

## Rationale
- This ensures every executable script in scripts/ is represented in the automation layer, making it easy to rerun the regression suite before modifying reference tooling.
