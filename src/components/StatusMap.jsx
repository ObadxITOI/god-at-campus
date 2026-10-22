import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { STATUS } from '../data/content.js'

// Simplified India outline (viewBox 0 0 100 100). Swap for a real map image/SVG when available.
const INDIA =
  'M36 4 L44 8 L50 14 L58 18 L56 26 L66 28 L78 26 L90 28 L88 36 L78 38 L72 46 L68 44 L66 52 L58 58 L54 68 L50 80 L44 92 L40 96 L36 88 L30 72 L24 62 L18 58 L22 50 L18 44 L24 36 L22 28 L28 22 L30 12 Z'

function Counter({ to }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{n.toLocaleString('en-IN')}</span>
}

export default function StatusMap() {
  const [active, setActive] = useState(null)
  return (
    <section id="status" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">College Status</span>
          <h2>Colleges across India</h2>
        </Reveal>
        <div className="status-grid">
          <Reveal className="map-wrap">
            <svg viewBox="0 0 100 100" className="map" role="img" aria-label="India map with status pins">
              <path d={INDIA} className="map-shape" />
              {STATUS.pins.map((p) => (
                <g
                  key={p.name}
                  className={`pin ${p.status.toLowerCase()}`}
                  transform={`translate(${p.x} ${p.y})`}
                  onMouseEnter={() => setActive(p)}
                  onMouseLeave={() => setActive(null)}
                >
                  <circle r="3" className="pulse" />
                  <circle r="1.6" className="dot" />
                </g>
              ))}
            </svg>
            {active && (
              <div className="tip" style={{ left: `${active.x}%`, top: `${active.y}%` }}>
                <b>{active.name}</b> · {active.status}
              </div>
            )}
          </Reveal>
          <Reveal delay={0.15} className="stat-side">
            <div className="stat">
              <strong><Counter to={STATUS.colleges} /></strong>
              <span>Colleges in India</span>
            </div>
            <ul className="pin-list">
              {STATUS.pins.map((p) => (
                <li key={p.name} onMouseEnter={() => setActive(p)} onMouseLeave={() => setActive(null)}>
                  <i className={p.status.toLowerCase()} />
                  {p.name}
                  <em>{p.status}</em>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
