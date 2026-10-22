import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { GOALS } from '../data/content.js'

const ICONS = {
  spark: <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />,
  book: <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 19a2 2 0 012-2h13" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </>
  ),
}

export default function Goals() {
  return (
    <section id="goals" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Goals</span>
          <h2>Three areas of focus</h2>
        </Reveal>
        <div className="goal-grid">
          {GOALS.map((g, i) => (
            <motion.article
              className="goal"
              key={g.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="goal-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="goal-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[g.icon]}</svg>
              </div>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
