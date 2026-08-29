import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { Arrow } from '../components/icons'

const TENETS = [
  {
    num: 'i.',
    title: 'Permanence over cycles',
    body: 'We have no fund life, no fundraising calendar and no obligation to sell. When we take a position, the default outcome is that we still hold it decades from now. That permanence changes every decision that follows — hiring, pricing, product, pace.',
  },
  {
    num: 'ii.',
    title: 'Concentration over coverage',
    body: 'A short list of companies we understand deeply beats a long list we monitor casually. We would rather know one business to the bolt than skim across twenty.',
  },
  {
    num: 'iii.',
    title: 'Partnership, whatever the stake',
    body: 'Whether we own all of a company or a tenth of it, we behave the same way: present, useful, and on the side of the builder. We answer the phone, we show up to the board meeting prepared, and we never surprise a founder.',
  },
  {
    num: 'iv.',
    title: 'Craft over scale',
    body: 'We would rather own the finest small company in its field than the third-best large one. Quality compounds; size merely accumulates.',
  },
  {
    num: 'v.',
    title: 'Discretion',
    body: 'We compound quietly. Our companies take the spotlight; the Group stays in the background — a keel, not a sail.',
  },
]

export default function Approach() {
  usePageTitle('Approach — Klingström Group')

  return (
    <>
      <section className="hero--interior">
        <div className="container">
          <span className="section-num reveal">Approach</span>
          <h1 className="display reveal reveal-d1">Patient capital, <em>present owners</em>.</h1>
          <p className="lede reveal reveal-d2">We combine the permanence of a family holding company with the operating tempo of a modern technology firm.</p>
        </div>
      </section>

      {/* Tenets */}
      <section className="section">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Tenets</span>
          </div>
          <div className="tenets">
            {TENETS.map((tenet) => (
              <article className="tenet reveal" key={tenet.num}>
                <span className="tenet-num">{tenet.num}</span>
                <h3>{tenet.title}</h3>
                <p>{tenet.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we engage */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">How we engage</span>
          </div>
          <div className="principle-list">
            <article className="principle reveal">
              <span className="principle-num">I.</span>
              <div>
                <h3>Operating companies <span>wholly owned</span></h3>
                <p>Businesses we build or acquire outright and run for decades, with the Group as a permanent, active owner.</p>
              </div>
            </article>
            <article className="principle reveal">
              <span className="principle-num">II.</span>
              <div>
                <h3>Principal investments <span>significant minority stakes</span></h3>
                <p>Meaningful positions in established companies, taken with board involvement and a standing offer of help.</p>
              </div>
            </article>
            <article className="principle reveal">
              <span className="principle-num">III.</span>
              <div>
                <h3>Ventures <span>early positions</span></h3>
                <p>Early stakes alongside founders we believe in — small in size, long in patience, and first in line when they need an owner who thinks in decades.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="band">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="eyebrow">On horizons</span>
          </div>
          <figure>
            <blockquote className="reveal reveal-d1">The best time to plant a forest was fifty years ago. The second-best time is quietly, today.</blockquote>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Correspondence</span>
          </div>
          <div>
            <h2 className="reveal">An owner for the <em>long stretch</em>.</h2>
            <p className="lede reveal reveal-d1">If that is the kind of partner you are looking for, write to us.</p>
            <Link className="btn reveal reveal-d2" to="/contact">
              Get in touch <span className="btn-circle"><Arrow /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
