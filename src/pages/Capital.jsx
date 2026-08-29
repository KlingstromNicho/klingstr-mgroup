import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { Arrow } from '../components/icons'
import { asset } from '../lib/asset'
import Plate from '../components/Plate'
import Band from '../components/Band'

// The sectors, in the order we would claim to understand them. The fourth
// entry is the boundary, not a fourth sector — see the note in it.
const MARKETS = [
  {
    title: 'Software and technology',
    body: 'Business software with real customers and real invoices — sold to companies, renewed rather than resold, and boring in the way that compounds. This is where the Group\'s own operating experience sits, and where we are quickest to form a view.',
  },
  {
    title: 'Education and public-sector systems',
    body: 'Software that schools, municipalities and public institutions run their week on. Slow to win, hard to displace, and useful for decades. Gradr is the Group\'s own company in this market, which means we buy here with our eyes open rather than from a distance.',
  },
  {
    title: 'Industrial and business services',
    body: 'Unglamorous companies with long customer relationships and honest pricing power — maintenance, inspection, compliance, specialist logistics. Businesses that are needed in a bad year as much as a good one.',
  },
  {
    title: 'And not much else',
    body: 'We are not sector tourists. If a company falls outside these and still meets the standard, we will look at it — and we will say plainly that we are learning rather than pretending we are not.',
  },
]

// Where the firm invests, country by country — see .gazetteer.
const GEOGRAPHY = [
  {
    place: 'Sweden',
    body: 'Home ground. The Group is registered in Stockholm and its first operating company is here. Most of what we see reaches us from this market first.',
  },
  {
    place: 'Norway',
    body: 'In scope. We look hardest at software and services sold into industry.',
  },
  {
    place: 'Denmark',
    body: 'In scope. A similar market and a similar temperament, an hour from Stockholm.',
  },
  {
    place: 'Finland',
    body: 'In scope. Deep engineering, and a habit of building companies meant to outlast their founders.',
  },
]

// What we will not do. Published because it saves everyone a meeting. Note what
// is deliberately absent: a company in trouble is not on this list.
const EXCLUSIONS = [
  ['No auctions.', 'We do not bid into broad processes. If a banker is running a clock, we are the wrong buyer and will say so on the first call.'],
  ['Nothing hostile.', 'We invest alongside the people running the company, or we do not invest. Everything we are useful for depends on being wanted in the room.'],
  ['Nothing we cannot judge.', 'Drug discovery, commodities trading, digital assets. That is a comment on us, not on the field.'],
  ['No relationship we would not keep.', 'If we cannot picture ourselves still on the register in twenty years and glad of it, we are the wrong money — however well the numbers read.'],
]

// The facts, set as a register would set them — see .ledger.
const REGISTER = [
  ['Established', '2026, Stockholm'],
  ['Owner', 'Klingström Group, in full'],
  ['Fund structure', 'None — no vintage year, no fund life'],
  ['Capital', 'Permanent, with no fixed term'],
  ['Mandate', 'Companies worth keeping, held indefinitely'],
]

