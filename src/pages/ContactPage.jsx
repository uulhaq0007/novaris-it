import { useState } from 'react'
import { FiCheckCircle, FiClock, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { site } from '../data/site'

const details = [
  { icon: FiMapPin, title: 'Office Address', lines: [site.address] },
  { icon: FiPhone, title: 'Call Us Direct', lines: [site.phone, '+1 (408) 720 4160'] },
  { icon: FiMail, title: 'Email Address', lines: [site.email, 'careers@novaris.io'] },
  { icon: FiClock, title: 'Office Hours', lines: [site.hours, 'Weekend: emergency only'] },
]

const emptyForm = { name: '', email: '', subject: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A little more detail helps us route your enquiry.'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return

    // Front-end only build — no backend is wired up, so we just confirm locally.
    setSent(true)
    setForm(emptyForm)
  }

  const field = (name, label, type = 'text') => (
    <div>
      <label htmlFor={name} className="mb-2 block font-display text-[14px] font-bold text-heading">
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={form[name]}
        onChange={update(name)}
        aria-invalid={Boolean(errors[name])}
        className={`w-full rounded-lg border bg-mist px-5 py-3.5 text-[15px] outline-none transition focus:bg-white ${
          errors[name] ? 'border-red-400 focus:border-red-500' : 'border-transparent focus:border-accent'
        }`}
      />
      {errors[name] && <p className="mt-1.5 text-[13px] text-red-500">{errors[name]}</p>}
    </div>
  )

  return (
    <>
      <PageBanner title="Contact Us" crumbs={[{ label: 'Contact' }]} />

      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((item, i) => (
              <Reveal key={item.title} delay={i * 110}>
                <div className="group h-full rounded-xl border border-black/[0.07] bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-hover">
                  <span className="mx-auto grid h-[68px] w-[68px] place-items-center rounded-full bg-accent-soft text-[24px] text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                    <item.icon />
                  </span>
                  <h3 className="mt-6 font-display text-[19px] font-bold">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="mt-1 text-[15px]">
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-[120px]">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Get In Touch"
                title="Tell Us About Your Project"
                text="Send a short brief and we will come back with a point of view, an indicative range and the two questions that matter most."
              />
              <Reveal delay={250}>
                <div className="mt-9 overflow-hidden rounded-2xl">
                  <img
                    src="/images/about-2.jpg"
                    alt="Team discussing a client brief"
                    className="h-[280px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-white p-8 shadow-card sm:p-10">
                  {sent && (
                    <div className="mb-7 flex items-center gap-3 rounded-lg bg-accent-soft px-5 py-4 text-[15px] text-accent">
                      <FiCheckCircle className="shrink-0 text-xl" />
                      Thanks — your message has been captured. This demo has no backend, so nothing was actually sent.
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    {field('name', 'Your Name')}
                    {field('email', 'Email Address', 'email')}
                  </div>

                  <div className="mt-5">{field('subject', 'Subject')}</div>

                  <div className="mt-5">
                    <label htmlFor="message" className="mb-2 block font-display text-[14px] font-bold text-heading">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={form.message}
                      onChange={update('message')}
                      aria-invalid={Boolean(errors.message)}
                      className={`w-full resize-none rounded-lg border bg-mist px-5 py-4 text-[15px] outline-none transition focus:bg-white ${
                        errors.message ? 'border-red-400 focus:border-red-500' : 'border-transparent focus:border-accent'
                      }`}
                    />
                    {errors.message && <p className="mt-1.5 text-[13px] text-red-500">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn-primary mt-7">
                    Send Message <FiSend />
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder — no external embed so the build stays self-contained */}
      <section aria-label="Office location" className="relative h-[420px] overflow-hidden bg-heading">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent text-white">
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-accent/60" />
            <FiMapPin className="relative text-2xl" />
          </span>
          <p className="mt-5 font-display text-[20px] font-bold text-white">{site.name} HQ</p>
          <p className="text-white/60">{site.address}</p>
        </div>
      </section>
    </>
  )
}
