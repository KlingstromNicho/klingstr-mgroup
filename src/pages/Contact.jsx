import usePageTitle from '../hooks/usePageTitle'
import Band from '../components/Band'

export default function Contact() {
  usePageTitle('Contact — Klingström Group')

  return (
    <>
      <section className="hero--interior">
        <div className="container">
          <span className="section-num reveal">Contact</span>
          <h1 className="display reveal reveal-d1">Correspondence is <em>welcome</em>.</h1>
          <p className="lede reveal reveal-d2">We read everything, reply to most of it, and remember the good letters for years.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="reveal">
            <span className="section-num">For founders &amp; owners</span>
            <h2 style={{ marginTop: 16, fontSize: 'clamp(26px, 2.8vw, 38px)', lineHeight: 1.12, maxWidth: '13em' }}>
              If you are considering an owner, tell us three things.
            </h2>
            <ul className="plain-list" style={{ marginTop: 44 }}>
              <li><span><strong>What you build</strong> — and who genuinely needs it.</span></li>
              <li><span><strong>Why it endures</strong> — what still matters about it in twenty years.</span></li>
              <li><span><strong>What you want from an owner</strong> — capital, counsel, succession, or all three.</span></li>
            </ul>
            <p className="body-copy" style={{ marginTop: 36 }}>No deck required. A plain, honest letter travels furthest here.</p>
          </div>

          <div className="contact-list reveal reveal-d1">
            <div className="contact-block">
              <h3>General correspondence</h3>
              <p className="contact-value"><a href="mailto:contact@klingstromgroup.se">contact@klingstromgroup.se</a></p>
              <p className="contact-note">We aim to respond within a week.</p>
            </div>
            <div className="contact-block">
              <h3>Founders &amp; companies</h3>
              <p className="contact-value"><a href="mailto:companies@klingstromgroup.se">companies@klingstromgroup.se</a></p>
              <p className="contact-note">Introductions, opportunities and succession conversations.</p>
            </div>
            <div className="contact-block">
              <h3>Office</h3>
              <p className="contact-value">Stockholm, Sweden</p>
              <p className="contact-note">Visits by appointment.</p>
            </div>
          </div>
        </div>
      </section>

      <Band
        variant="horizon"
        close
        file="window.jpg"
        focus="50% 62%"
        eyebrow="Stockholm"
        quote="The desk is here, the post is read, and the good letters are kept."
      />
    </>
  )
}
