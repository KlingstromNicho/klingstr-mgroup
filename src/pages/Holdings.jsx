import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { Arrow } from '../components/icons'
import Plate from '../components/Plate'

export default function Holdings() {
  usePageTitle('Holdings — Klingström Group')

  return (
    <>
      <section className="hero--interior">
        <div className="container">
          <span className="section-num reveal">Portfolio</span>
          <h1 className="display reveal reveal-d1">Few things, <em>held well</em>.</h1>
          <p className="lede reveal reveal-d2">A concentrated group of operating companies and principal investments — each held with an owner's care and a generational horizon.</p>
        </div>
      </section>

      <Plate
        file="room.jpg"
        variant="verso"
        focus="50% 50%"
        tight
        eager
        alt="A long wooden table and a typewriter in a plain room with a stone fireplace."
        label="The long table"
        note="A table set for a handful of companies, not a hundred."
      />

      {/* Operating companies */}
      <section className="section">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Operating companies</span>
          </div>
          <div className="index-list">
            <a className="index-row reveal" href="https://gradr.se" target="_blank" rel="noopener noreferrer">
              <div className="index-top">
                <span className="index-name">Gradr</span>
                <span className="index-arrow">→</span>
                <span className="index-cat">Education Technology</span>
              </div>
              <p className="index-desc">Gradr helps Swedish schools run assessment, grading and teacher workflows — modern tools in service of the classroom. The Group's first operating company.</p>
            </a>
            {/* Duplicate the block above to add an operating company */}
          </div>
        </div>
      </section>

      {/* Principal investments */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Principal investments</span>
          </div>
          <div className="index-list">
            <div className="index-row index-row--placeholder reveal">
              <div className="index-top">
                <span className="index-name">In diligence</span>
                <span className="index-cat">Undisclosed</span>
              </div>
              <p className="index-desc">The Group is establishing minority positions in Nordic companies that meet our standard. Holdings are disclosed once ownership is settled.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Criteria</span>
            <Plate
              variant="stamp"
              file="room.jpg"
              ratio="4 / 3"
              focus="64% 46%"
              alt="A detail of the long table, seen small."
              label="Detail"
              note="The same room, in the ordinary course of a Tuesday."
            />
          </div>
          <div>
            <h2 className="reveal">What we look for.</h2>
            <ul className="plain-list reveal reveal-d1" style={{ marginTop: 44 }}>
              <li><span><strong>Durable demand.</strong> Products people need in good years and in bad.</span></li>
              <li><span><strong>Honest economics.</strong> Real revenue, sane margins, no story-math.</span></li>
              <li><span><strong>Management we would back for decades.</strong> Character first, résumé second.</span></li>
              <li><span><strong>Nordic roots or Nordic reach.</strong> Businesses of the North, or headed here.</span></li>
              <li><span><strong>A reason to exist in fifty years.</strong> Trends fade; needs endure.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--flush-top cta">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Introductions</span>
          </div>
          <div>
            <h2 className="reveal">Building something that <em>belongs here?</em></h2>
            <Link className="btn reveal reveal-d1" to="/contact">
              Introduce yourself <span className="btn-circle"><Arrow /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
