---
name: Card vs hero media separation (Brenscot Builder)
description: How per-page hero media is kept separate from the shared project cards.
---

The `Project` data drives three surfaces: homepage project cards, Projects-page cards, and the project detail page hero. All three historically branched on the same `video`/`image` fields, so adding a `video` to a project leaked it onto the cards.

**Rule:** Media that should appear ONLY on a project's detail-page hero must use a detail-only field, not the shared one. The cards must never read the detail-only field.

**Why:** The user explicitly wants per-page (detail) visual changes (hero video, brightness, no overlay/filter) to stay separate from the homepage/Projects card thumbnails.

**How to apply:** A `video` value is shared (cards + hero). A `heroVideo` value is detail-hero-only. The detail hero prefers `heroVideo` then falls back to `video`; cards only branch on `video`/`image`. Detail-only hero treatments (no dark overlay, no brightness/contrast filter) should be gated on the detail-only field so other projects keep their original overlay+filter.
