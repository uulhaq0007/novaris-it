import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import { counters } from '../../data/site'

function Counter({ value, suffix, label, started, delay }) {
  const current = useCountUp(value, started, 2200)

  return (
    <div
      className="reveal is-visible text-center"
      style={{ transitionDelay: `${delay}ms`, opacity: started ? 1 : 0 }}
    >
      <div className="font-display text-[40px] font-extrabold leading-none text-white sm:text-[52px]">
        {current.toLocaleString()}
        <span className="text-accent-light">{suffix}</span>
      </div>
      <p className="mt-3 text-[15px] font-medium uppercase tracking-[.14em] text-white/60">{label}</p>
    </div>
  )
}

export default function Counters() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="relative overflow-hidden bg-night py-[70px]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-[12%] top-0 h-64 w-64 rounded-full bg-accent/25 blur-[110px]" />
        <div className="absolute right-[10%] bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-[110px]" />
      </div>

      <div className="container relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {counters.map((counter, i) => (
            <Counter key={counter.label} {...counter} started={inView} delay={i * 140} />
          ))}
        </div>
      </div>
    </section>
  )
}
