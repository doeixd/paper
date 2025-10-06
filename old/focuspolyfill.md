https://open-ui.org/components/scoped-focusgroup.explainer/

Scoped Focusgroup (Explainer)
Authors: Jacques Newman
Prior contributors (from the earlier, broader focusgroup explainer): Travis Leithead, David Zearing, Chris Holt
Last updated: 2025-08-21
Table of ContentsSection titled Table%20of%20Contents
Introduction
Differences from the original explainer
CSS support is now a future consideration
Grid support is now a future consideration
Focusgroup is now scoped to specific scenarios
Supported Behaviors
Why not just add new native elements to cover these patterns?
Quickstart
Goal
Non-Goals
Principles
Use Cases
Focusgroup Concepts
Last-focused memory
Guaranteed tab stop
Shadow DOM boundaries
Key conflicts
Interactive content inside focusgroups
Restricted elements
Feature detection
Additional features
Enabling wrapping behaviors
Limiting linear focusgroup directionality
Opting-out
Disabling focusgroup memory
Adjustments to sequential focus navigation
(Future Consideration) Grid focusgroups
Applicability to tabular data
Setting up a grid focusgroup
Manual grids: row and cell connections
Grid focusgroup nesting
Empty Cell data
Non-uniform cells
(Future Consideration) Additional Keyboard support
Alternatives considered
Open Questions
Privacy and Security Considerations
Privacy
Security
Design decisions
Index of focusgroup values
Acknowledgments
IntroductionSection titled Introduction
Authors routinely hand-code “roving tabindex” logic for composite widgets like toolbars, tablists, menus, listboxes, and grids. In practice, this means providing a single tab stop to enter the control, then using arrow keys to move focus between items.

Authors may use the proposed focusgroup HTML attribute to declare that a subtree of focusable elements will get:

Focus navigation (not selection) using keyboard directional arrow keys (for lists or grids).
A guaranteed tab stop (when at least one focusable element is present).
Automatic return to the last focused focusable element.
Optional limited-axis arrow key navigation and optional wrap-around semantics.
By standardizing focusgroup, authors can leverage these behaviors in control patterns to provide users with keyboard consistency, default accessibility, and interoperability over existing solutions.

While this document emphasizes the usage of the keyboard arrow keys for accessibility navigation, we acknowledge that there are other input modalities that work (or can be adapted to work) equally well for focusgroup navigation behavior (e.g., game controllers, gesture recognizers, touch-based assistive technologies (AT), etc.).

Benefits over ad-hoc scripts (FocusZone, Tabster, bespoke roving tabindex): less boilerplate, standardized axis + wrap behavior (including RTL / vertical), reduced misapplication, and a consistent, testable baseline for AT and UA interoperability.

Before / After at a glance:Section titled Before%20/%20After%20at%20a%20glance%3A
Before (manual roving tabindex JS):

<div role="toolbar" aria-label="Text formatting" id="fmtToolbar">
  <button type="button">Bold</button>
  <button type="button">Italic</button>
  <button type="button">Underline</button>
</div>
<script>
  // Without focusgroup an author script must implement:
  //  - Focus management (roving tabindex: keep exactly one item tabbable, skip disabled/hidden).
  //  - Keyboard navigation (Arrow keys, Home/End, optional wrap, writing mode/RTL handling).
  //  - Memory (restore last focused item on re-entry).
  // Plus any domain logic (selection state, toggles, menus, tooltips, custom commands, etc.).
  // focusgroup makes the first three bullets declarative; authors keep only selection & feature logic.
</script>
After (single declarative attribute):

<div focusgroup="toolbar wrap" aria-label="Text formatting">
  <button type="button">Bold</button>
  <button type="button">Italic</button>
  <button type="button">Underline</button>
  <script>
    // Now with focusgroup, the author only needs to implement selection & feature logic.
  </script>
</div>
What changed:

focusgroup="toolbar wrap" supplies the role (first token) + wrap behavior.
Roving tabindex + arrow key handling + memory are native (no JS for core movement).
Selection / pressed state (e.g., toggling Bold) and any advanced commands remain author logic.
Differences from the original explainerSection titled Differences%20from%20the%20original%20explainer
Original focusgroup explainer.

CSS support is now a future considerationSection titled CSS%20support%20is%20now%20a%20future%20consideration
Applying focusgroup (and related behaviors) via CSS is out of scope for this explainer and deferred for a possible, backwards-compatible future addition.

Grid support is now a future considerationSection titled Grid%20support%20is%20now%20a%20future%20consideration
Applying focusgroup to grid-like structures (2-D navigation) is out of scope for this explainer and deferred for a possible, backwards-compatible future addition.

Focusgroup is now scoped to specific scenariosSection titled Focusgroup%20is%20now%20scoped%20to%20specific%20scenarios
Earlier drafts explored applying focusgroup to any container. Broad, role-agnostic usage risks normalizing arrow navigation in semantically neutral wrappers (“div soup”), masking missing semantics and creating unexpected keyboard loops. The proposal now:

Limits activation to a concise, enumerated set of behavior tokens associated with recognized widget patterns.
Allows (when omitted) safe child role inference for common item types to reduce boilerplate and steer toward APG-aligned structures.
Keeps ARIA roles semantic-only: the focusgroup attribute supplies behavior intent; an explicit role attribute remains optional unless the author needs a different role than the first token.
Benefits of this scoped, behavior-first approach:

Guardrails: Prevents accidental application to arbitrary layout groupings without a recognized composite role.
Ergonomics: One attribute encodes both composite intent and navigation modifiers (wrap, inline, etc.).
Extensibility: Additional composite roles (or a role-agnostic mode) can be considered later based on demonstrated accessible patterns; narrowing later would be impractical.
Open aspects still under discussion appear in the Open Questions (e.g., set of supported behaviors, child role inference).

Supported BehaviorsSection titled Supported%20Behaviors
The first token in a focusgroup attribute is a behavior token. A behavior token declares an interaction pattern (e.g., toolbar behavior). User agents MUST expose a corresponding minimum ARIA role for accessibility if the author does not supply an explicit, compatible role or if the author doesn’t use a native element with a recognized role. This separates interaction (behavior) from semantics (role mapping) while keeping authoring terse. Minimum role application (container & children): User agents apply the minimum container role for a behavior only when (a) the author has not provided an explicit role AND (b) the element would otherwise expose a generic role (e.g., a plain <div>/<span>). If the host already has non-generic native semantics (e.g., <ul>, <nav>, <table>) or an explicit role, the mapping is skipped; navigation behavior still applies. Child role inference likewise only occurs when: (1) the container role was supplied via the behavior’s minimum role mapping (not explicit/native), (2) the child lacks an explicit role, and (3) the child itself is otherwise generic or less specific than the inferred role. Native interactive elements (buttons, links, inputs, etc.) or anything with an explicit/non-generic role are never overwritten.

Current behavior tokens (APG alignment & minimum roles):

Behavior	APG-aligned pattern name	Minimum container role (when applied)	Minimum child role(s) (when applied)
toolbar	Toolbar	toolbar	(none)
tablist	Tabs	tablist	tab
radiogroup	Radio Group	radiogroup	radio
listbox	Listbox	listbox	option
menu	Menu	menu	menuitem (upgrade/variant not inferred)
menubar	Menubar	menubar	menuitem
grid (future)	Grid (2-D)	grid	(TBD)
Behavior → role mapping & precedenceSection titled Behavior%20%u2192%20role%20mapping%20%26%20precedence
No explicit container role: UA maps behavior token to its minimum role (subject to minimum-role conditions described above).
Explicit container role identical to minimum role: keep as-is.
Explicit compatible composite role: keep explicit role; behavior navigation still activates.
Explicit incompatible role (e.g., button): UA MAY activate a developer warning.
Child role inference only runs when: (a) container role came from behavior mapping, (b) descendant is managed (not opted-out), (c) behavior defines an inferred child role, (d) descendant lacks explicit role, (e) inference would not replace richer native semantics. This endures an inferred, minimum role will never override an explicit role.
Inference never upgrades variant types (e.g., menuitemcheckbox vs menuitemradio)—authors must specify those explicitly.
This approach separates behavioral intent (token) from accessibility semantics (minimum role mapping) and addresses concerns about reusing ARIA role strings directly as activation tokens.

Why not just add new native elements to cover these patterns?Section titled Why%20not%20just%20add%20new%20native%20elements%20to%20cover%20these%20patterns%3F
There are already proposals to add native versions of several of the patterns focusgroup would help with, rather than introduce this new attribute, why shouldn’t we instead focus on building these patterns directly into HTML?

Reasons to pursue focusgroup in parallel:

Author choice (custom elements / design systems): Many teams intentionally wrap primitives in web components or framework components and may not adopt new native container elements even if available. focusgroup lets them keep existing markup patterns while still standardizing navigation and reducing JS.
Incremental flexibility: Adding a new eligible behavior token (and optional child inference) is a far smaller spec and implementation change than introducing a new HTML element with parsing, styling, accessibility mapping, and legacy considerations.
Low friction upgrade path: Existing ARIA patterns (toolbar of buttons, listbox of options) become declarative with a single attribute rather than refactoring to new tags.
Progressive expansion: We can start with a minimal, consensus set (toolbar, tablist, radiogroup, listbox, menu/menubar) and add more patterns as needed.
Minimal surface risk: An attribute opt-in is easier to ship, iterate, or adjust (including potential deprecation of an unused token) than an element baked into the content model.
Immediate boilerplate win: Solves today’s repetitive roving tabindex logic without waiting for multiple element proposals to mature and achieve cross-browser implementation.
focusgroup doesn’t replace, but complements native elements. It standardizes a widely re-implemented behavioral layer and leaves room for richer, purpose-built elements to integrate or rely on it later.

QuickstartSection titled Quickstart
The following examples start with the most common composite: a formatting toolbar.

In this example, the author is using a tab control pattern where the tab activation behavior is decoupled from selection (“manual tab activation”):

<div focusgroup="tablist inline wrap no-memory" aria-label="Common Operating Systems">
  <button id="tab-1" aria-selected="false" aria-controls="tabpanel-1" tabindex="-1">macOS</button>
  <button id="tab-2" aria-selected="true" aria-controls="tabpanel-2" tabindex="0">Windows</button>
  <button id="tab-3" aria-selected="false" aria-controls="tabpanel-3" tabindex="-1">Linux</button>
</div>
<div id="tabpanel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1" hidden> … </div>
<div id="tabpanel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2"> … </div>
<div id="tabpanel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden> … </div>
What to notice:

Sequential focus navigation within a focusgroup is respected. When entering the focusgroup, focus will always go to the first selected tab (with tabindex=0). The no-memory value prevents the focusgroup from remembering the last focused tab so that focus will always go to the selected tab on re-entry regardless of which element was focused last.
If focus is moved via left arrow key to tab-1, then pressing the tab key moves focus to tabpanel-2 which is next in sequential focus navigation order (because the other role=tabpanels are hidden).
focus will wrap from one end of the tablist to the other because of focusgroup=wrap attribute value.
the up and down arrow keys will not move the focus because of focusgroup="inline" which restricts the axis of movement to keyboard directional arrow keys in the role="tablist"’s inline direction (assuming the <div>’s writing-mode is horizontal-tb).
The author code required to manage the selection of a tab is omitted for brevity. Such code on tab selection change would update aria-selected values, the hidden state of the controlled role="tabpanel" and the tabindex values of tabs such that the newly selected role="tab" element is tabindex="0" while all others are tabindex="-1".
In a third example, the author is creating a navigation menubar. Both menuitems in the menubar (“About” and “Admissions”) have popover menus. The “Admissions” menu has an additional submenu under “Tuition”.

<ul focusgroup="menubar inline wrap" aria-label="Mythical University">
  <li role="none">
    <a popovertarget="aboutpop" href="…" tabindex="-1" title="">About</a>
    <ul focusgroup="menu block wrap" autofocus id="aboutpop" aria-label="About" popover>
      <li role="none"><a href="…" tabindex="-1" title="">Overview</a></li>
      <li role="none"><a href="…" tabindex="-1" title="">Administration</a></li>
    </ul>
  </li>
  <li role="none">
    <a popovertarget="admitpop" href="…" tabindex="-1" title="">Admissions</a>
    <ul focusgroup="menu block wrap" autofocus id="admitpop" aria-label="Admissions" popover>
      <li role="none"><a href="…" tabindex="-1" title="">Apply</a></li>
      <li role="none">
        <a popovertarget="tuitpop" href="…" tabindex="-1" title="">Tuition</a>
        <ul focusgroup="menu block wrap" autofocus id="tuitpop" aria-label="Tuition" popover>
          <li role="none"><a href="…" tabindex="-1" title="">Undergraduate</a></li>
          <li role="none"><a href="…" tabindex="-1" title="">Graduate</a></li>
        </ul>
      </li>
      <li role="none"><a href="…" tabindex="-1" title="">Visit</a></li>
    </ul>
  </li>
</ul>
What to notice:

focusgroup declarations can be nested inside of other focusgroups. When a nested focusgroup is declared on an element, it creates a new focusgroup and opts-out of its ancestor focusgroup.
menuitems in role=menubar are limited to inline-direction arrow keys (e.g., left and right), while menuitems in role=menu are limited to block-direction arrow keys (e.g., up and down). This allows the orthogonal arrow keys (e.g., up and down on the menubar, left and right on the menus) to be used for activation purposes (extra code that is not shown in the example).
Placement of focus on the menus (the nested focusgroups) from the menubar is not a feature of focusgroup (nested focusgroups are completely independent of their ancestor focusgroup). In this case, the focus placement is handled by built-in popover and autofocus attribute behaviors.
the “memory” of the nested focusgroups is reset when the content is hidden/shown—this allows the autofocus attribute to pick the first focusable element each time a menu is shown—the desired behavior in this case.
Here, the author is creating a data grid following the data grid pattern where each of the cells in the table are focusable.

