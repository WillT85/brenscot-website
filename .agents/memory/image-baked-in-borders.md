---
name: Uploaded images with baked-in borders/letterbox
description: Why an image looks "not edge-to-edge" in an object-cover card even though the CSS is correct, and how to fix it.
---

When a user complains an image "isn't end to end" / "doesn't fill" / "fit it to the screen" in a card that uses `object-cover`, suspect a **baked-in border inside the image file itself**, not a CSS bug.

**Why:** Several uploaded property photos for Brenscot shipped with a solid frame baked into the pixels — a dark charcoal frame (the `image1` warehouse-driveway shot) or a white frame with top/bottom bands (the `8._34-40_Robson_St_Clontarf` aerial). `object-cover` faithfully fills the card *including* that padding, so it reads as empty gray/white space. The CSS is fine; the file is the problem.

**How to apply:**
- Verify before assuming CSS: sample edge/corner pixels with ImageMagick (`magick file -format "%[pixel:p{x,y}]" info:`). Uniform white (255,255,255) or uniform dark corners + rows = baked padding.
- Fix by auto-cropping the frame: `magick in.png -fuzz 8% -trim +repage out.png`, then import the trimmed file. Re-check the new dimensions/edges to confirm the photo now reaches the edges.
- `object-cover` never letterboxes a normal full-bleed photo, so a letterbox look in a cover card almost always means baked padding (or, rarely, stale browser cache).
