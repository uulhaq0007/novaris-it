import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

/** Inner-page hero: title plus breadcrumb over a darkened photo. */
export default function PageBanner({ title, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-heading py-[110px] lg:py-[150px]">
      <img
        src={`${import.meta.env.BASE_URL}images/page-banner.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-heading via-heading/80 to-transparent" />
      <div className="pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[36px] border-white/5" />

      <div className="container relative text-center">
        <h1 className="font-display text-[34px] font-bold text-white sm:text-[46px] lg:text-[56px]">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-4">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-[15px] text-white/70">
            <li>
              <Link to="/" className="transition hover:text-accent-light">
                Home
              </Link>
            </li>
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <FiChevronRight className="text-accent-light" />
                {i === crumbs.length - 1 || !crumb.to ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link to={crumb.to} className="transition hover:text-accent-light">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