<table focusgroup="grid" role="grid" aria-label="Transactions">
  <tbody><tr>
    <th>Date</th>
    <th>Type</th>
    <th>Description</th>
    <th>Amount</th>
    <th>Balance</th>
  </tr>
  <tr>
    <td tabindex="-1">01-Jan-16</td>
    <td tabindex="-1">Deposit</td>
    <td><a tabindex="-1" href="#">Cash Deposit</a></td>
    <td tabindex="-1">$1,000,000.00</td>
    <td tabindex="-1">$1,000,000.00</td>
  </tr>
  <tr>
    <td tabindex="-1">02-Jan-16</td>
    <td tabindex="-1">Debit</td>
    <td><a tabindex="-1" href="#">Downtown Grocery</a></td>
    <td tabindex="-1">$250.00</td>
    <td tabindex="-1">$999,750.00</td>
  </tr>
</tbody></table>
What to notice:

focusgroup=grid understands table layout and will provide logical cell navigation with arrow keys around all the focusable grid cells.
<th> header cells are not made focusable in this example, and so are not navigable by the focusgroup.
all focusable elements are declared with tabindex=-1 to take them out of sequential focus navigation. The focusgroup ensures that at least one of these focusable elements participates in the sequential focus navigation order regardless. The focusgroup also remembers the last focused element, and returns the user to that element when they re-enter the table via sequential focus navigation.
Opt-out subtree (explicit example):

<div focusgroup="toolbar inline wrap">
  <button tabindex="-1">A</button>
  <span focusgroup="none">
    <button tabindex="-1">(Not arrow reachable)</button>
  </span>
  <button tabindex="-1">B</button>
</div>
Items inside the focusgroup="none" span are skipped by arrow navigation.

What to notice:

The opt-out subtree removes its focusable descendants from arrow traversal (ancestor toolbar is eligible) but they remain reachable via Tab.
Arrow navigation treats the subtree as a single gap—focus jumps from the item before to the item after.
Useful for excluding infrequent/disruptive controls (e.g., help buttons) from high-frequency arrow flows.
Empirical misuse in uncontrolled contexts; correct usage clusters around APG-backed widget roles. Scoping lowers ambiguity and accelerates interoperable implementation.

Interactions with explicit role vs behavior token mapping; also see open question around child role inference

<nav id="one" focusgroup="menu inline wrap" aria-label="Formatting">
  <button tabindex="0">Bold</button>
  <button role="menuitemcheckbox" aria-checked="true" tabindex="-1">Italics</button>
  <button tabindex="-1">Underline</button>
</nav>
<div id="two" role="toolbar" focusgroup="radiogroup wrap">
  <button type="button" tabindex="0">Bold</button>
  <button type="button" tabindex="-1">Italic</button>
  <button type="button" tabindex="-1">Underline</button>
</div>
What to notice:

In #one, descendants without explicit roles (Bold, Underline) are inferred as menuitem; the explicit menuitemcheckbox (Italics) is unchanged.
Inference skips ambiguity: it does not guess a variant (menuitemradio vs menuitemcheckbox).
In #two, the explicit container role="toolbar" overrides the first token radiogroup; no radio inference occurs (tokens only supply navigation behavior).
Arrow key navigation, wrap, and memory behaviors apply in both #one and #two regardless of whether roles were inferred.
Authors can obtain behavior without pattern role inference by supplying an explicit conflicting container role when needed.
GoalSection titled Goal
The goal of this feature is to “pave the cow path” of an existing authoring practice (and accessibility best practice) implemented in nearly every Web UI library: the roving tabindex [react, angular, fluent, elix]]. Note however, that certain design choices have been made to generalize the behavior so that additional scenarios are possible. See comparing roving tabindex and focusgroup for further details.

To achieve this goal, we believe the solution must be available in declarative markup. If JavaScript is required, then there seems little advantage to using a built-in feature over what can be implemented completely in author code. Furthermore, a declarative solution provides the key signal that allows the platform’s accessibility infrastructure to make the focusgroup accessible by default by:

providing a consistent and reliable navigation usage pattern for users with no extra author code required.
requiring no new screen reader features: the behaviors (roving tabindex, arrow + Home/End movement, optional wrap, last-focused memory) already function today when authored via JavaScript, focusgroup standardizes intent without introducing novel interaction semantics.
Because focusgroup requires authors to specify a pattern, and the aria-role of the element and controlled descendants are set appropriately, there should be no need for user agents to signal the AT to switch to a “Focus mode” by default (the user has entered a control group).
Non-GoalsSection titled Non-Goals
Selection Management In some control patterns (such as radio groups or tablists) moving the focus to an element also toggles its selection state. While some use cases will require the selection state to follow the focus, in others these need to be decoupled. focusgroup is decoupled from selection. Tracking and changing selection based on focus will require author code. Note that a related proposal for tracking selection state, CSS Toggles, is no longer being pursued.

Visual Indicators Implementations are welcome to experiment with additional UI (e.g., a “focusgroup focus ring”) in order to help make users aware of focusgroups, however this proposal does not include any specific guidelines or recommendations.

Generic Container Navigation This explainer proposes that focusgroup should be limited to a specific set of roles to ensure we don’t encourage confusing or inaccessible behavior.

PrinciplesSection titled Principles
Intuitive use in declarative scenarios. Focusgroups
are easy to reason about (self-documenting) in the source markup.
provide a rational behavior when nested.
integrate well with other related platform semantics (e.g., tabindex).
Focusgroups are easy to maintain and configure.
Configuration is managed in one place.
Provide easy to understand usage into HTML patterns.
Avoid “spidery connections” e.g., using IDRefs or custom names that are hard to maintain.
Complimentary declarative representations in HTML
HTML attributes offers focusgroup usage directly with impacted content and provide for the most straightforward scenarios.
Use CasesSection titled Use%20Cases
(Element and subtree opt-in) A focusable element with a supported role and its entire subtree can participate in a single focusgroup.
(Cross Shadow DOM) Focusable elements contained inside a Shadow DOM are discoverable and focusable when their Shadow Host or an ancestor element declares a focusgroup.
(Wrap) A focusgroup can be configured to have wrap-around focus semantics.
(Limit directional arrow keys) A focusgroup can be configured to respond to either the logical inline-axis navigation keys (e.g., left and right arrow keys when the focusgroup is in a horizontal-tb writing mode) or block-axis navigation keys or both (to trivially reserve one axis of arrow key behavior for supplementary actions, such as opening nodes in a tree view control). See CSS Logical Properties and Values for more about logical directions.
(Focus movement arrow keys follow content direction) The user’s arrow key presses move the focus forward or backward in the DOM according to the writing mode and directionality of the content. E.g., in RTL, an Arrow-Left key moves the focus forward according to the content direction.
(Opt-out) Individual elements can opt-out of focusgroup participation.
(Grid) A focusgroup can be used for grid-type navigation (<table>-structured content or other grid-like structured content).
A use case we are evaluating:

(Grid) A focusgroup can be used on elements with display: grid to provide 2d grid navigation.
Focusgroup ConceptsSection titled Focusgroup%20Concepts
A focusgroup is a group of related elements that can be navigated by directional arrow keys and home/end keys and for which the web platform provides the navigation behavior by default. No JavaScript event handlers needed in many cases! The behavior of arrow keys depends on the content’s writing mode. Keys pointing toward the block-end or inline-end navigate forward, while keys pointing toward block-start or inline-start navigate backward.

There are two kinds of focusgroups: linear focusgroups and grid focusgroups. Linear focusgroups provide arrow key navigation among a list of elements. Grid focusgroups provide arrow key navigation behavior for tabular (or 2-dimensional) data structures.

focusgroup or focusgroup="<behavior>" (where <behavior> is one of the non-grid behaviors) defines a linear focusgroup.
focusgroup="grid" defines a grid focusgroup (2-D navigation).
Focusgroups consist of a focusgroup definition that establishes focusgroup candidates and focusgroup items. Focusgroup definitions manage the desired behavior for the associated focusgroup items. Focusgroup items are the elements that actually participate in the focusgroup (from the set of focusgroup candidates). Focusgroup candidates are all the elements under the scope of a focusgroup definition. The focusgroup scope consists of the element with the focusgroup definition and its shadow-inclusive descendants, excluding elements that have opted out.

The minimal focusgroup below demonstrates that the element declaring a focusgroup is also a focusgroup candidate and (in this case) the single focusgroup item.

<div focusgroup="toolbar">
  <button type="button">Only control</button>
</div>
Focusgroup candidates become focusgroup items if they are focusable, e.g., implicitly focusable elements like <button> or explicitly made focusable via tabindex (e.g., a custom element or contenteditable).

An element can only have one focusgroup definition added via the focusgroup attribute:

Example (toolbar with multiple items and one roving tab stop):

<div id="ancestor" focusgroup="toolbar">
  <button id="one" type="button">Bold</button>
  <button id="two" type="button" tabindex="-1">Italic</button>
  <button id="three" type="button" tabindex="-1">Underline</button>
</div>
The ancestor element has the focusgroup definition. The elements with id=one, two, and three (and any other shadow-inclusive descendants of ancestor that may be added) are focusgroup candidates. Because each of these candidates are focusable, they are also focusgroup items. When one of the focusgroup items becomes focused, the user can move focus sequentially among all the focusgroup items using the arrow keys (up/right moves focus forward, down/left moves focus backwards assuming the <p> element has writing-mode horizontal-tb and direction ltr).

Note that only the elements with id=one and id=three can be focused using the Tab key. The element with id=two has tabindex="-1", which takes it out of sequential focus navigation ordering.

Last-focused memorySection titled Last-focused%20memory
By default, focusgroups will remember the last-focused element, and for sequential focus navigation, will restore focus to that element when a focusgroup is re-entered. This is important for large lists or tables so that users are returned the context they previously left without having to navigate from the start or end sequentially.

The focusgroup’s memory is initially empty. In that state, sequential focus navigation will pick the next element to focus using existing platform behavior with the exception noted below.

The focusgroup’s memory is cleared if the last-focused item becomes non-focusable or if its relationship to the focusgroup container changes (e.g., it is removed from the DOM). See additional details below.

Guaranteed tab stopSection titled Guaranteed%20tab%20stop
Focusgroups provide a special behavior when used in conjunction with sequential focus navigation (“tab navigation”). Focusgroups ensure that at least one focusgroup item will participate in sequential focus navigation even if all focusgroup items are declared to opt-out via tabindex=-1. This behavior ensures that a focusgroup can always be entered via sequential focus navigation. See below for further details. Aside from this one behavior change, there is no other impact to the way tab navigation works with tabindex nor the tab ordering behavior.

Focusgroups can therefore be used to provide a roving tabindex among a set of related focusable controls such as this menubar:

Example:

<div focusgroup="toolbar" aria-label="Text Formatting" aria-controls="…">
  <div>
    <button type="button" aria-pressed="false" value="bold" tabindex="-1"><span>Bold</span></button>
    <button type="button" aria-pressed="false" value="italic" tabindex="-1"><span>Italic</span></button>
    <button type="button" aria-pressed="false" value="underline" tabindex="-1"><span>Underline</span></button>
  </div>
</div>
When pressing tab to enter this “toolbar” focusgroup from an element before it, focus will go to the first <button> because:

There is no other element within the focusgroup with a tabindex >= 0 or that is sequentially focusable by default (these <button>s are taken out of sequential focus navigation with tabindex=-1).
This focusgroup has no “memory” of a last-focused element within (e.g., it has not been entered before).
Since neither of the above cases resulted in focusing an alternate element, then the first focusgroup item in the group is focused.
At this point, the user can use the arrow keys to move from the beginning of the toolbar to the end, or press tab again to move outside of the focusgroup.

Alternatively, focusgroup can be used to supplement existing tab-stop behavior to provide arrow key navigational support in addition to tab navigation. No problem: just ensure the desired elements are sequentially focusable via tabindex="0" (or stop excluding them via tabindex="-1"):

Example:

<div focusgroup="toolbar" aria-label="Text Formatting" aria-controls="…">
  <div>
    <button type="button" aria-pressed="false" value="bold"><span>Bold</span></button>
    <button type="button" aria-pressed="false" value="italic"><span>Italic</span></button>
    <button type="button" aria-pressed="false" value="underline"><span>Underline</span></button>
  </div>
</div>
Shadow DOM boundariesSection titled Shadow%20DOM%20boundaries
Focusgroup definitions apply across Shadow DOM boundaries in order to make it easy for component developers to support focusgroup behavior across component boundaries. (Component authors that want to opt-out of this behavior can do so.)

Example:

<list-component focusgroup role="listbox" aria-label="Cute dogs">
  <template shadowrootmode="open">
    <my-listitem role="option" tabindex="0" aria-selected="true">Terrier</my-listitem>
  <my-listitem role="option" tabindex="-1" aria-selected="false">Dalmatian</my-listitem>
    <my-listitem role="option" tabindex="-1" aria-selected="false">Saint Bernard</my-listitem>
  </template>
</list-component>
Key conflictsSection titled Key%20conflicts
The focusgroup is a default handler for certain keystrokes (keydown events for arrow keys, home/end, etc.) that will cause focus to move among focusgroup items. This default keyboard handling could interfere with other actions the application would like to take. A common pattern is to limit focusgroup directionality so that certain cross-axis keystrokes won’t trigger focusgroup behavior. However, if this doesn’t address the use case, then authors may cancel the focusgroup’s default behavior at any time by canceling (preventDefault()) the specific keydown event. Keydown events are dispatched by the currently focused element, and bubble through the focusgroup ancestor element in most cases.

Interactive content inside focusgroupsSection titled Interactive%20content%20inside%20focusgroups
Some built-in controls like <input type=text> provide keyboard behaviors that “trap” nearly all keys that would be handled by the focusgroup. Others such as <input type=number> trap only certain keys like the arrow keys that are also used for focusgroup navigation. This proposal does not provide a built-in workaround to prevent this from happening. Instead, authors are advised to be sure users can “escape” these elements. Built-in elements provide this via the tab key. Other strategies might include requiring an “activation” step before putting focus into the interactive control (and an Esc key exit to leave).

The focusgroup’s memory may also cause unexpected user interactions if authors are not careful. For example, without any author mitigations, an interactive control inside a focusgroup may inadvertently prevent the user from accessing other focusgroup items:

