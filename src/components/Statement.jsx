import { motion } from 'framer-motion'

// Big statement block used for Vision (dark) and Mission (light)
export default function Statement({ id, eyebrow, text, variant }) {
  return (
    <section id={id} className={`statement ${variant}`}>
      <div className="container narrow">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.span>
        <motion.div
          className="rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.p>
      </div>
    </section>
  )
}
