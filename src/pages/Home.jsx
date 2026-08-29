import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { Arrow } from '../components/icons'
import { asset } from '../lib/asset'
import Plate from '../components/Plate'
import Band from '../components/Band'

export default function Home() {
  usePageTitle('Klingström Group — A Scandinavian Holding Company')

  const videoRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause()
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <video
          ref={videoRef}
          className="hero-video"
          src={asset('hero.mp4')}
          poster={asset('hero-poster.jpg')}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-scrim" aria-hidden="true"></div>
        <div className="container hero-content">
          <h1 className="display reveal">A northern home for <em>enduring</em> companies.</h1>
          <div className="hero-foot reveal reveal-d1">
            <p className="hero-sub">A Scandinavian holding company, building and backing businesses with generational horizons. Est. 2026 · Privately held.</p>
            <Link className="hook-link hook-link--light" to="/holdings">View the holdings</Link>
          </div>
        </div>
      </section>

      {/* The Group */}
      <section className="section">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">The Group</span>
          </div>
          <div>
            <p className="statement reveal">We are not a fund. There is no exit horizon, no five-year cycle, no capital to return. <em>We buy and build to keep</em> — and we measure our work in decades.</p>
            <div className="statement-aside reveal reveal-d1">
              <p className="body-copy">The great houses of the North — trading families, shipowners, industrialists — were built on a simple conviction: that ownership is a responsibility before it is an asset. Klingström Group carries that conviction into a new century, applied to software, technology and the businesses that will define it.</p>
              <Link className="hook-link" to="/approach">Our approach</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Principles</span>
          </div>
          <div className="principle-list">
            <article className="principle reveal">
                <div>
                <h3>The long view <span>Långsiktighet</span></h3>
                <p>Decisions are weighed against decades, not quarters. We would rather grow slowly and surely than quickly and fragile.</p>
              </div>
            </article>
            <article className="principle reveal">
                <div>
                <h3>Stewardship <span>Förvaltarskap</span></h3>
                <p>What one owns, one must care for. We take governance seriously, keep our word, and leave every company better than we found it.</p>
              </div>
            </article>
            <article className="principle reveal">
                <div>
                <h3>Craft <span>Hantverk</span></h3>
                <p>We are operators before we are investors. We build with modern tools and old standards — quality that outlives its makers.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Plate
        file="desk.jpg"
        variant="recto"
        ratio="1376 / 512"
        alt="An open notebook, a brass lamp and a cup of coffee on a walnut desk by a window."
        label="Stockholm"
        note="Most of the work is ordinary: read carefully, decide slowly, write it down."
      />

      {/* Holdings */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Holdings</span>
            <Link className="hook-link" to="/holdings">View the portfolio</Link>
          </div>
          <div className="index-list">
            <Link className="index-row reveal" to="/holdings">
              <div className="index-top">
                <span className="index-name">Gradr</span>
                <span className="index-arrow">→</span>
                <span className="index-cat">Education Technology</span>
              </div>
              <p className="index-desc">Assessment and teacher workflows for Swedish schools. The Group's first operating company.</p>
            </Link>
            <Link className="index-row reveal" to="/capital">
              <div className="index-top">
                <span className="index-name">Klingström Capital</span>
                <span className="index-arrow">→</span>
                <span className="index-cat">Principal Investments</span>
              </div>
              <p className="index-desc">The Group's investment arm, wholly owned — formed to take minority positions in Nordic companies and early stakes alongside founders.</p>
            </Link>
          </div>
        </div>
      </section>

      <Band
        variant="horizon"
        green
        file="road.jpg"
        focus="50% 58%"
        eyebrow="The family principle"
        quote="”Det man äger skall man vårda.”"
        caption="What one owns, one must care for."
      />

      {/* In brief */}
      <section className="section">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">In brief</span>
          </div>
          <p className="facts reveal reveal-d1">Founded in Sweden in <em>2026</em>. Wholly family-owned, in its <em>first generation</em>. Concentrated by conviction, and managed on a <em>fifty-year</em> horizon.</p>
        </div>
      </section>

      {/* Correspondence */}
      <section className="section section--flush-top cta">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Correspondence</span>
          </div>
          <div>
            <h2 className="reveal">Heritage is not inherited. <em>It is begun.</em></h2>
            <p className="lede reveal reveal-d1">If you are building something meant to outlast you, we should talk.</p>
            <Link className="btn reveal reveal-d2" to="/contact">
              Get in touch <span className="btn-circle"><Arrow /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
