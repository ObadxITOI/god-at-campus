import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import Statement from './components/Statement.jsx'
import Goals from './components/Goals.jsx'
import StatusMap from './components/StatusMap.jsx'
import Footer from './components/Footer.jsx'
import { VISION, MISSION, CONTACT_EMAIL } from './data/content.js'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statement id="vision" eyebrow="Vision" text={VISION} variant="dark" />
        <Statement id="mission" eyebrow="Mission" text={MISSION} variant="light" />
        <Goals />
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