export default function Capital() {
  usePageTitle('Klingström Capital — Klingström Group')

  return (
    <>
      {/* The reading room, with the mark on it. No scrim — see .hero--photo. */}
      <section
        className="hero hero--photo"
        style={{ backgroundImage: `url(${asset('library.jpg')})` }}
      >
        <div className="hero-scrim" aria-hidden="true"></div>
        <div className="container hero-content">
          <span
            className="kc-mark hero-mark reveal"
            style={{ '--mark': `url(${asset('kc.png')})`, '--mark-w': 'clamp(76px, 8.5vw, 124px)' }}
            role="img"
            aria-label="Klingström Capital"
          />
          <h1 className="display reveal reveal-d1">Capital for people who mean to <em>change something</em>.</h1>
          <p className="hero-sub reveal reveal-d2">We put money behind people with a genuine idea and the will to see it through — and then stay long enough for it to matter. The investment arm of Klingström Group.</p>
        </div>
      </section>

      {/* What the mark stands behind */}
      <section className="section">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">The firm</span>
          </div>
          <div>
            <p className="statement reveal">Money that only changes hands has done nothing. Capital is meant to <em>make something exist</em>.</p>
            <div className="statement-aside reveal reveal-d1">
              <p className="body-copy">Klingström Capital was established in 2026 to back companies and founders the Group believes in, and to stay with them for as long as the work is worth doing. We measure a position by what it built, not by what it eventually fetched.</p>
              <p className="body-copy">Klingström Group owns it outright. There is no fund above it and no vintage year — which is what lets us begin something without a date on which it has to end.</p>
              <Link className="hook-link" to="/approach">How we think about ownership</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it invests */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">How it invests</span>
          </div>
          <div className="principle-list">
            <article className="principle reveal">
              <div>
                <h3>Principal investments <span>significant minority stakes</span></h3>
                <p>Positions in established companies with a board seat where one helps, and little asked for beyond it. We expect to be on the register a decade after we join it.</p>
              </div>
            </article>
            <article className="principle reveal">
              <div>
                <h3>Ventures <span>early positions</span></h3>
                <p>Early stakes alongside founders, written small and held long. What we offer past the cheque is an owner who has run companies before and answers the phone.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* What we are for */}
      <section className="section section--flush-top">
        <div className="container split">
          <div className="sticky-label reveal">
            <span className="section-num">What we are for</span>
            <h2>The right people, <em>on the wrong track</em>.</h2>
          </div>
          <div className="reveal reveal-d1">
            <p className="body-copy">Most investors screen for the companies that are already working. We are at least as interested in the ones that are not — provided the people inside them are the right people. A strategy can be changed and a market can be re-entered. Character cannot be installed afterwards, and it is the only part we have no way to fix.</p>
            <p className="body-copy">So we will back a good team on a bad track, and we will say plainly what we think has gone wrong. What we are underwriting in that case is not the plan. It is the people, and our own conviction that we can be useful to them for a very long time.</p>
            <p className="body-copy">That conviction is the whole test. If we cannot see a relationship worth keeping for decades, no financial case will talk us into it — and if we can, we will put money behind it well before it is comfortable to do so.</p>
          </div>
        </div>
      </section>

      {/* split, not the background variant: that one lays a green cast over the
          whole photograph. Here the line sits on the green and the picture is
          left alone, breaking up out of the field beside it. */}
      <Band
        variant="split"
        file="lobby.jpg"
        focus="58% 46%"
        eyebrow="The long relationship"
        quote="If we believe a relationship can last three hundred years, we will begin it today."
      />

      {/* Markets */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Markets</span>
          </div>
          <div className="tenets">
            {MARKETS.map((market) => (
              <article className="tenet reveal" key={market.title}>
                <h3>{market.title}</h3>
                <p>{market.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Where we invest</span>
          </div>
          <div>
            <h2 className="reveal">Rooted in the North, <em>not fenced in by it</em>.</h2>
            <div className="gazetteer">
              {GEOGRAPHY.map((country) => (
                <div className="reveal" key={country.place}>
                  <h3>{country.place}</h3>
                  <p>{country.body}</p>
                </div>
              ))}
              <p className="gazetteer-foot reveal">The Nordics are where we know the ground best, not a fence around the mandate. We go where a company earns the trip — and we would rather learn a new market properly than decline a good business for the sake of a map.</p>
            </div>
          </div>
        </div>
      </section>

      <Plate
        file="boardroom.jpg"
        variant="wide"
        focus="50% 46%"
        alt="A long walnut boardroom table with black leather chairs, a carafe and a bottle of water, and a gilt-framed painting on a stone wall."
        label="The board seat"
        note="We will take one where it helps, and spend the first year listening."
      />

      {/* Terms, and the things we will not do */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Terms</span>
          </div>
          <div>
            <p className="facts reveal">We publish no ticket size and no minimum. The right amount is <em>the amount the business needs</em> — set by the company in front of us, not by a fund we are under pressure to spend.</p>
            <p className="body-copy reveal reveal-d1" style={{ marginTop: 36 }}>The same goes for the shape of it. We will take a small position or a large one, come in first or replace an owner whose time is up, and we are content to be a minority holder for as long as the company is well run. What we will not do is agree a structure that quietly obliges someone to sell in five years.</p>
          </div>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">What we don't do</span>
          </div>
          <div>
            <h2 className="reveal">Published, because it <em>saves a meeting</em>.</h2>
            <ul className="plain-list reveal reveal-d1" style={{ marginTop: 44 }}>
              {EXCLUSIONS.map(([rule, body]) => (
                <li key={rule}><span><strong>{rule}</strong> {body}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Positions — deliberately absent until there is one. An empty portfolio
          needs no section; a section with one unfalsifiable row is a liability.
          Add the index-list back, with a real name and a date, on the first close. */}

      {/* The register */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">In brief</span>
          </div>
          <dl className="ledger ledger--flush">
            {REGISTER.map(([term, value]) => (
              <div className="ledger-row reveal" key={term}>
                <dt className="ledger-term">{term}</dt>
                <dd className="ledger-value">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--flush-top cta">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Enquiries</span>
          </div>
          <div>
            <h2 className="reveal">Have something you actually mean <em>to see through?</em></h2>
            <Link className="btn reveal reveal-d1" to="/contact">
              Write to us <span className="btn-circle"><Arrow /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
