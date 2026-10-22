import { motion } from 'framer-motion'
import { HERO, SIGNUP_URL } from '../data/content.js'

const up = (d) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="container hero-inner">
        <motion.span className="eyebrow" {...up(0.1)}>An initiative of Inherit Initiative</motion.span>
        <motion.h1 {...up(0.2)}>{HERO.title}</motion.h1>
        <motion.p {...up(0.35)}>{HERO.subtitle}</motion.p>
        <motion.div className="hero-cta" {...up(0.5)}>
          <a className="btn" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">Sign Up</a>
          <a className="btn btn-ghost" href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) }}>
            About Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

