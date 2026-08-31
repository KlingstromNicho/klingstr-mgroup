import { asset } from '../lib/asset'

// The arms, small. The plate is line art on a transparent ground, so it is
// used as a MASK and painted in currentColor rather than dropped in as an
// <img> — that way the seal takes the cream of whatever ground it sits on and
// can carry a shadow of its own. Same technique as the full arms on About;
// see .arms-crest. The url arrives as a custom property so it resolves against
// the deploy base like every other public file.
export default function Crest({ className = 'crest-mark' }) {
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{ '--crest': `url(${asset('crest-arms.webp')})` }}
    />
  )
}
