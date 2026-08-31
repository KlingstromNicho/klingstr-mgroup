import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Caret, KMark } from './icons'
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

  // A panel this small should close the way any menu does: on Escape, and on a
  // press anywhere outside it. Without the second one the only way out is the
  // caret itself, which is a fiddly target to have to find again.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onDown = (e) => {
      if (!e.target.closest('.header-left')) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}${light ? ' light' : ''}`}>
      <div className="container">
        {/* One cell: the arms, the caret that opens them, and the panel they
            open. Keeping the panel inside this cell is what lets it hang off
            the crest without measuring the container. */}
        <div className="header-left">
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <Crest className="crest-mark header-crest" />
            <Caret />
          </button>
          <nav id="site-nav" className="site-nav" aria-label="Primary">
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
