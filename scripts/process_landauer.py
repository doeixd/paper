import os

def save_text_version():
    output_path = r"C:/Users/Patrick/paper/sources/text-converted/landauer_1961.txt"
    content = """--- PAGE 1 ---

R. Landauer
Irreversibility and Heat Generation in the Computing Process
IBM JOURNAL • JULY 1961

Abstract: It is argued that computing machines inevitably involve devices which perform logical functions
that do not have a single-valued inverse. This logical irreversibility is associated with physical irreversibility
and requires a minimal heat generation, per machine cycle, typically of the order of kT for each irreversible
function. This dissipation serves the purpose of standardizing signals and making them independent of their
exact logical history.

1. Introduction
The search for faster and more compact computing circuits leads directly to the question: What are the ultimate physical limitations on the progress in this direction? ... we can show, or at least very strongly suggest, that information processing is inevitably accompanied by a certain minimum amount of heat generation.

--- PAGE 2 ---

Figure 1: Bistable potential well.
Figure 2: Potential well in which ZERO and ONE state are not separated by barrier.

RESTORE TO ONE, which leaves the particle in the ONE state, regardless of its initial location. ... Note, however, that in order to avoid energy expenditure we have used two different routines, depending on the initial state of the device. This is not how a computer operates. In most instances a computer pushes information around in a manner that is independent of the exact data which are being handled.

--- PAGE 3 ---

2. Classification
Computers can be built that contain either only cryotrons, or only magnetic cores. The second class of devices consists of structures which are in a steady (time invariant) state, but in a dissipative one, while holding on to information. ... This analogy leads us to expect that in the case of the dissipative device there will be transitions from the desired state, to the other stable state, resulting from thermal agitation or quantum mechanical tunneling.

--- PAGE 4 ---

3. Logical irreversibility
We shall call a device logically irreversible if the output of a device does not uniquely define the inputs. We believe that devices exhibiting logical irreversibility are essential to computing. Logical irreversibility, we believe, in turn implies physical irreversibility, and the latter is accompanied by dissipative effects.

--- PAGE 5 ---

4. Logical irreversibility and entropy generation
Consider a statistical ensemble of bits in thermal equilibrium. If these are all reset to ONE, the number of states covered in the ensemble has been cut in half. The entropy therefore has been reduced by k loge 2 = 0.6931 k per bit. The entropy of a closed system, e.g., a computer with its own batteries, cannot decrease; hence this entropy must appear elsewhere as a heating effect, supplying 0.6931 kT per restored bit to the surroundings.

--- PAGE 8 ---

Summary
The information-bearing degrees of freedom of a computer interact with the thermal reservoir... This interaction plays two roles. First of all, it acts as a sink for the energy dissipation involved in the computation. This energy dissipation has an unavoidable minimum arising from the fact that the computer performs irreversible operations.

--- PAGE 9 ---

References
1. L. Brillouin, Science and Information Theory, Academic Press Inc., New York, New York, 1956.
2. R. Landauer and J. A. Swanson, Phys. Rev., 121, 1668 (1961).
8. D. Hilbert and W. Ackermann, Principles of Mathematical Logic, Chelsea Publishing Co., New York, 1950.
"""
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Saved text to {output_path}")

def save_summary():
    output_path = r"C:/Users/Patrick/paper/sources/detailed-source-summaries/landauer_1961_summary.md"
    summary = r"""# Source Summary: Landauer (1961)

**Full Title:** Irreversibility and Heat Generation in the Computing Process
**Author:** Rolf Landauer
**Journal:** IBM Journal of Research and Development
**Volume/Issue:** Vol. 5, No. 3
**Pages:** 183–191
**Date:** July 1961

## Key Thesis
Landauer's Principle states that any logically irreversible manipulation of information, such as the erasure of a bit or the merging of two computation paths, must be accompanied by a corresponding increase in entropy in non-information-bearing degrees of freedom of the information-processing apparatus or its environment.

## Critical Concepts
1. **Logical Irreversibility:** An operation is logically irreversible if its inputs cannot be uniquely determined from its outputs (e.g., the AND gate, or "Restore to One").
2. **Physical Cost (kT ln 2):** Erasing a single bit of information results in the dissipation of at least $kT \ln 2$ of heat (approx. $2.85 \times 10^{-21}$ Joules at room temperature).
3. **Entropy and Information:** Information is physical. Logical entropy reduction must result in physical heat generation to satisfy the Second Law of Thermodynamics.
4. **Standardization of Signals:** Reliable computation requires signal standardization to erase logical history, which necessitates dissipation.

## Relevance to EPC / Pattern Realism
The paper provides the physical grounding for why "leaky" or gerrymandered boundaries are unsustainable: they incur massive energetic costs for signal processing and error correction compared to autonomous, closed macro-states.
"""
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(summary)
    print(f"Saved summary to {output_path}")

if __name__ == "__main__":
    save_text_version()
    save_summary()
