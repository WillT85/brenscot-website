---
name: Play-once intro / sessionStorage flag pitfall
description: Why a "play intro only once per session" flag froze the hero on its first frame, and how to gate it correctly.
---

# Play-once animation gated by sessionStorage

When making a timed intro/animation play only once per session (Brenscot hero: blue intro → tagline → done over 7s), do NOT derive the "already played" boolean fresh on every render AND use it as a `useEffect` dependency while also writing the flag during that effect.

**The bug:** the effect sets `sessionStorage` immediately on mount, but the boolean is recomputed from `sessionStorage` on each render. The next re-render (e.g. a navbar scroll handler flipping state) recomputes it `true`, the effect dependency changes `false → true`, React runs the cleanup which `clearTimeout`s all the phase timers, and the effect re-runs into its early `return`. Result: the animation freezes on its first phase (stuck blue, tagline never appears) and never reaches `done`.

**The fix:** capture the initial value exactly once with a `useState` initializer (`useState(() => sessionStorage.getItem(...) === 'true')`) so it stays stable for the component's life, and run the timer-scheduling effect with an empty dependency array `[]`. Set the flag inside that effect.

**Why:** state from a lazy initializer never changes on re-render, so the timers survive intermediate re-renders. Recomputing-on-render + using as a dep is what made the cleanup fire mid-animation.

**How to apply:** any "run once, then skip on remount" client effect gated by a persisted flag — capture the gate in a `useState` initializer (or `useRef`), keep the effect deps empty.
