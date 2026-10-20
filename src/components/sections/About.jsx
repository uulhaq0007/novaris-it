import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import ServiceIcon from '../ui/ServiceIcon'

const highlights = [
  {
    icon: 'consult',
    title: 'Professional Consultants',
    text: 'Senior engineers only — no juniors billed at architect rates, ever.',
  },
  {
    icon: 'headset',
    title: 'Support That Answers',
    text: 'A named team, a shared channel and a 30-minute response commitment.',
  },
]

const bullets = ['Fixed-scope discovery sprints', 'Documentation handed over weekly', 'Your repos, your cloud accounts']

export default function About() {
  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Imagery */}
          <Reveal className="relative">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/about-1.jpg`}
                  alt="Consultants reviewing a delivery roadmap together"
                  className="h-[440px] w-full object-cover transition-transform duration-[1200ms] hover:scale-105 sm:h-[500px]"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-10 -right-2 hidden w-[240px] overflow-hidden rounded-2xl border-[8px] border-white shadow-card sm:block lg:-right-8">
                <img
                  src={`${import.meta.env.BASE_URL}images/about-2.jpg`}
                  alt="Engineering team in a working session"
                  className="h-[210px] w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -left-4 top-8 flex items-center gap-4 rounded-xl bg-accent px-6 py-5 text-white shadow-hover lg:-left-10">
                <span className="font-display text-[44px] font-extrabold leading-none">12</span>
                <span className="text-[14px] font-medium leading-tight">
                  Years Of
                  <br />
                  Experience
                </span>
              </div>

              <span className="pointer-events-none absolute -left-12 bottom-16 hidden h-24 w-24 animate-spinSlow rounded-full border-[10px] border-dashed border-accent/25 lg:block" />
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <span className="eyebrow">About Company</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title">
                Get IT Solutions From Expert Consultants
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5">
                We started as three engineers fixing other people&apos;s infrastructure. Twelve years on, that instinct
                still runs the company: understand the system properly, then change the smallest thing that makes the
                biggest difference.
              </p>
            </Reveal>

            <div className="mt-9 space-y-6">
              {highlights.map((item, i) => (
                <Reveal key={item.title} delay={240 + i * 110}>
                  <div className="flex gap-5">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                      <ServiceIcon name={item.icon} className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-[19px] font-bold">{item.title}</h3>
                      <p className="mt-1 text-[15px]">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={460}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-[15px] text-heading">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-white">
                      <FiCheck className="text-[11px]" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={540}>
              <Link to="/about" className="btn-primary mt-10">
                Discover More <FiArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
