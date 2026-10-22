import Reveal from './Reveal.jsx'

export default function Section({ id, eyebrow, title, alt, children }) {
  return (
    <section id={id} className={`section${alt ? ' alt' : ''}`}>
      <div className="container narrow">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </Reveal>
        <Reveal delay={0.1} className="prose">
          {children}
        </Reveal>
      </div>
    </section>
  )
}
