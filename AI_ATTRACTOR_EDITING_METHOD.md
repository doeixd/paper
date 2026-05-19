# AI Attractor Editing Method

This document records a reusable method for making AI-assisted prose sound less default, less formulaic, and closer to the author's actual voice. The method is especially useful for academic philosophy, where the goal is not flamboyance but clear, precise, non-generic argument.

## Core Idea

Do not assume you can identify the model's default prose pattern from the first draft by introspection alone. The model has no perfect self-knowledge of its own high-probability habits. It is better to observe those habits directly.

The method is:

1. Select a passage that feels repetitive, too balanced, too polished, too signposted, or generically "AI."
2. Generate many nearby rephrasings in a temporary workspace.
3. Read the variants as evidence of the model's attractor state: the phrasing, rhythm, and argumentative posture it keeps drifting toward.
4. Name the attractor explicitly.
5. Revise the manuscript away from that attractor, while preserving the original argument, qualifications, citations, and scope limits.

The aim is not to make the prose strange. The aim is to avoid the averaged middle.

## Why This Works

AI prose often converges on safe rhetorical patterns:

- concession followed by qualification
- "not X, but Y" contrast structures
- repeated thesis statements in slightly different words
- over-balanced disclaimers
- smooth but generic transitions
- polished paragraph closers that feel motto-like
- repeated "the point is narrower" or "this does not mean" caveats

These patterns are not always wrong. In academic writing, some are necessary. The problem is clustering. When the same shape recurs across a paper, the prose begins to sound generated even if each sentence is defensible on its own.

By generating multiple alternatives first, the editor can see what the model keeps doing. That pattern is the thing to avoid.

## Highest-Value Targets

This method is most valuable in parts of a paper where many writers, and many AI systems, are likely to say the same thing in the same way. These are high-convergence zones: the prose is doing common academic work, so default phrasing becomes especially visible.

Use the method especially for:

- abstracts
- introductions, especially final thesis and contribution paragraphs
- conclusions
- section openings and closings
- transitions between objections and replies
- hedge clusters and scope disclaimers
- repeated thesis restatements
- concessions to rival views
- literature-positioning paragraphs
- polished final lines that risk sounding too cute, motto-like, or aphoristic
- sentences beginning with "the question is," "the result is," "the point is," or "this shows that"

These passages are not automatically bad. They are necessary parts of academic writing. They are just the places where generic phrasing is easiest to predict, easiest to reproduce, and easiest for readers to recognize.

## Workflow

### 1. Identify the Target Passage

Choose a passage where the writing feels:

- repetitive
- over-careful
- too smooth
- too thesis-like
- too obviously balanced
- too much like a prospectus
- too full of "may still," "however," "the claim is narrower," or similar caveats

Do not start by rewriting the whole section. Pick one paragraph or one small cluster.

### 2. Create a Temporary Rephrase File

Use a scratch file near the working paper, for example:

```text
pan/temp-voice-repetition-rephrases.md
```

This file is observational. It does not need to be committed unless it becomes useful documentation. Its job is to reveal patterns.

### 3. Generate Many Nearby Options

For each target, write the original passage and then generate 8 to 15 alternatives.

The alternatives should stay close to the meaning. Do not ask for wild style. Ask for controlled variation:

```text
Generate 12 rephrasings of this paragraph. Keep the philosophical claim, qualifications, and academic tone. Vary rhythm and structure. Avoid making the prose more dramatic, more slogan-like, or more ornate.
```

The point is to observe the range of plausible prose, not to pick a winner immediately.

### 4. Name the Attractor

After generating variants, ask what they have in common.

Common attractors:

- "The view may still be true, but..."
- "The issue is not X, but Y..."
- "This does not refute the view; it only..."
- "The point is narrower..."
- "The question is..."
- "The result is..."
- "What matters is..."
- "This shows that..."
- "It remains possible that..."
- "The argument does not require..."

Also look for rhythm:

