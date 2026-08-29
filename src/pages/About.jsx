import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { Arrow } from '../components/icons'
import Plate from '../components/Plate'
import Band from '../components/Band'

export default function About() {
  usePageTitle('About — Klingström Group')

  return (
    <>
      <section className="hero--interior">
        <div className="container">
          <span className="section-num reveal">About</span>
          <h1 className="display reveal reveal-d1">Every great house <em>began somewhere</em>.</h1>
          <p className="lede reveal reveal-d2">Swire began in 1816 with one trader in Liverpool. The Wallenberg sphere with one bank in 1856. Møller with one ship in 1904. Every century of heritage started as a single decision to build carefully — and keep building.</p>
        </div>
      </section>

      <Plate
        file="supper.jpg"
        variant="bleed"
        tight
        eager
        alt="A long table laid with linen, candles and wine outside a stone house at dusk."
        label="On relationships"
        note="A countess once told Nicholai that a relationship should last three hundred years. We took her at her word."
      />

      {/* The name */}
      <section className="section">
        <div className="container split">
          <div className="sticky-label reveal">
            <span className="section-num">The name</span>
            <h2>Ström, as in stream.</h2>
          </div>
          <div className="reveal reveal-d1">
            <p className="body-copy"><strong>Ström</strong> is the Swedish word for stream — a current that moves steadily, shapes everything it touches, and does not stop. It is a fitting name for a group whose only strategy is to keep going.</p>
            <p className="body-copy">The mark of the Group is the K and G interlocked — the family and the group, each holding the other in place.</p>
          </div>
        </div>
      </section>

      {/* Founder's note */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">From the founder</span>
          </div>
          <div className="note reveal reveal-d1">
            <p>I did not inherit a company. I am building one — and, just as deliberately, the structure meant to keep it.</p>
            <p>Klingström Group exists so that the businesses I build and back have an owner who is patient, present, and unbothered by the calendar. Gradr is the first. It will not be the last.</p>
            <p>What I want from the next fifty years is plain enough: that every company here is better for having been owned by us, and that whoever holds this seat after me inherits something worth keeping.</p>
            <div className="note-sign">
              <div className="note-name">Nicholai Klingström</div>
              <div className="note-role">Founder · Stockholm, 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">The record</span>
          </div>
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-year">2026</div>
              <div>
                <h3>The Group is founded</h3>
                <p>Klingström Group is established in Sweden as the permanent home for the family's companies and investments.</p>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="timeline-year">2026</div>
              <div>
                <h3>Gradr joins as the first operating company</h3>
                <p>The education-technology platform for Swedish schools becomes the foundation stone of the portfolio.</p>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="timeline-year">→ 2126</div>
              <div>
                <h3>Intentionally unwritten</h3>
                <p>Heritage is not inherited. It is begun — and then kept. The rest of this page is the work of the next hundred years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Band
        variant="split"
        file="interior.jpg"
        focus="50% 54%"
        eyebrow="On ownership"
        quote="A company is not something you hold. It is something you are held responsible for."
      />

      {/* Governance */}
      <section className="section">
        <div className="container split">
          <div className="sticky-label reveal">
            <span className="section-num">Governance</span>
            <h2>Private, and proudly so.</h2>
          </div>
          <div className="reveal reveal-d1">
            <p className="body-copy">Klingström Group is wholly family-owned and privately held. It takes no outside capital, answers to no fund investors, and publishes no quarterly guidance — which is precisely what lets it keep its promises to the companies it owns.</p>
            <p className="body-copy">The Group governs through small, engaged boards, clear mandates, and the old-fashioned habit of doing what it said it would do.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--flush-top cta">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Correspondence</span>
          </div>
          <div>
            <h2 className="reveal">The first hundred years <em>start now</em>.</h2>
            <Link className="btn reveal reveal-d1" to="/contact">
              Write to us <span className="btn-circle"><Arrow /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
