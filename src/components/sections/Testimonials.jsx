import { useCallback, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/site'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((next) => {
    setIndex((current) => (next + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => go(index + 1), 6500)
    return () => clearTimeout(timer)
  }, [index, paused, go])

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-[130px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/testimonial-bg.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-night/85" />
      <span className="pointer-events-none absolute left-[6%] top-[18%] h-40 w-40 rounded-full border border-white/10" />
      <span className="pointer-events-none absolute right-[8%] bottom-[14%] h-24 w-24 animate-floatY rounded-full bg-accent/25 blur-2xl" />

      <div className="container relative">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <span className="eyebrow eyebrow-center text-accent-light">Client Feedback</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title text-white">What Our Clients Say</h2>
          </Reveal>

          <div className="relative mt-12 min-h-[290px] sm:min-h-[260px]">
            {testimonials.map((item, i) => (
              <blockquote
                key={item.name}
                className={`absolute inset-x-0 top-0 transition-all duration-700 ${
                  i === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
                }`}
                aria-hidden={i !== index}
              >
                <div className="mb-6 flex justify-center gap-1.5 text-accent-light">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FiStar key={s} className="fill-current" />
                  ))}
                </div>

                <p className="font-display text-[20px] font-medium leading-[1.6] text-white sm:text-[25px]">
                  “{item.quote}”
                </p>

                <footer className="mt-8 flex items-center justify-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-accent"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <cite className="block font-display text-[18px] font-bold not-italic text-white">{item.name}</cite>
                    <span className="text-[14px] text-white/60">{item.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:border-accent hover:bg-accent"
            >
              <FiChevronLeft />
            </button>

            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === index ? 'w-8 bg-accent' : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:border-accent hover:bg-accent"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
