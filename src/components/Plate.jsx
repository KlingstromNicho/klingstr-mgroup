import { asset } from '../lib/asset'

// Variants that bring no wrapper of their own — the caller places them inside an
// existing .label-col or .spread.
const BARE = ['stamp', 'column']
// Variants placed on the twelve-column photography grid rather than in .container.
const SPREAD = ['recto', 'verso']

// A photograph, sized and placed the way its section wants it. `variant` picks the
// treatment — see the photography block in global.css. `ratio` is the file's own
// aspect ratio and `focus` aims the crop, so nothing is left to a centre crop.
export default function Plate({
  file,
  alt,
  label,
  note,
  ratio = '16 / 9',
  focus,
  variant = 'wide',
  tight = false,
  eager = false,
  children,
}) {
  const figure = (
    <figure className={`plate plate--${variant} reveal`}>
      {/* anything passed as children is laid over the photograph itself —
          see .arms-overlay. The frame is the positioning context. */}
      <div className="plate-frame">
        <img
          src={asset(file)}
          alt={alt}
          style={{ '--plate-ratio': ratio, '--plate-focus': focus }}
          loading={eager ? undefined : 'lazy'}
          decoding="async"
        />
        {children}
      </div>
      <figcaption>
        <span className="eyebrow">{label}</span>
        <p className="plate-note">{note}</p>
      </figcaption>
    </figure>
  )

  if (BARE.includes(variant)) return figure

  return (
    <section className={`plate-section${tight ? ' plate-section--tight' : ''}`}>
      {SPREAD.includes(variant) ? (
        <div className="spread">{figure}</div>
      ) : variant === 'bleed' ? (
        figure
      ) : (
        <div className="container">{figure}</div>
      )}
    </section>
  )
}
