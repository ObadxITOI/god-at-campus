import { CONTACT_EMAIL } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} God@Campus. All Rights Reserved.</span>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
    </footer>
  )
}
