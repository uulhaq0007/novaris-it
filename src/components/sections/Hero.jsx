import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi'
import { heroSlides } from '../../data/site'

const AUTOPLAY_MS = 7000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((next) => {
    setIndex((current) => (next + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => go(index + 1), AUTOPLAY_MS)
    return () => clearTimeout(timer)
  }, [index, paused, go])

  return (
    <section
      className="relative isolate overflow-hidden bg-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Introduction"
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.titleBottom}
          className={`absolute inset-0 transition-opacity duration-[900ms] ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.image}
            alt=""
            className={`h-full w-full object-cover ${i === index ? 'animate-zoomBg' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/40" />
        </div>
      ))}

      {/* Decorative grid + orbs */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
          maskImage: 'radial-gradient(ellipse at 70% 40%, black, transparent 72%)',
        }}
      />
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-56 w-56 animate-floatY rounded-full border border-white/15" />
      <div className="pointer-events-none absolute right-[22%] bottom-[14%] h-24 w-24 animate-floatX rounded-full bg-accent/30 blur-2xl" />

      <div className="container relative flex min-h-[640px] items-center py-28 lg:min-h-[780px]">
        <div className="max-w-[860px]">
          {heroSlides.map((slide, i) => (
            <div key={slide.titleBottom} className={i === index ? 'block' : 'hidden'}>
              <p
                key={`small-${index}`}
                className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 py-2 pl-2 pr-5 text-[14px] font-medium text-white/85 ring-1 ring-white/15"
                style={{ animation: 'floatY 0ms', opacity: 1 }}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[11px] font-bold">
                  ✦
                </span>
                {slide.small}
              </p>

              <h1 className="font-display text-[34px] font-extrabold leading-[1.1] text-white sm:text-[58px] lg:text-[72px]">
                {slide.titleTop}
                <br />
                <span className="relative inline-block">
                  {slide.titleBottom}
                  <svg
                    viewBox="0 0 300 14"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 9c60-7 120-9 296-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-8 max-w-[560px] text-[17px] leading-[1.8] text-white/70">{slide.text}</p>
            </div>
          ))}

          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/services" className="btn-primary">
              Service We Provide <FiArrowRight />
            </Link>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="group ml-1 flex items-center gap-3 text-white"
              aria-label="Play intro video"
            >
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white text-accent transition group-hover:bg-accent group-hover:text-white">
                <span className="absolute inset-0 animate-pulseRing rounded-full bg-white/50" />
                <FiPlay className="relative ml-0.5" />
              </span>
              <span className="font-display text-[15px] font-bold uppercase tracking-wide">Watch Video</span>
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 right-6 z-10 flex items-center gap-3 lg:right-12">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:border-accent hover:bg-accent"
        >
          <FiChevronLeft className="text-xl" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:border-accent hover:bg-accent"
        >
          <FiChevronRight className="text-xl" />
        </button>
      </div>

      <div className="absolute bottom-14 left-1/2 z-10 flex -translate-x-1/2 gap-2 lg:left-auto lg:right-40 lg:translate-x-0">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.titleBottom}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-10 bg-accent' : 'w-4 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
