import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { Arrow } from '../components/icons'

// Routed from App's catch-all, and also the page the deploy copies to 404.html
// so GitHub Pages serves it for unmatched paths. Previously '*' rendered Home,
// which meant a mistyped or long-dead link quietly returned the homepage and
// never announced itself.
export default function NotFound() {
  usePageTitle('Not found — Klingström Group')

  return (
    <section className="hero--interior">
      <div className="container">
        <span className="section-num reveal">404</span>
        <h1 className="display reveal reveal-d1">This page has <em>no address here</em>.</h1>
        <p className="lede reveal reveal-d2">
          The link may be old, or mistyped. Nothing on this site is ever taken down
          quietly — so if you followed a link from somewhere and expected to arrive
          somewhere, we would like to know.
        </p>
        <div className="reveal reveal-d2" style={{ marginTop: 44 }}>
          <Link className="btn" to="/">
            Return to the Group <span className="btn-circle"><Arrow /></span>
          </Link>
        </div>
      </div>
    </section>
  )
}
