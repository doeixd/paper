# -*- coding: utf-8 -*-
import re

# Read the file
with open('other.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Store original for comparison
original_len = len(content)

print("Starting edits...")

# 1. Replace Abstract
abstract_pattern = r'(## \*\*Abstract\*\*\s+)(.*?)(\s+## \*\*1\. Introduction)'
new_abstract = r'''\1Coherentist theories of justification face the isolation objection: a belief system could be perfectly coherent yet entirely detached from reality. This paper proposes Emergent Pragmatic Coherentism, which grounds coherence in the demonstrated viability of knowledge systems measured through systemic brittleness—the accumulated costs incurred when applying propositions. 

The framework's central insight: pragmatic constraints determine a necessary structure of optimal solutions—the Apex Network—which exists whether we've discovered it or not, analogous to how mathematical truths exist independent of calculation. Selective pressure from real-world costs forces knowledge systems to converge on this structure through historical filtering. Justification requires both internal coherence within a Consensus Network and that network's demonstrated resilience against pragmatic pushback.

This naturalistic account redefines objective truth as alignment with the Apex Network—not a Platonic blueprint but the necessary configuration space of maximally viable solutions determined by mind-independent constraints. Historical filtering is the discovery process, not the creation mechanism. The result explains pragmatic revision in Quine's web, provides prospective guidance through constraint analysis, and supports a falsifiable research program for assessing epistemic health across domains from physics to ethics to mathematics.\3'''

content = re.sub(abstract_pattern, new_abstract, content, flags=re.DOTALL)
print(f"Abstract edit attempted")

# Write output
with open('other.md', 'w', encoding='utf-8') as f:
    f.write(content)

print("Edits complete!")
print(f"Original length: {original_len}")
print(f"New length: {len(content)}")
