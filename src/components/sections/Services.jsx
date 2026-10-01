import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import ServiceIcon from '../ui/ServiceIcon'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/site'

export default function Services({ limit = 4, className = '' }) {
  const list = limit ? services.slice(0, limit) : services

  return (
    <section className={`section relative overflow-hidden bg-mist ${className}`}>
      <span className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-accent/5" />

      <div className="container relative">
        <SectionHeading
          align="center"
          eyebrow="Popular IT Services"
          title="Our Professional Solutions For IT Business"
          text="Pick a single engagement or combine them — the delivery model, reporting and people stay the same either way."
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((service, i) => (
            <Reveal key={service.title} delay={i * 110}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-black/[0.06] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-hover">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

                <span className="relative mb-7 grid h-[70px] w-[70px] place-items-center rounded-full bg-accent-soft text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white">
                  <ServiceIcon name={service.icon} />
                </span>

                <h3 className="font-display text-[21px] font-bold transition-colors duration-300 group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px]">{service.text}</p>

                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 font-display text-[14px] font-bold uppercase tracking-wide text-heading transition-colors duration-300 group-hover:text-accent"
                >
                  Learn More
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {limit && (
          <Reveal delay={200}>
            <div className="mt-14 text-center">
              <Link to="/services" className="btn-dark">
                View All Services <FiArrowRight />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