<div focusgroup="toolbar" aria-label="Font Adjustment" aria-controls="…">
  <label for="font-input">Font</label>
  <div>
    <div>
      <input type="text" id="font-input" role="combobox" aria-autocomplete="both" aria-expanded="false" aria-controls="font-listbox" aria-activedescendant="">
      <button type="button" aria-label="Font List" aria-expanded="false" aria-controls="font-listbox" tabindex="-1">🔽</button>
    </div>
    <ul id="font-listbox" role="listbox" aria-label="Font List">
      <li role="option">Arial</li>
      <li role="option">Monospace</li>
      <li role="option">Verdana</li>
    </ul>
  </div>
  <button type="button" value="bigger" tabindex="-1"><span>Increase Font</span></button>
  <button type="button" value="smaller" tabindex="-1"><span>Decrease Font</span></button>
</div>
When the combobox input element is focused, it is remembered by the focusgroup’s memory. The <input> element traps nearly all keystrokes by default, including the arrow keys that might have been used to reach the “Increase/Decrease Font” buttons. When the user presses tab, focus exits the focusgroup. Later, when focus re-enters, the focusgroup will put focus back on the <input> element (because of its memory), and the cycle continues with no way to get to the two following buttons via keyboard interaction alone.

Fortunately, there are several solutions to this problem:

Remove tabindex=-1 from the “Increase/Decrease Font” buttons.
Move the “Increase/Decrease Font” buttons before the combobox. (Refer to “Avoid including controls whose operation requires the pair of arrow keys used for toolbar navigation” in the Toolbar control pattern.) Additionally, opt-out the <input> control from focusgroup participation so that arrow keys skip it. Alternatively, turn off the focusgroup’s memory so that focus isn’t automatically returned to the combobox.
Use script to intercept focusgroup-related keydown events on the <input> and move focus manually. Also consider limiting the focusgroup to one axis and reserving the other axis for operating the <input>.
Restricted elementsSection titled Restricted%20elements
Because focusgroup definitions are intended for grouping related controls, it does not make sense to provide focusgroup functionality on all elements. While the focusgroup attribute may be defined as a global attribute, its applicability is limited to a subset of behaviors, requiring the author to specify the behavior their control follows when using focusgroup, see: supported behaviors

The current proposal is to limit focusgroup to only the elements whose name match the DOM’s valid shadow host names (which are the elements allowed to call attachShadow()). However, <table> and some table parts will need to be an exception in order to properly support grid focusgroups.

Feature detectionSection titled Feature%20detection
To enable feature detection, the DOM will include a focusgroup property, whose existence on elements is useful for feature detection.

partial interface HTMLElement {
  [CEReactions] attribute DOMString focusgroup;
};
Additional featuresSection titled Additional%20features
Focusgroups have the following additional features:

Wrap-around semantics - what to do when attempting to move past the end of a focusgroup. The default/initial value is no-wrap, which means that focus is not moved past the ends of a focusgroup with the arrow keys. wrap and other tabular wrapping behaviors are available for grid focusgroups.
Directional axis limits - applies to linear focusgroups only; respond to arrow keys in one axis only (either up/down or left/right when the arrow key pressed matches the corresponding flow of the content). By default, linear focusgroups respond to all four arrow keys.
focusgroup candidacy opt-out - prevent an element and its shadow-inclusive descendants from participating in an anscester’s focusgroup.
Memory opt-out - prevent the focusgroup from remembering what the last focused element was when focus leaves a focusgroup. By default focusgroups remember that element and will restore the focus to that element when the focusgroup is re-entered via sequential focus navigation.
These feature options are applied as space-separated token values to the focusgroup attribute.

Enabling wrapping behaviorsSection titled Enabling%20wrapping%20behaviors
By default, focusgroup traversal with arrow keys ends at boundaries of the focusgroup (the start and end of a linear focusgroup, and the start and end of both rows and columns in a grid focusgroup). The following focusgroup definition values change this behavior:

HTML (attribute value)	Applies To	Effect
focusgroup="<behavior>" (where <behavior> is one of the non-grid behaviors)	linear	No wrapping; edges are hard stops.
focusgroup="<behavior> wrap" (where <behavior> is one of the non-grid behaviors)	linear	Moving past one end wraps focus to the opposite end.
(default) focusgroup="grid"	grid	No wrapping; row and column edges are hard stops.
focusgroup="grid wrap"	grid	Rows and columns wrap within their own row/column (end → start of same row/column).
focusgroup="grid row-wrap"	grid	Rows wrap; columns do not.
focusgroup="grid col-wrap"	grid	Columns wrap; rows do not.
focusgroup="grid flow"	grid	Moving past row end jumps to start of NEXT row (and reverse); same for columns. Last row/column flows to first.
focusgroup="grid row-flow"	grid	Rows flow; columns are hard stops.
focusgroup="grid col-flow"	grid	Columns flow; rows are hard stops.
focusgroup="grid row-wrap col-flow"	grid	Rows wrap; columns flow.
focusgroup="grid row-flow col-wrap"	grid	Rows flow; columns wrap.
Specifying both row-wrap and row-flow in one HTML focusgroup definition is an author error. Only one declaration for row behavior is allowed. Similarly for col-wrap and col-flow.

Limiting linear focusgroup directionalitySection titled Limiting%20linear%20focusgroup%20directionality
In many cases, having multi-axis directional movement (e.g., both right arrow and down arrow linked to the forward direction) is not desirable, such as when implementing a tablist control pattern, in which case it may not make sense for the up and down arrows to also move the focus left and right. Likewise, when moving up and down in a vertical menu, the author might wish to use JavaScript to provide other behavior for the left and right arrow keys such as opening or closing sub-menus. In these situations, authors can limit the linear focusgroup to one-axis traversal.

Note that the following only apply to linear focusgroup definitions (they have no effect on grid focusgroups).

Note: <behavior> below refers to one of the non-grid behaviors.

HTML (attribute value)	Explanation
(default) focusgroup="<behavior>"	Items respond to forward/backward movement via both inline and block arrow keys (where they map to forward/back).
focusgroup="<behavior> inline"	Items respond only to arrow keys parallel to the inline axis (e.g., Left/Right in horizontal-tb).
focusgroup="<behavior> block"	Items respond only to arrow keys parallel to the block axis (e.g., Up/Down in vertical menus or vertical writing modes).
Example:

<tab-group role="tablist" focusgroup="inline wrap">
  <a-tab role="tab" tabindex="0" aria-selected="true" aria-controls="…">…</a-tab>
  <a-tab role="tab" tabindex="-1" aria-selected="false" aria-controls="…">…</a-tab>
  <a-tab role="tab" tabindex="-1" aria-selected="false" aria-controls="…">…</a-tab>
</tab-group>
In the above example, when the focus is on the first <a-tab> element, pressing either the up or down arrow key does nothing because the focusgroup is configured to only respond to the inline (left/right in this case) arrow keys.

Because 2-axis directionality is the default, specifying both inline and block at the same time on one focusgroup is not allowed:

Example:

<!-- This is an example of what NOT TO DO -->
<radiobutton-group focusgroup="inline block wrap" role="radiogroup">
  ⚠️This `focusgroup` configuration is an error--neither constraint will be applied (which is actually
  what the author intended).
</radiobutton-group>
Opting-outSection titled Opting-out
focusgroup definitions assigned to an element create focusgroup candidates that include the element itself and all its shadow-inclusive descendant elements. Any element within that focusgroup scope that is (or becomes) focusable will automatically become a focusgroup item belonging to its ancestor’s focusgroup.

With such an expansive opt-in behavior, it is important to provide an opt-out for elements or element subtrees. For example: focusable elements that wish to remain in sequential focus navigation and have arrow key navigation pass them over; or, components nested across a Shadow DOM boundary that wish to be excluded from focusgroup participation.

Opting-out applies to the element making the declaration as well as its shadow-inclusive descendants.

To opt-out:

HTML (attribute value)	Explanation
focusgroup="none"	Opt-out: this element and its shadow-inclusive descendants are not considered focusgroup candidates.
In the following example of a toolbar, a help section opts-out of focusgroup behavior so that any interactive content inside it is bypassed when arrowing among the primary formatting controls.

Example:

<div focusgroup="toolbar inline wrap" aria-label="Text formatting">
  <button type="button" tabindex="-1">Bold</button>
  <button type="button" tabindex="-1">Italic</button>
  <span focusgroup="none" aria-label="Help group">
    <button type="button">Help</button>
    <button type="button">Shortcuts</button>
  </span>
  <button type="button" tabindex="-1">Underline</button>
</div>
When a focusgroup definition is applied to an element, it implicitly opts out of any ancestor’s focusgroups. This ensures that every element can only belong in one focusgroup at a time.

Example:

<ul role="menubar" focusgroup aria-label="Site">
  <li role="none">
    <ul role="menu" focusgroup aria-label="Products">
      <li role="none"><button role="menuitem" tabindex="-1">Item A</button></li>
      <li role="none">
        <ul role="menu" focusgroup aria-label="More">
          <li role="none"><button role="menuitem" tabindex="-1">Sub A1</button></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
The outer menubar ul[role="menubar"][focusgroup] defines one focusgroup (its direct menuitems would participate when present).
The first nested ul[role="menu"][focusgroup] creates an independent focusgroup and is implicitly not part of the menubar’s arrow navigation.
The innermost ul[role="menu"][focusgroup] (submenu) defines yet another independent focusgroup, likewise not part of its ancestor menu’s focusgroup; its menuitem participates only in that deepest scope.
Disabling focusgroup memorySection titled Disabling%20focusgroup%20memory
By default, when a linear or grid focusgroup is defined it includes a “memory” of the last-focused element within its scope, initially empty. Each time the focus is changed within a focusgroup, the “memory” is updated to refer to that element. This behavior is akin to the roving tabindex in which the “memory” is the stateful tabindex="0" value assigned to the currently focused element.

In some scenarios it is not desirable to have a focusgroup maintain a memory. Usually this is because there is a more relevant element which should take focus when entering the focusgroup instead of the most-recently-focused element. For example, an active (selected) tab in a role="tablist" container, rather than the last-focused tab (when selection does not follow focus).

To disable the focusgroup’s default memory, use the value no-memory:

Note: <behavior> below refers to any valid focusgroup behavior.

HTML (attribute value)	Explanation
(default) focusgroup="<behavior>"	focusgroup remembers the last-focused element and redirects focus to it when entered via sequential focus navigation.
focusgroup="<behavior> no-memory"	focusgroup will not remember the last-focused element.
After the focusgroup’s memory has been set, it must be cleared whenever any one of the following change:

