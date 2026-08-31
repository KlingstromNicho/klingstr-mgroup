import { Link } from 'react-router-dom'
import { KMark } from './icons'
import Crest from './Crest'
import Signature from './Signature'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-head reveal">
          <div className="footer-wordmark">Klingström <em>Group</em></div>
          <KMark className="footer-k" />
        </div>
        <div className="footer-cols">
          <div className="footer-intro">
            <p className="footer-tag">A family-owned holding company of the North. Built for generations, run with care.</p>
            <Signature className="sig-mark footer-signature" decorative />
          </div>
          <div className="footer-col">
            <h4>Group</h4>
            <Link to="/holdings">Holdings</Link>
            <Link to="/capital">Capital</Link>
            <Link to="/approach">Approach</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Reach us</h4>
            <a href="mailto:contact@klingstromgroup.se">contact@klingstromgroup.se</a>
            <span>Stockholm, Sweden</span>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Klingström Group</span>
          <Crest className="crest-mark footer-crest" />
          <span>Byggt för generationer</span>
        </div>
      </div>
    </footer>
  )
}
