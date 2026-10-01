import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { pricing } from '../../data/site'

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Our Pricing Plan"
          title="Awesome Pricing Plan"
          text="Transparent retainers with no lock-in. Change tier or cancel with 30 days notice — we would rather earn the renewal."
          className="mb-8"
        />

        {/* Billing toggle */}
        <Reveal delay={150}>
          <div className="mb-12 flex items-center justify-center gap-4">
            <span className={`text-[15px] font-bold ${!yearly ? 'text-heading' : 'text-body'}`}>Monthly</span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle yearly billing"
              onClick={() => setYearly((v) => !v)}
              className={`relative h-8 w-[62px] rounded-full transition-colors duration-300 ${
                yearly ? 'bg-accent' : 'bg-heading/15'
              }`}
            >
              <span
                className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ${
                  yearly ? 'translate-x-[32px]' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-[15px] font-bold ${yearly ? 'text-heading' : 'text-body'}`}>
              Yearly <span className="text-accent">(save 20%)</span>
            </span>
          </div>
        </Reveal>

        <div className="grid gap-7 lg:grid-cols-3">
          {pricing.map((plan, i) => {
            const price = yearly ? Math.round(plan.price * 12 * 0.8) : plan.price

            return (
              <Reveal key={plan.name} delay={i * 130}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-9 transition-all duration-500 hover:-translate-y-2 ${
                    plan.popular
                      ? 'bg-heading text-white/70 shadow-hover lg:-mt-4 lg:pb-12 lg:pt-12'
                      : 'border border-black/[0.07] bg-white hover:shadow-card'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute right-0 top-7 rounded-l-full bg-accent px-5 py-1.5 text-[12px] font-bold uppercase tracking-wide text-white">
                      Most Popular
                    </span>
                  )}

                  <h3
                    className={`font-display text-[24px] font-bold ${plan.popular ? 'text-white' : 'text-heading'}`}
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-2 min-h-[52px] text-[15px]">{plan.text}</p>

                  <div className="my-7 flex items-end gap-1">
                    <span className={`font-display text-[22px] font-bold ${plan.popular ? 'text-white' : 'text-heading'}`}>
                      $
                    </span>
                    <span
                      className={`font-display text-[52px] font-extrabold leading-none ${
                        plan.popular ? 'text-white' : 'text-heading'
                      }`}
                    >
                      {price}
                    </span>
                    <span className="pb-2 text-[15px]">/ {yearly ? 'yearly' : 'monthly'}</span>
                  </div>

                  <ul className="mb-9 space-y-3.5 border-t border-current/10 pt-7">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[15px]">
                        <span
                          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                            plan.popular ? 'bg-accent text-white' : 'bg-accent-soft text-accent'
                          }`}
                        >
                          <FiCheck className="text-[11px]" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`mt-auto ${
                      plan.popular ? 'btn-primary' : 'btn border-2 border-heading/15 text-heading hover:border-accent hover:bg-accent hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
