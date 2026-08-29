import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { KMark } from './icons'

const LINKS = [
  { to: '/holdings', label: 'Holdings' },
  { to: '/approach', label: 'Approach' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // over the home hero video the header renders in white
  const light = pathname === '/' && !scrolled && !open

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
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
        <nav className="site-nav" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
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
