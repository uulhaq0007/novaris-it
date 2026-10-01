import PageBanner from '../components/layout/PageBanner'
import About from '../components/sections/About'
import Counters from '../components/sections/Counters'
import Team from '../components/sections/Team'
import Testimonials from '../components/sections/Testimonials'
import CtaBanner from '../components/sections/CtaBanner'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceIcon from '../components/ui/ServiceIcon'

const process = [
  { icon: 'target', title: 'Discover', text: 'Two weeks of interviews, log reading and architecture review before a single ticket is written.' },
  { icon: 'design', title: 'Design', text: 'Options with trade-offs and honest cost estimates, so the decision stays yours.' },
  { icon: 'code', title: 'Build', text: 'Two-week increments, demoed live. Nothing merges without review and tests.' },
  { icon: 'rocket', title: 'Operate', text: 'Monitoring, runbooks and a handover session your team actually signs off on.' },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" crumbs={[{ label: 'About Us' }]} />
      <About />

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="How We Work"
            title="A Process Built On Fewer Surprises"
            text="Every engagement runs through the same four stages. You always know which one you are in and what comes next."
            className="mb-14"
          />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 120}>
                <div className="group relative h-full rounded-xl bg-white p-8 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-hover">
                  <span className="mx-auto grid h-[76px] w-[76px] place-items-center rounded-full bg-accent-soft text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                    <ServiceIcon name={step.icon} />
                  </span>
                  <span className="absolute right-6 top-6 font-display text-[15px] font-extrabold text-heading/15">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-[20px] font-bold">{step.title}</h3>
                  <p className="mt-2 text-[15px]">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Counters />
      <Team />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