The element with the focusgroup definition is hidden or un-hidden; or if the currently remembered element is hidden or un-hidden.
The element with the focusgroup definition has its disabled or inert status changed; or if the currently remembered element has its disabled or inert status changed.
The element with the focusgroup definition is removed from the shadow-inclusive tree; or if the currently remembered element is removed from the shadow-inclusive tree.
The currently remembered element stops being focusable (e.g., a <div> with a tabindex has its tabindex attribute removed).
The currently remembered element is changed to become excluded from the focusgroup (through focusgroup="none" on itself or a shadow-inclusive ancestor, or by changingfocusgroups: if a newfocusgroup` definition appears on itself or one of its shadow-inclusive ancestor elements).
Adjustments to sequential focus navigationSection titled Adjustments%20to%20sequential%20focus%20navigation
To ensure that a focusgroup always has at least one tab stop in the sequential focus navigation order, and to provide the appropriate “hook” for a focusgroup’s “memory” to redirect focus to the last-focused element in a focusgroup, a change to sequential focus navigation is needed.

This change is intended to ensure that focus is directed to one of the following focusgroup candidates whenever focus enters a focusgroup. The first matching condition is always taken:

If there is an element in the focusgroup memory, focus is set on that element.
If there is an element with tabindex="0" (or other built-in element with UA-defined keyboard focusability like <input>, <button>, etc.) that is also a focusgroup candidate for the current focusgroup, focus will be set on the first such element in DOM order (regardless of the direction of traversal, i.e., via tab or Shift+tab). Note: this provides authors with a predictable “entry” of their choosing within a focusgroup.
The first focusable element (even if not intended for sequential focus navigation) if sequential focus navigation is moving “forward”, or the last focusable element if sequential focus navigation is traversing “backward”.
Specifically, each focusgroup definition must maintain a:

first focusable focusgroup candidate - in DOM order, the first focusable element that is also a focusgroup candidate (e.g., not excluded from focusgroup participation or in another focusgroup).
last focusable focusgroup candidate - see previous, but the last focusable in DOM order.
first sequentially-focusable focusgroup candidate - in DOM order, the first focusable element that would participate in sequential focus navigation order (e.g., the element with the lowest positive value of tabindex, or with tabindex="0", or that is a built-in sequentially focusable element that has not opted-out via tabindex="-1").
Algorithmically, during “forward” sequential focus navigation, if the element being considered is:

a member of a focusgroup AND is the first focusable focusgroup candidate of that focusgroup THEN:
if the focusgroup’s memory is available and not empty, then move focus to the element referred to by the focusgroup’s memory.
otherwise, if there is NO first sequentially-focusable focusgroup candidate in that focusgroup, then move focus to this element.
otherwise, continue with the sequential focus navigation algorithm as normal.
For “reverse” sequential focus navigation, the algorithm is similar, but swap occurrences of the “first focusable focusgroup candidate” for “last focusable focusgroup candidate”.

Because this algorithm applies only when interrogating the first (or last) focusable focusgroup candidate, then any descendants that precede (or follow) the first (or last) focusable focusgroup candidate that themselves define a focusgroup are considered first. In other words, broad-reaching ancestral focusgroups won’t necessarily “steal” focus from descendant focusgroups during sequential focus navigation.

(Future Consideration) Grid focusgroupsSection titled %28Future%20Consideration%29%20Grid%20focusgroups
Some focusable data is structured not as a series of nested linear groups, but as a 2-dimensional grid such as in a spreadsheet app, where focus can move logically from cell-to-cell either horizontally or vertically. In these data structures, it makes sense to support the user’s logical usage of the arrow keys to move around the data.

Grid navigation is expected to happen within well-structured content with consistent rows and columns where DOM structure reflects this organization. In focusgroup grid navigation, only the cells in the grid are focusgroup candidates and only the focusable cells become focusgroup items. It is not currently possible to use grid focusgroups to support other focusable tabular parts such as focusable row elements (see comment in issue 1018 for a possible future addition for this use case).

Applicability to tabular dataSection titled Applicability%20to%20tabular%20data
The arrow navigation in the grid (and in the previous non-grid scenarios) should reflect the accessible structure of the document, not the presentation view made possible with CSS. For example, it is easy to create views that visually appear grid-like, but do not make sense to navigate like a grid if considering that the data model is fundamentally a list, which is how users of accessibility technology would perceive it. Wrapping a list of contact cards on screen in a grid-like presentation allows for more content density on screen for sighted users. In that scenario, arrow key navigation to move linearly (left-to-right following the line-breaking across each line) through the contents makes sense (especially if these are alphabetized), but orthogonal movement through the “grid” (up/down when cards are aligned or in a masonry layout) jumps the focus to seemingly arbitrary locations. Multi-directional arrow key navigation may seem appropriate for sighted users that have the visual context only, but are not appropriate for assistive technology. In the case of the list-presented-as-a-grid scenario, a linear focusgroup will make the most sense for sighted as well as users with accessibility needs.

When considering using a grid focusgroup, be sure that the data is structured like a grid and that the structure makes semantic sense in two dimensions (and not just for a particular layout or presentation).

Tabular data can be structured using column-major or row-major organization. Given that HTML tables and ARIA attributes for grids (role="grid", role="row", role="gridcell") only exist for row-major grid types, this proposal does not define grid focusgroup organization for column-major data structures (and assumes row-major data structures throughout).

Setting up a grid focusgroupSection titled Setting%20up%20a%20grid%20focusgroup
Grid focusgroups can be created “automatically” or manually. Automatic grids use the context of existing HTML semantics for tables as the structural components necessary to provide grid-based navigation. Any elements with computed table layout are suitable for an automatic grid (e.g., display: table-row in place of using a <tr> elements). Manual grid creation requires annotating specific elements with their focusgroup grid component names.

Note: We are evaluating the suitability for CSS display: grid to create automatic grids.

The automatic grid approach will be preferable when the grid contents are uniform and consistent and when re-using semantic elements for grids (typical). The manual approach may be necessary when the grid structure is not uniform or structurally inconsistent (atypical), and involves identifying the parts of the grid on specific focusgroup candidates using CSS.

Elements with the grid focusgroup definition on the root element of the structural grid become automatic grid focusgroups. The implementation must attempt to validate the structure of the grid to ensure it has appropriate row and cell structures. In the event that the implementation cannot automatically determine the grid structure, then the definition is ignored (i.e., there is no fallback to a linear grid).

HTML	Explanation
focusgroup="grid"	Establishes the root of an automatic grid focusgroup. Shadow-inclusive descendants of the automatic grid are identified and assigned focus-group-type: grid-row and focus-group-type: grid-cell focusgroup candidate status automatically.
Example:

<table aria-label="Tic tac toe grid" role="grid" focusgroup="grid">
  <tr>
    <td tabindex="-1"></td>
    <td tabindex="-1"></td>
    <td tabindex="-1"></td>
  </tr>
  <tr>
    <td tabindex="-1"></td>
    <td tabindex="-1"></td>
    <td tabindex="-1"></td>
  </tr>
  <tr>
    <td tabindex="-1"></td>
    <td tabindex="-1"></td>
    <td tabindex="-1"></td>
  </tr>
</table>
The <table>’s grid focusgroup definition automatically establishes each of its descendant <tr>s as focusgroup rows (the parser-generated <tbody> is accounted for) and <td>s as focusgroup cells. Each focusgroup cell is a scope root for one focusgroup item per cell, and the cell and its shadow-inclusive descendants are all focusgroup candidates. Among all focusgroup cells, the left/right arrow keys navigate between cells in the table, and up/down arrow keys will compute the new target based on the DOM position of the current focusgroup candidate cell in relation to the focusgroup candidate row.

Manual grids: row and cell connectionsSection titled Manual%20grids%3A%20row%20and%20cell%20connections
A manual grid is declared in a focusgroup definition with the name manual-grid. With a manual grid, the rows and cells must be explicitly indicated using grid-row and grid-cell:

HTML (attribute value)	Explanation
focusgroup="manual-grid"	Establishes the root of a manual grid focusgroup. Shadow-inclusive descendants must be identified explicitly as grid rows and grid cells.
focusgroup="grid-row"	Must be a shadow-inclusive descendant of a manual grid focusgroup root.
focusgroup="grid-cell"	Must be a shadow-inclusive descendant of a manual grid focusgroup root and also a shadow-inclusive descendant of a grid row.
Cells cannot be descendants of other cells, and rows cannot be descendants of other rows.

Each focusgroup candidate will perform an ancestor search to locate its nearest grid structural component: cells will look for their nearest row, and rows will look for their nearest grid root.

In the following example, the <my-cell>s are all meant to be on the same row of the grid, and the rows are designated by <my-row> elements:

Example:

<my-root role="grid" focusgroup="manual-grid">
  <div role="none" class="presentational_wrapper">…</div>
  <my-row role="row" focusgroup="grid-row">
    <first-thing role="gridcell" focusgroup="grid-cell">…</first-thing>
    <cell-container role="none">
      <my-cell role="gridcell" focusgroup="grid-cell">…</my-cell>
      <my-cell role="gridcell" focusgroup="grid-cell">…</my-cell>
    </cell-container>
    <cell-container role="none">
      <my-cell role="gridcell" focusgroup="grid-cell">…</my-cell>
      <my-cell role="gridcell" focusgroup="grid-cell">…</my-cell>
    </cell-container>
  </my-row>
  <!-- repeat pattern of div/my-row pairs... -->
</my-root>
The following non-uniform structure can still have grid semantics added via manual-grid:

Example:

<div role="grid" focusgroup="manual-grid flow">
  <div role="row" focusgroup="grid-row">
    <div>
      <div role="gridcell" focusgroup="grid-cell"></div>
      <div role="gridcell" focusgroup="grid-cell"></div>
    </div>
  </div>
  <div>
    <div role="row" focusgroup="grid-row">
      <div role="gridcell" focusgroup="grid-cell"></div>
      <div role="gridcell" focusgroup="grid-cell"></div>
    </div>
  </div>
  <div>
    <div>
      <div role="row" focusgroup="grid-row">
        <div>
          <div role="gridcell" focusgroup="grid-cell"></div>
          <div role="gridcell" focusgroup="grid-cell"></div>
        </div>
      </div>
    </div>
  </div>
</div>
Grid focusgroup nestingSection titled Grid%20focusgroup%20nesting
Unlike linear focusgroups, an automatic or manual grid focusgroup requires a small degree of DOM structure to work correctly. Unless the proper structure exists, the grid focusgroup won’t work.

Attempts to define new grid or linear focusgroups among the DOM elements that make up the structure of a grid focusgroup (such as on or between elements defining the root grid container, the grid-rows and the grid-cells) will be ignored. However new grid or linear focusgroups can be defined on elements that are shadow-inclusive descendants of grid-cell elements (e.g., that are outside the set of elements making up the grid’s DOM structure).

Empty Cell dataSection titled Empty%20Cell%20data
Like linear focusgroups, focus is only set on elements that are focusable. The arrow key navigation algorithms look for the first focusgroup item (in DOM order) of a grid focusgroup cell in the direction the arrow was pressed. Non-focusable grid focusgroup candidates of a focusgroup cell are passed over in the search.

Non-uniform cellsSection titled Non-uniform%20cells
It is entirely possible to have rows with non-uniform numbers of cells. In these cases, focusgroup navigation behaviors may not work as visibly desired. Algorithms for navigating grid focusgroups will work based on content the grid content structure as specified. If the algorithms conclude that there is no “next candidate cell” to move to (e.g., in a grid with two rows, and the bottom row has three cells, and the top row only two, if the focus is on the 3rd cell, a request to move “up” to the prior row cannot be honored because there is no “3rd cell” in that row.

(Future Consideration) Additional Keyboard supportSection titled %28Future%20Consideration%29%20Additional%20Keyboard%20support
In addition to arrow keys, the focusgroup should also enable other navigation keys such as pageup/down for paginated movement (TBD on how this could be calculated and in what increments), as well as the home/end keys to jump to the beginning and end of groups.

It might also be interesting to add support for typeahead scenarios (though what values to look for when building an index would need to be worked out, and may ultimately prove to be too complicated).

Authoring guidanceSection titled Authoring%20guidance
Put the behavior token first: focusgroup="tablist wrap", focusgroup="toolbar".
Omit common child roles unless you need a variant (checkbox / radio menu items, mixed controls, etc.).
For detailed precedence (mismatches, inference limits, overrides) see Precedence & Overrides.
Alternatives consideredSection titled Alternatives%20considered
When considering how to ensure that focusgroup usage is scoped to scenarios we want, the following approaches were considered.

Role-required gating (original): only activates when an eligible role attribute is present. Rejected: couples behavior activation to ARIA; breaks precedent.
Parent-only implicit role (earlier alternative): ensures that aria norms are followed, while still allowing authors to avoid repetition.
Adopted (parent token + child inference): Same as above, but additionally sets the expected role on children that participate in the focusgroup.
Open QuestionsSection titled Open%20Questions
Supported Behaviors: The list of supported behaviors for focusgroup is open for discussion, and I am open to input on what should be allowed.
MDN documentation includes a recommendation to not use grid and listbox as composite widgets, but supporting them here would send a signal that it is OK to use them in this scenario.
Are there other roles not listed here that have a strong use case for focusgroup?
Grid Support: The functionality for grid and other 2-D navigation has been moved to “Future Considerations” due to its complexity. I am open to discussing how to best implement this functionality in the future including if this should be moved into a separate explainer.
CSS Mappings: This explainer does not currently define specific CSS mappings for focusgroup, but this is an area that could be explored in the future, or if others feel this is integral to the feature, this could be considered to be added back in.
Attribute Functionality and Dependencies: Feedback requested on adopted scoping (role token + optional child role inference):
Exact list & phased expansion of child role inference set (which roles, staged rollout?).
Should mismatched explicit container role vs first token trigger a console warning or be silent?
Policy for console warnings vs silent ignore on token / role mismatches.
Alternative approaches to scope focusgroup to specific scenarios
(A) Current: first token = pattern + (optional) child role inference.
(B) Require explicit container role; tokens only modifiers (drops role token entirely).
(C) Split into two attrs: pattern="tablist" focusgroup="wrap" (clearer separation, extra verbosity & API surface).
(D) Native elements only (e.g., future <tabs>, <toolbar>, <menubar>); attribute becomes redundant—risk: slower coverage, custom element ecosystems still need declarative navigation.
Criteria to decide: author error rate, implementation complexity, consistency with existing HTML token patterns, incremental ship path.
Keep or drop child role inference (or defer as future consideration): Should v1 exclude automatic child role assignment entirely to reduce complexity and perceived overreach (keeping only container pattern + navigation)? Rationale for revisiting: reviewer concern about mixing semantics & behavior; authors can still supply explicit roles; deferring would let us ship navigation sooner and gather data on real author pain before standardizing inference.
Privacy and Security ConsiderationsSection titled Privacy%20and%20Security%20Considerations
PrivacySection titled Privacy
No considerable privacy concerns are expected, but we welcome community feedback.

SecuritySection titled Security
No significant security concerns are expected.

Design decisionsSection titled Design%20decisions
Here is a short list to issue discussions that led to the current design of focusgroup.

focusgroup works across Shadow DOM boundaries by default
arrow key movement and directionality constraints should be aligned with content direction (add inline/block)
focusgroup definitions should not be limited to direct-children
focusgroup should include a memory
focusgroup should be restricted to some elements only
See other open focusgroup issues on GitHub.

Index of focusgroup valuesSection titled Index%20of%20focusgroup%20values
Tokens are space-separated. Order: first token MUST be a supported behavior token (eligible list below). Remaining tokens are modifiers. Unknown tokens are ignored.

Behavior tokens: See the earlier Supported Behaviors mapping table for the definitive list, minimum container roles, and child inference notes. Explicit container and child roles always override any inference.

Focusgroup directions:

Description	HTML syntax
both directions for a linear focusgroup	(unspecified value; default value)
inline direction for a linear focusgroup	inline
block direction for a linear focusgroup	block
Focusgroup wrapping:

Description	HTML syntax
no wrap	(unspecified value; default value)
wrap	wrap
flow (grid focusgroups only)	flow
column specific	col-wrap, col-flow, col-none
row specific	row-wrap, row-flow, row-none
Focusgroup memory:

Description	HTML syntax
enable memory	(unspecified value; default value)
disable memory	no-memory
Authoring shorthand examples:

Pattern	Markup
Wrapping toolbar	<div focusgroup="toolbar wrap">…
Horizontal manual-activation tabs (no memory)	<div focusgroup="tablist inline wrap no-memory">…
Simple radiogroup	<div focusgroup="radiogroup">…
Vertical listbox (block axis)	<div focusgroup="listbox block">…
AcknowledgmentsSection titled Acknowledgments
Thanks to everyone who spent time discussing and contributing to the focusgroup design and implementation, including the members of the OpenUI Community Group. Your insights, ideas, and contributions have been indispensable.

---

Yes — in principle *most* of the Scoped Focusgroup proposal *can* be polyfilled in JavaScript. There are, however, non-trivial trade-offs, limitations, and complexity. If you like, I can sketch what a polyfill might need to do, what parts are easier vs harder, and where browser support might make things infeasible. Here’s a breakdown:

---

## What the proposal does

Here are some of the main features of the proposal, per the spec (“explainer”):

* Declaration of a `focusgroup` attribute on a container with behavior tokens (e.g. `"toolbar wrap"`, `"tablist inline wrap no-memory"`, `"grid"`, etc.). ([open-ui.org][1])
* Roving tabindex + arrow key navigation among the items in the group. ([open-ui.org][1])
* “Last-focused memory”: when re-entering the focusgroup (via Tab or Shift+Tab), focus returns to the element that was last focused in that group. ([open-ui.org][1])
* Guaranteed tab stop: even if all items are `tabindex=-1`, there should still be one tab stop in the group so that the group is reachable via sequential focus navigation. ([open-ui.org][1])
* Optional behaviors: wrap around at ends, limiting arrow behavior to inline or block axis (so only left/right or only up/down), opt-out subtrees (`focusgroup="none"`), shadow DOM awareness (shadow-inclusive descendants), nested focusgroups. ([open-ui.org][1])

---

## What a JS polyfill would need to cover

To replicate all this behavior, a polyfill would need to handle:

1. Detecting elements with a `focusgroup` attribute, observing changes (attribute added/removed, DOM mutations).

2. Identifying the “focusgroup items” (elements inside the group that are focusable, not opted out, not in another focusgroup, shadow DOM etc.).

3. Managing keyboard events:

   * listening for arrow keys / Home / End to shift focus among items in the group, doing the right wrap / axis-limiting behavior.
   * respecting directions & writing mode / RTL vs LTR (inline vs block axes).

4. Managing “memory” of last focused item, including when that item becomes not focusable or is removed; clearing memory when appropriate.

5. Guaranteeing that there is at least one tab stop in the group, even if all items are `tabindex=-1`. Likely by programmatically setting some element’s `tabindex=0` (or otherwise making something sequentially focusable) when focus enters the group.

6. Handling focus entering & leaving the group across sequential navigation (Tab/Shift+Tab), so that when focus arrives at the group, the polyfill can intervene to pick the correct element (last focused, or first one, depending on configuration).

7. Respecting opt-out subtrees (`focusgroup="none"`) to skip them in arrow navigation.

8. Handling nested focusgroups (so that inner groups are independent, and outer group doesn’t try to manage key events inside inner groups).

9. Handling Shadow DOM: detecting items that are in shadow roots if “shadow-inclusive” is enabled; managing event propagation across shadow boundaries.

10. Behavior tokens: parsing attribute tokens (wrap/no-wrap, inline/block, no-memory etc.).

---

## What parts are easier vs harder

Here are which parts are relatively straightforward in JS and which are more tricky / brittle / costly:

| **Feature**                                                              | **Easier**                                                                                                                                                                      | **Harder / Edge Cases** |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| roving tabindex + simple arrow navigation among flat items               | easier — many existing libraries already do this (e.g. “roving tabindex”, “FocusZone”, etc.)                                                                                    |                         |
| wrap around behavior, axis limiting (inline/block)                       | doable, requires inspecting writing mode/direction (CSS / computed style) to know inline vs block direction; some complexity with vertical writing modes or bidirectional text. |                         |
| last-focused memory                                                      | manageable; need to store state, detect when items are removed etc.                                                                                                             |                         |
| guaranteed tab stop even when all items are `tabindex=-1`                | harder: must override or intercept sequential focus behavior; maybe you need to monitor focusin/out, tab events, etc.; also potentially interfering with other scripts.         |                         |
| opt-out (“none”) subtrees                                                | doable but DOM-mutation and event delegation must be robust; need to skip items appropriately.                                                                                  |                         |
| nested focusgroups                                                       | adds complexity of determining event scoping, making sure inner groups take precedence over outer ones; avoiding interference.                                                  |                         |
| shadow DOM support (shadow inclusive descendants)                        | arguably harder: you need to traverse across shadow roots, detect focusable elements inside, handle events across shadow boundary; may need custom logic.                       |                         |
| selection vs focus decoupling (since the spec decouples selection logic) | polyfill doesn’t need to do selection logic but must leave hooks; but authors will need extra code.                                                                             |                         |
| feature detection / progressive enhancement                              | doable.                                                                                                                                                                         |                         |
| grid focusgroup (2D navigation, table structure)                         | one of the harder parts: parsing structure, handling varying row/column spans, visual layout vs logical structure, etc.                                                         |                         |

---

## Limitations & things native could do better

Even with a robust polyfill, some things are more reliable if implemented natively in browsers / UA:

* Native support can better integrate with sequential focus navigation (tabbing), which is deeply tied to browser internals. JS may have latency, might misbehave in some corner cases, or conflict with other focus/tabindex logic.
* Performance: if many focusgroup elements on a page, with many items, shadow DOMs etc., the overhead of event listeners, mutation observers etc. could be nontrivial.
* Predictability with third-party code: if other scripts also manipulate tabindex, focus, event stopping, etc., there may be conflicts.
* Some behavior depends on browser’s understanding of “focusable”, “sequential focusable elements,” writing modes etc. Polyfilled behavior may drift in cross-browser differences.
* Accessibility / ARIA semantics might need careful handling, particularly roles / child role inference: deciding when to insert or override roles will be tricky in JS in a non-invasive, safe way.
* Security / Shadow DOM: some Shadow DOMs are closed, or may block certain event paths; that may complicate detecting focusable items inside them.

---

## Is it practical?

Short answer: yes, a partial or even quite complete polyfill is feasible, especially for the linear focusgroup cases (toolbar, tablist, menu, radiogroup etc.) without grid. Several libraries already implement portions of this (roving tabindex, FocusZone etc).

It would be more work to do *everything* (grids, shadow DOM inclusive, performance, seamless behavior). Also, the polyfill would need to detect whether the native implementation is available (once browsers implement focusgroup) to avoid doubling behavior or interfering.

---

If you like, I could sketch a minimal prototype or pseudo-polyfill, or list libraries that are already trying to do this. Do you want that?

[1]: https://open-ui.org/components/scoped-focusgroup.explainer/ "Scoped Focusgroup (Explainer) | Open UI"

---

# Scoped Focusgroup — Polyfill Implementation Spec

This document defines a practical, implementable spec for a **JavaScript polyfill** of the Open UI *Scoped Focusgroup* explainer. It is aimed at engineers who will implement the polyfill and at component authors who will rely on it. The goal is to match the explainer’s observable behaviors while being robust across browsers, Shadow DOM modes, and nested groups.

---

# 1 Goals & non-goals

**Goals**

* Reproduce the *behavioral surface area* of the Scoped Focusgroup explainer for common use cases: roving focus, arrow-key navigation, wrap/no-wrap, axis-limiting, last-focused memory, guaranteed tab stop, opt-out subtrees, nested groups, and basic grid navigation.
* Expose a small JS API + attribute schema consistent with the explainer so component authors can progressively adopt.
* Fail gracefully when native focusgroup support exists (feature-detect and no-op).

**Non-goals**

* Perfect parity with every edge-case of native UA implementation (especially complex grid semantics like row/column spanning and visual vs DOM layout).
* Replacing native browser behavior once that exists — polyfill should be removable or disabled by UA support.

---

# 2 Feature detection

On load, the polyfill MUST feature-detect native support and do nothing if native support is present:

* `if ('hasOwnProperty' in Element.prototype && /* real feature test */ false) { /* skip */ }` — **DO NOT** rely only on `HTMLElement.prototype` presence. Practical test: create an element, set `focusgroup` attribute, dispatch `focusin` and keyboard events and see whether browser honors group semantics. (Provide a fallback override flag so authors can force polyfill in testing.)

Expose: `window.__scopedFocusgroupPolyfill = { installed: true/false, force: boolean }`

---

# 3 Attributes & tokens

The polyfill reads `focusgroup` attributes on container elements. Token syntax:

* `focusgroup="<role> <flags...>"`

Where `<role>` is optional, but common tokens include: `toolbar`, `tablist`, `grid`, `list`, `radiogroup`, `none` (for opt-out). Flags (order-independent):

* `wrap` / `no-wrap` (default: no-wrap)
* `inline` / `block` (default: inline when horizontal; the polyfill should determine axis by computed style if unspecified)
* `memory` / `no-memory` (default: memory)
* `shadow-inclusive` / `shadow-exclusive` (default: exclusive)
* `grid` (treated specially; implies 2D movement)
* `guaranteed` / `no-guaranteed` (controls guaranteed tab stop; default: guaranteed)

Examples:

* `<div focusgroup="toolbar wrap inline memory">...</div>`
* `<div focusgroup="none">...</div>` (opt-out subtree)

**Parsing rules**

* Tokens are whitespace-separated. Unknown tokens are ignored but recorded for debugging.
* Attributes may be updated dynamically; polyfill must observe changes.

---

# 4 Public JS API

Expose a minimal API to allow programmatic control and for tests:

```js
// feature detection
const supported = window.ScopedFocusPolyfill?.supported || false;

// register/unregister (auto by mutation observer; programmatic opt-in)
window.ScopedFocusPolyfill?.register(containerElement);
window.ScopedFocusPolyfill?.unregister(containerElement);

// query
const group = window.ScopedFocusPolyfill?.getGroupFor(element); // returns group object or null

// actions
group.focusFirst();
group.focusLast();
group.focusNext({wrap: true});
group.focusPrev({wrap: true});
group.focusStored();
group.clearMemory();
```

Each `group` object has read-only properties: `element`, `tokens`, `items` (live list), `activeIndex` (or {row,col} for grid), `isFocused`.

Events dispatched from container (composed, cancellable where noted):

* `scopedfocus:focuschange` — detail `{ from, to, keyboard: true/false, reason }`
* `scopedfocus:enter` — when group receives sequential focus (Tab)
* `scopedfocus:leave` — when sequential focus leaves group
* `scopedfocus:memoryupdated` — when stored last-focused changes

These events allow component authors to integrate ARIA and state.

---

# 5 Focusable items: identification & ordering

**What counts as an item**

* An item is an element considered focusable by the polyfill:

  * native tabbable elements (`a[href]`, `button`, `input`, `select`, `textarea`, etc.) and elements with `tabindex >= 0` or `contenteditable`.
  * elements with `data-focusable="true"` are treated as focusable even if not natively so (opt-in).
* Items inside an element with `focusgroup="none"` are excluded.
* Items inside nested `focusgroup` containers (other than `none`) are **not** considered by the outer group — they belong to their own group.

**Order**

* The polyfill must use DOM order for linear groups:

  * use `TreeWalker` (NodeFilter.SHOW\_ELEMENT) starting at group root to gather candidates in document order while respecting Shadow DOM traversal rules (see Shadow section).
* For grids, the default order is DOM order, but movement is driven by spatial logic (see Grid section).

**Focusable determination**

* Use a robust check: visible (offsetParent or boundingClientRect nonzero and computed `visibility` not `hidden`), not `[disabled]`, not `inert` (if supported), not `aria-hidden="true"`.
* Respect `tabindex` values but polyfill may temporarily set `tabindex` on elements to implement guaranteed tab stop or roving behavior (see Section 7).

---

# 6 Keyboard behavior — linear focusgroups

**Key mapping (typical)**

* Arrow keys: move to next/prev along configured axis.

  * For `inline`, Left/Right (or `ArrowLeft`/`ArrowRight`) move; for `block`, Up/Down move.
  * When both axes allowed (e.g., unspecified) use Left/Right and Up/Down accordingly — implementers should only handle keys relevant to tokens.
* `Home` / `End`: focus first / last item.
* `Enter` / `Space`: do not steal activation; let native activate unless group role defines activation semantics (e.g., `radiogroup`).
* `PageUp` / `PageDown`: optionally map to Home/End for large groups (configurable).

**Arrow wrap**

* If `wrap` token present: moving past end wraps to start.
* If `no-wrap` or default: stop at ends.

**Keyboard vs programmatic**

* Store `keyboard` boolean on focusmove to allow components to respond differently if needed.

**Event handling**

* Use delegated `keydown` at the container (capture phase for predictable behavior).
* `preventDefault()` only when the polyfill is actually moving focus to avoid interfering with text inputs or other actions.

**Focus suppression**

* For elements that are contenteditable or text inputs inside items, arrow keys should not be intercepted if the event target is a focusable input (check `isTextInput` helper).

---

# 7 Roving tabindex & guaranteed tab stop

**Roving approach**

* Polyfill implements roving tabindex semantics for memory + arrow navigation:

  * Keep one item with `tabindex=0` (the *roving tab stop*) and set all other items to `tabindex=-1`.
  * On programmatic focus move, update `tabindex` accordingly to the new roving item.
  * When group receives sequential focus (Tab), focus must land on the roving tab stop (or stored last-focused element if memory is set).

**Guaranteed tab stop**

* When tokens include `guaranteed` and none of the items are naturally tabbable (`tabindex=-1`), the polyfill sets the roving tab stop to `tabindex=0` on the item that should be the entry point.
* The polyfill must restore original tabindex values when group is unregistered or when elements are removed.

**Preserving user-specified tabindex**

* If an element had an explicit tabindex attribute before polyfilling, store and restore it.
* Do not overwrite tabindex values on elements outside the group.

**Edge cases**

* When the currently stored item is removed or becomes disabled, the polyfill should:

  * attempt to find the nearest visible focusable item in DOM order,
  * if none, clear memory and choose the first item for guaranteed tab stop (if `guaranteed`),
  * dispatch `scopedfocus:memoryupdated`.

---

# 8 Sequential tabbing (Tab / Shift+Tab)

**Entering group**

* Listen for `focusin` on group container. If the incoming focus is due to sequential tab (difficult to detect directly), use heuristics:

  * Track last `keydown` event — if `Tab` or `Shift+Tab` happened within \~50ms, treat focusin as sequential.
  * Alternatively, intercept `keydown` of `Tab` at document level and set a short-lived flag `sequentialTabExpected`.
* When focus enters the group due to sequential navigation:

  * If `memory`: focus the stored last-focused item, else focus first item.
  * If no items are tabbable and `guaranteed`: set roving tabindex to chosen item and focus it.

**Leaving group**

* When `Tab` or `Shift+Tab` moves focus out of the group, clear any transient flags and dispatch `scopedfocus:leave`.

**Limitations**

* Exact detection of a `Tab`-caused focus change is imperfect. Implement heuristics (keydown tracking) and expose `forceSequentialFocus()` API so authors can call it when they know Tab entered their component (e.g., from a button handler).

---

# 9 Memory semantics

* Each group stores last-focused item (weak reference pattern). Stored value persists while container exists. Stored memory should be cleared when:

  * Token `no-memory` present,
  * The stored item is removed from DOM,
  * The stored item becomes non-focusable (disabled or `aria-hidden`),
  * Author calls `clearMemory()`.

* Memory must survive focus leaving and re-entering while the group element persists.

---

# 10 Nested focusgroups & opt-out

* If a group contains another element with `focusgroup` (not `none`), nested group owns focus of its subtree. Outer group must not include items contained in inner group's element.
* Implement by stopping the DOM traversal at inner group roots when building the outer group's item list.
* `focusgroup="none"` — treat node and descendants as inert for navigation and item discovery.

---

# 11 Shadow DOM behavior

* Default: `shadow-exclusive` — polyfill only inspects light DOM descendants and shadow DOMs of the container element depending on token.
* `shadow-inclusive`: polyfill traverses into *open* shadow roots (walk into `element.shadowRoot`), including their focusable descendants as items. Do not attempt to pierce `closed` shadow roots.
* Event listening:

  * Use composed events (`focusin` is composed) and attach listeners appropriately to handle focus from shadow DOM.
  * For elements inside another host's shadow tree, if the host is outside the group, do not cross into it.

**Caveats**

* Closed shadow roots cannot be traversed; polyfill must gracefully skip them.
* Authors using closed shadow roots should expose hooks for the polyfill where necessary.

---

# 12 Grid support (basic)

Provide a **best-effort** 2D grid navigation:

* Token `grid` enables grid mode. The polyfill treats items as cells in rows and columns based on DOM layout heuristics:

  * Use the `data-row` / `data-col` attributes if present to determine coordinates.
  * Otherwise, compute bounding rectangles and bucket items into rows by vertical center, sort by y then x to produce a logical grid.
* Arrow keys:

  * `ArrowRight` / `ArrowLeft`: move within same row to next/prev column.
  * `ArrowUp` / `ArrowDown`: move to nearest cell vertically above/below by column index or by proximity.
* `Home`/`End` should move to beginning/end of row or grid (configurable).
* Do not attempt to implement complex table semantics like colspan/rowspan fully — provide a warning in docs.

---

# 13 Accessibility & ARIA

* Polyfill must *not* silently remove ARIA or role attributes. It will:

  * Suggest appropriate ARIA roles via events and docs: `toolbar`, `tablist`, `menu`, `radiogroup`, `grid`, etc. But it should not auto-insert roles unless `autoRole` option enabled.
  * Provide example helper `ScopedFocusPolyfill.announceRoles(group, role)` that authors can call to update ARIA roles safely.

* Focus management must remain compliant:

  * Ensure only one element is in the tab order for roving behavior.
  * Maintain screen-reader predictability by not hiding focus changes (do not `preventDefault` unnecessarily).
  * Document recommended ARIA patterns for `radiogroup`, `tablist`, etc.

---

# 14 Observers & lifecycle

* Use a `MutationObserver` on `document` (or root) to automatically register/unregister containers with `focusgroup` attribute. Observe:

  * attribute changes on existing containers (`focusgroup` token changes),
  * childList changes to update item lists (throttle expensive recomputations),
  * subtree changes for dynamic addition/removal of items.

* Use `ResizeObserver` or intersection checks only for heuristics (e.g., visibility) — avoid expensive layout queries on each keystroke.

* Keep per-group state in a `WeakMap<HTMLElement, GroupState>` to avoid leaks.

* Provide `disconnect()` method to remove global listeners and observers for cleanup in SPA environments.

---

# 15 Performance considerations

* Batch DOM queries. Use a microtask/debounce for recomputing items on rapid mutations (e.g., 50–100ms).
* Use `TreeWalker` to gather candidates — it's faster than naive querySelectorAll + filtering in many cases.
* Avoid reading layout excessively; compute bounding rects only for grid heuristics or when `shadow-inclusive` is set and grid token present.
* Provide configuration options: `observeSubtree: boolean`, `mutationDebounceMs: number`, `maxItemsBeforeVirtualize: number`.

---

# 16 Conflicts with other scripts

* Polyfill should try to be minimally invasive:

  * Track and restore preexisting `tabindex` attributes.
  * Do not `stopPropagation` of events unless necessary.
* Provide `priority` option so authors can opt to run polyfill before or after other libraries.
* Expose `disable()` and `enable()` for runtime control.

---

# 17 Testing & QA matrix

Automated tests (unit + integration):

* Unit:

  * Token parsing
  * Item discovery with nested groups and `none`
  * Tabindex preservation & restore
  * Memory set/clear behavior
* Integration:

  * Keyboard interactions: arrow keys, Home/End, wrap/no-wrap
  * Sequential tab detection and entry/leave
  * Shadow DOM (open) traversal, closed-shadow skip
  * Grid movement heuristics
  * Performance: measure time to compute items for N elements (N=1000)

Accessibility tests:

* ARIA role suggestions and roving tabindex validated with axe-core.
* Screen reader manual testing scenarios.

Browser matrix: test in latest stable Chrome, Firefox, Safari, Edge — different versions for Shadow DOM behavior.

---

# 18 Diagnostics & debugging

* Expose `ScopedFocusPolyfill.debug = true` to emit console logs for:

  * registration/unregistration,
  * token parsing,
  * item list snapshots,
  * memory updates,
  * reasons why a candidate is excluded (e.g., hidden, `none`, nested group).
* Add CSS helper classes during debugging: `.sfp-roving`, `.sfp-hidden`, `.sfp-item`.

---

# 19 Example: minimal lifecycle (pseudocode)

1. On load, feature-detect. If polyfill needed, initialize global MutationObserver and attach `document` event listeners (`keydown`, `focusin`, `focusout`).
2. When a node with `focusgroup` is found, `register()`:

   * parse tokens,
   * build item list (TreeWalker),
   * store original tabindex values,
   * set roving tabindex if necessary,
   * attach delegated `keydown` handler at container.
3. On `keydown` inside a group, handle arrow/Home/End:

   * compute next index,
   * call `focus()` on the item,
   * update roving tabindex,
   * dispatch `scopedfocus:focuschange`.
4. On `focusin`, if sequential Tab is detected, direct focus to stored item or first item per tokens.
5. On mutation or removal, recompute items and update memory.

---

# 20 Implementation roadmap & priorities

**Phase 1 (MVP)**

* Linear groups (`toolbar`, `tablist`): roving tabindex, arrow keys, wrap/no-wrap, memory, guaranteed tab stop, nested groups, opt-out none.
* API methods for programmatic control and basic events.
* MutationObserver for attribute and subtree changes.

**Phase 2**

* Shadow-inclusive support for open shadow roots.
* Improved heuristics for sequential Tab detection.
* Basic grid mode (row/column by bounding box), `Home`/`End`.

**Phase 3**

* Performance optimizations for very large groups.
* Advanced grid semantics (col/rowspan heuristics).
* Developer tooling, accessibility automated checks, robust test suite.

---

# 21 Example usage snippets

HTML:

```html
<div focusgroup="toolbar wrap inline memory guaranteed">
  <button>Bold</button>
  <button>Italic</button>
  <button>Underline</button>
</div>
```

JS:

```js
// Listen to focus changes
document.querySelector('[focusgroup]').addEventListener('scopedfocus:focuschange', e => {
  console.log('focus moved', e.detail);
});

// Programmatic
const group = ScopedFocusPolyfill.getGroupFor(document.querySelector('[focusgroup]'));
group.focusFirst();
```

---

# 22 Developer notes & pitfalls

* Tab detection heuristic is imperfect: provide explicit integration points for components (e.g., call `group.forceSequentialFocus()` when a custom element knows Tab arrived).
* Respect user expectations: do not intercept focus in input fields or steal text-editing keystrokes.
* Keep memory restoration conservative so that assistive tech sees stable tab order.

---

# 23 Glossary

* *Roving tabindex*: pattern where only one element is in sequential tab order at a time.
* *Sequential focus*: navigation by `Tab` / `Shift+Tab` keys.
* *Shadow-inclusive*: group should include focusable descendants inside open shadow roots.
* *Guaranteed tab stop*: group always has one element reachable by Tab even when all items have `tabindex=-1`.

---

If you want, I can now:

* Produce a concrete TypeScript/JS reference implementation scaffold (module + classes + helpers) following this spec.
* Create tests (Jest + DOM testing) for the Phase 1 MVP behaviors.
* Write a README and migration guide for component authors.

Which of those should I generate next?

---


Got it — let’s make a set of **implementation notes** for engineers writing the Scoped Focusgroup polyfill. This is the “how to” layer that sits beneath the spec: things to watch for, suggested algorithms, useful data structures, and pitfalls.

---

# Implementation Notes for Scoped Focusgroup Polyfill

## 1. General architecture

* Maintain **per-group state** in a `WeakMap<Element, GroupState>`.

  ```ts
  interface GroupState {
    element: HTMLElement
    tokens: TokenFlags
    items: FocusItem[]
    memory: WeakRef<HTMLElement> | null
    activeIndex: number
  }
  ```

  This avoids leaks and ensures state is garbage-collected when the group node disappears.
* Use **centralized observers**:

  * One `MutationObserver` at the document level (or root container).
  * One global `focusin/focusout` listener and one global `keydown` listener, delegated to groups.
* Only attach per-group listeners when absolutely necessary (e.g., container-level keydown if you want isolation).

---

## 2. Item discovery & updates

* **Algorithm for item discovery**:

  1. Create a `TreeWalker` rooted at the group element with `NodeFilter.SHOW_ELEMENT`.
  2. For each element, check:

     * Is it inside a nested `focusgroup` (skip subtree)?
     * Does it have `focusgroup="none"` ancestor? (skip subtree)
     * Is it focusable? (`isFocusable(element)` helper).
  3. Add to `items` list.
* Cache results but invalidate via MutationObserver when children change.
* Throttle rebuilds — e.g., recompute items at most once per animation frame.

**Helper: `isFocusable(element)`**
Check:

* Not disabled / inert / hidden / `aria-hidden`.
* Matches known focusable selectors OR has `tabindex >= 0`.
* Not `display: none` or `visibility: hidden` (use `getComputedStyle` sparingly, maybe once during build).

---

## 3. Roving tabindex

* Store **original tabindex** values in a `WeakMap<HTMLElement, number | null>`.
* When applying roving, set:

  * Active item → `tabIndex = 0`
  * All others → `tabIndex = -1`
* On unregistration or teardown, restore original values.
* **Algorithm**:

  * On group init, pick first item (or memory target) as active.
  * On arrow/Home/End keys, update `activeIndex`.
  * Call `.focus()` on new item and update roving tabindex.

---

## 4. Sequential focus detection

* JS cannot directly detect "Tab focus" vs programmatic focus. Suggested heuristic:

  * On `keydown` → if `Tab` pressed, set `expectTab = true` until next `focusin` or microtask.
  * On `focusin` at group container:

    * If `expectTab` is true → treat as sequential entry.
    * Else → treat as programmatic/mouse entry.
* Reset `expectTab` after handling.

---

## 5. Last-focused memory

* Store in `GroupState.memory` as `WeakRef` (or strong reference if WeakRef unavailable).
* Update on every `focusin` of a group item.
* On group re-entry:

  * If memory is valid and item is still focusable → restore focus.
  * Else → fall back to first item.
* Clear memory if item is removed or becomes unfocusable (MutationObserver can detect).

---

## 6. Keyboard navigation

* **Linear groups**:

  * Axis is determined by tokens or fallback (inline vs block).
  * `ArrowLeft/ArrowRight` → inline, `ArrowUp/ArrowDown` → block.
* **Algorithm**:

  * Compute next index: `next = currentIndex ± 1`.
  * If `wrap` is enabled → modulo length.
  * Else → clamp to `[0, length-1]`.
* **Home/End** → index = 0 / last.
* Ignore navigation if `event.target` is a text-editing control (input, textarea, contenteditable).
* Always `preventDefault()` when focus actually changes.

---

## 7. Nested focusgroups

* When building item list, **short-circuit** traversal at nested groups.

  * If `node.hasAttribute("focusgroup")` and not `focusgroup="none"`, skip subtree.
* This ensures inner groups manage themselves.

---

## 8. Opt-out subtrees

* If any ancestor between item and group root has `focusgroup="none"`, skip the item.
* Cache “isOptedOut” flags during traversal to avoid repeated checks.

---

## 9. Shadow DOM support

* For `shadow-inclusive`:

  * Traverse into `element.shadowRoot` if it’s open.
  * Use recursion in `TreeWalker` builder to descend.
* Skip closed shadow roots — no safe way to traverse.
* For events: `focusin` and `keydown` are composed; you can rely on bubbling up through shadow hosts.

---

## 10. Grid mode heuristics

* For small grids, DOM order is usually enough. For better UX:

  * Compute bounding rects of items (`el.getBoundingClientRect()`).
  * Cluster into rows by y-coordinate with tolerance (e.g., 4px).
  * Within each row, sort by x.
* Store grid as `FocusItem[][]`.
* ArrowUp/Down → move to nearest item in column. ArrowLeft/Right → move horizontally.
* Pitfall: expensive for large grids. Consider caching rects until resize/mutation.

---

## 11. Mutation handling

* **Data structure**: maintain per-group “dirty” flag.
* On mutation:

  * Mark group as dirty.
  * Recompute items in next animation frame (use `requestAnimationFrame`).
* This batches multiple DOM changes into one recompute.

---

## 12. Performance pitfalls

* Avoid calling `getComputedStyle` or `getBoundingClientRect` per item on every keydown — only during rebuilds.
* Recompute items lazily; don’t eagerly walk DOM on every mutation.
* For very large groups, consider virtualization or warning developers (e.g., >2000 items).

---

## 13. Accessibility integration

* Always ensure exactly **one tabbable item** in the group (except when group empty).
* Never suppress native focus changes outside your group.
* Avoid breaking AT expectations: don’t move focus unless arrow/home/end keys are pressed.

---

## 14. Debugging strategy

* Provide `debug` flag that:

  * Logs decisions (`"Skipped item X: disabled"`, `"Focus moved from idx 2 to 3"`, etc.).
  * Optionally adds CSS class to highlight roving item.
* Helps devs catch tabindex conflicts and misconfigured groups.

---

## 15. Suggested algorithms & DS summary

* **Group discovery**: `MutationObserver` + `TreeWalker`.
* **Focusable check**: fast selector check + visibility.
* **Item storage**: array for linear groups, 2D array (array of arrays) for grid.
* **Memory**: `WeakRef` or fallback to `HTMLElement`.
* **Tabindex preservation**: `WeakMap<HTMLElement, number | null>`.
* **Event delegation**: global listeners, per-group dispatch logic.

---

## 16. Gotchas

* `focusin` fires on the **actual focused item**, not the group. Use `event.target` to update memory.
* Browser focus order can differ (esp. with shadow roots + slots). Test in all engines.
* Inputs inside groups: don’t steal arrow keys when caret is moving.
* If an item is `display:none` while stored in memory, polyfill must pick another fallback to avoid trapping Tab focus.

---

👉 Would you like me to now turn these notes into a **reference implementation scaffold** (TypeScript/JS class structure + pseudocode) so you could start coding right away?


---

# PSEUDOCODE

# Scoped Focusgroup — Pseudocode Implementation (with notes & comments)

Below is a practical, ready-to-implement pseudocode scaffold (TypeScript-flavored) that follows the spec & implementation notes. It focuses on Phase 1 (linear groups, roving tabindex, wrap/no-wrap, memory, guaranteed tab stop, nested groups, opt-out `"none"`). I include comments / TODOs and notes for tricky bits.

---

## Top-level module / singleton

```ts
// ScopedFocusPolyfill (singleton)
const ScopedFocusPolyfill = (function () {
  // ---------- Core runtime state ----------
  const groups = new WeakMap<HTMLElement, GroupState>();
  const originalTabindex = new WeakMap<HTMLElement, number | null>(); // preserve user tabindex
  let installed = false;
  let debug = false;

  // short-lived flag to detect sequential Tab
  let expectTab = false;
  let lastKeyEventTime = 0;

  // global observers & listeners
  let mutationObserver: MutationObserver | null = null;
  let globalKeydownListener: (e: KeyboardEvent) => void;
  let globalFocusinListener: (e: FocusEvent) => void;

  // ---------- Public API object returned ----------
  const api = {
    install,
    uninstall,
    register,
    unregister,
    getGroupFor,
    debug: (v: boolean) => (debug = v),
    supported: false, // will be set by featureDetect()
  };

  // ---------- Feature detection ----------
  function featureDetect() {
    // Ideally do an actual behavioral test, but keep it simple here.
    // TODO: implement behavioral feature test to detect native focusgroup.
    return false;
  }

  // ---------- Install / setup ----------
  function install(opts = {}) {
    if (installed) return;
    api.supported = featureDetect();
    if (api.supported && !opts.force) {
      if (opts.debug) console.log("[SFP] native support detected — skipping polyfill");
      return;
    }

    installed = true;
    debug = !!opts.debug;

    // set up mutation observer to find focusgroup nodes
    mutationObserver = new MutationObserver(onMutations);
    mutationObserver.observe(document, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["focusgroup", "tabindex", "disabled", "aria-hidden", "style"],
    });

    // global keyboard listener to detect Tab and to route arrow keys
    globalKeydownListener = (e) => {
      lastKeyEventTime = Date.now();
      if (e.key === "Tab") {
        expectTab = true;
        // clear expectTab after a short window if not used
        setTimeout(() => (expectTab = false), 100);
      }
      // We don't short-circuit arrow keys here; we delegate to per-group handling on keydown capture later.
    };
    document.addEventListener("keydown", globalKeydownListener, true);

    // global focusin listener to route sequential entry into groups
    globalFocusinListener = (e) => onGlobalFocusIn(e as FocusEvent);
    document.addEventListener("focusin", globalFocusinListener, true);

    // Initial scan
    scanForGroups(document);
    if (debug) console.log("[SFP] installed");
  }

  function uninstall() {
    if (!installed) return;
    mutationObserver?.disconnect();
    document.removeEventListener("keydown", globalKeydownListener, true);
    document.removeEventListener("focusin", globalFocusinListener, true);
    // teardown recorded groups and restore tabIndices
    for (const [el, state] of iterateWeakMap(groups)) {
      teardownGroup(el);
    }
    installed = false;
  }

  // ---------- Helper to iterate WeakMap in pseudocode (not possible directly in real JS) ----------
  // In a real implementation, keep a Set of registered elements for iteration.
  function iterateWeakMap(map) {
    // placeholder — implement by keeping a Set<HTMLElement> alongside WeakMap
    return [];
  }

  // ---------- Mutation handling ----------
  function onMutations(records: MutationRecord[]) {
    // Mark affected groups as dirty and/or (un)register new containers
    const touchedContainers = new Set<HTMLElement>();
    for (const rec of records) {
      if (rec.type === "attributes") {
        const target = rec.target as HTMLElement;
        // If attribute changed on a group container -> rebuild tokens / items
        if (target.hasAttribute && target.hasAttribute("focusgroup")) {
          touchedContainers.add(target);
        }
        // If attribute removed and this was a registered container -> unregister
        if (rec.attributeName === "focusgroup" && !target.hasAttribute("focusgroup")) {
          if (groups.has(target)) unregister(target);
        }
      } else if (rec.type === "childList") {
        // Check whether any added nodes contain focusgroup attribute — register them
        for (const node of rec.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          scanForGroups(node);
        }
        // For removed nodes, if they contained a registered group, unregister
        for (const node of rec.removedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (groups.has(node)) unregister(node);
        }
      }
    }

    // For any group state that might be affected (e.g., subtree mutated), mark dirty and schedule rebuild
    for (const el of touchedContainers) {
      const state = groups.get(el);
      if (state) scheduleRebuild(state);
    }

    // Additionally, mark any groups whose subtree intersects mutated nodes as dirty.
    // TODO: optimization: maintain a mapping from watched roots to groups for cheaper checks.
  }

  // ---------- Scanning for group containers ----------
  function scanForGroups(root: Node) {
    // Use querySelectorAll to find elements with focusgroup attribute
    // (For large docs you might want to use TreeWalker instead, but this is simpler.)
    const containers = (root instanceof Document ? root : root.ownerDocument).querySelectorAll("[focusgroup]");
    for (const el of containers) {
      // If not registered, register it
      if (!groups.has(el)) register(el);
    }
  }

  // ---------- Register / unregister ----------
  function register(container: HTMLElement) {
    if (groups.has(container)) return; // already registered

    const tokens = parseTokens(container.getAttribute("focusgroup") || "");
    const state: GroupState = {
      element: container,
      tokens,
      items: [],
      activeIndex: -1,
      memory: null,
      dirty: true,
      scheduled: false,
    };
    groups.set(container, state);
    // keep a Set of registered elements for iteration + cleanup (not shown here)

    // store any user tabindexs on immediate items when found (done in buildItems)
    // attach container-level keydown handler (use capture to intercept before inputs inside group)
    container.addEventListener("keydown", (ev) => onContainerKeydown(ev as KeyboardEvent, state), true);
    // observe mutations only as necessary (we have a document-level observer already)

    // initial build
    scheduleRebuild(state);

    if (debug) console.log("[SFP] registered", container);
  }

  function unregister(container: HTMLElement) {
    const state = groups.get(container);
    if (!state) return;
    teardownGroup(container);
    groups.delete(container);
    if (debug) console.log("[SFP] unregistered", container);
  }

  function teardownGroup(container: HTMLElement) {
    const state = groups.get(container);
    if (!state) return;
    // restore tabindexes
    for (const item of state.items) {
      restoreOriginalTabindex(item.el);
    }
    // clear state
    // remove listeners attached to container if stored references (not shown above for brevity)
  }

  // ---------- Token parsing ----------
  function parseTokens(attrValue: string) {
    const tokens = attrValue.split(/\s+/).filter(Boolean);
    return {
      wrap: tokens.includes("wrap"),
      inline: tokens.includes("inline"),
      block: tokens.includes("block"),
      memory: !tokens.includes("no-memory"),
      guaranteed: !tokens.includes("no-guaranteed"),
      none: tokens.includes("none"),
      grid: tokens.includes("grid"),
      shadowInclusive: tokens.includes("shadow-inclusive"),
      // store raw tokens for debugging
      raw: tokens,
    };
  }

  // ---------- Scheduling rebuilds (debounced) ----------
  function scheduleRebuild(state: GroupState) {
    if (state.scheduled) return;
    state.scheduled = true;
    // Use microtask or RAF to batch; choose RAF for layout-related checks.
    requestAnimationFrame(() => {
      state.scheduled = false;
      rebuildGroup(state);
    });
  }

  // ---------- Rebuild group items ----------
  function rebuildGroup(state: GroupState) {
    const container = state.element;
    // Build items via TreeWalker, skipping nested focusgroups and nodes with focusgroup="none"
    const items: FocusItem[] = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
      acceptNode(node) {
        const el = node as HTMLElement;
        if (el === container) return NodeFilter.FILTER_SKIP; // skip root itself
        // if this node is a group container (and not the same as root), don't traverse into its subtree
        if (el !== container && el.hasAttribute("focusgroup") && el.getAttribute("focusgroup") !== "none") {
          return NodeFilter.FILTER_REJECT; // skip subtree
        }
        // if this node or any ancestor between it and container has focusgroup="none" -> skip subtree
        if (hasAncestorWithNone(el, container)) return NodeFilter.FILTER_REJECT;
        // decide if this element is focusable
        if (isFocusable(el)) return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_SKIP;
      }
    } as any); // pseudo-cast

    let cur = walker.nextNode();
    while (cur) {
      const el = cur as HTMLElement;
      items.push({ el });
      cur = walker.nextNode();
    }

    // preserve original tabindex values for all items
    for (const item of items) {
      if (!originalTabindex.has(item.el)) {
        const attr = item.el.getAttribute("tabindex");
        originalTabindex.set(item.el, attr === null ? null : parseInt(attr, 10));
      }
    }

    state.items = items;
    // Determine active index: if memory present & valid -> find index; else default to first tabbable or 0
    const memIndex = findMemoryIndex(state);
    if (memIndex >= 0 && state.tokens.memory) {
      state.activeIndex = memIndex;
    } else {
      state.activeIndex = chooseInitialIndex(state);
    }

    // Apply roving tabindex semantics (enforce exactly one tabbable element)
    applyRovingTabindex(state);

    if (debug) {
      console.log("[SFP] rebuildGroup", state.element, "items:", state.items.map(i=>i.el));
    }
  }

  // ---------- Helpers for rebuild ----------
  function hasAncestorWithNone(node: HTMLElement, stopAt: HTMLElement) {
    let cur = node.parentElement;
    while (cur && cur !== stopAt) {
      if (cur.hasAttribute("focusgroup") && cur.getAttribute("focusgroup") === "none") return true;
      if (cur.hasAttribute("focusgroup") && cur.getAttribute("focusgroup") !== "none") return false; // nested group root
      cur = cur.parentElement;
    }
    return false;
  }

  function isFocusable(el: HTMLElement) {
    // Fast checks (selectors) first; avoid heavy style reads here if possible.
    if (el.matches("a[href], button, input, select, textarea, [contenteditable='true']")) return true;
    const tabindexAttr = el.getAttribute("tabindex");
    if (tabindexAttr !== null && parseInt(tabindexAttr, 10) >= 0) return true;
    // Exclude disabled or aria-hidden
    if ((el as any).disabled) return false;
    if (el.getAttribute("aria-hidden") === "true") return false;
    // visibility/display checks — expensive; perform only when necessary
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return false;
    const style = getComputedStyle(el);
    if (style.visibility === "hidden" || style.display === "none") return false;
    return false;
  }

  function findMemoryIndex(state: GroupState) {
    const mem = state.memory && (state.memory.deref ? state.memory.deref() : state.memory);
    if (!mem) return -1;
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].el === mem) return i;
    }
    return -1;
  }

  function chooseInitialIndex(state: GroupState) {
    // If any item is naturally tabbable (tabindex >= 0), choose the first of those
    for (let i = 0; i < state.items.length; i++) {
      const t = state.items[i].el.getAttribute("tabindex");
      if (t !== null && parseInt(t, 10) >= 0) return i;
      // also check if element is inherently tabbable via tag
      if (state.items[i].el.matches("a[href], button, input, select, textarea")) return i;
    }
    // fallback to 0 if items exist, else -1
    return state.items.length ? 0 : -1;
  }

  // ---------- Roving tabindex application ----------
  function applyRovingTabindex(state: GroupState) {
    const idx = state.activeIndex;
    for (let i = 0; i < state.items.length; i++) {
      const el = state.items[i].el;
      if (i === idx) {
        // make this item tabbable
        setTabindex(el, 0);
      } else {
        setTabindex(el, -1);
      }
    }
  }

  function setTabindex(el: HTMLElement, value: number) {
    // preserve original value already stored earlier
    if (value === 0) {
      el.tabIndex = 0; // also reflects attribute
    } else {
      el.tabIndex = -1;
    }
  }

  function restoreOriginalTabindex(el: HTMLElement) {
    if (!originalTabindex.has(el)) return;
    const orig = originalTabindex.get(el);
    if (orig === null) {
      el.removeAttribute("tabindex");
    } else {
      el.setAttribute("tabindex", String(orig));
    }
    originalTabindex.delete(el);
  }

  // ---------- Event handlers ----------
  function onContainerKeydown(e: KeyboardEvent, state: GroupState) {
    // if target is text input or contenteditable, don't intercept arrows
    const target = e.target as HTMLElement;
    if (isTextInput(target)) return;

    const key = e.key;
    if (key === "ArrowLeft" || key === "ArrowRight" || key === "ArrowUp" || key === "ArrowDown" || key === "Home" || key === "End") {
      // Decide axis based on tokens; simple mapping for MVP
      const dir = keyToDirection(key, state.tokens);
      if (!dir) return;
      e.preventDefault();
      e.stopPropagation(); // capturing at container should avoid interfering — still be conservative
      moveFocusByDirection(state, dir);
    }
  }

  function isTextInput(el: HTMLElement) {
    return el.matches("input[type='text'], textarea, [contenteditable='true']");
  }

  function keyToDirection(key: string, tokens) {
    // Return 'next' | 'prev' | 'first' | 'last' or compass
    if (key === "Home") return "first";
    if (key === "End") return "last";
    // For inline vs block tokens: allow both by default; prefer inline for left/right, block for up/down
    if (key === "ArrowLeft") return "prev";
    if (key === "ArrowRight") return "next";
    if (key === "ArrowUp") return "prev-block";
    if (key === "ArrowDown") return "next-block";
    return null;
  }

  function moveFocusByDirection(state: GroupState, dir: string) {
    const len = state.items.length;
    if (!len) return;

    let nextIdx = state.activeIndex;
    if (dir === "next") nextIdx = state.activeIndex + 1;
    if (dir === "prev") nextIdx = state.activeIndex - 1;
    if (dir === "first") nextIdx = 0;
    if (dir === "last") nextIdx = len - 1;

    // clamp/wrap
    if (nextIdx < 0) {
      if (state.tokens.wrap) nextIdx = (nextIdx + len) % len;
      else nextIdx = 0;
    } else if (nextIdx >= len) {
      if (state.tokens.wrap) nextIdx = nextIdx % len;
      else nextIdx = len - 1;
    }

    if (nextIdx === state.activeIndex) return;
    // update activeIndex, apply roving, focus
    state.activeIndex = nextIdx;
    applyRovingTabindex(state);

    // focus the new item. use focus({preventScroll: true}) optionally
    const toEl = state.items[nextIdx].el;
    toEl.focus();

    // update memory (WeakRef if available)
    try {
      state.memory = (typeof WeakRef !== "undefined") ? new WeakRef(toEl) : toEl;
    } catch (err) {
      state.memory = toEl;
    }

    // dispatch custom event
    dispatchEvent(state.element, "scopedfocus:focuschange", { from: null, to: toEl, keyboard: true, reason: dir });
  }

  function dispatchEvent(target: HTMLElement, name: string, detail: any) {
    const ev = new CustomEvent(name, { bubbles: true, composed: true, detail });
    target.dispatchEvent(ev);
  }

  // ---------- Global focusin processing (sequential tab detection) ----------
  function onGlobalFocusIn(e: FocusEvent) {
    const target = e.target as HTMLElement;
    // find the nearest registered ancestor group
    const container = findNearestRegisteredGroup(target);
    if (!container) return;

    const state = groups.get(container);
    if (!state) return;

    if (expectTab) {
      // treat as sequential entry: focus should land on memory or first per tokens
      // However, if focus already landed on an item inside the group, set memory and activeIndex accordingly
      const idx = findIndexOfElementInState(state, target);
      if (idx >= 0) {
        state.activeIndex = idx;
        applyRovingTabindex(state);
        // update memory already
        state.memory = (typeof WeakRef !== "undefined") ? new WeakRef(target) : target;
        dispatchEvent(container, "scopedfocus:enter", { by: "tab" });
      } else {
        // focus landed on container itself or outside; force sequential focus to the stored target
        const memIdx = findMemoryIndex(state);
        const pickIdx = (state.tokens.memory && memIdx >= 0) ? memIdx : chooseInitialIndex(state);
        if (pickIdx >= 0) {
          state.activeIndex = pickIdx;
          applyRovingTabindex(state);
          state.items[pickIdx].el.focus();
          state.memory = (typeof WeakRef !== "undefined") ? new WeakRef(state.items[pickIdx].el) : state.items[pickIdx].el;
          dispatchEvent(container, "scopedfocus:enter", { by: "tab" });
        }
      }
      expectTab = false;
    } else {
      // programmatic or mouse focus: if it's an item inside the group, update memory
      const idx = findIndexOfElementInState(state, target);
      if (idx >= 0) {
        state.activeIndex = idx;
        // ensure roving tabindex is consistent with new focus
        applyRovingTabindex(state);
        state.memory = (typeof WeakRef !== "undefined") ? new WeakRef(target) : target;
        dispatchEvent(container, "scopedfocus:focuschange", { from: null, to: target, keyboard: false, reason: "programmatic" });
      }
    }
  }

  function findNearestRegisteredGroup(el: HTMLElement | null) {
    let cur = el;
    while (cur) {
      if (groups.has(cur)) return cur;
      cur = cur.parentElement;
    }
    return null;
  }

  function findIndexOfElementInState(state: GroupState, el: HTMLElement) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].el === el) return i;
    }
    return -1;
  }

  // ---------- Utility functions ----------
  function scheduleMicrotask(fn) {
    Promise.resolve().then(fn);
  }

  // ---------- Public methods: getGroupFor & programmatic methods ----------
  function getGroupFor(el: HTMLElement) {
    const container = findNearestRegisteredGroup(el);
    if (!container) return null;
    return createPublicGroupAPI(groups.get(container));
  }

  function createPublicGroupAPI(state: GroupState) {
    if (!state) return null;
    return {
      focusFirst: () => {
        if (!state.items.length) return;
        state.activeIndex = 0;
        applyRovingTabindex(state);
        state.items[0].el.focus();
      },
      focusLast: () => {
        const last = state.items.length - 1;
        if (last < 0) return;
        state.activeIndex = last;
        applyRovingTabindex(state);
        state.items[last].el.focus();
      },
      focusNext: (opts = {}) => {
        moveFocusByDirection(state, "next");
      },
      focusPrev: (opts = {}) => {
        moveFocusByDirection(state, "prev");
      },
      focusStored: () => {
        const mi = findMemoryIndex(state);
        if (mi >= 0) {
          state.activeIndex = mi;
          applyRovingTabindex(state);
          state.items[mi].el.focus();
        }
      },
      clearMemory: () => {
        state.memory = null;
      },
      element: state.element,
      tokens: state.tokens,
      get items() { return state.items.map(i => i.el); },
      get activeIndex() { return state.activeIndex; },
    };
  }

  // ---------- Exported API functions ----------
  return api;
})();
```

---

## Notes & Implementation Commentary (inline with pseudocode)

* **WeakMap + Set**: Real JS `WeakMap` cannot be iterated. Keep a parallel `Set<HTMLElement>` of registered containers for cleanup & iteration. I omitted that for brevity — add it in real code.

* **Feature detection**: The `featureDetect()` should perform a behavioral test: create an element with `focusgroup`, set items and key handlers, synthesize `keydown`/`focusin` and see if UA handles it natively. If so, skip the polyfill (or allow `force` override).

* **TreeWalker traversal**: We used `TreeWalker` with a custom acceptNode to skip nested groups and `focusgroup="none"` subtrees. That provides good performance versus recursive `querySelectorAll` + filtering.

* **Focusable detection**: `isFocusable()` does a mix of selector checks and layout checks. Avoid calling `getBoundingClientRect` for every element frequently — only during rebuilds, not on every key press. The code above calls it during rebuild.

* **Preserving original tabindex**: We store original `tabindex` per element before changing. On teardown or when element is removed, restore the original. Keep careful lifecycle management if elements are moved between groups.

* **Roving**: We enforce a single `tabindex=0` item and `tabindex=-1` others. This is widely used and accessible-friendly. For elements that already had tabindex >= 0, we record & restore.

* **Sequential Tab detection**: We use a simple heuristic: set `expectTab` on `keydown(Tab)` and then check in `focusin`. This handles most sequential entries but is imperfect in edge cases (e.g., programmatic `.focus()` immediately after Tab). Provide an API for components to tell the polyfill "Tab is coming" if needed.

* **Event usage**: We dispatch `scopedfocus:focuschange` and `scopedfocus:enter` for component integration and testing.

* **Nested groups & `focusgroup="none"`**: Key to correctness is stopping traversal at nested groups and rejecting subtrees marked `none`.

* **Grid support**: Not included here in full. For grid you would compute bounding rects and bucket rows/columns, then store a 2D array and move by coordinates. Be careful: `getBoundingClientRect()` is expensive; cache until resize or mutation.

* **Shadow DOM**: This pseudocode ignores shadow-inclusive traversal. For that, when walking the DOM, check `el.shadowRoot` and traverse into it if `tokens.shadowInclusive` and `shadowRoot.mode === "open"`. Closed shadow roots cannot be traversed and must be skipped gracefully.

* **Performance**:

  * Batch rebuilds with RAF.
  * Avoid layout reads on keydown.
  * For very large groups, consider `maxItemsBeforeVirtualize` or warn authors.

* **Edge cases**:

  * When the stored memory item is removed, pick nearest neighbor or clear memory.
  * If all items become `display:none`, the group should not trap Tab — ensure the guaranteed tab stop logic avoids trapping users.

* **Accessibility**:

  * Avoid `stopPropagation` unless necessary. Use `preventDefault` only when you are changing focus in response to a navigation key.
  * Don't reassign roles automatically; document role suggestions instead. If you do auto-role, make it opt-in.

---

## Suggested next steps for a real implementation

1. Create a small TypeScript module scaffold implementing this pseudocode; include tests.
2. Implement a robust `featureDetect()` that checks native behavior.
3. Add proper bookkeeping (Set of registered containers), and robust teardown logic.
4. Implement shadow-inclusive traversal & grid heuristics (Phase 2).
5. Add a configuration option to force polyfill (useful for testing).
6. Add a test suite (Jest + @testing-library/dom) exercising Tab-entry, arrow navigation, nested groups, and tabindex restore on removal.

---

Here’s a thorough list of **edge-cases / considerations** for a polyfill of **Scoped FocusGroup** and suggested strategies to fix them:

---

## 🔹 Edge Cases & Considerations

### 1. **Nested FocusGroups**

* **Issue:** A focusable element may live inside two overlapping `<focusgroup>` containers. Which group should handle arrow key navigation?
* **Fix:**

  * Always scope to the *closest ancestor `<focusgroup>`*.
  * Traverse up the DOM from the `activeElement` and stop at the first matching group.
  * If both groups would handle the event, prevent propagation after the nearest one processes it.

---

### 2. **Dynamic DOM Updates**

* **Issue:** Elements may be added/removed dynamically (e.g., a menu item is removed). Cached node lists will become stale.
* **Fix:**

  * Always query focusable children on-demand instead of caching.
  * Or maintain a `MutationObserver` to keep track of changes and update internal lists.

---

### 3. **Hidden / Disabled Elements**

* **Issue:** `display: none`, `visibility: hidden`, or `disabled` elements should not be focusable, but `tabindex` may still trick navigation.
* **Fix:**

  * Before moving focus, filter candidate elements with `el.offsetParent !== null && !el.disabled`.
  * Ensure `tabIndex >= 0` is enforced.

---

### 4. **RTL (Right-to-Left) Layouts**

* **Issue:** Arrow key semantics differ in RTL vs LTR text direction. In RTL, `ArrowLeft` should act like "next" instead of "previous".
* **Fix:**

  * Detect writing direction (`getComputedStyle(group).direction`).
  * Swap left/right key behavior when in RTL mode.

---

### 5. **Grid vs List Mode**

* **Issue:** Vertical groups vs horizontal groups vs grids need different navigation semantics.
* **Fix:**

  * Read the `orientation` attribute (`horizontal`, `vertical`, `grid`).
  * For grids, calculate row/column index from child positions (`index % columns`).
  * Provide fallback to linear nav if attribute is missing.

---

### 6. **Wrapping vs Non-Wrapping**

* **Issue:** Some focus groups should loop around, others shouldn’t (e.g., carousels vs menus).
* **Fix:**

  * Support a `wrap` attribute.
  * If enabled: `nextIndex = (index + 1) % length`.
  * If disabled: clamp index (`Math.max(0, Math.min(newIndex, length-1))`).

---

### 7. **Focus Out of Group**

* **Issue:** User might `Tab` or programmatically focus something outside the group.
* **Fix:**

  * Only intercept arrow keys when focus is inside the group.
  * If `Tab` is pressed, do not interfere (hand control back to browser).

---

### 8. **Assistive Technology / Accessibility**

* **Issue:** Screen readers may override arrow key handling. Polyfill should not break a11y.
* **Fix:**

  * Only handle arrow keys if the `event.defaultPrevented === false`.
  * Add appropriate ARIA roles (`role="radiogroup"`, `role="menu"`, etc.) for semantic hints.
  * Test with VoiceOver/NVDA/JAWS.

---

### 9. **Programmatic Focus**

* **Issue:** App code may call `element.focus()` directly, bypassing navigation logic.
* **Fix:**

  * Always compute the next target at event-time, not relying on a “currentIndex” global.
  * If external code changes focus, the polyfill just respects it.

---

### 10. **Focusable Non-Input Elements**

* **Issue:** Elements like `<div tabindex="0">`, `<button>`, `<a href="#">` all count as focusable.
* **Fix:**

  * Maintain a consistent focusable-elements query:

    ```js
    [tabindex]:not([tabindex="-1"]), a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled])
    ```

---

### 11. **Cross-Shadow-DOM Boundaries**

* **Issue:** Shadow DOM slots and encapsulation may break simple DOM queries.
* **Fix:**

  * When querying focusables, respect `group.querySelectorAll()` (scoped to that root).
  * Don’t assume `document.activeElement`—instead, use `group.contains(document.activeElement)`.

---

### 12. **Multiple Keymaps**

* **Issue:** Some apps expect `WASD` navigation, not just arrow keys.
* **Fix:**

  * Allow extensibility: data-attribute for custom keymap.
  * Example: `<focusgroup data-keys="wasd">`.

---

### 13. **Prevent Infinite Loops**

* **Issue:** If a group has no valid focusable children, code might crash or loop forever.
* **Fix:**

  * If no candidates found, do nothing.
  * If only one candidate, always focus it (idempotent).

---

### 14. **Cross-Browser Quirks**

* **Issue:** Different browsers handle `event.preventDefault()` on arrows differently in inputs.
* **Fix:**

  * Only intercept if `activeElement.tagName !== "INPUT" && tagName !== "TEXTAREA"`.
  * Otherwise, leave native behavior alone (cursor navigation).

---

## ✅ Summary

To build a **robust polyfill**, you should:

* Scope focus handling to the nearest group.
* Use *live queries* or `MutationObserver` for dynamic content.
* Respect ARIA/accessibility.
* Handle RTL, wrapping, grid orientation.
* Fail gracefully with no crash loops.







