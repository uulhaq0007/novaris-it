import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'
import CtaBanner from '../components/sections/CtaBanner'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { faqs } from '../data/site'

export default function FaqPage() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageBanner title="FAQ" crumbs={[{ label: 'FAQ' }]} />

      <section className="section">
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Frequently Asked"
                title="Questions We Get Before Every Kickoff"
                text="If yours is not here, send it over — we answer within one working day and never behind a sales gate."
              />
              <Reveal delay={250}>
                <div className="mt-9 overflow-hidden rounded-2xl">
                  <img
                    src="/images/about-1.jpg"
                    alt="Consultants answering client questions"
                    className="h-[320px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const expanded = open === i
                return (
                  <Reveal key={faq.q} delay={i * 90}>
                    <div
                      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                        expanded ? 'border-transparent bg-white shadow-card' : 'border-black/[0.08] bg-white'
                      }`}
                    >
                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpen(expanded ? -1 : i)}
                          aria-expanded={expanded}
                          className="flex w-full items-center justify-between gap-6 px-7 py-5 text-left font-display text-[17px] font-bold text-heading transition-colors duration-300 hover:text-accent"
                        >
                          {faq.q}
                          <span
                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                              expanded ? 'bg-accent text-white' : 'bg-accent-soft text-accent'
                            }`}
                          >
                            {expanded ? <FiMinus /> : <FiPlus />}
                          </span>
                        </button>
                      </h3>
                      <div
                        className="grid transition-all duration-400"
                        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-7 pb-6 text-[15px]">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
