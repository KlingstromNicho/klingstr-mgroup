import { asset } from '../lib/asset'

// A quote and a photograph on a green field. Three hands:
//
//   split    the quote on solid green in the left columns, the photograph
//            unscrimmed in the right ones, breaking up out of the field
//   horizon  a wide, shallow strip of picture with the quote set beneath it,
//            larger than the photograph is tall. `close` reverses the order so
//            the line reads first and the page ends on the picture.
//   default  the original: the photograph as a background with the quote laid
//            over it. Unused by any page — kept for a green-only band.
export default function Band({
  file,
  eyebrow,
  quote,
  caption,
  variant,
  focus,
  green = false,
  close = false,
  tall = false,
}) {
  if (variant === 'split') {
    return (
      <section className="band band--split">
        <div className="spread">
          {/* copy first in source order, so the figure paints over the green */}
          <div className="band-copy">
            <span className="eyebrow reveal">{eyebrow}</span>
            <blockquote className="reveal reveal-d1">{quote}</blockquote>
            {caption && <figcaption className="reveal reveal-d2">{caption}</figcaption>}
          </div>
          <figure className="band-figure reveal">
            <img src={asset(file)} alt="" style={{ '--plate-focus': focus }} decoding="async" />
          </figure>
        </div>
      </section>
    )
  }

  if (variant === 'horizon') {
    const strip = (
      <div className="horizon-strip">
        <img src={asset(file)} alt="" style={{ '--plate-focus': focus }} decoding="async" />
      </div>
    )
    const words = (
      <div className="container offset">
        <div className="label-col">
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <figure>
          <blockquote>{quote}</blockquote>
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      </div>
    )

    return (
      <section
        className={`horizon reveal${green ? ' horizon--green' : ''}${close ? ' horizon--close' : ''}`}
      >
        {close ? words : strip}
        {close ? strip : words}
      </section>
    )
  }

  const className = `band${file ? ' band--image' : ''}${tall ? ' band--tall' : ''}`

  return (
    <section
      className={className}
      style={file ? { backgroundImage: `url(${asset(file)})` } : undefined}
    >
      <div className="container offset">
        <div className="label-col reveal">
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <figure>
          <blockquote className="reveal reveal-d1">{quote}</blockquote>
          {caption && <figcaption className="reveal reveal-d2">{caption}</figcaption>}
        </figure>
      </div>
    </section>
  )
}
