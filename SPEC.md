# Brand Studio decisions

This is the durable agreement between the learner and agent. Keep it concise and update it only with agreed choices or actual evidence. `Not chosen yet` is a valid status. Persona cards are hypotheses unless supported by real research.

[LEARNING.md](LEARNING.md) holds the short, reviewable record of learner explanations and help received. Keep the brand decisions and implementation evidence here; link rather than duplicate them.

## Current stage

- Stage: BRAND-001 kept; first branded storefront and live style guide merged into `main`.
- Current feature: `BRAND-001` — first branded storefront and live style guide.
- Status: Learner approved keeping and merging. [PR #2](https://github.com/chaseac-cpu/is117-brand-studio-cc/pull/2) verified merged in `origin/main`, commit `d07f5c5`, containing feature commit `cefb62a`. `npm.cmd run check` completed with exit code 0 outside the restricted environment: formatting, lint, 7 server tests, and 10 browser tests passed.
- Next step: Submit the repository URL in Canvas. SPEC.md and reviewed LEARNING.md are included. Publishing is optional and is not completed; no follow-up feature is selected.

## Product boundary

The product is the same white T-shirt throughout the comparison. The baseline offers a size selector and temporary demo bag. No real orders, payment, accounts, or persistence. Keep product facts stable between directions; do not add unsupported claims about materials, manufacturing, sustainability, fit, delivery, scarcity, reviews, or sales.

## Audience hypotheses

Primary audience: hobby divers who value understated style and quality, with intended wear before, during, and after diving. Secondary audience: people seeking versatility for everyday wear and casual dinners. Learner requested merging these markets and approved the compact audience summary. Learner prefers a plain white shirt without a printed design. Audience needs remain hypotheses, not customer research.

Waterproofing and a collar that returns to shape are proposed, untested features only; the learner approved this framing. Do not present these as established product facts or imply protective dive-gear performance. The prototype still uses the same white T-shirt.

The primary need guides the page. Give the secondary card one contrasting need to check that same page; keep both cards brief.

| Tiny card                             | Primary audience                                                               | Secondary audience                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Person in a concrete situation        | Hobby diver before, during, or after diving                                    | Person choosing a tee for everyday wear or a casual dinner                   |
| Goal or meaning they seek             | Confidence; a sharp, classy appearance                                         | Versatility across casual occasions                                          |
| Concern before choosing               | Not chosen yet                                                                 | Not chosen yet                                                               |
| What the page should help them decide | Whether the plain tee fits their refined, adventurous identity (AI hypothesis) | Whether one plain tee suits everyday wear and casual dinners (AI hypothesis) |
| Evidence or assumption                | Assumption; not validated                                                      | Assumption; not validated                                                    |

## Early brand brief

| Decision                                 | Agreement                                                                                                                                                 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand name                               | Deep White — learner wants the name to emphasize how white the shirts are; no comparative whiteness claim verified.                                       |
| One-sentence promise                     | Deep White — Understated style, above and below the surface. Learner approved; identity language, not evidence of underwater performance.                 |
| Primary archetype: the brand's character | Ruler leads with refinement and high standards; Explorer supports with adventure and discovery. Learner requested the hybrid and approved this hierarchy. |
| Three voice traits                       | Confident, refined, adventurous (AI proposal approved by learner).                                                                                        |
| One example line in this voice           | "Your day changes. Your style stays." in the approved occasion-based styling section; wording drafted by AI.                                              |
| Learner's predicted audience effect      | "Feeling confident and comfortable on top of sharp and classy". Intended impression; physical comfort is not verified.                                    |

## Visual decision

Compare two small hero previews before building the whole page. Hold the product, headline, supporting copy, and action identical. Use specific real design references and annotate visual choices, intended effect, and risk.

A simple original SVG wordmark is enough. Show small-size and one-color presentations; they may use the same asset when it works.

| Item                                              | Agreement or evidence                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared headline / support / action                | Approved promise used as headline; identical proposed support and action in both previews, pending learner review.                                                                                                                                                                                                         |
| Modernist preview, reference, and annotations     | [Measured depth](public/explorations/modernist.html); Müller-Brockmann, Beethoven (1955); [render review](docs/explorations/README.md).                                                                                                                                                                                    |
| Postmodernist preview, reference, and annotations | [Surface tension](public/explorations/postmodernist.html); Weingart, Schreibkunst (1981); [render review](docs/explorations/README.md).                                                                                                                                                                                    |
| Chosen direction and reason                       | B / Surface tension. Learner chose the layered frame as the visible detail giving the desired sharp, classy feeling, after an AI follow-up offering lettering/frame examples.                                                                                                                                              |
| Original SVG logo                                 | Learner approved revision 02 of the [black scuba diver over DW](public/explorations/deep-white-diver.svg): "yes that version is a lot better".                                                                                                                                                                             |
| Monochrome and small-size variants                | [Review page](public/explorations/logo.html): same black, transparent SVG at large size, 96 × 60 px navigation size with full name, and one-color on warm paper.                                                                                                                                                           |
| Logo review at actual use size                    | Agent inspected 1100px and 390px renders, including 96 × 60 px navigation size. Revision 02 uses slimmer serif initials, less overlap, and a lighter diver. Fine mask/hose details diminish. Lint and loading/overflow checks passed. Learner approved revision 02.                                                        |
| Shared palette, typography, spacing, and assets   | `public/styles.css`: warm paper #f5f3ed, deep ink #122e35, sea-glass #dce5e1; Georgia italic display, Arial body, monospace labels, shared spacing/components. `assets/wordmark.svg` is approved logo revision 02. All three pages inspected at 1440px and 390px; computed logo/font/ink/primary-action comparisons match. |

## Ethical persuasion

Learner chose the exploration-message proposal over the free-tip proposal, but explained its intended benefit as versatility: "making customers feel like what they wear can be put on in any situation". AI reframed this as everyday wear, casual dinner, and before/after a dive; learner approved that section. This does not establish a community/unity mechanism. Present occasions as styling suggestions, not proof of suitability for every situation or underwater performance. Proposed line "Your day changes. Your style stays." awaits specific copy review. The two concrete persuasion applications remain to be agreed.

Choose two applications that help the visitor make a voluntary, informed decision. Record their real implementation and mechanism rather than a principle name alone. Required size selection or validation alone does not establish consistency. Do not invent social proof, scarcity, authority, or product facts.

| Principle                            | Actual copy or interaction                                                             | Visitor benefit / factual support                                                                                                                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Reciprocity                          | Three free outfit tips in `#styling`, available without sign-up or purchase.           | Practical suggestions help visitors picture everyday wear, casual dinner, and before/after a dive. Learner approved adding tips; claims remain suggestions.                                                        |
| Liking (AI mechanism interpretation) | Familiar occasion labels and welcoming "Take what suits you" copy in the same section. | Relatable settings support the learner's stated versatility benefit. These contexts and the section were approved; effect on liking is a design hypothesis, not measured evidence or a learner theory explanation. |

## BRAND-001 — first branded storefront and live style guide

**Scope:** turn the working neutral storefront into the chosen brand's first coherent page. Keep the existing size selector and demo bag usable. Do not add checkout or all future features.

Keep when:

- The learner has chosen the audience hypotheses, brief, visual direction, and logo; the page visibly expresses those choices.
- Two annotated hero directions compare modernist/postmodernist thinking with the same content and real source links.
- The selected SVG logo works at small size and in one color; the presentations may share one asset.
- The storefront and live style guide share CSS variables, typography, components, and assets; they do not drift into separate identities.
- Two ethical persuasion applications are visible and their claims are supportable.
- Prepared checks pass, the agent has reviewed the slice and discussed one actual check, and the learner has reported a browser impression plus keyboard/mobile observations.
- The issue, branch, commit, and PR explain this feature in the learner's repository; agreed decisions and actual evidence are saved here. The learner has approved keeping and merging the change, and the merge into `main` is verified. Publishing is a separate choice.

## Evidence

Write a short result and link only evidence that exists. A passing browser check is evidence for its assertions, not customer research or proof of full accessibility.

| Spec ID   | Files                                                                                                                                    | Issue / PR                                                                                                                              | Actual checks and observations                                                                                                                                              |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BRAND-001 | SPEC.md; LEARNING.md (local draft); [hero explorations](public/explorations/index.html); Windows-compatible lint quoting in package.json | [Issue #1](https://github.com/chaseac-cpu/is117-brand-studio-cc/issues/1) supplied by learner; branch `brand-001-storefront`; no PR yet | Learner reported selected size goes into demo bag. [Hero render checks](docs/explorations/README.md) passed at 1440px and 390px; full check result recorded in LEARNING.md. |

## Later

No follow-up is selected. After keeping `BRAND-001`, choose one next cycle: perhaps a brand story, a supported fit guide, or richer demo-bag behavior. Agree its scope and add one new spec ID at that time.
