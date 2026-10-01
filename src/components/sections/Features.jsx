import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import ServiceIcon from '../ui/ServiceIcon'
import { features } from '../../data/site'

export default function Features() {
  return (
    <section className="relative z-10 -mt-px bg-mist pb-20 pt-20 lg:pb-[110px] lg:pt-[110px]">
      <div className="container">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">How We Help You</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title">We Help Your IT Business Move Faster</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={200}>
              <p className="lg:pl-10">
                Four practices, one delivery team. Whether you need a second opinion on architecture or a partner to run
                the whole platform, the same engineers stay with you from kickoff to handover.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-xl bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:bg-accent hover:shadow-hover">
                <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/5 transition-all duration-500 group-hover:scale-[3] group-hover:bg-white/10" />

                <span className="relative grid h-16 w-16 place-items-center rounded-lg bg-accent-soft text-accent transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                  <ServiceIcon name={feature.icon} />
                </span>

                <h3 className="relative mt-7 font-display text-[21px] font-bold transition-colors duration-500 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-[15px] transition-colors duration-500 group-hover:text-white/80">
                  {feature.text}
                </p>

                <Link
                  to="/services"
                  aria-label={`More about ${feature.title}`}
                  className="relative mt-6 inline-grid h-10 w-10 place-items-center rounded-full border border-black/10 text-heading transition-all duration-500 group-hover:border-white/40 group-hover:text-white"
                >
                  <FiArrowUpRight />
                </Link>

                <span className="pointer-events-none absolute bottom-5 right-6 font-display text-[54px] font-extrabold leading-none text-heading/[0.05] transition-colors duration-500 group-hover:text-white/15">
                  0{i + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
