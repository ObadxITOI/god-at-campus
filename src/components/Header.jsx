import { useEffect, useState } from 'react'
import { NAV, SIGNUP_URL } from '../data/content.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="logo" href="#home" onClick={(e) => { e.preventDefault(); go('home') }}>
          <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" /><path d="M16 7v18M10 13h12" /></svg>GOD <span>@</span> Campus
        </a>
        <button className={`burger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <i /><i /><i />
        </button>
        <nav className={open ? 'open' : ''}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); go(n.id) }}>
              {n.label}
            </a>
          ))}
          <a className="btn btn-sm" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">Sign Up</a>
        </nav>
      </div>
    </header>
  )
}


