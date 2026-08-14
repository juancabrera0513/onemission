/**
 * The logo lockup is reconstructed from the individual artwork elements.
 *
 * Every coordinate lives in a 1000 x 1000 design space measured off the original
 * artwork, so the stage stays faithful at any rendered size. `width` is the only
 * size given -- height follows from each PNG's own aspect ratio, which keeps the
 * layers honest if an asset is ever re-exported.
 *
 * `depth` drives the pointer parallax: 0 is pinned to the page, 1 moves most.
 * `delay` is the entrance offset in seconds.
 */
export type LogoLayer = {
  id: string
  /** Basename in /public/logo -- a .webp and .png pair is expected. */
  file: string
  /** Empty string marks the layer as decorative for screen readers. */
  alt: string
  left: number
  top: number
  width: number
  depth: number
  delay: number
  /** Entrance style. */
  enter: 'arc' | 'rise' | 'grow' | 'bloom' | 'fade'
  /** Adds a slow idle drift once the entrance has finished. */
  drift?: 'sway' | 'breathe' | 'twinkle'
}

export const LOGO_LAYERS: LogoLayer[] = [
  {
    id: 'arch',
    file: 'arch',
    alt: '',
    left: 70,
    top: 38,
    width: 840,
    depth: 0.25,
    delay: 0.05,
    enter: 'arc',
  },
  {
    id: 'tagline',
    file: 'tagline',
    alt: 'Healthy bodies. Brave hearts. Brighter tomorrows.',
    left: 224,
    top: 82,
    width: 630,
    depth: 0.3,
    delay: 0.45,
    enter: 'fade',
  },
  {
    id: 'starry-brush',
    file: 'starry-brush',
    alt: '',
    left: 644,
    top: 214,
    width: 330,
    depth: 0.5,
    delay: 0.55,
    enter: 'bloom',
    drift: 'twinkle',
  },
  {
    id: 'botanical',
    file: 'botanical',
    alt: '',
    left: 32,
    top: 318,
    width: 116,
    depth: 0.6,
    delay: 0.5,
    enter: 'grow',
    drift: 'sway',
  },
  {
    id: 'sunrise',
    file: 'sunrise',
    alt: '',
    left: 8,
    top: 516,
    width: 500,
    depth: 0.35,
    delay: 0.35,
    enter: 'rise',
  },
  {
    id: 'woman',
    file: 'woman',
    alt: 'A woman standing on a hilltop with her arms raised at sunrise',
    left: 94,
    top: 216,
    width: 222,
    depth: 0.7,
    delay: 0.65,
    enter: 'rise',
  },
  {
    id: 'wordmark-one-big',
    file: 'wordmark-one-big',
    alt: 'One Big',
    left: 278,
    top: 306,
    width: 438,
    depth: 0.4,
    delay: 0.75,
    enter: 'rise',
  },
  {
    id: 'wordmark-mission',
    file: 'wordmark-mission',
    alt: 'Mission',
    left: 294,
    top: 506,
    width: 398,
    depth: 0.4,
    delay: 0.88,
    enter: 'rise',
  },
  {
    id: 'children-books',
    file: 'children-books',
    alt: 'Two children reading, sitting on a stack of books',
    left: 720,
    top: 406,
    width: 236,
    depth: 0.75,
    delay: 0.8,
    enter: 'rise',
  },
  {
    id: 'heart-divider',
    file: 'heart-divider',
    alt: '',
    left: 312,
    top: 706,
    width: 384,
    depth: 0.2,
    delay: 1.0,
    enter: 'fade',
    drift: 'breathe',
  },
  {
    id: 'pillar-metabolic-icon',
    file: 'pillar-metabolic-icon',
    alt: '',
    left: 132,
    top: 744,
    width: 92,
    depth: 0.3,
    delay: 1.08,
    enter: 'rise',
  },
  {
    id: 'pillar-metabolic-text',
    file: 'pillar-metabolic-text',
    alt: 'Metabolic Health Coaching. Mindset. Metabolism. Life.',
    left: 240,
    top: 762,
    width: 232,
    depth: 0.25,
    delay: 1.14,
    enter: 'rise',
  },
  {
    id: 'pillar-books-icon',
    file: 'pillar-books-icon',
    alt: '',
    left: 550,
    top: 744,
    width: 96,
    depth: 0.3,
    delay: 1.18,
    enter: 'rise',
  },
  {
    id: 'pillar-books-text',
    file: 'pillar-books-text',
    alt: "Children's Books. Stories that inspire, lessons that last.",
    left: 658,
    top: 762,
    width: 232,
    depth: 0.25,
    delay: 1.24,
    enter: 'rise',
  },
  {
    id: 'value-faith',
    file: 'value-faith',
    alt: 'Faith',
    left: 182,
    top: 860,
    width: 106,
    depth: 0.2,
    delay: 1.34,
    enter: 'rise',
  },
  {
    id: 'value-family',
    file: 'value-family',
    alt: 'Family',
    left: 348,
    top: 868,
    width: 120,
    depth: 0.2,
    delay: 1.4,
    enter: 'rise',
  },
  {
    id: 'value-growth',
    file: 'value-growth',
    alt: 'Growth',
    left: 538,
    top: 866,
    width: 136,
    depth: 0.2,
    delay: 1.46,
    enter: 'rise',
  },
  {
    id: 'value-adventure',
    file: 'value-adventure',
    alt: 'Adventure',
    left: 732,
    top: 868,
    width: 142,
    depth: 0.2,
    delay: 1.52,
    enter: 'rise',
  },
  {
    id: 'motto',
    file: 'motto',
    alt: 'One mission. Endless impact.',
    left: 248,
    top: 910,
    width: 538,
    depth: 0.15,
    delay: 1.6,
    enter: 'rise',
  },
]

/**
 * The rule and the dots are vector details in the original rather than exported
 * elements, so they are drawn in CSS. Their delays live here with everything
 * else's so the whole sequence can be retimed from one place.
 */

/** The thin rule splitting the two pillars. Draws in just after both pillars. */
export const PILLAR_RULE = { x: 510, top: 757, bottom: 850, delay: 1.28 }

/** Amber separators between the four value marks, popping in after each pair. */
export const VALUE_DOTS = [
  { x: 316, y: 882, delay: 1.42 },
  { x: 504, y: 882, delay: 1.48 },
  { x: 701, y: 882, delay: 1.54 },
]
