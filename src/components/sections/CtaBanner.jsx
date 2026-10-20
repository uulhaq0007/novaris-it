import { Link } from 'react-router-dom'
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import { site } from '../../data/site'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-[120px]">
      <img
        src={`${import.meta.env.BASE_URL}images/cta-bg.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-accent/[0.93]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
        }}
      />

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-[30px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
                Ready To Get Free Consultation
                <br className="hidden sm:block" /> For Any Kind Of IT Solutions?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}
                className="mt-6 inline-flex items-center gap-3 text-white/85 transition hover:text-white"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15">
                  <FiPhoneCall />
                </span>
                <span className="font-display text-[20px] font-bold">{site.phone}</span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={220}>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  to="/contact"
                  className="btn bg-white text-accent hover:-translate-y-1 hover:bg-heading hover:text-white"
                >
                  Get A Quote <FiArrowRight />
                </Link>
                <Link to="/about" className="btn-outline">
                  Read More
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
