import { Link } from 'react-router-dom'
import { site } from '../../data/site'

/**
 * Original wordmark: an "N" cut from a rounded tile, paired with the company name.
 * `variant` switches the text colour for dark surfaces.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const light = variant === 'light'

  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label={`${site.name} home`}>
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-accent transition-transform duration-500 group-hover:rotate-[10deg]">
        <span className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-white/20" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6" aria-hidden="true">
          <path d="M6 25V7h4.6l10.2 11.4V7H26v18h-4.7L11.2 13.7V25z" fill="#fff" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[24px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-heading'}`}
        >
          {site.name}
        </span>
        <span
          className={`mt-1 font-sans text-[10px] font-bold uppercase tracking-[.28em] ${
            light ? 'text-white/50' : 'text-body/70'
          }`}
        >
          Tech Group
        </span>
      </span>
    </Link>
  )
}
