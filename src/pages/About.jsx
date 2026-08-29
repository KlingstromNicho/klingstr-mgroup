import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { Arrow } from '../components/icons'
import { asset } from '../lib/asset'
import Plate from '../components/Plate'
import Band from '../components/Band'

// The charges, read out one at a time. Four, because four is what the shield
// carries — do not add a fifth to fill the row.
const CHARGES = [
  {
    name: 'The sword',
    body: "Klinga: a sword's blade. The first half of the name, and the half that decides.",
  },
  {
    name: 'The water',
    body: 'Ström: a stream. The second half — patient, and in no hurry to stop.',
  },
  {
    name: 'The two stones',
    body: 'What stands in the way. The arms name the obstacle before they name the victory.',
  },
  {
    name: 'The sun',
    body: 'Set above the helm. It rises whether or not the work is finished.',
  },
]

// PLACEHOLDER — the founder's checkable facts. Every value here should be one
// a stranger can verify in under a minute; that is the whole point of the block.
// Replace the bracketed ones and delete any row you cannot stand behind.
const FOUNDER = [
  ['Name', 'Nicholai Klingström'],
  ['Role', 'Founder · Klingström Group'],
  ['Also', '[Founder and CEO, Gradr — confirm the title you actually use]'],
  ['Gradr founded', '[YEAR]'],
  ['Based', 'Stockholm, Sweden'],
  ['Contact', '[nicholai@klingstromgroup.com — once the mailbox exists]'],
]

