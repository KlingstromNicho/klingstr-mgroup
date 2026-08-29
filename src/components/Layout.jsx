import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Scroll-reveal: observe every .reveal element rendered by the current page.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    )
    els.forEach((el) => io.observe(el))

    // Safety net. Every word on this site is inside a .reveal, so if the
    // observer never reports — a headless or embedded viewport, a background
    // tab that never composites, an engine that throttles callbacks — the page
    // is blank paper rather than merely unanimated. If nothing at all has
    // revealed shortly after mount, assume the observer is not working and show
    // everything. Scoped to the "nothing revealed" case on purpose: once one
    // element has come in, the observer is proven live and the scroll animation
    // is left alone.
    const rescue = window.setTimeout(() => {
      if (!document.querySelector('.reveal.visible')) {
        els.forEach((el) => el.classList.add('visible'))
        io.disconnect()
      }
    }, 1200)

    return () => {
      window.clearTimeout(rescue)
      io.disconnect()
    }
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
