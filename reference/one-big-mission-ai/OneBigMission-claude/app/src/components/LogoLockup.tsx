import { LOGO_LAYERS, PILLAR_RULE, VALUE_DOTS, type LogoLayer } from '../data/logoLayers'
import { usePointerParallax } from '../hooks/usePointerParallax'
import './LogoLockup.css'

/** The design space every coordinate in logoLayers.ts is measured against. */
const CANVAS = 1000

const pct = (value: number) => `${(value / CANVAS) * 100}%`

function Layer({ layer, index }: { layer: LogoLayer; index: number }) {
  return (
    <picture>
      <source srcSet={`/logo/${layer.file}.webp`} type="image/webp" />
      <img
        className="logo-layer"
        data-enter={layer.enter}
        data-drift={layer.drift}
        src={`/logo/${layer.file}.png`}
        alt={layer.alt}
        aria-hidden={layer.alt === '' || undefined}
        // The first few layers carry the fold; the rest can wait.
        loading={index < 8 ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        style={
          {
            left: pct(layer.left),
            top: pct(layer.top),
            width: pct(layer.width),
            zIndex: index + 1,
            '--depth': layer.depth,
            '--delay': `${layer.delay}s`,
          } as React.CSSProperties
        }
      />
    </picture>
  )
}

export function LogoLockup() {
  const stageRef = usePointerParallax<HTMLDivElement>()

  return (
    <div className="logo-stage" ref={stageRef}>
      {/* One accessible name for the whole lockup; the layers stay decorative
          duplicates of it, so the reading order never fragments the brand. */}
      <span className="visually-hidden">
        One Big Mission — healthy bodies, brave hearts, brighter tomorrows.
      </span>

      {LOGO_LAYERS.map((layer, index) => (
        <Layer key={layer.id} layer={layer} index={index} />
      ))}

      <span
        className="logo-rule"
        aria-hidden="true"
        style={
          {
            left: pct(PILLAR_RULE.x),
            top: pct(PILLAR_RULE.top),
            height: pct(PILLAR_RULE.bottom - PILLAR_RULE.top),
            '--delay': `${PILLAR_RULE.delay}s`,
          } as React.CSSProperties
        }
      />

      {VALUE_DOTS.map((dot) => (
        <span
          key={dot.x}
          className="logo-dot"
          aria-hidden="true"
          style={
            {
              left: pct(dot.x),
              top: pct(dot.y),
              '--delay': `${dot.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
