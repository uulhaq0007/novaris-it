import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, text, align = 'left', light = false, className = '' }) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-[640px] text-center' : 'max-w-[560px]'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${centered ? 'eyebrow-center' : ''} ${light ? 'text-accent-light' : ''}`}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={100}>
        <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={200}>
          <p className={`mt-5 ${light ? 'text-white/70' : 'text-body'}`}>{text}</p>
        </Reveal>
      )}
    </div>
  )
}