// The ownership facts, set as a register would set them.
const REGISTER = [
  ['Ownership', 'The Klingström family, in full'],
  ['Share classes', 'One'],
  ['Outside capital', 'None taken'],
  ['Generation', 'The first'],
  ['Earnings', 'Retained and put back to work'],
  ['Registered', 'Stockholm, Sweden'],
]

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

      {/* The arms, laid over the long table */}
      <Plate
        file="supper.jpg"
        variant="bleed"
        tight
        eager
        alt="A long table laid with linen, candles and wine outside a stone house at dusk."
        label="On relationships"
        note="A countess once told Nicholai that a relationship should last three hundred years. We took her at her word."
      >
        <div className="arms-overlay">
          <span
            className="arms-crest"
            role="img"
            aria-label="The Klingström arms: a sword standing point upward out of water, between two stones, on a shield beneath a knight's helm and a sun in splendour, wreathed in acanthus, above a ribbon reading Contra Omnia Agimus."
            style={{ '--crest': `url(${asset('crest.png')})` }}
          />
          <p className="arms-latin">Contra omnia agimus</p>
          <p className="arms-gloss">Against all things, we act</p>
        </div>
      </Plate>

      {/* The reading of the arms */}
      <section className="section">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">The arms</span>
          </div>
          <div>
            <div className="blazon">
              {CHARGES.map((charge) => (
                <div className="blazon-item reveal" key={charge.name}>
                  <h3>{charge.name}</h3>
                  <p>{charge.body}</p>
                </div>
              ))}
            </div>
            <p className="arms-foot reveal">Taken up with the founding of the Group in 2026 — newly made, as every old thing once was.</p>
          </div>
        </div>
      </section>

      {/* The name */}
      <section className="section">
        <div className="container split">
          <div className="sticky-label reveal">
            <span className="section-num">The name</span>
            <h2>Ström, as in stream.</h2>
          </div>
          <div className="reveal reveal-d1">
            <p className="body-copy"><strong>Ström</strong> is the Swedish word for stream — a current that moves steadily, shapes everything it touches, and does not stop. <strong>Klinga</strong> is the word for a sword's blade. Whether or not the name was ever meant to carry both, the arms read it so: a blade standing out of running water.</p>
            <p className="body-copy">It is a fitting name for a group whose only strategy is to keep going.</p>
            <p className="body-copy">The mark of the Group is the K and G interlocked — the family and the group, each holding the other in place.</p>
          </div>
        </div>
      </section>

      {/* The founder — PLACEHOLDER. Every house this site admires publishes who
          holds the seat, because in permanent capital the person is the product
          (Permanent Equity is Brent Beshore; Tiny is Andrew Wilkinson; Investor,
          Latour and Nordstjernan run full board pages). Fill the bracketed values
          in FOUNDER above and rewrite the two paragraphs in your own voice, then
          drop the portrait in at public/founder.jpg and uncomment the Plate.
          Deliberately NOT here: your age. The houses publish the seat and the
          record, never a date of birth. */}
      <section className="section section--flush-top">
        <div className="container split">
          <div className="sticky-label reveal">
            <span className="section-num">The founder</span>
            <h2>One name, <em>on the register</em>.</h2>
          </div>
          <div className="reveal reveal-d1">
            <p className="body-copy">Klingström Group is founded and owned by Nicholai Klingström. He is not an investor who has moved into operating, but an operator who is building the ownership structure first — Gradr, the education-technology company he founded and runs, is the Group's first holding and the reason the rest of this site is written the way it is.</p>
            <p className="body-copy">[PLACEHOLDER — replace with two or three sentences: what you do day to day at Gradr, what you are studying or where you trained, and what you are trying to learn next. Plain and specific. This is the paragraph that turns the &ldquo;we&rdquo; on the rest of the site into a person, and it is the highest-value text on the page.]</p>
            <dl className="ledger">
              {FOUNDER.map(([term, value]) => (
                <div className="ledger-row reveal" key={term}>
                  <dt className="ledger-term">{term}</dt>
                  <dd className="ledger-value">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* The portrait. Uncomment once public/founder.jpg exists — a real
          photograph of you, not a stock interior. Same column treatment as the
          Stockholm plate on /approach.
      <Plate
        file="founder.jpg"
        variant="column"
        ratio="580 / 768"
        alt="Nicholai Klingström."
        label="Stockholm"
        note="The seat, and who is in it."
      />
      */}

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

      {/* Ownership */}
      <section className="section section--flush-top">
        <div className="container offset">
          <div className="label-col reveal">
            <span className="section-num">Ownership</span>
          </div>
          <div>
            <h2 className="reveal">One family. <em>One class of shares.</em></h2>
            <p className="body-copy reveal reveal-d1 ownership-lede">Klingström Group is owned outright by the Klingström family. There is no fund behind it, no syndicate, no investor with a clock running — and no intention of inviting one. What the Group earns, the Group keeps and puts back to work.</p>
            <p className="body-copy reveal reveal-d1">This is mechanics before it is sentiment. An owner who cannot be forced to sell can promise things a fund cannot: that a company will not be flipped, that a good year will not be spent proving a point, and that the answer in year nine will be the answer given in year one. A fifty-year horizon is only credible if nobody can take the horizon away.</p>
            <dl className="ledger">
              {REGISTER.map(([term, value]) => (
                <div className="ledger-row reveal" key={term}>
                  <dt className="ledger-term">{term}</dt>
                  <dd className="ledger-value">{value}</dd>
                </div>
              ))}
            </dl>
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
                <h3>The arms are taken up</h3>
                <p>A sword out of water between two stones, and a motto: <em>contra omnia agimus</em>. The first thing the family made that was meant to outlast it.</p>
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

      {/* Governance & succession */}
      <section className="section">
        <div className="container split">
          <div className="sticky-label reveal">
            <span className="section-num">Governance &amp; succession</span>
            <h2>Held, and then <em>handed on</em>.</h2>
          </div>
          <div className="reveal reveal-d1">
            <p className="body-copy">Privacy here is a working condition rather than a preference. With no quarter to explain and no guidance number to hit, a board can spend its meeting on the business itself — which is precisely what lets the Group keep its promises to the companies it owns.</p>
            <p className="body-copy">The Group governs through small, engaged boards, clear mandates, and the old-fashioned habit of doing what it said it would do. It writes things down, and it keeps to what it writes.</p>
            <p className="body-copy">Ownership is meant to pass, not to be sold. Whoever holds this seat after its founder inherits an obligation before an asset: the companies, the people inside them, and the standard they were bought to keep.</p>
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
