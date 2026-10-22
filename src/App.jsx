import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import StatusMap from './components/StatusMap.jsx'
import Footer from './components/Footer.jsx'
import { VISION, MISSION, GOALS, CONTACT_EMAIL } from './data/content.js'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="vision" eyebrow="Vision" title="Where we are headed">
          {VISION && <p>{VISION}</p>}
        </Section>
        <Section id="mission" eyebrow="Mission" title="What we are here to do" alt>
          {MISSION && <p>{MISSION}</p>}
        </Section>
        <Section id="goals" eyebrow="Goals" title="What we aim to achieve">
          <div className="cards">
            {GOALS.map((g, i) => (
              <div className="card" key={g}>
                <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{g}</p>
              </div>
            ))}
          </div>
        </Section>
        <StatusMap />
        <Section id="about" eyebrow="About Us" title="About God@Campus">
          <p>
            God@Campus is an initiative to actively engage with the next generation while they are
            in the college.
          </p>
          <p>
            For more details write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>
        <Section id="contact" eyebrow="Contact" title="Get in touch" alt>
          <p>
            Write to us for more information{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </Section>
      </main>
      <Footer />
    </>
  )
}

