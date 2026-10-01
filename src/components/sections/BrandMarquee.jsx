import { brands } from '../../data/site'

/** Infinite logo strip. The list is duplicated so the translate loop is seamless. */
export default function BrandMarquee() {
  const loop = [...brands, ...brands]

  return (
    <section className="border-y border-black/[0.06] bg-white py-10">
      <div className="container">
        <p className="mb-7 text-center text-[13px] font-bold uppercase tracking-[.24em] text-body/70">
          Trusted by teams at
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
          {loop.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="select-none whitespace-nowrap font-display text-[26px] font-bold text-heading/25 transition-colors duration-300 hover:text-accent"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