- repeated two-sentence concession patterns
- paragraph closers that sound like aphorisms
- sentence pairs of the same length
- stacked short sentences that sound like a list
- overuse of colons to create fake clarity

Write the attractor down explicitly in the temp file.

Example:

```text
Attractor: concession-then-limitation rhythm.

Repeated shape:
"Panpsychism may still be true, but the hidden posits must be defended as theory."

Problem:
Accurate, but repeated too often. It makes the paper sound anxious and generated.
```

### 5. Select the Conservative Direction

Do not pick the cleverest variant. Pick the version that:

- preserves the argument
- preserves qualifications
- keeps the author's voice
- avoids repeated structure
- sounds like something a careful person would actually write
- does not introduce new jargon
- does not become cute, motto-like, or bloggy

Often the best answer is not one of the generated variants. It is a small recombination of two or three.

### 6. Edit Lightly

Apply the smallest manuscript edit that breaks the pattern.

Prefer:

- rephrasing over cutting
- merging only when repetition is real
- replacing formulaic caveats with more specific statements
- varying sentence shape
- keeping citations and scope protections intact

Do not overcorrect. A paper can become worse if every careful qualification is removed.

### 7. Re-Read for Reviewer Defensibility

After editing, check:

- Did the revision drop a caveat?
- Did it turn a conditional claim into an unconditional one?
- Did it make the argument sound more confident than the evidence allows?
- Did it remove a useful response to a predictable objection?
- Did it introduce a new phrase that sounds clever but imprecise?
- Did it replace real philosophical work with style?

If yes, restore the defensive content and look for a smaller voice edit.

## Example Pattern

Original:

```text
Panpsychism may still be true. One of its most powerful motivations, however, becomes less direct than it first appears.
```

Attractor:

```text
The view may still be true, but...
The argument does not refute X, but...
The point is not that X fails, but...
```

Better:

```text
Panpsychism remains a live metaphysical option, but one of its most powerful motivations becomes less direct than it first appears.
```

This keeps the concession but avoids the most generic disclaimer form.

## Example: Scope Signposting

Original cluster:

```text
The scope is limited.
My target is narrower.
The argument is not aimed at panpsychism as such.
```

Attractor:

The prose keeps announcing its own limits instead of letting the limits appear through the argument.

Better direction:

```text
The paper isolates one prominent motivation for panpsychism: the claim that consciousness has a special epistemic status because it is known directly from within.
```

This still narrows the target, but it does so affirmatively.

## What Not To Do

Do not use this method to make academic prose artificially quirky. Higher temperature does not mean louder prose. It means escaping the most predictable version of a sentence.

Avoid:

- decorative aphorisms
- unnecessary metaphors
- blog-style punchlines
- grand claims about the paper's importance
- fake informality
- thesaurus substitutions
- cutting caveats just because they are caveats

The best output should still sound like careful academic philosophy. It should just sound less averaged.

## Practical Prompt Template

```text
I am editing for voice, repetition, and anti-AI texture. Do not rewrite the whole section yet.

First, create a temporary rephrase workspace.

For each target passage:
1. Quote the original.
2. Generate 10 to 15 close rephrasings.
3. Identify the attractor state: repeated structure, default vocabulary, rhythm, and rhetorical posture.
4. Mark 2 or 3 conservative directions that preserve the paper's argument and qualifications.
5. Apply only small manuscript edits that avoid the attractor without becoming cute, over-written, or less defensible.

Preserve citations, philosophical qualifications, and reviewer-facing defenses. The goal is better voice, not aggressive cutting.
```

## Commit Practice

When using this method in the repository:

1. Keep the temporary rephrase file uncommitted unless it is useful as documentation.
2. Add a timestamped edit summary in `edits/` after substantial manuscript changes.
3. Compile the relevant paper if the manuscript is LaTeX or has a release workflow.
4. Commit only the manuscript, compiled deliverable when requested or expected, and the edit summary.
