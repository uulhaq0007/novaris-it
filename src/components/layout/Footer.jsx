import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Logo from '../ui/Logo'
import Reveal from '../ui/Reveal'
import { site } from '../../data/site'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Company History', to: '/about' },
      { label: 'Need a Career', to: '/team' },
      { label: 'Working Process', to: '/services' },
      { label: 'Blog Post', to: '/blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Digital Solutions', to: '/services' },
      { label: 'Web Development', to: '/services' },
      { label: 'Managed IT', to: '/services' },
      { label: 'Cyber Security', to: '/services' },
      { label: 'Data & Analytics', to: '/services' },
    ],
  },
]

const socials = [FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white/65">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="container relative">
        <div className="grid gap-12 py-20 lg:grid-cols-12 lg:py-[100px]">
          <div className="lg:col-span-4">
            <Reveal>
              <Logo variant="light" />
              <p className="mt-6 max-w-[330px] leading-relaxed">
                A technology partner for teams that need their infrastructure, security and product roadmap pulling in
                the same direction.
              </p>
              <div className="mt-7 flex items-center gap-3">
                {socials.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label="Social profile"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {columns.map((col, i) => (
            <div key={col.title} className="lg:col-span-2">
              <Reveal delay={100 * (i + 1)}>
                <h4 className="mb-6 font-display text-[20px] font-bold text-white">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-white"
                      >
                        <span className="h-px w-3 bg-accent" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}

          <div className="lg:col-span-4">
            <Reveal delay={300}>
              <h4 className="mb-6 font-display text-[20px] font-bold text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <FiMapPin className="mt-1 shrink-0 text-accent-light" />
                  <span>{site.address}</span>
                </li>
                <li className="flex gap-3">
                  <FiMail className="mt-1 shrink-0 text-accent-light" />
                  <a href={`mailto:${site.email}`} className="transition hover:text-white">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <FiPhone className="mt-1 shrink-0 text-accent-light" />
                  <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="transition hover:text-white">
                    {site.phone}
                  </a>
                </li>
              </ul>

              <form onSubmit={(e) => e.preventDefault()} className="mt-7">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <div className="flex overflow-hidden rounded-md bg-white/10 p-1.5 ring-1 ring-white/10 focus-within:ring-accent">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="Your email address"
                    className="w-full bg-transparent px-4 text-[15px] text-white placeholder-white/40 outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="grid h-11 w-12 shrink-0 place-items-center rounded bg-accent text-white transition hover:bg-white hover:text-accent"
                  >
                    <FiArrowRight />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-[15px] md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="link-underline transition hover:text-white">
              Terms of Use
            </Link>
            <Link to="/faq" className="link-underline transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
