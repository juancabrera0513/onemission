# One Big Mission — hero section

A React hero section that rebuilds the One Big Mission logo
(`PHOTO-2026-08-11-22-41-39.jpg`) from its individual artwork elements
(`one-big-mission-recreated-elements/`) as a layered, animated composition
instead of shipping one flat image.

```bash
cd app
npm install
npm run dev      # http://localhost:5173
npm run build
```

## How the lockup is rebuilt

`app/src/data/logoLayers.ts` is the single source of truth. Every element is one
entry with `left` / `top` / `width` in a **1000 × 1000 design space** measured
off the original artwork. `LogoLockup` renders them as absolutely positioned
percentages inside a square stage, so the whole mark scales as one piece and
never reflows internally.

Only `width` is specified — height comes from each PNG's own aspect ratio, so
re-exporting an asset can't silently distort it.

Placements were derived by **alpha-weighted template matching** against the
original: each element was slid and scaled across its neighbourhood to minimise
per-pixel error, weighted by its own alpha so overlapping neighbours don't skew
the fit. Three elements (`arch`, `tagline`, `sunrise`) are drawn differently
enough from the original — arc curvature, brush weight, sun-to-swoosh ratio —
that matching runs away to a degenerate scale; those are placed by their
strongest visual landmarks instead, and are noted as such in the data file.

## Asset pipeline

`scripts-build-assets.sh` regenerates `app/public/logo/` from the source
elements. It trims each PNG to its alpha bounding box (so coordinates are
content-relative), caps the longest side, and emits a PNG + WebP pair. Total
WebP payload is roughly 780 KB across 19 layers.

Two elements needed correcting because the recreated versions drift from the
finished logo:

- **`starry-brush`** came back magenta where the logo's wash is pale blue. Only
  the magenta band of the hue wheel (250–340°) is rotated, so the wash lands on
  blue while the multi-coloured stars — navy, gold, teal, green, coral, all
  outside that band — keep their own colours.
- **`arch`** is painted with a much heavier brush than the logo's. Eroding its
  alpha thins the stroke back to the original weight while keeping the dry-brush
  texture and the fine hairline beneath it.

Both corrections live in the build script, so they survive a regeneration.

## Motion

Layers stagger in with per-element entrances chosen to match how each mark would
have been made — the brush arc wipes in along its stroke, the branch grows from
its root, the starry wash blooms outward. A few layers then pick up a slow idle
drift. Pointer parallax is driven by two CSS custom properties written from a
single rAF loop, with per-layer `depth` giving the composition its front-to-back
feel.

All of it is disabled under `prefers-reduced-motion: reduce`, which resolves to
the finished lockup with nothing hidden. Note that those overrides are
deliberately written with higher specificity than the `[data-enter]` /
`[data-drift]` rules they neutralise — a plain `.logo-layer { animation: none }`
loses the cascade and leaves every animation running.

## Layout

The lockup is square, so it is capped against viewport **height** as well as
width (`min(100%, 58svh)`, tightening on shorter screens). That cap lives on its
own wrapper rather than on the content column, so it never constrains the
supporting copy or the CTAs. The scroll cue is a flow sibling of the content
block rather than absolutely positioned, so it cannot overlap the buttons at any
size. Verified with no overflow at 1440×900, 1280×720, 390×844 and 844×390.
