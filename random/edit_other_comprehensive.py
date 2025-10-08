# -*- coding: utf-8 -*-
"""
Comprehensive edits to other.md to strengthen modal necessity claims
and clarify discovery vs. creation distinction.
"""
import re

# Read the file
with open('other.md', 'r', encoding='utf-8') as f:
    content = f.read()

original_len = len(content)
print("Starting comprehensive edits to other.md...")
print(f"Original length: {original_len} characters\n")

# Track changes
changes_made = []

# ===============================================================================
# EDIT 2: Add clarity paragraph in introduction after "This shift exemplifies..."
# ===============================================================================

intro_insert_pattern = r'(This paper develops an alternative response that grounds coherence in the demonstrated viability of entire knowledge systems, measured through their historical capacity to minimize what we will term "systemic costs\." Drawing inspiration from resilience theory in systems ecology \(Holling 1973\), this perspective explains how the holistic revisions individuals make to their personal webs of belief in response to recalcitrant experiences—a process we generalize as pragmatic pushback—drive the bottom-up formation of more viable, less fragile public knowledge systems\.)'

intro_insert_text = r'''\1

This paper's response is distinctive: it grounds coherence not in historical accident but in necessary structure. Reality's pragmatic constraints—physical laws, biological limits, logical requirements, coordination necessities—determine an optimal configuration (or compact set of configurations) for navigating those constraints. This optimal structure exists whether we've discovered it or not, just as π exists whether we've calculated it. What we call "objective truth" is alignment with this constraint-determined structure. Historical filtering of failed systems is how we discover this structure, not how we create it. Failed systems reveal where the constraint landscape drops off; successful systems triangulate toward the peaks.

This transforms the isolation objection: a coherent system detached from reality isn't truly possible because reality's constraints force convergence toward viable configurations. A perfectly coherent flat-earth cosmology generates catastrophic navigational costs. A coherent phlogiston chemistry generates accelerating conceptual debt. These aren't merely false—they're structurally unstable, misaligned with constraint topology. The Apex Network is the structure that remains when all such unstable configurations are eliminated.'''

if re.search(intro_insert_pattern, content):
    content = re.sub(intro_insert_pattern, intro_insert_text, content)
    changes_made.append("Added clarity paragraph in introduction")
    print("✓ Added clarity paragraph in introduction")
else:
    print("✗ Could not find intro insertion point")

# ===============================================================================
# EDIT 3: Add Section 2.2.1 after Section 2.2
# ===============================================================================

section_221_pattern = r'(To be precise about this evolutionary dynamic.*?Section 4\)\.)'

section_221_insert = r'''\1

### **2.2.1 Resolving the Circularity Objection: From Categories to Trajectories**

Critics object that classifying spending as "productive" vs. "coercive" requires prior normative commitments, making the framework circular. The causal hierarchy provides an operational solution through trajectory analysis rather than categorical definition.

**The Operational Protocol:**

**Step 1: Measurement Without Classification**
Track resource allocation over time without labeling it:
- Proportion to internal security/surveillance/enforcement (S)
- Proportion to infrastructure/health/education/R&D (P)
- Total resource base (R)

**Step 2: Correlate With First-Order Indicators**
Measure demographic and economic trajectories:
- Mortality rates (rising/stable/falling)
- Morbidity indicators
- Economic output per capita
- Innovation metrics (patents, new technologies, productivity gains)
- Population stability

**Step 3: Apply Diagnostic Rules**

A spending category functions as coercive overhead when:
- Increasing allocation correlates with rising First-Order Costs
- System requires accelerating investment to maintain baseline stability (diminishing returns)
- Reduction correlates with improved outcomes

A spending category functions as productive investment when:
- Increasing allocation correlates with falling First-Order Costs
- Returns are constant or increasing
- Generates positive spillovers to other domains

**Concrete Example: Criminal Justice Spending**

Society A doubles police budget (year 1: 2% GDP → year 10: 4% GDP):
- Crime rates: -40%
- Incarceration rate: -20%
- Homicide rate: -60%
- Community survey trust: +35%
- Recidivism: -25%
**Diagnosis:** Productive investment. Rising S correlates with falling First-Order Costs.

Society B doubles police budget (year 1: 2% GDP → year 10: 4% GDP):
- Crime rates: +5%
- Incarceration rate: +300%
- Homicide rate: -10%
- Community survey trust: -50%
- Social instability indicators: +60%
- By year 10, requires 6% GDP to maintain control
**Diagnosis:** Coercive overhead. Rising S correlates with rising total systemic costs despite some metrics improving.

**Why This Isn't Circular:**

The classification emerges from empirical correlation patterns, not from a priori definitions. We don't need to know "what policing essentially is" before measuring. We observe what specific spending patterns do to measurable outcomes over time.

The robustness comes from convergent evidence. A single metric (e.g., crime rate) can be ambiguous. But when demographic indicators, economic output, innovation rates, stability metrics, and coercive spending ratios all move in the same direction, the diagnosis becomes robust to interpretive variation.

This is standard scientific methodology: we identify causal patterns through correlation across independent measurement streams, not through defining essences.'''

if re.search(section_221_pattern, content, re.DOTALL):
    content = re.sub(section_221_pattern, section_221_insert, content, flags=re.DOTALL)
    changes_made.append("Added Section 2.2.1 on resolving circularity")
    print("✓ Added Section 2.2.1")
else:
    print("✗ Could not find Section 2.2 insertion point")

# ===============================================================================
# Write output
# ===============================================================================

with open('other.md', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n{'='*60}")
print("EDIT SUMMARY")
print(f"{'='*60}")
print(f"Changes made: {len(changes_made)}")
for change in changes_made:
    print(f"  - {change}")
print(f"\nOriginal length: {original_len:,} characters")
print(f"New length: {len(content):,} characters")
print(f"Difference: {len(content) - original_len:+,} characters")
print(f"\nFile written to: other.md")
