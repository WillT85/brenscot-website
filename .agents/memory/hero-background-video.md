---
name: Background video autoplay & sizing
description: Why HTML background videos silently fail to autoplay in React, and how to keep them production-playable.
---

# Background video autoplay & sizing (web/Vite React apps)

## Programmatic autoplay
React does NOT reliably reflect the JSX `muted` attribute onto the underlying
`<video>` DOM property. A video the browser considers unmuted is blocked from
autoplay, and a `.play()` call rejects silently (especially if you `.catch(() => {})`).

**Rule:** before calling `videoRef.current.play()`, set `videoRef.current.muted = true`
imperatively. Trigger play from an effect keyed on the "should show" state so the
browser queues playback until the media is ready.

## File size / production playback
A 60MB+ MP4 served fine in dev and is even served correctly in production
(static deploy returns 206 + range), yet "doesn't play" because it's just too
heavy to buffer in the intended window on real networks.

**Rule:** for muted decorative background clips, re-encode small before shipping:
`ffmpeg -i in.mp4 -an -c:v libx264 -pix_fmt yuv420p -vf scale=1920:-2 -crf 28 -preset medium -movflags +faststart out.mp4`
- `-an` drops audio (background is muted anyway).
- `-movflags +faststart` puts moov atom up front for progressive playback.
- This took ~63MB → ~17MB at 1080p with no visible quality loss under a dark tint.

**Why:** "video not playing" in prod is usually size/buffering, not a serving bug —
verify serving (curl with `Range:` header → expect 206 video/mp4) and moov position
(moov byte offset before mdat = faststart) before assuming the deploy is broken.

**How to apply:** Vite imports of large assets via `@assets` alias are emitted to
`dist/public/assets/<name>-<hash>.mp4` and served by the static handler; the
content hash is stable across builds for identical file content.
