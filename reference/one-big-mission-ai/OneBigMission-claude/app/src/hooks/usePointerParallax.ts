import { useEffect, useRef } from 'react'

import { prefersReducedMotion } from '../lib/motion'

/**
 * Writes the pointer's offset from the element's centre into two CSS custom
 * properties (`--px` / `--py`, each in the -1..1 range) so layers can react
 * purely in CSS. Updates are coalesced into a single rAF per frame, and the
 * values ease back to centre when the pointer leaves.
 *
 * No-ops for coarse pointers and for visitors who ask for reduced motion.
 */
export function usePointerParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (prefersReducedMotion()) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let frame = 0
    let target = { x: 0, y: 0 }
    let current = { x: 0, y: 0 }

    const render = () => {
      // Exponential ease towards the target so the motion trails the cursor.
      current = {
        x: current.x + (target.x - current.x) * 0.08,
        y: current.y + (target.y - current.y) * 0.08,
      }
      node.style.setProperty('--px', current.x.toFixed(4))
      node.style.setProperty('--py', current.y.toFixed(4))

      const settled =
        Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001
      frame = settled ? 0 : requestAnimationFrame(render)
    }

    const kick = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect()
      target = {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((event.clientY - rect.top) / rect.height) * 2 - 1,
      }
      kick()
    }

    const onPointerLeave = () => {
      target = { x: 0, y: 0 }
      kick()
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    node.addEventListener('pointerleave', onPointerLeave)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      node.removeEventListener('pointerleave', onPointerLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
