import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { KMark } from './icons'
import Crest from './Crest'

const LINKS = [
  { to: '/holdings', label: 'Holdings' },
  { to: '/capital', label: 'Capital' },
  { to: '/approach', label: 'Approach' },
  { to: '/about', label: 'About' },
]

// Pages that open on a picture rather than on paper. Add a route here when its
// hero gets a photograph, or the nav stays dark ink over a dark image.
const PHOTO_HERO = ['/', '/capital']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // over a photographic hero the header renders in white
  const light = PHOTO_HERO.includes(pathname) && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}${light ? ' light' : ''}`}>
      <div className="container">
        {/* One cell, so the grid stays three columns whether the nav is a row of
            links or a hamburger and a drawer. */}
        <div className="header-left">
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
          </button>
          <Crest className="crest-mark header-crest" />
          <nav className="site-nav" aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <Link className="brand" to="/" aria-label="Klingström Group — Home" onClick={() => setOpen(false)}>
          <KMark />
          <span className="brand-name">Klingström <span>Group</span></span>
        </Link>
        <div className="header-actions">
          <Link className="header-link" to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
