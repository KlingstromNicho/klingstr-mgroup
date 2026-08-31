import { asset } from '../lib/asset'

// The founder's hand, traced from ink to a single path. Line art on a
// transparent ground, so — like the arms and the KC monogram — it is used as a
// MASK and painted in currentColor rather than dropped in as an <img>: that way
// it takes the ink of whatever ground it lands on, paper or green, instead of
// dragging a white box along with it. The url arrives as a custom property so
// it resolves against the deploy base like every other public file.
//
// `decorative` for placements where the signature only closes a page and the
// name is already on it — an ornament, and read out as one more thing to hear
// otherwise. See .sig-mark for the size hook.
export default function Signature({ className = 'sig-mark', decorative = false }) {
  const label = decorative
    ? { 'aria-hidden': true }
    : { role: 'img', 'aria-label': 'The signature of Nicholai Klingström.' }

  return (
    <span
      className={className}
      {...label}
      style={{ '--sig': `url(${asset('signature.svg')})` }}
    />
  )
}
