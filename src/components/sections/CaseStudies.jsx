import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { caseCategories, caseStudies } from '../../data/site'

export default function CaseStudies() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? caseStudies : caseStudies.filter((item) => item.category === active)

  return (
    <section className="section bg-mist">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Our Recent Projects"
          title="Latest Case Studies"
          text="A sample of the work — infrastructure rebuilds, security programmes and product launches shipped in the last eighteen months."
          className="mb-10"
        />

        {/* Filter tabs */}
        <Reveal delay={150}>
          <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {caseCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`rounded-full px-6 py-2.5 font-display text-[14px] font-bold uppercase tracking-wide transition-all duration-300 ${
                  active === category
                    ? 'bg-accent text-white shadow-[0_8px_22px_rgba(8,106,215,.32)]'
                    : 'bg-white text-heading hover:bg-heading hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="group relative overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[320px] w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-white">
                    {item.category}
                  </span>
                  <h3 className="font-display text-[22px] font-bold text-white">{item.title}</h3>
                  <Link
                    to="/case-study"
                    className="mt-3 inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-wide text-white/0 transition-colors duration-500 group-hover:text-white"
                  >
                    Read More <FiArrowUpRight />
                  </Link>
                </div>

                <Link
                  to="/case-study"
                  aria-label={`Open ${item.title} case study`}
                  className="absolute right-6 top-6 grid h-12 w-12 -translate-y-3 place-items-center rounded-full bg-white text-heading opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-accent hover:text-white"
                >
                  <FiArrowUpRight className="text-xl" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-12 text-center text-body">No case studies published in this category yet.</p>
        )}
      </div>
    </section>
  )
}
